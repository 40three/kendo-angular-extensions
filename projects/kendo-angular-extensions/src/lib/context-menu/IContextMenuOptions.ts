import { Offset, Align } from '@progress/kendo-angular-popup';
import { IMenuItemOptions } from './IMenuItemOptions';
import { ElementRef } from '@angular/core';

export interface IContextMenuOptions<TData = any> {
    offset?: Offset;
    anchor?: ElementRef | Element | EventTarget;
    anchorAlign?: Align;
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
