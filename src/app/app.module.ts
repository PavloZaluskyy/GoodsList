import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { ProductComponent } from './components/product/product.component';
import { AddComponent } from './components/add/add.component';
import { DetailsComponent } from './components/details/details.component';
import { CommentComponent } from './components/comment/comment.component';

const appRoutes: Routes = [
  { path: '', component: GoodsListComponent },
  { path: 'add', component: AddComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    GoodsListComponent,
    ProductComponent,
    AddComponent,
    DetailsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
