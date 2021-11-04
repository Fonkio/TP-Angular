import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinkMailDirective} from "./link-mail.directive";
import { PhoneNumberPipe } from './phone-number.pipe';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TimeInterceptor} from "./time.interceptor";



@NgModule({
  declarations: [
    LinkMailDirective,
    PhoneNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinkMailDirective,
    PhoneNumberPipe
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
})
export class SharedModule { }
