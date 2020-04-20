import { async, TestBed } from '@angular/core/testing';
import { SpeedDeviationsModule } from './speed-deviations.module';

describe('SpeedDeviationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SpeedDeviationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SpeedDeviationsModule).toBeDefined();
  });
});
