import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { DefaultOptionalFieldsDto, DefaultRequiredFieldsDto } from '../../../common'
import { ReturningOptional, ReturningRequired } from '../interfaces'
import { IsDateString, IsNotEmpty, IsOptional, IsUUID } from 'class-validator'
import { $Enums } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'

export class ReturningRequiredDto extends DefaultRequiredFieldsDto implements ReturningRequired {
	@ApiProperty({ type: String })
	@IsNotEmpty()
	@IsUUID('4')
	clientId: string

	@ApiProperty({ type: Date })
	@IsNotEmpty()
	@IsDateString()
	date: Date

	@ApiProperty({ type: String })
	@IsNotEmpty()
	@IsUUID('4')
	staffId: string

	status: $Enums.SellingStatusEnum
	totalPrice: Decimal
}

export class ReturningOptionalDto extends DefaultOptionalFieldsDto implements ReturningOptional {
	@ApiPropertyOptional({ type: String })
	@IsOptional()
	@IsUUID('4')
	clientId?: string

	@ApiPropertyOptional({ type: Date })
	@IsOptional()
	@IsDateString()
	date?: Date

	@ApiPropertyOptional({ type: String })
	@IsOptional()
	@IsUUID('4')
	staffId?: string

	status?: $Enums.SellingStatusEnum
	totalPrice?: Decimal
}
