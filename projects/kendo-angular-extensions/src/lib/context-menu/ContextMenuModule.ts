import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent, MenuModule } from '@progress/kendo-angular-menu';
import { PopupModule } from '@progress/kendo-angular-popup';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        MenuModule,
        PopupModule,
    ],
    entryComponents: [
        MenuComponent,
    ]
})
export class ContextMenuModule {

}

export * from './ContextMenuService';
export * from './IContextMenuOptions';
export * from './IMenuItemOptions';
export * from './MenuEvent';

