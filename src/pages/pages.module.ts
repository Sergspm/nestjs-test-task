import { Module } from '@nestjs/common';

import { PagesController } from './pages.controller';
import { CatalogPagesService } from './services/catalog-page.service';
import { HomePagesService } from './services/home-page.service';
import { ProductPagesService } from './services/product-page.service';
import { PagesInterceptor } from './pages.interceptor';

@Module({
  controllers: [PagesController],
  providers: [
    CatalogPagesService,
    HomePagesService,
    ProductPagesService,
    PagesInterceptor,
  ],
})
export class PagesModule {}
