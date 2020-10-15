import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileComponent } from './user-profile.component';
import { UserSettingsComponent } from './user-settings.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserSettingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  entry = { UserProfileComponent, UserSettingsComponent };
}
