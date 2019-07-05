const posts = document.querySelector('.js-posts');
if (posts) {
  const toggler = posts.querySelector('.js-posts__toggler');

  const toggleClients = function(e){
    posts.classList.toggle('opened');
  };

  toggler.addEventListener('click', toggleClients);
}
