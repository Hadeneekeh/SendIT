// let openSignUpModal = document.getElementById('signUpModal');
// let openSignInModal = document.getElementById('signInModal');
  let signUpModal = document.getElementById('closeSignUpModal');
  let signInModal = document.getElementById('closeSignInModal');

function openSignUp() {
    document.getElementById('sign-up').style.display = 'block';
  }

  function openSignIn() {
    document.getElementById('sign-in').style.display = 'block';
  }

  function closeSignInModal() {
    document.getElementById('sign-in').style.display = 'none';
  }

  function closeSignUpModal() {
    document.getElementById('sign-up').style.display = 'none';
  }

//   openSignUpModal.onclick = openSignUp();

//   openSignInModal.onclick = openSignIn();

    signUpModal.onclick = function() {
      closeSignUpModal();
  }
    signInModal.onclick = function () {
      closeSignInModal();
  }