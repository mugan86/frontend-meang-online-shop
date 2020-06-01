import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopUiComponent } from './shop-ui.component';

describe('ShopUiComponent', () => {
  let component: ShopUiComponent;
  let fixture: ComponentFixture<ShopUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
