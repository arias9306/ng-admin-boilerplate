import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    PublicRoutingModule,
    SharedModule,
  ]
})
export class PublicModule { }
