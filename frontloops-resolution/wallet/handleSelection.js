(function () {
  const getCard = [...document.querySelectorAll('.wallet__card')];

  const handleSelected = (e) => {
    e.preventDefault();
    getCard.forEach(element => {
      element.classList.remove('card-selected');
    });

    e.currentTarget.classList.add('card-selected');

  };

  getCard.forEach(element => {
    element.addEventListener('click', handleSelected);
  });

})();
