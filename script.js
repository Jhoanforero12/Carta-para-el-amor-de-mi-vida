document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.querySelector('.open-btn');
    const envelope = document.querySelector('.envelope');
    
    openBtn.addEventListener('click', function() {
        envelope.classList.toggle('open');
        
        if (envelope.classList.contains('open')) {
            openBtn.textContent = 'Cerrar Carta';
        } else {
            openBtn.textContent = 'Abrir Carta';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const btn = envelope.querySelector('.open-btn');

    btn.addEventListener('click', function() {
      envelope.classList.toggle('is-open');
    });
  });
