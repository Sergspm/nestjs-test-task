import { Injectable } from '@nestjs/common';

import { AbstractPageService } from './page.abstract.service';
import { ProductPageResponseDto } from '../dto/product-page-response.dto';

@Injectable()
export class ProductPagesService extends AbstractPageService {
  public process(): ProductPageResponseDto {
    return {
      title: 'Product page title',
      content: 'Product page content',
      barcode: '123141343q534',
    };
  }
}
