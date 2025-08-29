/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IsEvenPipe implements PipeTransform {

  transform(value: any) {
      const val = parseInt(value,10)

      if(isNaN(val)){
          throw new BadRequestException('validation failed: ID must be a number')
      }

      if(val %2 !== 0){
          throw new BadRequestException('validation failed: ID must be even number')

      }

      return val
  }
}
