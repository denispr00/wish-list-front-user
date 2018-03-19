import { OwishFrontUserPage } from './app.po';

describe('owish-front-user App', function() {
  let page: OwishFrontUserPage;

  beforeEach(() => {
    page = new OwishFrontUserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
