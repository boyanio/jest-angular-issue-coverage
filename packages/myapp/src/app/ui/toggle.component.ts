import { Component, Input, OnInit } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { NzSwitchComponent } from "ng-zorro-antd/switch";

@Component({
  selector: "app-toggle",
  template: `<button type="button" #switchElement>{{ text }}</button>`,
})
export class ToggleComponent
  extends NzSwitchComponent
  implements ControlValueAccessor, OnInit
{
  @Input()
  public text = "Hello";
}
