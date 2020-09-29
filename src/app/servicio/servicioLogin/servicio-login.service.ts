import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Router} from '@angular/router';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  public usuario: any= {};
  constructor(public afAuth: AngularFireAuth, public router: Router) { }


 onLogin(email: string){

   return new Promise((resolve, reject) =>{
     this.afAuth.auth.signInWithEmailLink(email).then(userData=> resolve(userData),
     err => reject (err))
   });

 }

 

 onLoginGoogle(){

   return this.afAuth.auth.signInWithPopup( new auth.GoogleAuthProvider()); 
   }


  

onLogout() {
   this.usuario = {};
   this.afAuth.auth.signOut();
   this.router.navigate(['/login'])
 }

  getCurrentUser(){
   this.isAuth().subscribe(auth => {
     if(auth){
       this.router.navigate([''])

     } else {
       this.router.navigate(['/login'])
     }
   });
   }

 isAuth(){
   return this.afAuth.authState.pipe(map(auth => auth));
}

}
