const team = document.querySelector('.js-team');
if (team) {
    const toggler = team.querySelector('.js-team__toggler');

    const toggleClients = function(e){
        team.classList.toggle('opened');
    }

    toggler.addEventListener('click', toggleClients);
 }