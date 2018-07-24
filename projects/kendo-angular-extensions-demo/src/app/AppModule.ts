import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AlertModule, ContextMenuModule, LinkButtonModule, NavigationModule } from '../../../kendo-angular-extensions/src/public_api';
import { AlertTestPage } from './alert/AlertTestPage';
import { AppComponent } from './AppComponent';
import { AppRoutingModule } from './AppRouting';
import { ContextMenuTestPage } from './context-menu/ContextMenuTestPage';
import { LinkButtonTestPage } from './link-button/LinkButtonTestPage';
import { BackTestPage } from './navigation/back/BackTestPage';


@NgModule({
  declarations: [
    AppComponent,
    AlertTestPage,
    BackTestPage,
    ContextMenuTestPage,
    LinkButtonTestPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    DialogsModule,
    AlertModule,
    ContextMenuModule,
    LinkButtonModule,
    NavigationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
