import { VokPage } from './app.po';

describe('vok App', () => {
  let page: VokPage;

  beforeEach(() => {
    page = new VokPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
