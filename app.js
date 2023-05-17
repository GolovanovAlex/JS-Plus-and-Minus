const counters = document.querySelectorAll('[data-counter]');
if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.counter__btn')) {
        let value = parseInt(
          target.closest('.counter').querySelector('input').value
        );
        if (target.classList.contains('counter__btn--plus')) {
          value++;
        } else {
          --value;
        }
        // ---- ---- 0 or another number ---- ---- //
        if (value <= 0) {
          value = 0;
          target
            .closest('.counter')
            .querySelector('.counter__btn--minus')
            .classList.add('disabled');
        } else {
          target
            .closest('.counter')
            .querySelector('.counter__btn--minus')
            .classList.remove('disabled');
        }
        if (value >= 9) {
          value = 9;
          target
            .closest('.counter')
            .querySelector('.counter__btn--plus')
            .classList.add('disabled');
        } else {
          target
            .closest('.counter')
            .querySelector('.counter__btn--plus')
            .classList.remove('disabled');
        }
        target.closest('.counter').querySelector('input').value = value;
      }
    });
  });
}
