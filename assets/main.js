document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var data = new FormData(contactForm);
      var subject = 'Contato pelo site - ' + (data.get('nome') || 'novo contato');
      var body = [
        'Nome: ' + (data.get('nome') || ''),
        'E-mail: ' + (data.get('email') || ''),
        'Telefone: ' + (data.get('telefone') || 'Não informado'),
        'Serviço de interesse: ' + (data.get('servico') || 'Não informado'),
        '',
        'Mensagem:',
        data.get('mensagem') || ''
      ].join('\n');
      var status = contactForm.querySelector('.form-status');

      window.location.href = 'mailto:engcivil.leonardoms@gmail.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      if (status) {
        status.textContent = 'Seu aplicativo de e-mail será aberto para concluir o envio.';
      }
    });
  }
});
