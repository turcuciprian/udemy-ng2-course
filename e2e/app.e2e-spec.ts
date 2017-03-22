import { UdemyFirstAppPage } from './app.po';

describe('udemy-first-app App', () => {
  let page: UdemyFirstAppPage;

  beforeEach(() => {
    page = new UdemyFirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
