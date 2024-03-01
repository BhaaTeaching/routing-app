import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRouting: Routes = [
  {path: "", component: HomeComponent},
  {path: "about/:id", component: AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
