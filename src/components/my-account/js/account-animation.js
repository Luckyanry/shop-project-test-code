import { refs } from './refs';

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

function animationRemoveItem() {
  const userFavoritesList = document.querySelector('.selected-goods__item');

  // const element = userFavoritesList.forEach(item => item.length);
  // console.log('item', userFavoritesList);

  userFavoritesList.classList.add('animate__animated', 'animate__backOutLeft');
}

function animationRemoveItemClose() {
  const userFavoritesList = document.querySelector('.selected-goods__item');

  userFavoritesList.classList.remove(
    'animate__animated',
    'animate__backOutLeft',
  );
}

export {
  animationOpenModal,
  animationCloseModal,
  animationOpenFavorites,
  animationCloseFavorites,
  animationOpenMyAds,
  animationCloseMyAds,
  animationRemoveItem,
  animationRemoveItemClose,
};
