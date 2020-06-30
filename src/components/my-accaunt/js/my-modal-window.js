const refs = {
  btnOpenModal: document.querySelector('.account-btn'),
  openFavorites: document.querySelector('.account-list__favorites'),
  openMyAds: document.querySelector('.account-list__advertisement'),

  modalBackdropMyAccount: document.querySelector(
    '.moodal-backdrop__my-account',
  ),
  modalBackdropFavorites: document.querySelector('.moodal-backdrop__favorites'),
  modalBackdropMyAds: document.querySelector('.moodal-backdrop__my-ads'),

  closeBtnAccount: document.querySelector('.close__my-account'),
  closeBtnFavorites: document.querySelector('.close__favorites'),
  closeBtnMyAds: document.querySelector('.close__my-ads'),

  logoutAccount: document.querySelector('.account-logout'),
};

// ======================================================

refs.btnOpenModal.addEventListener('click', () => {
  refs.modalBackdropMyAccount.style.display = 'block';
});

refs.openFavorites.addEventListener('click', () => {
  refs.modalBackdropMyAccount.style.display = 'none';
  refs.modalBackdropFavorites.style.display = 'block';
});

refs.openMyAds.addEventListener('click', () => {
  refs.modalBackdropMyAccount.style.display = 'none';
  refs.modalBackdropMyAds.style.display = 'block';
});

// ======================================================

window.addEventListener('click', windowClose);

function windowClose(e) {
  e.target === refs.modalBackdropMyAccount &&
    (refs.modalBackdropMyAccount.style.display = 'none');

  e.target === refs.modalBackdropFavorites &&
    (refs.modalBackdropFavorites.style.display = 'none');

  e.target === refs.modalBackdropMyAds &&
    (refs.modalBackdropMyAds.style.display = 'none');
}

// ======================================================

refs.closeBtnAccount.addEventListener('click', () => {
  refs.modalBackdropMyAccount.style.display = 'none';
});

refs.closeBtnFavorites.addEventListener('click', () => {
  refs.modalBackdropFavorites.style.display = 'none';
});

refs.closeBtnMyAds.addEventListener('click', () => {
  refs.modalBackdropMyAds.style.display = 'none';
});

// ======================================================

refs.logoutAccount.addEventListener('click', () => {
  refs.modalBackdropMyAccount.style.display = 'none';
  refs.btnOpenModal.style.display = 'none';
});
