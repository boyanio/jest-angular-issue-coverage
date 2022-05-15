import { Component, Input } from "@angular/core";
import { NzSwitchComponent } from "ng-zorro-antd/switch";

@Component({
  selector: "app-toggle",
  template: `<button type="button" #switchElement>{{ text }}</button>`,
})
export class ToggleComponent extends NzSwitchComponent {
  @Input()
  public text = "Hello";
}
