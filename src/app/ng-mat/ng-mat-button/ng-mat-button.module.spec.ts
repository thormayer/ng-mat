import { NgMatButtonModule } from './ng-mat-button.module';

describe('NgMatButtonModule', () => {
  let ngMatButtonModule: NgMatButtonModule;

  beforeEach(() => {
    ngMatButtonModule = new NgMatButtonModule();
  });

  it('should create an instance', () => {
    expect(ngMatButtonModule).toBeTruthy();
  });
});
