import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DummyComponent } from "./components/dummy.component";
import { RouterModule } from "@angular/router";
import { LayoutPrimaryComponent } from "../layout-primary/layout-primary.component";

@NgModule({
  declarations: [DummyComponent, LayoutPrimaryComponent],
  imports: [CommonModule, RouterModule],
  exports: [DummyComponent, LayoutPrimaryComponent]
})
export class SharedModule {}
