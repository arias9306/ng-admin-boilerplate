import { NgModule } from '@angular/core';
import { IconsProviderModule } from '../icons-provider.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    IconsProviderModule,
    NgZorroAntdModule,
    NoopAnimationsModule
  ],
  exports: [
    IconsProviderModule,
    NgZorroAntdModule,
    NoopAnimationsModule
  ]
})
export class SharedModule { }
