import { async, TestBed } from '@angular/core/testing';
import { SpeedDeviationsModule } from './speed-deviations.module';

describe('SpeedDeviationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [SpeedDeviationsModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  }));

  it('should create', () => {
    expect(SpeedDeviationsModule).toBeDefined();
  });
});
