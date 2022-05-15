import { NgModule } from "@angular/core";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { ToggleComponent } from "./toggle.component";

@NgModule({
  imports: [NzSwitchModule],
  exports: [ToggleComponent],
  declarations: [ToggleComponent],
})
export class UiModule {}
