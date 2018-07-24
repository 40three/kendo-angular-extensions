import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlertTestPage } from "./alert/AlertTestPage";
import { ContextMenuTestPage } from "./context-menu/ContextMenuTestPage";
import { LinkButtonTestPage } from "./link-button/LinkButtonTestPage";
import { BackTestPage } from "./navigation/back/BackTestPage";

const routes: Routes = [
    { path: 'alerts', component: AlertTestPage },
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