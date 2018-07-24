# Alerts service

Simplifies using kendo dialogs as alerts.

## Installation

In your app or feature module:

    import { AlertModule } from '@40three/kendo-angular-extensioins';

    @NgModule({
      imports: [
        AlertModule,
      ],
      ...
    })

## Usage

    export class MyComponent {
        constructor(
            private _alertService: AlertService,
        )

        async doSomeAction() {
            const result = await this._alertService.alert('Yes/No Example', 'Select a button.', ['yes', 'NO']);
            if (result.key === 'yes') {
                // do something
            }
        }
    }


    // show alert with 'Ok' button
    this._alertService.alert('My title', 'My message.');


    // show alert with yes, no button (ok, cancel, yes, no supported)
    // use uppercase key to make this button the primary button
    const result = await this._alertService.alert('Yes/No Example', 'Select a button.', ['yes', 'NO']);
    alert(`You clicked button '${result.text}' with key '${result.key}'`);


    // show alert with custom buttons
    const result = await this._alertService.alert(
        'Custom Actions Example', 
        'Select a button.', 
        ['yes', { text: 'My button', primary: true, key: 'example'}]
    );
    alert(`You clicked button '${result.text}' with key '${result.key}'`);

