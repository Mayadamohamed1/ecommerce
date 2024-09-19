import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logedGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  const _PLATFORM_ID = inject(PLATFORM_ID);
  if(isPlatformBrowser(_PLATFORM_ID)){
    if (localStorage.getItem('uToken') !== null) {
      _Router.navigate(['/home']);
      return false;
    } else {
      return true;
      //navigate to login---router(inject)
    }
  }else{
    return false
  }
};
