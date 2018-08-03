(function () {
  const selectCard = [...document.querySelectorAll('.payment__method')];

  const handleClick = (e) => {
    e.preventDefault();
    selectCard.forEach(element => {
      element.classList.remove('is-selected');
    });
    e.currentTarget.classList.add('is-selected');
  };

  selectCard.forEach(element => {
    element.addEventListener('click', handleClick);
  });

})();
