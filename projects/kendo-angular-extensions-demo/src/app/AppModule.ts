import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './AppComponent';
import { AppRoutingModule } from './AppRouting';
import { ContextMenuTestPage } from './context-menu/ContextMenuTestPage';
import { ContextMenuModule, NavigationModule } from '../../../kendo-angular-extensions/src/public_api';
import { BackTestPage } from './navigation/back/BackTestPage';


@NgModule({
  declarations: [
    AppComponent,
    BackTestPage,
    ContextMenuTestPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContextMenuModule,
    NavigationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
