import { toggleReadMore } from './actions';
import { store } from './store';

/*** View ***/

let $read_more_control = document.querySelector('.read_more_control');
let $read_more_text = document.querySelector('.read_more_text');
let $read_more_button = document.querySelector('.read_more_control button');

// Initialize if Javascript enabled
$read_more_control.style.display = 'block';

// Listen for click coming from view and dispatch action

$read_more_button.addEventListener('click', (evt) => {
    store.dispatch(toggleReadMore());
});

// Respond to actions coming from "anywhere" (in our case just the view)

const render = () => {
    if (store.getState().readmore_visible) {
        $read_more_text.style.display = 'block';
        $read_more_button.textContent = 'Show less';
    } else {
        $read_more_text.style.display = 'none';
        $read_more_button.textContent = 'Show more';
    }
}

store.subscribe(render);

// Initialize
render();
