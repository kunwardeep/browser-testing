import StylesPage from 'pageobjects/styles.page';

describe('CultureAmp Design website style page 0', () => {
  it('shows the text Visuals', () => {
    return StylesPage.open()
      .then(() => StylesPage.getContentHeadingText())
      .then(text => expect(text).to.equal('Visuals'));
  });
});
