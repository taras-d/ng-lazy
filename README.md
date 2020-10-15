# ng-lazy

Example of lazy loading Angular (v10) components in declarative way. Similar to [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy).


### 1. Create module and component in lazy-modules folder

```ts
/* Component - src/app/lazy-modules/user/user-profile.component.ts */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-profile',
  template: '<p>User profile (user id: {{userId}})</p>'
})
export class UserProfileComponent {
  @Input() userId: string;
}
```
```ts
/* Module - src/app/lazy-modules/user/user.module.ts */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileComponent } from './user-profile.component'

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  entry = { UserProfileComponent };
}
```

### 2. Add module to lazy-modules-map.ts file
```ts
/* src/app/lazy-modules/lazy-modules-map.ts */

export const lazyModulesMap = {
  UserModule: () => import('./user/user.module')
};
```

### 3. Lazy load component in template
```html
<!-- src/app/app.component.html -->

<lazy-load module="UserModule" component="UserProfileComponent" [inputs]="{ userId: '1' }"></lazy-load>

<lazy-load module="UserModule" component="UserProfileComponent" [inputs]="{ userId: '2' }"></lazy-load>
```
