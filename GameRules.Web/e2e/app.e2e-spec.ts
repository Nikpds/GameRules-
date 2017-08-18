import { GameRules.WebPage } from './app.po';

describe('game-rules.web App', () => {
  let page: GameRules.WebPage;

  beforeEach(() => {
    page = new GameRules.WebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
