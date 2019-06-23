const team = document.querySelector('.js-posts');
if (team) {
  const toggler = team.querySelector('.js-posts__toggler');

  const toggleClients = function(e){
    team.classList.toggle('opened');
  }

  toggler.addEventListener('click', toggleClients);
}
