import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Item } from '../models/item.model';
import { editItem } from '../state/actions/item.action';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.sass']
})
export class EditItemComponent implements OnInit {
  editingForm: FormGroup;
  itemId: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { itemToEdit: Item }, private dialogRef: MatDialogRef<EditItemComponent>, fb: FormBuilder, private _store: Store<AppState>) {
    this.itemId = data.itemToEdit.id ? data.itemToEdit.id : -1;
    this.editingForm = fb.group({
      name: [data.itemToEdit.name, [Validators.required, Validators.maxLength(15)]],
      quantity: [data.itemToEdit.quantity, [Validators.required]],
    });
  }
 
  ngOnInit() {}

  onEditItem() {
    if (!this.editingForm.valid) return;
    
    const item: Item = {
      id: this.itemId,
      name: this.editingForm.value.name,
      quantity: this.editingForm.value.quantity,
    }

    this._store.dispatch(editItem({item}));
    this.dialogRef.close();
  }
}
