import { NgModule } from "@angular/core";
import { ActionBarComponent } from "./action-bar.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [ActionBarComponent],
  exports: [ActionBarComponent]
})
export class ActionBarModule {}
