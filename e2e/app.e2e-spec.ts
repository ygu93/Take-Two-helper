import { TakeTwoAppPage } from './app.po';

describe('take-two-app App', function() {
  let page: TakeTwoAppPage;

  beforeEach(() => {
    page = new TakeTwoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
