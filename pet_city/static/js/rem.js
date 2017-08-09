(function(){
    var width = document.documentElement.clientWidth;
    var styleN = document.createElement('style');
    styleN.innerHTML = 'html{font-size: '+ width/16 +'px !important;}';
    document.head.appendChild(styleN);
})();