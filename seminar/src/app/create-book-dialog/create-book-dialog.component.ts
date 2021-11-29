import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-book-dialog',
  templateUrl: './create-book-dialog.component.html',
  styleUrls: ['./create-book-dialog.component.scss'],
})
export class CreateBookDialogComponent {
  newBook = {
    title: '',
    author: '',
  };

  constructor(public dialogRef: MatDialogRef<CreateBookDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
