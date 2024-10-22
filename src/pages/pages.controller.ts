import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiBody,
  getSchemaPath,
  ApiExtraModels,
} from '@nestjs/swagger';

import { PageRequestDto } from './dto/page-request.dto';
import { HomePageResponseDto } from './dto/home-page-response.dto';
import { CatalogPageResponseDto } from './dto/catalog-page-response.dto';
import { ProductPageResponseDto } from './dto/product-page-response.dto';
import { PagesInterceptor } from './pages.interceptor';

@ApiTags('pages')
@ApiExtraModels(
  HomePageResponseDto,
  CatalogPageResponseDto,
  ProductPageResponseDto,
)
@Controller('api/pages')
export class PagesController {
  @Post('/')
  @ApiBody({ type: PageRequestDto })
  @ApiResponse({
    status: 201,
    description: 'Page processed successfully.',
    schema: {
      oneOf: [
        { $ref: getSchemaPath(HomePageResponseDto) },
        { $ref: getSchemaPath(CatalogPageResponseDto) },
        { $ref: getSchemaPath(ProductPageResponseDto) },
      ],
    },
  })
  @ApiResponse({ status: 400, description: 'Invalid type.' })
  @UseInterceptors(PagesInterceptor)
  public processPage(@Body() pageContent: unknown) {
    return pageContent;
  }
}
