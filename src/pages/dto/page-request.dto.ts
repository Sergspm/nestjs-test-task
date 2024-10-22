import { IsIn, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { EPageType } from '../pages.types';

export class PageRequestDto {
  @ApiProperty({
    enum: [EPageType.HOME, EPageType.CATALOG, EPageType.PRODUCT],
    description: 'Type of the page',
  })
  @IsNumber()
  @IsIn([EPageType.HOME, EPageType.CATALOG, EPageType.PRODUCT])
  public type: EPageType;
}
