import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-my-delete-dialog',
  templateUrl: './my-delete-dialog.component.html',
  styleUrls: ['./my-delete-dialog.component.css']
})
export class MyDeleteDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<MyDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  DeleteClick(): void {
      this.dialogRef.close(true);
  }

}
