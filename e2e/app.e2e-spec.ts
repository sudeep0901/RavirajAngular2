import { RavirajAngular2Page } from './app.po';

describe('raviraj-angular2 App', () => {
  let page: RavirajAngular2Page;

  beforeEach(() => {
    page = new RavirajAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rr works!');
  });
});
