import { async, TestBed } from '@angular/core/testing';
import { LimeRoutesModule } from './lime-routes.module';

describe('LimeRoutesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [LimeRoutesModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  }));

  it('should create', () => {
    expect(LimeRoutesModule).toBeDefined();
  });
});
