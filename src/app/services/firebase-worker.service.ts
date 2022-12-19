import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseWorkerService {

  constructor(private firestore: AngularFirestore, public auth: AngularFireAuth,
   ) { }


  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.auth.authState.subscribe((user) => {
          if (user) {
            console.log(user);
          }
        });
        return  this.getUserDoc(result.user?.uid ?? "");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }


  signUp(user:User, password:string):any {
    return this.auth
      .createUserWithEmailAndPassword(user.email, password)
      .then((result) => {
        
        this.sendVerificationMail();
        this.setUserDataForSignUp(result.user, user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signOut() {
    return this.auth.signOut().then(() => {
      window.alert('Logged out!');
    });
  }

  sendVerificationMail() {

  }

  getUserDoc(id:string):any {
    return this.firestore
    .collection('users')
    .doc(id)
    .valueChanges();
  }



  setUserDataForSignUp(fireUser: any, user:User) {
    console.log(user);
    
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${fireUser.uid}`
    );
    const userData: User = {
      id: fireUser.uid,
      email: fireUser.email,
      userName: fireUser.displayName,
      verifiedUser: true,
      password: user.password,
      confirmPass: user.confirmPass
    } as User;
    return userRef.set(userData, {
      merge: true,
    });
  }
}
