import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllUser(): string {
    return 'Here is all user';
  }
}

@Injectable()
export class ProductService {
  getAllProduct(): string {
    return 'Here is all product';
  }
}
