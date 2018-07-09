import { MenuEvent as KendoMenuEvent} from '@progress/kendo-angular-menu';

export class MenuEvent<TData = any> extends KendoMenuEvent {
    data: any;
}
