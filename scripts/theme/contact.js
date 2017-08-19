(() => {

  if (!document.querySelector('.js-contact-form')) return;

  const form = document.querySelector('.js-contact-form');
  const commentArea = form.querySelector('.js-message');
  const nameInput = form.querySelector('.js-name');
  const messageElement = document.querySelector('#feedback');

  nameInput.addEventListener('invalid', (e) => {
    e.target.setCustomValidity('');
    if (!e.target.validity.valid) {
      e.target.setCustomValidity('Vul je naam in.');
    }
  });

  commentArea.addEventListener('invalid', (e) => {
    e.target.setCustomValidity('');
    if (!e.target.validity.valid) {
      e.target.setCustomValidity('Vul een bericht in.');
    }
  });

  commentArea.addEventListener('input', function(e) {
    e.target.setCustomValidity('');
  });

  // send form data with JavaScript
  form.addEventListener('submit', function(event) {

    const formData = new FormData();
    formData.append('action', 'submit_ajax_form');
    formData.append('formkey', form.querySelector('[name=formkey]').value);
    formData.append('security', form.querySelector('[name=security]').value);
    formData.append('name', form.querySelector('[name=name]').value);
    formData.append('email', form.querySelector('[name=email]').value);
    formData.append('message', form.querySelector('[name=message]').value);


    const xhr = new XMLHttpRequest();

    // save the comment in the database
    xhr.open('POST', site.ajaxurl, true);

    xhr.onload = function () {

    };

    xhr.onerror = function (error) {
      messageElement.className = 'message error';
      messageElement.innerHTML = 'There was an error posting the comment. Please try again.';
    };
    xhr.onloadend = function (evt) {
      if (xhr.readyState === 4) {
        form.className = 'message success';
        form.innerHTML = xhr.response;
      }
    };

    xhr.send(formData);

    // always call preventDefault at the end, see: http://molily.de/javascript-failure/
    event.preventDefault();
  });
})();
