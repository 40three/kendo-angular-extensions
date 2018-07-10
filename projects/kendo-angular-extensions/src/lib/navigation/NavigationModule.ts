import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigateBackDirective } from './back-directive/NavigateBackDirective';

@NgModule({
    declarations: [
        NavigateBackDirective,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        NavigateBackDirective,
    ]
})
export class NavigationModule {

}

export { NavigateBackDirective };
