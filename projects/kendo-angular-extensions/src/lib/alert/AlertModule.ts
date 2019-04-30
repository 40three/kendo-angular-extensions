import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertDialog } from './components/dialog/AlertDialog';
import { AlertService } from './services/AlertService';

@NgModule({
    declarations: [
        AlertDialog,
    ],
    imports: [
        CommonModule,
    ],
    entryComponents: [
        AlertDialog,
    ],
    providers: [
        AlertService,
    ]
})
export class AlertModule {

}

export * from './services/AlertService';
export * from './services/IAlertResult';

