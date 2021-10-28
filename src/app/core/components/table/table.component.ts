import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from 'src/app/app.state';
import { Item } from '../../models/item.model';
import { getItemsSelector } from '../../state/items.selector';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { getItems, deleteItem } from '../../state/item.action';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  items$: Observable<Item[]>;

  tableColumns: string[] = ["name", "quantity", "action"];

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.items$ = this.store.select(getItemsSelector);
    this.store.dispatch(getItems());
  }

  ngOnInit(): void {
  }

  openDialog(item: Item) {
    this.dialog.open(EditItemComponent, {
      data: {
        itemToEdit: item
      }
    });
  }

  onDeleteItem(item: Item) {
    this.store.dispatch(deleteItem({item}));
  }
}
