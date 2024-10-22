import { Injectable } from '@nestjs/common';

import { CatalogPagesService } from './catalog-page.service';
import { HomePagesService } from './home-page.service';
import { ProductPagesService } from './product-page.service';
import { EPageType } from '../pages.types';

@Injectable()
export class PagesService {
  public constructor(
    private readonly catalogPagesService: CatalogPagesService,
    private readonly homePagesService: HomePagesService,
    private readonly productPagesService: ProductPagesService,
  ) {}

  public process(type: EPageType) {
    switch (type) {
      case EPageType.HOME:
        return this.homePagesService.process();
      case EPageType.CATALOG:
        return this.catalogPagesService.process();
      case EPageType.PRODUCT:
        return this.productPagesService.process();
    }

    throw new Error('Invalid type');
  }
}
