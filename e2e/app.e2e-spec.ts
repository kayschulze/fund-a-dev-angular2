import { FundADevPage } from './app.po';

describe('fund-a-dev App', () => {
  let page: FundADevPage;

  beforeEach(() => {
    page = new FundADevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
