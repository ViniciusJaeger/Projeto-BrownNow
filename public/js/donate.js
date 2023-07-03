const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((button) => {
    button.addEventListener('click', () => {
        radioButtons.forEach((button) => {
            button.checked = false;
        });

        button.checked = true;
    });
});