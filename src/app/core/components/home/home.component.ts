import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  message$: Observable<string>;

  constructor(private store: Store<AppState>, private _http: HttpClient) {
    this.message$ = this.store.select('message');
  }

  ngOnInit(): void {
  }

  spanish() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  french() {
    this.store.dispatch({ type: 'FRENCH' });
    this._http.get('/api/users').subscribe(data => {
      console.log(data);
    })
  }

}
