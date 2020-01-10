import { NgModule } from '@angular/core';
import { IconsProviderModule } from '../icons-provider.module';
import { NgZorroAntdModule, NzFormModule, NzLayoutModule, NzGridModule, NzCardModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    IconsProviderModule,
    NgZorroAntdModule,
    NzFormModule,
    NzLayoutModule,
    ReactiveFormsModule,
    NzGridModule,
    NzCardModule
  ],
  exports: [
    IconsProviderModule,
    NgZorroAntdModule,
    NzFormModule,
    NzLayoutModule,
    ReactiveFormsModule,
    NzGridModule,
    NzCardModule
  ]
})
export class SharedModule { }
