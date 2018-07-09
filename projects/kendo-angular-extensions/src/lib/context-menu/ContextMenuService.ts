import { EventEmitter, Injectable, OnDestroy, Output } from '@angular/core';
import { MenuComponent, MenuEvent as KendoMenuEvent } from '@progress/kendo-angular-menu';
import { PopupRef, PopupService, PopupSettings } from '@progress/kendo-angular-popup';
import { Subscription } from 'rxjs';
import { IContextMenuOptions } from './IContextMenuOptions';
import { IMenuItemOptions } from './IMenuItemOptions';
import { MenuEvent } from './MenuEvent';

@Injectable({
    providedIn: 'root',
})
export class ContextMenuService implements OnDestroy {

    @Output()
    select = new EventEmitter<MenuEvent>();

    /**
     * Reference to open context menu.
     */
    private _popupRef: PopupRef;

    private _subscriptions = new Subscription();

    constructor(
        private _popupService: PopupService,
    ) { }

    show<TData = any>(options: IContextMenuOptions<TData>) {
        this.close();

        const popupOptions: PopupSettings = {
            content: MenuComponent,
            positionMode: 'absolute'
        };

        // apply popup options
        for (const prop of ['offset', 'anchor', 'anchorAlign', 'popupAlign']) {
            if (options[prop] !== undefined) {
                popupOptions[prop] = options[prop];
            }
        }

        // show menu
        this._popupRef = this._popupService.open(popupOptions);
        const menu = <MenuComponent> this._popupRef.content.instance;
        menu.vertical = true;
        menu.items = this._itemsWithData(options.items, options.data);

        // setup events
        this._subscriptions.add(this._popupRef.content.instance.select.subscribe(event => this._handleMenuSelect<TData>(event)));
        setTimeout(() => this._registerClickOutsideListener(), 10);
    }

    private _itemsWithData(items: IMenuItemOptions[], data: any) {
        if (data) {
            const ret = [];
            for (const mi of items) {
                const ri = (mi.data === undefined) ? Object.assign({}, mi, { data: data }) : mi;
                if (ri.items) {
                    ri.items = this._itemsWithData(mi.items, data);
                }
                ret.push(ri);
            }
            return ret;
        }
        return items;
    }

    private _handleMenuSelect<TData>(event: KendoMenuEvent) {
        const itemConfig = <IMenuItemOptions>event.item;
        const eventWithData = new MenuEvent<TData>(event);
        eventWithData.data = event.item.data;

        if (itemConfig && itemConfig.handler) {
            itemConfig.handler(eventWithData);
            return;
        }
        this.select.emit(eventWithData);
    }

    close = () => {
        if (this._popupRef) {
            this._popupRef.close();
            this._popupRef = null;
        }
        this._removeClickOutsideListener();
    }

    private _registerClickOutsideListener() {
        document.addEventListener('click', this.close);
    }

    private _removeClickOutsideListener() {
        document.removeEventListener('click', this.close);
    }

    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }
}
