import { hideReadMore } from './actions';
import { renderButton, renderTextVisiblity } from './render';
import { store } from './store';

/*** View ***/

let $read_more_control = document.querySelector('.read_more_control');
let $read_more_text = document.querySelector('.read_more_text');
let $read_more_button = document.querySelector('.read_more_control button');

// Initialize if Javascript enabled
$read_more_control.style.display = 'block';

store.subscribe( renderButton.bind($read_more_button) );
store.subscribe( renderTextVisiblity.bind($read_more_text) );

// Initialize
store.dispatch(hideReadMore());

export let dispatch = store.dispatch;