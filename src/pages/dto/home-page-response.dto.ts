import { ApiProperty } from '@nestjs/swagger';

import { CommonPageResponseDto } from './comon-page-response.dto';

export class HomePageResponseDto extends CommonPageResponseDto {
  @ApiProperty({ description: 'Main banner' })
  public banner: string;
}
