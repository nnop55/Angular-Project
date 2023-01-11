import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import { Observable, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { HotelBook } from '../models/hotel-book.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseWorkerService {


  user$!: Observable<User | null | undefined>;

  constructor(private firestore: AngularFirestore, public auth: AngularFireAuth,
    private router: Router) {
    this.user$ = this.auth.authState
      .pipe(                                     //Useris informaciaze wvdoma
        switchMap((user: any) => {
          if (user) {
            return this.firestore.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null)
          }
        })
      )
  }

  getDataByDocumentName(document: string): any {         //Informacia dokumentis saxelis mixedvit
    return this.firestore.collection<any>(document);
  }

  setDataByDocumentName(document: string, uid: string): any {       //Informaciis daediteba dokumentis saxelis da uid-is mixedvit
    return this.firestore.doc<any>(`${document}/${uid}`)
  }

  createBookHistory(item: HotelBook) {                     //Dajavshnis istoriis shekmna
    let uid = this.firestore.createId();

    const bookRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `book-history/${uid}`
    )

    item.uid = uid;

    bookRef.set(item, {
      merge: true,
    });

    return uid;
  }


  signIn(email: string, password: string) {             //Momxmareblis acc-ze shesvla
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.auth.authState.subscribe((user) => {
          if (user) {
            console.log(user);
          }
        });
        return this.getUserDoc(result.user?.uid ?? "");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }


  signUp(user: User, password: string): any {        //Registracia
    return this.auth
      .createUserWithEmailAndPassword(user.email, password)
      .then((result) => {

        this.setUserDataForSignUp(result.user, user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signOut() {                                //Gamosvla acc-dan
    return this.auth.signOut().then(() => {
      window.alert('Logged out!');
    });
  }



  getUserDoc(id: string): any { //Useris dokumenti
    return this.firestore
      .collection('users')
      .doc(id)
      .valueChanges();
  }



  setUserDataForSignUp(fireUser: any, user: User) {// Useris datis dasetva
    console.log(user);

    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${fireUser.uid}`
    );
    const userData: User = {
      uid: fireUser.uid,
      email: fireUser.email,
      userName: user.userName,
      verifiedUser: true,
      password: user.password,
      confirmPass: user.confirmPass,
      phoneNumber: user.phoneNumber,
      cardNumber: user.cardNumber,
      cardCvv: user.cardCvv,
      expirationDate: user.expirationDate
    } as User;
    return userRef.set(userData, {
      merge: true,
    });
  }

  forgotPassword(passwordReset: string) {  //Parolis agdgena
    return this.auth.sendPasswordResetEmail(passwordReset)
      .then(() => {
        window.alert("Password Reset Email Send, Check Your Inbox")
      })
      .catch((error) => {
        window.alert(error)
      })
  }

}


