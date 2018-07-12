import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContextMenuTestPage } from "./context-menu/ContextMenuTestPage";
import { BackTestPage } from "./navigation/back/BackTestPage";
import { LinkButtonTestPage } from "./link-button/LinkButtonTestPage";

const routes: Routes = [
    { path: 'context-menu', component: ContextMenuTestPage },
    { path: 'navigation/back', component: BackTestPage },
    { path: 'link-button', component: LinkButtonTestPage },
    { path: '', redirectTo: '/context-menu', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }