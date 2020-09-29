// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   
  apiURL: 'https://www.datos.gov.co/resource/gt2j-8ykr.json',
  
   firebase : {
  
    apiKey: "AIzaSyDIRgylLOLWi2m4C2-nw20_8tJionlNmcc",
    authDomain: "dariosanchez-6f22d.firebaseapp.com",
    databaseURL: "https://dariosanchez-6f22d.firebaseio.com",
    projectId: "dariosanchez-6f22d",
    storageBucket: "dariosanchez-6f22d.appspot.com",
    messagingSenderId: "566654666304",
    appId: "1:566654666304:web:6394ab5b10e736bf77c1a5",
    measurementId: "G-Y1V8BRKHJE"

   }
  // Initialize Firebase

  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
