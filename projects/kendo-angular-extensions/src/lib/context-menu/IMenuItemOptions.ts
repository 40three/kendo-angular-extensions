import { MenuItem } from '@progress/kendo-angular-menu';
import { MenuEvent } from './MenuEvent';

export interface IMenuItemOptions<TData = any> extends MenuItem {
    handler?: (event: MenuEvent<TData>) => void;
}
