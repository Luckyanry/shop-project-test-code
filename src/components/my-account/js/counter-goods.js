import { refs } from './refs';
import { animateCSS } from './account-animation.js';

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
  // animateCSS();

  refs.favoritesValue.textContent = refs.userFavoritesList.childElementCount;
}

function removeAdsItem(e) {
  if (e.target.nodeName !== 'SPAN') return;
  e.currentTarget.remove();

  refs.myAdsValue.textContent = refs.userAdsList.childElementCount;
}

export { removeFavorites, removeUserAds };

// import { refs } from './refs';
// import hbsUserInfo from '../templates/account-user-info.hbs';
// import hbsFavoritesGoods from '../templates/favorites-goods-modal.hbs';
// import myAds from '../templates/my-ads-modal.hbs';
// import { removeFavorites, removeUserAds } from './counter-goods';
// import { api } from '../../services/api';

// let counter = 0;

// function murkupUserInfo(data) {
//   if (window.matchMedia('(max-width: 767px)').matches) {
//     refs.mobileBackdropMyAccount.innerHTML = hbsUserInfo(data);
//   } else {
//     refs.modalBackdropMyAccount.innerHTML = hbsUserInfo(data);
//   }
// }

// function murkupFavoritesGoods() {
//   const favoritesValue = document.querySelector('.js-counter__heart');

//   const parseFavorites = JSON.parse(localStorage.getItem('user-info'))
//     .favorites;
//   favoritesValue.textContent = parseFavorites.length;

//   console.log('fav');

//   if (parseFavorites.length !== counter) {
//     console.log(parseFavorites.length);
//     console.log(counter);

//     counter = parseFavorites.length;
//     api.filterMyAccount(parseFavorites).then(res => {
//       console.log('favorites', res);

//       if (window.matchMedia('(max-width: 767px)').matches) {
//         refs.mobileBackdropFavorites.innerHTML = hbsFavoritesGoods(res);
//       } else {
//         refs.modalBackdropFavorites.innerHTML = hbsFavoritesGoods(res);
//       }
//       removeFavorites();
//     });
//   }
// }

// function murkupMyAds() {
//   const parseMyAds = JSON.parse(localStorage.getItem('user-info')).adv;
//   const myAdsValue = document.querySelector('.js-counter__add');
//   myAdsValue.textContent = parseMyAds.length;

//   if (parseMyAds.length !== counter) {
//     // console.log('adv');
//     counter = parseMyAds.length;
//     api.filterMyAccount(parseMyAds).then(res => {
//       // console.log('ads', res);
//       if (window.matchMedia('(max-width: 767px)').matches) {
//         refs.mobileBackdropMyAds.innerHTML = myAds(res);
//       } else {
//         refs.modalBackdropMyAds.innerHTML = myAds(res);
//       }
//       removeUserAds();
//     });
//   }
// }
// export { murkupFavoritesGoods, murkupMyAds, murkupUserInfo };

// import { refs } from './refs';
// import hbsUserInfo from '../templates/account-user-info.hbs';
// import hbsFavoritesGoods from '../templates/favorites-goods-modal.hbs';
// import myAds from '../templates/my-ads-modal.hbs';
// import { removeFavorites, removeUserAds } from './counter-goods';
// import { api } from '../../services/api';

// function murkupUserInfo(data) {
//   if (window.matchMedia('(max-width: 767px)').matches) {
//     refs.mobileBackdropMyAccount.innerHTML = hbsUserInfo(data);
//   } else {
//     refs.modalBackdropMyAccount.innerHTML = hbsUserInfo(data);
//   }
// }

// function murkupFavoritesGoods() {
//   const parseFavorites = JSON.parse(localStorage.getItem('user-info'))
//     .favorites;

//   api.filterMyAccount(parseFavorites).then(res => {
//     console.log('fav');
//     if (window.matchMedia('(max-width: 767px)').matches) {
//       refs.mobileBackdropFavorites.innerHTML = hbsFavoritesGoods(res);
//     } else {
//       refs.modalBackdropFavorites.innerHTML = hbsFavoritesGoods(res);
//     }

//     removeFavorites();
//   });

//   const favoritesValue = document.querySelector('.js-counter__heart');
//   favoritesValue.textContent = parseFavorites.length;
// }

// function murkupMyAds() {
//   const parseMyAds = JSON.parse(localStorage.getItem('user-info')).adv;

//   api.filterMyAccount(parseMyAds).then(res => {
//     console.log('adv');
//     if (window.matchMedia('(max-width: 767px)').matches) {
//       refs.mobileBackdropMyAds.innerHTML = myAds(res);
//     } else {
//       refs.modalBackdropMyAds.innerHTML = myAds(res);
//     }

//     removeUserAds();
//   });

//   const myAdsValue = document.querySelector('.js-counter__add');
//   myAdsValue.textContent = parseMyAds.length;
// }

// export { murkupFavoritesGoods, murkupMyAds, murkupUserInfo };
