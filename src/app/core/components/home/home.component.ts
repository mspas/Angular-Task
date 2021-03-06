import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { AppState } from 'src/app/app.state';
import { getIsLoadingSelector, getErrorMessageSelector } from 'src/app/shared/state/shared.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  isLoading$: Observable<boolean>;
  errorMessage: string = "";

  constructor(private _store: Store<AppState>, private _http: HttpClient) {
    this.isLoading$ = this._store.select(getIsLoadingSelector);
    this._store.select(getErrorMessageSelector).subscribe(data => {
      this.errorMessage = data;
    });
  }

  ngOnInit(): void {
  }

}
