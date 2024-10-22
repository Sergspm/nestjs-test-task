import { Injectable } from '@nestjs/common';

import { AbstractPageService } from './page.abstract.service';
import { HomePageResponseDto } from '../dto/home-page-response.dto';

@Injectable()
export class HomePagesService extends AbstractPageService {
  public process(): HomePageResponseDto {
    return {
      title: 'Home page title',
      content: 'Home page content',
      banner: '/path/to/banner.png',
    };
  }
}
