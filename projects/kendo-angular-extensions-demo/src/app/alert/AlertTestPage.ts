import { Component } from "@angular/core";
import { AlertService } from "../../../../kendo-angular-extensions/src/lib/alert/AlertModule";

@Component({
    templateUrl: './AlertTestPage.html'
})
export class AlertTestPage {

    constructor(
        private _alertsService: AlertService,
    ) { }

    openSimple() {
        this._alertsService.alert('My title', 'My message.');
    }

    async openYesNo() {
        const result = await this._alertsService.alert('Yes/No Example', 'Select a button.', ['yes', 'NO'])
        alert(`You clicked button '${result.text}' with key '${result.key}'`);
    }

    async openCustomActions() {
        const result = await this._alertsService.alert('Custom Actions Example', 'Select a button.', ['yes', { text: 'My button', primary: true, key: 'example'}])
        alert(`You clicked button '${result.text}' with key '${result.key}'`);
    }

}