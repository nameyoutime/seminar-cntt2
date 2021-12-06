import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books: Observable<any[]>;

  constructor(store: AngularFirestore) {
    this.books = store.collection('books').valueChanges();
  }

  ngOnInit(): void {}
}
