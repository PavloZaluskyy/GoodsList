import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items$: any;
  constructor( public AngularFireDatabase: AngularFireDatabase) {
    AngularFireDatabase.list('Products').valueChanges()
      .subscribe(x => this.items$ = x)    
  }
}
