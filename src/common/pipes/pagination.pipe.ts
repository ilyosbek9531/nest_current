import { Injectable, PipeTransform } from '@nestjs/common';
import { PaginationInterface } from '../interfaces';

@Injectable()
export class PaginationPipe implements PipeTransform {
  transform(value: PaginationInterface): PaginationInterface {
    value.take = +value.take || 10;
    value.skip = +value.skip || 0;
    return value;
  }
}
