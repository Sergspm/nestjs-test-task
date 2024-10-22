import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiBody,
  getSchemaPath,
  ApiExtraModels,
} from '@nestjs/swagger';

import { PagesService } from './services/pages.service';
import { PageRequestDto } from './dto/page-request.dto';
import { HomePageResponseDto } from './dto/home-page-response.dto';
import { CatalogPageResponseDto } from './dto/catalog-page-response.dto';
import { ProductPageResponseDto } from './dto/product-page-response.dto';

@ApiTags('pages')
@ApiExtraModels(
  HomePageResponseDto,
  CatalogPageResponseDto,
  ProductPageResponseDto,
)
@Controller('api/pages')
export class PagesController {
  public constructor(private readonly pagesService: PagesService) {}

  @Post('/')
  @ApiBody({ type: PageRequestDto })
  @ApiResponse({
    status: 201,
    description: 'Page processed successfully.',
    schema: { $ref: getSchemaPath(HomePageResponseDto) },
  })
  @ApiResponse({
    status: 201,
    description: 'Page processed successfully.',
    schema: { $ref: getSchemaPath(CatalogPageResponseDto) },
  })
  @ApiResponse({
    status: 201,
    description: 'Page processed successfully.',
    schema: { $ref: getSchemaPath(ProductPageResponseDto) },
  })
  @ApiResponse({ status: 400, description: 'Invalid type.' })
  public processPage(@Body() pageDto: PageRequestDto) {
    try {
      return this.pagesService.process(pageDto.type);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
