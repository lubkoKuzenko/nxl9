import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSpeedViewComponent } from './map-speed-view.component';

describe('MapSpeedViewComponent', () => {
  let component: MapSpeedViewComponent;
  let fixture: ComponentFixture<MapSpeedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [MapSpeedViewComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSpeedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
