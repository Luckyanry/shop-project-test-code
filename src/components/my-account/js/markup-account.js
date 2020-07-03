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
