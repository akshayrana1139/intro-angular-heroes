import { IntroAngularHeroesPage } from './app.po';

describe('intro-angular-heroes App', () => {
  let page: IntroAngularHeroesPage;

  beforeEach(() => {
    page = new IntroAngularHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
