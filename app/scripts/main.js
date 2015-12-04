'use strict';

// Hide the text
let $read_more_text = document.querySelector('.read_more_text');
    $read_more_text.style.display = 'none';

// Show the button
let $read_more_control = document.querySelector('.read_more_control')
    $read_more_control.style.display = 'block';


/** Enable control **/

let $read_more_button = document.querySelector('.read_more_control button');
$read_more_button.addEventListener('click', function (evt) {
    if ($read_more_text.style.display == 'none'){
        $read_more_text.style.display = 'block';
        this.textContent = 'Show less';
    } else {
        $read_more_text.style.display = 'none';
        this.textContent = 'Show more';
    }
});


console.log('ready!');
