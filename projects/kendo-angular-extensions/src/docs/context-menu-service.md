# Context Menu Service

Service to open a context menu. It will

* use Kendo menu component and
* place it inside Kendo popup

## Installation

In your app module:

    import { ContextMenuModule } from '@40three/kendo-angular-extensioins';

    @NgModule({
      imports: [
        ContextMenuModule,
      ],
      ...
    })

It provides only one service, so no need to import it in all feature modules.

## Usage

    export class MyComponent {

      constructor(
        private _contextMenu: ContextMenuService,
      ) { }

      showContextMenu(event: MouseEvent) {
        this._contextMenu.show({
            anchor: event.target,
            items: [
                { text: 'Item 1', handler: () => alert('You clicked item 1') },
                { text: 'Item 2', handler: () => alert('You clicked item 2') },
            ]
        });
      }
    }

## Options

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

## The "data" Property

Use the data property to add context information. You can set this property

* in context menu options (will be applied to all items where data is undefined)
* for each item

show() method is generic and allows you to set a type of your data property:

    this._contextMenu.show<MyInterface>({
        data: myData,
        items: [
            { text: 'Item 1', handler: (e) => /* you'll have intellisense for e.data */ },
        ]
    });