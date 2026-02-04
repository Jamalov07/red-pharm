import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { DefaultOptionalFieldsDto, DefaultRequiredFieldsDto, IsDecimalIntOrBigInt } from '../../../common'
import { ProductOptional, ProductRequired } from '../interfaces'
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator'
import { Decimal } from '@prisma/client/runtime/library'
import { $Enums, ProductUnitEnum } from '@prisma/client'

export class ProductRequiredDto extends DefaultRequiredFieldsDto implements ProductRequired {
	@ApiProperty({ type: String })
	@IsNotEmpty()
	@IsString()
	name: string

	@ApiProperty({ type: Number })
	@IsNotEmpty()
	@IsDecimalIntOrBigInt()
	cost: Decimal

	@ApiProperty({ type: Number })
	@IsNotEmpty()
	@IsDecimalIntOrBigInt()
	price: Decimal

	@ApiProperty({ type: Number })
	@IsNotEmpty()
	@IsDecimalIntOrBigInt()
	@ValidateIf((o) => o.unit === ProductUnitEnum.PIECE)
	@IsInt()
	count: Decimal

	@ApiProperty({ type: Number })
	@IsNotEmpty()
	@IsNumber()
	minAmount: number

	@ApiProperty({ enum: ProductUnitEnum })
	@IsNotEmpty()
	@IsEnum(ProductUnitEnum)
	unit: $Enums.ProductUnitEnum

	totalCost: Decimal
	totalPrice: Decimal
}

export class ProductOptionalDto extends DefaultOptionalFieldsDto implements ProductOptional {
	@ApiPropertyOptional({ type: String })
	@IsOptional()
	@IsString()
	name?: string

	@ApiPropertyOptional({ type: Number })
	@IsOptional()
	@IsDecimalIntOrBigInt()
	cost?: Decimal

	@ApiPropertyOptional({ type: Number })
	@IsOptional()
	@IsDecimalIntOrBigInt()
	price?: Decimal

	@ApiPropertyOptional({ type: Number })
	@IsOptional()
	@IsDecimalIntOrBigInt()
	count?: Decimal

	@ApiPropertyOptional({ type: Number })
	@IsOptional()
	@IsNumber()
	minAmount?: number

	@ApiPropertyOptional({ enum: ProductUnitEnum })
	@IsOptional()
	@IsEnum(ProductUnitEnum)
	unit?: $Enums.ProductUnitEnum

	totalCost?: Decimal
	totalPrice?: Decimal
}
