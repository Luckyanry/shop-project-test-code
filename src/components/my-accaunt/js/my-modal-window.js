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

  accountWrapper: document.querySelector('.account-wrapper'),
  selectedGoodsInner: document.querySelector('.selected-goods__inner'),
  myAdsInner: document.querySelector('.my-ads__inner'),
};

// ===================OPEN MODAL ON BTN=======================

refs.btnOpenModal.addEventListener('click', btnOpenModal);
refs.openFavorites.addEventListener('click', openFavorites);
refs.openMyAds.addEventListener('click', openMyAds);

function btnOpenModal() {
  refs.modalBackdropMyAccount.style.display = 'block';
  animationOpenModal();
}

function openFavorites() {
  refs.modalBackdropMyAccount.style.display = 'none';
  refs.modalBackdropFavorites.style.display = 'block';
  animationOpenFavorites();
}

function openMyAds() {
  refs.modalBackdropMyAccount.style.display = 'none';
  refs.modalBackdropMyAds.style.display = 'block';
  animationOpenMyAds();
}

// ===================CLOSE WHEN CLICK ARROUND=======================

window.addEventListener('click', windowClose);

function windowClose(e) {
  e.target === refs.modalBackdropMyAccount &&
    (refs.modalBackdropMyAccount.style.display = 'none') &&
    animationCloseModal();

  e.target === refs.modalBackdropFavorites &&
    (refs.modalBackdropFavorites.style.display = 'none') &&
    animationCloseFavorites();

  e.target === refs.modalBackdropMyAds &&
    (refs.modalBackdropMyAds.style.display = 'none') &&
    animationCloseMyAds();
}

// =====================CLOSE MODAL ON BTN=====================

refs.closeBtnAccount.addEventListener('click', closeBtnAccount);
refs.closeBtnFavorites.addEventListener('click', closeBtnFavorites);
refs.closeBtnMyAds.addEventListener('click', closeBtnMyAds);

function closeBtnAccount() {
  refs.modalBackdropMyAccount.style.display = 'none';
  animationCloseModal();
}

function closeBtnFavorites() {
  refs.modalBackdropFavorites.style.display = 'none';
  animationCloseFavorites();
}

function closeBtnMyAds() {
  refs.modalBackdropMyAds.style.display = 'none';
  animationCloseMyAds();
}

// ======================LOGOUT======================

refs.logoutAccount.addEventListener('click', logOut);

function logOut() {
  refs.modalBackdropMyAccount.style.display = 'none';
  refs.btnOpenModal.style.display = 'none';
}

// =====================ANIMATION=====================

function animationOpenModal() {
  refs.accountWrapper.classList.add('animate__animated', 'animate__fadeInDown');
}

function animationCloseModal() {
  refs.accountWrapper.classList.remove(
    'animate__animated',
    'animate__fadeInDown',
  );
}

function animationOpenFavorites() {
  refs.selectedGoodsInner.classList.add(
    'animate__animated',
    'animate__backInDown',
  );
}

function animationCloseFavorites() {
  refs.selectedGoodsInner.classList.remove(
    'animate__animated',
    'animate__backInDown',
  );
}

function animationOpenMyAds() {
  refs.myAdsInner.classList.add('animate__animated', 'animate__backInDown');
}

function animationCloseMyAds() {
  refs.myAdsInner.classList.remove('animate__animated', 'animate__backInDown');
}
