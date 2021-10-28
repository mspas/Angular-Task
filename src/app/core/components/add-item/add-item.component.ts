import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { getIsLoadingSelector } from 'src/app/shared/state/shared.selector';
import { Item } from '../../models/item.model';
import { addItem } from '../../state/item.action';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.sass']
})
export class AddItemComponent implements OnInit {
  credentialsForm: FormGroup;
  isLoading$: Observable<boolean>;

  constructor(fb: FormBuilder, private _store: Store<AppState>) {
    this.isLoading$ = this._store.select(getIsLoadingSelector);
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
      id: -1,
      name: this.credentialsForm.value.name,
      quantity: this.credentialsForm.value.quantity,
    }

    this._store.dispatch(addItem({ item }));
  }

}
