import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLimeViewComponent } from './map-lime-view.component';

describe('MapLimeViewComponent', () => {
  let component: MapLimeViewComponent;
  let fixture: ComponentFixture<MapLimeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [MapLimeViewComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLimeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
