import { Module } from '@nestjs/common';

import { PagesService } from './services/pages.service';
import { PagesController } from './pages.controller';
import { CatalogPagesService } from './services/catalog-page.service';
import { HomePagesService } from './services/home-page.service';
import { ProductPagesService } from './services/product-page.service';

@Module({
  controllers: [PagesController],
  providers: [
    PagesService,
    CatalogPagesService,
    HomePagesService,
    ProductPagesService,
  ],
})
export class PagesModule {}
