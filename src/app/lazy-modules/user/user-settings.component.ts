import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-settings',
  template: '<p>User settings (user id: {{userId}})</p>'
})
export class UserSettingsComponent {
  @Input() userId: string;
}
