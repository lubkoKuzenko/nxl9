import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEmissionViewComponent } from './map-emission-view.component';

describe('MapEmissionViewComponent', () => {
  let component: MapEmissionViewComponent;
  let fixture: ComponentFixture<MapEmissionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [MapEmissionViewComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapEmissionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
