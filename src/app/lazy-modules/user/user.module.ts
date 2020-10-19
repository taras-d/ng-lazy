import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { UserProfileComponent } from './user-profile.component';
import { UserSettingsComponent } from './user-settings.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule {
  entry = { UserProfileComponent, UserSettingsComponent };
}
