import { ApiProperty } from '@nestjs/swagger';

export class CommonPageResponseDto {
  @ApiProperty({ description: 'Page title' })
  public title: string;

  @ApiProperty({ description: 'Content of page' })
  public content: string;
}
