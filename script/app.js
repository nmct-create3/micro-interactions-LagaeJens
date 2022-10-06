function handleFloatingLabel() {

}

function handlePasswordSwitcher() {
    document.querySelector('.js-togglePassword').addEventListener('click', function () {
        const passwordInput = document.querySelector('togglePassword');
        if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type', 'text');
        } else {
            passwordInput.setAttribute('type', 'password');
        }
    }
    );
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});