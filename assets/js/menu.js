// Menu movel: abre e fecha a navegacao abaixo de 900px.
(function () {
  var botao = document.querySelector('.menu-botao');
  var nav = document.getElementById('menu-principal');
  if (!botao || !nav) return;
  botao.addEventListener('click', function () {
    var aberto = botao.getAttribute('aria-expanded') === 'true';
    botao.setAttribute('aria-expanded', String(!aberto));
    nav.classList.toggle('aberto', !aberto);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('aberto')) {
      nav.classList.remove('aberto');
      botao.setAttribute('aria-expanded', 'false');
      botao.focus();
    }
  });
})();
