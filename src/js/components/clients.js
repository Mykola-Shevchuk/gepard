const clients = document.querySelector('.js-clients');
if (clients) {
    const toggler = clients.querySelector('.js-clients__toggler');
    //const logoContainer = clients.querySelector('.js-clients__toggler');


    const toggleClients = function(e){
        clients.classList.toggle('opened');
    }

    //const resizeHandler = function(e){
    //    console.log("resize")
    //}

    toggler.addEventListener('click', toggleClients);
    //window.addEventListener('resize', resizeHandler);
 }

//export default toggleClients;