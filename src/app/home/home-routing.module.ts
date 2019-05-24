import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LayoutPrimaryComponent } from "../layout-primary/layout-primary.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutPrimaryComponent,
    children: [{ path: "", component: HomeComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
