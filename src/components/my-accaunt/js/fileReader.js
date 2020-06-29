const refs = {
  // fileForm: document.forms.fileForm,
  input: document.querySelector('.user-avatar__file-input'),
  img: document.querySelector('.js-avatar'),
};

function hendleChange(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    refs.img.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    refs.img.src = '';
  }
}

refs.input.addEventListener('change', hendleChange);

// const fileForm = document.forms.fileForm;

// function toDataURL(element) {
//   return new Promise(resolve => {
//     const reader = new FileReader();

//     reader.onloadend = () => resolve(reader.result);
//     reader.readAsDataURL(element.files[0]);
//   });
// }

// const createbase = e => {
//   e.preventDefault();

//   const element = fileForm.elements.fileFormInput;

//   toDataURL(element).then(data => {
//     const localUserId = JSON.parse(localStorage.getItem('user-info')).userId;
//     updateUserAvatar(localUserId, data);
//   });
// };

// fileForm.addEventListener('submit', createbase);
