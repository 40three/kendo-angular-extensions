import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContextMenuTestPage } from "./context-menu/ContextMenuTestPage";

const routes: Routes = [
    { path: 'context-menu', component: ContextMenuTestPage },
    { path: '', redirectTo: '/context-menu', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }