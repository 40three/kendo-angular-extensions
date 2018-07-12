import { Component } from "@angular/core";
import { ContextMenuService } from "../../../../kendo-angular-extensions/src/lib/context-menu/ContextMenuModule";
import { Subscription } from "rxjs";

@Component({
    templateUrl: './LinkButtonTestPage.html',
})
export class LinkButtonTestPage {

    private _menuSubscription: Subscription;

    constructor(
        private _contextMenu: ContextMenuService,
    ) { }

    showContextMenuWithItemHandlers(event: MouseEvent) {
        this._contextMenu.show({
            anchor: event.target,
            items: [
                { text: 'Item 1', handler: () => alert('You clicked item 1') },
                { text: 'Item 2', handler: () => alert('You clicked item 2') },
            ]
        });
    }

    showContextMenuUsingSelectEvent(event: MouseEvent) {
        if (!this._menuSubscription) {
            this._menuSubscription = this._contextMenu.select.subscribe(e => {
                console.log('Menu click', e);
                alert('Menu click, see console output for details.');
            });
        }
        
        this._contextMenu.show({
            anchor: event.target,
            items: [
                { text: 'Item 1', data: 'item1' },
                { text: 'Item 2', data: 'item2' },
            ],
        });

    }
}