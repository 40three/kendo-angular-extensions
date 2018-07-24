import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './AlertDialog.html',
    host: { 'class': 'ft-alert-dialog' },
})
export class AlertDialog {
    @Input()
    text: string;
}
