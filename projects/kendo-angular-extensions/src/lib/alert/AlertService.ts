import { Injectable, Optional, TemplateRef } from '@angular/core';
import { DialogAction, DialogCloseResult, DialogService } from '@progress/kendo-angular-dialog';
import { MessageService } from '@progress/kendo-angular-l10n';
import { AlertDialog } from './AlertDialog';
import { IAlertAction } from './IAlertResult';

export type ButtonActionKey = 'ok' | 'OK' | 'cancel' | 'CANCEL' | 'yes' | 'YES' | 'no' | 'NO';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    /**
     * Defines standard button texts. Translator keys are 'ft.alert.button.[key]'.
     */
    buttons: { [key: string]: string } = {
        ok: 'Ok',
        yes: 'Yes',
        no: 'No',
        cancel: 'Cancel'
    };

    constructor(
        private readonly _dialogService: DialogService,
        @Optional() private readonly _messages: MessageService,
    ) { }

    /**
     * Show alert message and return a promise with clicked button.
     * @param title dialog title
     * @param content alert message
     * @param actions buttons
     */
    alert(title: string, content: string | Function | TemplateRef<any>, actions: Array<ButtonActionKey | DialogAction | IAlertAction> = ['ok']): Promise<IAlertAction> {

        const dialogRef = this._dialogService.open({
            title: title,
            content: AlertDialog,
            actions: this._toActions(actions),
            minWidth: 400,
        });
        dialogRef.content.instance.text = content;

        return new Promise(resolve => {
            dialogRef.result.subscribe(result => {
                if (result instanceof DialogCloseResult) {
                    resolve();
                } else {
                    resolve(result as IAlertAction);
                }
            });
        });
    }

    private _toActions(actions: Array<ButtonActionKey | DialogAction>): IAlertAction[] {
        return actions.map(a => this._toAction(a));
    }

    private _toAction(action: ButtonActionKey | DialogAction): IAlertAction {
        if (typeof action === 'string' || action instanceof String) {
            const key = action.trim().toLowerCase();
            if (this.buttons[key] === undefined) {
                throw new Error(`Unknown button key '${key} in alert service.`);
            }
            let text = this.buttons[key];
            if (this._messages) {
                const translatedText = this._messages.get(`ft.alert.button.${key}`);
                if (translatedText) {
                    text = translatedText;
                }
            }
            return {
                text: text,
                key: key,
                primary: (key.length > 0 && action[0].toUpperCase() === action[0])
            };

        } else {
            if (!action['key']) {
                action['key'] = action.text;
            }
            return action as IAlertAction;
        }
    }
}
