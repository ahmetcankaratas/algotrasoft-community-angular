window.addEventListener('load', function () {
    var app = document.getElementById('type-writer');

    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString('Stocks')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Crypto')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Forex')
      .pauseFor(1000)
      .deleteAll()
      .typeString('NFTs')
      .pauseFor(1000)
      .deleteAll()
      .start();
  })
