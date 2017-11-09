import { XlsxJsonAngPage } from './app.po';

describe('xlsx-json-ang App', () => {
  let page: XlsxJsonAngPage;

  beforeEach(() => {
    page = new XlsxJsonAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
