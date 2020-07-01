const refs = {
  likeItems: document.querySelector('.selected-goods__list'),

  favoritesCounter: document.querySelectorAll('.selected-goods__item'),
  myAdsCounter: document.querySelectorAll('.my-ads__item'),

  favoritesValue: document.querySelector('.js-counter__heart'),
  myAdsValue: document.querySelector('.js-counter__add'),
};

refs.favoritesValue.textContent = refs.favoritesCounter.length;
refs.myAdsValue.textContent = refs.myAdsCounter.length;

refs.favoritesCounter.forEach(item => {
  item.addEventListener('click', removeFavoritesItem);
});

function removeFavoritesItem(e) {
  if (e.target.nodeName !== 'SPAN') return;
  e.currentTarget.remove();

  refs.favoritesValue.textContent = refs.likeItems.childElementCount;
}
