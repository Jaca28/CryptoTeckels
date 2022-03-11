const newsletter_button = document.getElementById('newsletter');
const newsletter_message1 = document.getElementById('newsletter_message1');
const newsletter_message2 = document.getElementById('newsletter_message2');
const newsletter_message3 = document.getElementById('newsletter_message3');
const input_box = document.getElementById('input_box');


// newsletter_button.onclick = hideblocks;

function hideblocks() {
    newsletter_button.style.display = 'none';
    newsletter_message1.style.display = 'none';
    newsletter_message2.style.display = 'none';
    input_box.style.display = 'none';
    newsletter_message3.style.display = 'block';
};


// const hideblocks = async() => {
//     newsletter_button.style.display = 'none';
//     newsletter_message1.style.display = 'none';
//     newsletter_message2.style.display = 'none';
//     input_box.style.display = 'none';
//     newsletter_message3.style.display = 'block';
// };