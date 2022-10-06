function handleFloatingLabel() {

}

function handlePasswordSwitcher() {
    document.querySelector('.js-togglePassword').addEventListener('click', function () {
        console.log('clicked');
        const passwordInput = document.querySelector('.js-PasswordShow');
        if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type', 'text');
            console.log('show');
        } else {
            passwordInput.setAttribute('type', 'password');
            console.log('hide');
        }
    }
    );
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});