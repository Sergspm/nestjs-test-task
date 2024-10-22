import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Inject,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HomePagesService } from './services/home-page.service';
import { CatalogPagesService } from './services/catalog-page.service';
import { ProductPagesService } from './services/product-page.service';
import { PageRequestDto } from './dto/page-request.dto';
import { EPageType } from './pages.types';

@Injectable()
export class PagesInterceptor implements NestInterceptor {
  public constructor(
    @Inject(HomePagesService)
    private readonly homePagesService: HomePagesService,
    @Inject(CatalogPagesService)
    private readonly catalogPagesService: CatalogPagesService,
    @Inject(ProductPagesService)
    private readonly productPagesService: ProductPagesService,
  ) {}

  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { type } = request.body as PageRequestDto;
    const result = this.process(type);

    return next.handle().pipe(map(() => result));
  }

  public process(type: EPageType) {
    switch (type) {
      case EPageType.HOME:
        return this.homePagesService.process();
      case EPageType.CATALOG:
        return this.catalogPagesService.process();
      case EPageType.PRODUCT:
        return this.productPagesService.process();
    }

    throw new BadRequestException('Invalid type');
  }
}
