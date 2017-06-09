import { browser, element, by } from 'protractor';

export class RavirajAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rr-root h1')).getText();
  }
}
