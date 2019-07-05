const ebooks = document.querySelector('.js-ebooks');
if (ebooks) {
  const toggler = ebooks.querySelector('.js-ebooks__toggler');

  const toggleClients = function(e){
    ebooks.classList.toggle('opened');
  };

  toggler.addEventListener('click', toggleClients);
}
