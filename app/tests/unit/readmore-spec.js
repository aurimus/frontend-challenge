import { App } from '../../scripts/store';
import {toggleReadMore} from '../../scripts/actions';

describe('Action handler', () => {
  it('should toggle readmore visibility', () => {
    let state = {readmore_visible: false};
    expect(App(state, {type: 'TOGGLE_READMORE'})).toEqual({readmore_visible: true});
    
    state = {readmore_visible: true};
    expect(App(state, {type: 'TOGGLE_READMORE'})).toEqual({readmore_visible: false});
  });

  it('should return default state if action is uknown', () => {
    expect(App(undefined, {type: 'SOMETHING'})).toEqual({readmore_visible: false})
  });

  it('should return previous state if action is uknown', () => {
    let state = {readmore_visible: false};
    expect(App(state, {type: 'SOMETHING'})).toEqual({readmore_visible: false})
  });
});

describe('Actions', () => {
  it('should return appropriate action for a call', () => {
    expect(toggleReadMore()).toEqual({type: 'TOGGLE_READMORE'});
  });
});