import { Component } from '@angular/core';

import { CreateBookDialogComponent } 
from './create-book-dialog/create-book-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';

  private store: AngularFirestore;

  constructor(public dialog: MatDialog, store: AngularFirestore) {
    this.store = store;
  }

  showCreateBookDialog(): void {
    const dialogRef = this.dialog.open(CreateBookDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((newBook) => {
      this.store.collection('books').add(newBook);
    });
  }
}
