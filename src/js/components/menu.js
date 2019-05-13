import {headerNode as header} from "@comp/header";
import anchorLinks from '@js/partials/anchors'

const firstLevelLinks = header.querySelectorAll('.b-nav__link');
const linkClickHandler = function(e){
    this.classList.add('is-submenu_open');
}
firstLevelLinks.forEach(link => link.addEventListener('click', linkClickHandler))

const submenuBackLinks = header.querySelectorAll('.js-submenu__link_back');
const closeAllSubmenus = function(e){
    firstLevelLinks.forEach( link => link.classList.remove('is-submenu_open'));
}
submenuBackLinks.forEach( link => link.addEventListener('click', closeAllSubmenus))


const openMenu = () => document.body.classList.add('is-menu_open');
const closeMenu = () => document.body.classList.remove('is-menu_open');

const state = {
    _isOpen: false,
    
    get isOpen() {
        return this._isOpen
    },
    set isOpen(_isOpen){
        if (_isOpen){
            openMenu()
        } else {
            closeAllSubmenus();
            closeMenu();
        }
        this._isOpen = _isOpen;
    }
}
const headerClickHandler = function(e){
    e.stopPropagation();
    state.isOpen = false;
}
header.addEventListener('click', headerClickHandler);

const headerNav = header.querySelector('.js-header__nav');
headerNav.addEventListener('click', function(e){
    e.stopPropagation();
})

const toggler = header.querySelector('.js-toggler_menu');

const togglerClickHandler = function(e){
    e.stopPropagation();
    state.isOpen = !state.isOpen; 
}

toggler.addEventListener('click', togglerClickHandler);


const anchorLinkClickHandler = function(e) {
    state.isOpen = false;
};
anchorLinks.forEach(link => link.addEventListener('click', anchorLinkClickHandler))