import { Controller, Get } from '@nestjs/common';
import { AppService, ProductService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllUser(): string {
    return this.appService.getAllUser();
  }
}

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProduct(): string {
    return this.productService.getAllProduct();
  }
}
