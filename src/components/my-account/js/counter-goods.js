import { refs } from './refs';
import {
  animationRemoveItem,
  animationRemoveItemClose,
} from './account-animation.js';

function removeFavorites() {
  refs.userFavoritesList.children.forEach(item =>
    item.addEventListener('click', removeFavoritesItem),
  );
}

function removeUserAds() {
  refs.userAdsList.children.forEach(item =>
    item.addEventListener('click', removeAdsItem),
  );
}

function removeFavoritesItem(e) {
  if (e.target.nodeName !== 'SPAN') return;
  e.currentTarget.remove();

  animationRemoveItem();
  refs.favoritesValue.textContent = refs.userFavoritesList.childElementCount;
}

function removeAdsItem(e) {
  if (e.target.nodeName !== 'SPAN') return;
  e.currentTarget.remove();

  animationRemoveItem();

  refs.myAdsValue.textContent = refs.userAdsList.childElementCount;
}

export { removeFavorites, removeUserAds };
