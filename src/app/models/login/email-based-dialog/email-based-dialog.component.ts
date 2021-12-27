import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-email-based-dialog',
  templateUrl: './email-based-dialog.component.html',
  styleUrls: ['./email-based-dialog.component.css']
})
export class EmailBasedDialogComponent{

  constructor(public dialogRef: MatDialogRef<EmailBasedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      data = "anonymous"
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
