import { NgMatModule } from './ng-mat.module';

describe('MaterialBoltModule', () => {
  let materialBoltModule: NgMatModule;

  beforeEach(() => {
    materialBoltModule = new NgMatModule();
  });

  it('should create an instance', () => {
    expect(NgMatModule).toBeTruthy();
  });
});
