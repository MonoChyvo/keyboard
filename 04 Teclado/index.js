const teclas = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'];

function numeroRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function teclaRandom() {
  return teclas[numeroRandom(0, teclas.length - 1)];
}

function teclaRandomObjetivo() {
  const tecla = document.getElementById(teclaRandom());

  tecla.classList.add('selected');
}

document.addEventListener('keyup', event => {
  const teclaPresionada = String.fromCharCode(event.keyCode);
  const teclaElemento = document.getElementById(teclaPresionada);
  const teclaResaltada = document.querySelector('.selected');

  teclaElemento.classList.add('hit');
  teclaElemento.addEventListener('animationend', () => {
    teclaElemento.classList.remove('hit');
  });

  if (teclaPresionada === teclaResaltada.innerHTML) {
    teclaResaltada.classList.remove('selected');
    teclaRandomObjetivo();
  }

});

teclaRandomObjetivo();