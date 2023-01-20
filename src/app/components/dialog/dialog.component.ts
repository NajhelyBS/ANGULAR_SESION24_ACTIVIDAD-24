import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { ExampleDialogComponent } from '../example-dialog/example-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  deporte: string ="";
  nombre: string ="";

  constructor(public dialog: MatDialog) {}

  
  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: { nombre: this.nombre, deporte: this.deporte }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.deporte = result;
    });
  }

}

