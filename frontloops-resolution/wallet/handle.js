(function () {
  const getCard = [...document.querySelectorAll('.wallet__card')];
  const openWallet = document.querySelector('.open-wallet');
  const getWallet = document.querySelector('.wallet');
  const getClose = document.querySelector('.js-close');

  const handleSelected = (e) => {
    e.preventDefault();
    getCard.forEach(element => {
      element.classList.remove('card-selected');
    });

    e.currentTarget.classList.add('card-selected');
  };

  const handleOpenWallet = () => {
    getWallet.classList.toggle('js-open');
  };

  const handleCloseWallet = () => {
    getWallet.classList.remove('js-open');
  };

  openWallet.addEventListener('click', handleOpenWallet);
  getClose.addEventListener('click', handleCloseWallet);



  getCard.forEach(element => {
    element.addEventListener('click', handleSelected);
  });

})();
