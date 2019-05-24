import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { AppShellComponent } from "./app-shell/app-shell.component";
import { SharedModule } from "./shared/shared.module";
import { LayoutPrimaryComponent } from "./layout-primary/layout-primary.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutPrimaryComponent,
    children: [{ path: "shell", component: AppShellComponent }]
  }
];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent]
})
export class AppServerModule {}
