const targetList = document.querySelectorAll('ul.b-tabs-list li span');
const targetBlock = document.querySelectorAll('.b-tab-content__item');

targetList.forEach(target => {
  target.addEventListener('click', function () {
    const tabId = this.getAttribute('data-tab');

    [...targetList, ...targetBlock].forEach(item => {
      item.classList.remove('current');
    });
    
    target.classList.add('current');
    document.querySelector('#'+tabId).classList.add('current');
  });
});

const targetCollapseList = document.querySelectorAll('[data-collapse-container]');

targetCollapseList.forEach(target => {
  target.addEventListener('click', function () {
    const tabId = this.getAttribute('data-collapse-container');

    document.querySelector(`[data-arrow-id="${tabId}"]`).classList.toggle('b-target-transformation__arrow-active');
    document.querySelector(`[data-item-id="${tabId}"]`).classList.toggle('b-target-transformation__descr-active');
  });
});
