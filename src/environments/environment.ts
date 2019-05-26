// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  algodex_oauth_config: {
    Facebook: {
      app_id: '2324515721200431',
    },
    Google: {
      client_id: '81zp2u0a08pvgh',
    },
    Linkedin: {
      client_id: '',
    },
    Github: {
      client_id: '',
    },
    Algovent: {
      client_id: '',
    },
    Twitter: {
      client_id: '',
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
