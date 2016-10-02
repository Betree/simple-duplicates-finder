import { MelissaListDuplicatesPage } from './app.po';

describe('melissa-list-duplicates App', function() {
  let page: MelissaListDuplicatesPage;

  beforeEach(() => {
    page = new MelissaListDuplicatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
