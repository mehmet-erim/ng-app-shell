import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DummyComponent } from "./shared/components/dummy.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  {
    path: "home",
    component: DummyComponent,
    children: [
      {
        path: "",
        loadChildren: "./home/home.module#HomeModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
