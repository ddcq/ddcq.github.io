/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

window.addEventListener('scroll', function () {
    var header = document.querySelector('.navbar-fixed-top');
    if (document.documentElement.scrollTop >= 300) {
        header.classList.add('navbar-shrink');
    } else {
        header.classList.remove('navbar-shrink');
    }
}, false);
