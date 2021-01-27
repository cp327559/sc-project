import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCockpitComponent } from './smart-cockpit.component';

describe('SmartCockpitComponent', () => {
  let component: SmartCockpitComponent;
  let fixture: ComponentFixture<SmartCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCockpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
