const refs = {
  btnOpenModal: document.querySelector('.account-btn'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  closeBtn: document.querySelector('#cross'),
};

refs.btnOpenModal.addEventListener('click', () => {
  refs.modalBackdrop.style.display = 'block';
});

refs.closeBtn.addEventListener('click', () => {
  refs.modalBackdrop.style.display = 'none';
});

window.addEventListener(
  'click',
  e =>
    e.target === refs.modalBackdrop &&
    (refs.modalBackdrop.style.display = 'none'),
);
