
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailSpan = document.querySelector('#gmail_result');

const validateEmail = (email) => {
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regExp.test(email);
};

const updateValidationResult = (isValid) => {
    gmailSpan.innerHTML = isValid ? 'OK' : 'Not OK';
    gmailSpan.style.color = isValid ? 'green' : 'red';
};

gmailButton.addEventListener('click', () => {
    const email = gmailInput.value;
    const isValidEmail = validateEmail(email);
    updateValidationResult(isValidEmail);
});



const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');
let currentPositionX = 0, currentPositionY = 0, isMoving = false, direction = 0;

const moveBlock = () => {
    const step = 5, maxX = parentBlock.offsetWidth - childBlock.offsetWidth, maxY = parentBlock.offsetHeight - childBlock.offsetHeight;
    if (!isMoving) {
        isMoving = true;
        switch (direction) {
            case 0: currentPositionX += step; if (currentPositionX >= maxX) { currentPositionX = maxX; direction = 1; } break;
            case 1: currentPositionY += step; if (currentPositionY >= maxY) { currentPositionY = maxY; direction = 2; } break;
            case 2: currentPositionX -= step; if (currentPositionX <= 0) { currentPositionX = 0; direction = 3; } break;
            case 3: currentPositionY -= step; if (currentPositionY <= 0) { currentPositionY = 0; direction = 0; } break;
        }
        childBlock.style.left = currentPositionX + 'px';
        childBlock.style.top = currentPositionY + 'px';
        setTimeout(() => { isMoving = false; moveBlock(); }, 10);
    }
};

document.addEventListener('DOMContentLoaded', () => moveBlock());