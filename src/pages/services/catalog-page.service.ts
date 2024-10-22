import { Injectable } from '@nestjs/common';

import { AbstractPageService } from './page.abstract.service';
import { CatalogPageResponseDto } from '../dto/catalog-page-response.dto';

@Injectable()
export class CatalogPagesService extends AbstractPageService {
  public process(): CatalogPageResponseDto {
    return {
      title: 'Catalog page title',
      content: 'Catalog page content',
      categories: ['Category 1'],
    };
  }
}
