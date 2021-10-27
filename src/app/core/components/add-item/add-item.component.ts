import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Item } from '../../models/item.model';
import { addItem } from '../../state/actions/item.action';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.sass']
})
export class AddItemComponent implements OnInit {
  credentialsForm: FormGroup;

  constructor(fb: FormBuilder, private _store: Store<AppState>) {
    this.credentialsForm = fb.group({
      name: [null, [Validators.required, Validators.maxLength(255)]],
      quantity: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onAddItem() {
    if (!this.credentialsForm.valid) return;
    
    const item: Item = {
      name: this.credentialsForm.value.name,
      quantity: this.credentialsForm.value.quantity,
    }

    this._store.dispatch(addItem({item}));
  }

}
