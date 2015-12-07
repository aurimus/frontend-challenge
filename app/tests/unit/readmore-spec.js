import { store, Handler } from '../../scripts/store';
import { showReadMore, hideReadMore, toggleReadMore } from '../../scripts/actions';
import { renderButton, renderTextVisiblity } from '../../scripts/render';

describe('Action handler', () => {
  it('should toggle readmore visibility', () => {
    let state = {readmore_visible: false};
    expect(Handler(state, {type: 'TOGGLE_READMORE'})).toEqual({readmore_visible: true});
    
    state = {readmore_visible: true};
    expect(Handler(state, {type: 'TOGGLE_READMORE'})).toEqual({readmore_visible: false});
  });

  describe('For the sake of API', () => {
    describe('If readmore text is visible', () => {

      it('should hide the text if hide action is dispatched from somewhere', () => {
        let state = {readmore_visible: true};
        expect(Handler(state, {type: 'HIDE_READMORE'})).toEqual({readmore_visible: false});
      });

      it('should change nothing if show action is dispatched from somewhere', () => {
        let state = {readmore_visible: true};
        expect(Handler(state, {type: 'SHOW_READMORE'})).toEqual({readmore_visible: true});
      });

    });
  });

  it('should return default state if action is uknown', () => {
    expect(Handler(undefined, {type: 'SOMETHING'})).toEqual({readmore_visible: false})
  });

  it('should return previous state if action is uknown', () => {
    let state = {readmore_visible: false};
    expect(Handler(state, {type: 'SOMETHING'})).toEqual({readmore_visible: false})
  });
});

describe('Actions', () => {
  it('should return appropriate action for a call', () => {
    expect(toggleReadMore()).toEqual({type: 'TOGGLE_READMORE'});
  });
});

var $button;

describe('When rendering the button', () => {
  beforeEach(() => {
    $button = document.createElement('button');
  });

  describe('when the text is hidden', () => {
    it('should set the text to button to Show more', () => {
      store.dispatch(hideReadMore());
      renderButton.call($button);
      expect($button.textContent).toBe('Show more');
    });
  });

  describe('when the text is visible', () => {
    it('should set the text to button to Show less', () => {
      store.dispatch(showReadMore());
      renderButton.call($button);
      expect($button.textContent).toBe('Show less');
    });
  });
});

var $readMoreText

describe('When rendering the read more text', () => {
  beforeEach(() => {
    $readMoreText = document.createElement('div');
  });

  describe('when the state is equal to hidden', () => {
    it('should set the display property to none', () => {
      store.dispatch(hideReadMore());
      renderTextVisiblity.call($readMoreText);
      expect($readMoreText.style.display).toBe('none');
    });
  });

  describe('when the state is equal to visible', () => {
    it('should set the display property to block', () => {
      store.dispatch(showReadMore());
      renderTextVisiblity.call($readMoreText);
      expect($readMoreText.style.display).toBe('block');
    });
  });


});