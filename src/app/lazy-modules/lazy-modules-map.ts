export const lazyModulesMap = {
  LandingModule: () => import('./landing/landing.module'),
  UserModule: () => import('./user/user.module')
};
