import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})

export class PhoneNumberPipe implements PipeTransform {

  transform(value: string, separateur: string = " "): string {
    return value.split(".").join(separateur);
  }

}
