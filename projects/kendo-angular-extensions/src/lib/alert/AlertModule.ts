import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialog } from './AlertDialog';

@NgModule({
    declarations: [
        AlertDialog,
    ],
    imports: [
        CommonModule,
    ],
    entryComponents: [
        AlertDialog
    ]
})
export class AlertModule {

}

export * from './AlertService';
export * from './IAlertResult';
