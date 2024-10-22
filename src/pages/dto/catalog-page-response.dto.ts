import { ApiProperty } from '@nestjs/swagger';

import { CommonPageResponseDto } from './comon-page-response.dto';

export class CatalogPageResponseDto extends CommonPageResponseDto {
  @ApiProperty({ description: 'Categories of products' })
  public categories: string[];
}
