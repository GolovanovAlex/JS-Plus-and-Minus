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
        }
        target.closest('.counter').querySelector('input').value = value;
      }
    });
  });
}
