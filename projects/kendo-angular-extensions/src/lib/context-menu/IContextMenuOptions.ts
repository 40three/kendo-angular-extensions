import { Offset, Align } from '@progress/kendo-angular-popup';
import { IMenuItemOptions } from './IMenuItemOptions';
import { ElementRef } from '@angular/core';

export interface IContextMenuOptions<TData = any> {

    /**
     * Position of context menu (x, y).
     */
    offset?: Offset;

    /**
     * Element to align popup to.
     */
    anchor?: ElementRef | Element | EventTarget;

    /**
     * Where to align at anchore
     */
    anchorAlign?: Align;

    /**
     * Where to align at popup.
     */
    popupAlign?: Align;

    /**
     * Menu items
     */
    items: IMenuItemOptions<TData>[];

    /**
     * Data you want to pass to handler functions.
     */
    data?: TData;

}
