import incomeBtn from '../templates/income-account-btn.hbs';
import userAvatar from '../templates/account-avatar.hbs';
import userInfo from '../templates/account-user-info.hbs';
import favoritesGoods from '../templates/favorites-goods-modal.hbs';
import myAds from '../templates/my-ads-modal.hbs';
import { removeFavorites, removeUserAds } from './counter-goods';

import { refs } from './refs';

// export function isLogIn() {
//   if (localStorage.getItem('user-info')) {
//     const localUserId = JSON.parse(localStorage.getItem('user-info')).userId;

//     getUserInfo(localUserId).then(res => {
//       // if (window.matchMedia('(max-width: 767px)').matches) {
//       //   markupIncomeBtnMobile(res.data);
//       // } else {
//       //   markupIncomeBtn(res.data);
//       // }
//       markupIncomeBtnMobile(res.data);

//       signOutForm = document.querySelector('.auth-form-sign-out');
//       signOutForm.addEventListener('click', hendelSignOut);
//       // signOutForm[1].addEventListener('click', hendelSignOut);
//     });
//   } else {
//     signInUpDiv.innerHTML = `${signInUp()}`;
//     signInUpDivMob.innerHTML = `${signInUp()}`;
//   }
// }
// isLogIn();

function markupIncomeBtn() {
  refs.btnOpenModal.insertAdjacentHTML('beforeend', incomeBtn()); // ======= btn
}
markupIncomeBtn();

function murkupUserAvatar() {
  refs.hbsUserAvatar.innerHTML = userAvatar();
}

function murkupUserInfo() {
  refs.hbsUserInfo.innerHTML = userInfo();
}

function murkupFavoritesGoods() {
  refs.userFavoritesList.innerHTML = favoritesGoods();
  refs.favoritesValue.textContent = refs.userFavoritesList.childElementCount;
  removeFavorites();
}

function murkupMyAds() {
  refs.userAdsList.innerHTML = myAds();
  refs.myAdsValue.textContent = refs.userAdsList.childElementCount;
  removeUserAds();
}

export {
  markupIncomeBtn,
  murkupUserAvatar,
  murkupUserInfo,
  murkupFavoritesGoods,
  murkupMyAds,
};

// =====================================
// import menu from '../menu.json';
// const listItem = menuItem(menu);
// =====================================

// import { api } from '../../services/api';
// import { deleteUserFavourite, deleteUserAdv } from '../../services/user-api';
// import { showItemModal } from '../../item-modal/item-modal-open';
// import { closeBtnFavorites, closeBtnMyAds } from './my-modal-window';

// // ===================== FAVOURITES GOODS =======================

// function removeFavorites() {
//   const userFavoritesList = document.querySelector('.selected-goods__list');
//   userFavoritesList.children.forEach(item =>
//     item.addEventListener('click', removeFavoritesItem),
//   );
// }

// function removeFavoritesItem(e) {
//   const favoritesValue = document.querySelector('.js-counter__heart');
//   const userFavoritesList = document.querySelector('.selected-goods__list');

//   if (e.target.nodeName !== 'SPAN') {
//     userFavoritesList.addEventListener('click', () => {
//       closeBtnFavorites();
//     });

//     showItemModal(userFavoritesList);

//     return;
//   }

//   const idItem = e.currentTarget.closest('li').dataset.id;
//   e.currentTarget.remove();
//   backendFavouriteRemove(idItem);

//   favoritesValue.textContent = userFavoritesList.childElementCount; // FAVOURITES COUNTER
// }

// function backendFavouriteRemove(idItem) {
//   const user = JSON.parse(localStorage.getItem('user-info'));
//   const arrayFav = user.favorites;
//   const userID = user.userId;
//   const userToken = user.token;
//   const searchItem = arrayFav.filter(data => data !== idItem);
//   localStorage.setItem(
//     'user-info',
//     JSON.stringify({
//       ...user,
//       favorites: [...searchItem],
//     }),
//   );

//   deleteUserFavourite(userID, idItem, userToken);
// }

// // ===================== USER ADS GOODS =======================

// function removeUserAds() {
//   const userAdsList = document.querySelector('.my-ads__list');

//   userAdsList.children.forEach(item =>
//     item.addEventListener('click', removeAdsItem),
//   );
// }

// function removeAdsItem(e) {
//   const myAdsValue = document.querySelector('.js-counter__add');
//   const userAdsList = document.querySelector('.my-ads__list');

//   if (e.target.nodeName !== 'SPAN') {
//     userAdsList.addEventListener('click', () => {
//       closeBtnMyAds();
//     });

//     showItemModal(userAdsList);

//     return;
//   }

//   const idItem = e.currentTarget.closest('li').dataset.id;
//   const category = e.currentTarget.closest('li').dataset.category;
//   e.currentTarget.remove();

//   backendAdvRemove(idItem);
//   api.deleteAdv(category, idItem);

//   myAdsValue.textContent = userAdsList.childElementCount; // ADS COUNTER
// }

// function backendAdvRemove(idItem) {
//   const user = JSON.parse(localStorage.getItem('user-info'));
//   const arrayAdv = user.adv;
//   const userID = user.userId;
//   const userToken = user.token;
//   const searchItem = arrayAdv.filter(data => data !== idItem);
//   localStorage.setItem(
//     'user-info',
//     JSON.stringify({
//       ...user,
//       adv: [...searchItem],
//     }),
//   );

//   deleteUserAdv(userID, idItem, userToken);
// }

// export { removeFavorites, removeUserAds };

//================ AUTH-FORM ==================
// export function isLogIn() {
//   if (localStorage.getItem('user-info')) {
//     const localUserId = JSON.parse(localStorage.getItem('user-info')).userId;

//     getUserInfo(localUserId).then(res => {
//       if (window.matchMedia('(max-width: 767px)').matches) {
//         signInUpDivMob.innerHTML = `${accMenu(res.data)}`;
//         openAccMob(res.data);
//       } else {
//         signInUpDiv.innerHTML = `${accMenu(res.data)}`;
//         openAcc(res.data);
//       }
//     });
//   } else {
//     signInUpDiv.innerHTML = `${signInUp()}`;
//     signInUpDivMob.innerHTML = `${signInUp()}`;
//   }
// }
// isLogIn();
