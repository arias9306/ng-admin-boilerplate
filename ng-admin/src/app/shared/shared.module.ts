import { NgModule } from '@angular/core';
import { IconsProviderModule } from '../icons-provider.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [],
  imports: [
    IconsProviderModule,
    NgZorroAntdModule,
  ],
  exports: [
    IconsProviderModule,
    NgZorroAntdModule,
  ]
})
export class SharedModule { }
