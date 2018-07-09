import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuModule } from '../../../kendo-angular-extensions/src/lib/context-menu/ContextMenuModule';
import { AppComponent } from './AppComponent';
import { AppRoutingModule } from './AppRouting';
import { ContextMenuTestPage } from './context-menu/ContextMenuTestPage';


@NgModule({
  declarations: [
    AppComponent,
    ContextMenuTestPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContextMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
