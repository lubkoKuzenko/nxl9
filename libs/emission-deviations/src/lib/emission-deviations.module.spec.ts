import { async, TestBed } from '@angular/core/testing';
import { EmissionDeviationsModule } from './emission-deviations.module';

describe('EmissionDeviationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [EmissionDeviationsModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  }));

  it('should create', () => {
    expect(EmissionDeviationsModule).toBeDefined();
  });
});
