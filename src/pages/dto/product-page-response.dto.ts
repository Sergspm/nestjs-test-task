import { ApiProperty } from '@nestjs/swagger';

import { CommonPageResponseDto } from './comon-page-response.dto';

export class ProductPageResponseDto extends CommonPageResponseDto {
  @ApiProperty({ description: 'Barcode of product' })
  public barcode: string;
}
