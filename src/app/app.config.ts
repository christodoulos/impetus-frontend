import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { CustomSerializer } from './custom-route-serializer';
import {
  authReducer,
  nutsReducer,
  NutsEffects,
  MetadataReducer as eurostatMetadataReducer,
  mapReducer,
  dropdownsReducer,
  mapSourceReducer,
  MapSourceEffects,
} from './state';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '41569250829-h0p6t59q5fs6jl288svjee23o41o3d9b.apps.googleusercontent.com'
            ),
          },
        ],
        onError: (err: any) => {
          console.log(err);
        },
      } as SocialAuthServiceConfig,
    },
    provideStore({
      auth: authReducer,
      nuts: nutsReducer,
      'eurostat-metadata': eurostatMetadataReducer,
      map: mapReducer,
      mapSources: mapSourceReducer,
      // router: routerReducer,
      dropdowns: dropdownsReducer,
    }),
    // provideRouterStore({
    //   serializer: CustomSerializer,
    // }),
    provideEffects([NutsEffects, MapSourceEffects]),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
};
