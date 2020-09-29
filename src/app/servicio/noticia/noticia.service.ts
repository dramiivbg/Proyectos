import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Noticia } from "../../modelo/noticia/noticia";

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private noticiaCollection: AngularFirestoreCollection<Noticia>;
  constructor(private afs: AngularFirestore) {
    this.noticiaCollection=afs.collection<Noticia>('noticias');
  }

  guardarNoticia(noticia: Noticia){
    this.noticiaCollection.add(noticia);
  }



}
