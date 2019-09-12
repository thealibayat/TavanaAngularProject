import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSectionComponent } from './features-section.component';

describe('FeaturesSectionComponent', () => {
  let component: FeaturesSectionComponent;
  let fixture: ComponentFixture<FeaturesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
