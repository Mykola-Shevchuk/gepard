const team = document.querySelector('.js-cases');
if (team) {
  const toggler = team.querySelector('.js-cases__toggler');

  const toggleClients = function(e){
    team.classList.toggle('opened');
  }

  toggler.addEventListener('click', toggleClients);
}
