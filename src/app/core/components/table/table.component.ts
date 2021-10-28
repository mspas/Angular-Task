import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from 'src/app/app.state';
import { Item } from '../../models/item.model';
import { getItemsSelector } from '../../state/items.selector';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { getItems, deleteItem } from '../../state/item.action';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //items$: Observable<Item[]>;

  tableColumns: string[] = ["name", "quantity", "action"];
  dataSource = new MatTableDataSource<Item>([]);

  constructor(private store: Store<AppState>, public dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer) {
    this.store.select(getItemsSelector).subscribe(data => {
      this.dataSource.data = data;
    });
    this.store.dispatch(getItems());
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
