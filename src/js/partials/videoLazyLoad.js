//--------------------------------------
// VIDEO BG LAZYLOAD LOGIC
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import isMobile from 'is-mobile';

function videoLazyLoad(videoSelector){
//    console.log(isMobile())
    if(isMobile() || window.matchMedia("(max-width: 767px)").matches) return;  // do nothing if mobile browser
    
    var videos = document.querySelectorAll(videoSelector);
    if (videos.length){
        videos.forEach(function(video){
//            debugger;
            const sources = video.children;
            sources.forEach = [].forEach;
            sources.forEach(source => {
                source.src = source.dataset.src;
                video.load();
            })
//            video.play();    // start playing video
        });
    }
}

export default videoLazyLoad;