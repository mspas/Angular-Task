import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from './components/table/table.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { MatInputModule  } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    HomeComponent,
    TableComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSortModule
  ],
  exports: [
    HomeComponent
  ]
})
export class CoreModule { }
