import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-profile',
  template: '<p>User profile (user id: {{userId}})</p>'
})
export class UserProfileComponent {
  @Input() userId: string;
}
