import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuModule, NavigationModule, LinkButtonModule } from '../../../kendo-angular-extensions/src/public_api';
import { AppComponent } from './AppComponent';
import { AppRoutingModule } from './AppRouting';
import { ContextMenuTestPage } from './context-menu/ContextMenuTestPage';
import { LinkButtonTestPage } from './link-button/LinkButtonTestPage';
import { BackTestPage } from './navigation/back/BackTestPage';
import { ButtonsModule } from '@progress/kendo-angular-buttons';



@NgModule({
  declarations: [
    AppComponent,
    BackTestPage,
    ContextMenuTestPage,
    LinkButtonTestPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    ContextMenuModule,
    LinkButtonModule,
    NavigationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
