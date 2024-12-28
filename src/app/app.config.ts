import { provideAnimations } from '@angular/platform-browser/animations';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideToastr({
      positionClass: 'toast-top-right',
      newestOnTop: true,
      tapToDismiss: true,
    }),
    provideAnimations(),
  ],
};
