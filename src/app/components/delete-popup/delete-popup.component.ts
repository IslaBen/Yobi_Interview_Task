import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeletePopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeletePopupComponent>) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

}
