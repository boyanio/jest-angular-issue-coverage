# jest-angular-issue-coverage

When running tests with coverage, they fail. This repository is a minimal reproduction of the issue. When you run `npx ng test` everything is fine. If you run `npx ng test --coverage` you get the following error

```
TypeError: Cannot read property 'change' of undefined

      at ToggleComponent.Object.<anonymous>.NzSwitchComponent.ngOnInit (node_modules/components/switch/switch.component.ts:124:25)
      at callHook (../packages/core/src/render3/hooks.ts:262:14)
      at callHooks (../packages/core/src/render3/hooks.ts:230:9)
      at executeInitAndCheckHooks (../packages/core/src/render3/hooks.ts:174:5)
      at refreshView (../packages/core/src/render3/instructions/shared.ts:388:11)
      at renderComponentOrTemplate (../packages/core/src/render3/instructions/shared.ts:495:5)
      at tickRootContext (../packages/core/src/render3/instructions/shared.ts:1912:5)
      at detectChangesInRootView (../packages/core/src/render3/instructions/shared.ts:1935:3)
      at RootViewRef.Object.<anonymous>.RootViewRef.detectChanges (../packages/core/src/render3/view_ref.ts:312:5)
      at ComponentFixture.Object.<anonymous>.ComponentFixture._tick (../packages/core/testing/src/component_fixture.ts:113:28)
      at ../packages/core/testing/src/component_fixture.ts:127:14
      at Object.onInvoke (../packages/core/src/zone/ng_zone.ts:405:29)
      at NgZone.Object.<anonymous>.NgZone.run (../packages/core/src/zone/ng_zone.ts:184:50)
      at ComponentFixture.Object.<anonymous>.ComponentFixture.detectChanges (../packages/core/testing/src/component_fixture.ts:126:19)
```