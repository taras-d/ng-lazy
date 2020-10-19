export const lazyModulesMap = {
  LandingModule: () => import('./lazy-modules/landing/landing.module'),
  UserModule: () => import('./lazy-modules/user/user.module')
};
