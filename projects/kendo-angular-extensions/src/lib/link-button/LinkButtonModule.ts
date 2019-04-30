import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkButtonDirective } from './directives/LinkButtonDirective';

@NgModule({
    declarations: [
        LinkButtonDirective,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        LinkButtonDirective,
    ]
})
export class LinkButtonModule {

}

export { LinkButtonDirective };
