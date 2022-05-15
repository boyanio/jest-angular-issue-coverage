import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ToggleComponent } from "./toggle.component";
import { UiModule } from "./ui.module";

describe(ToggleComponent.name, () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create component", () => {
    expect(component).not.toBeNull();
  });
});
