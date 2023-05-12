// ==UserScript==
// @name         gnihtyreve kcolbnu
// @namespace    http://tampermonkey.net/
// @match *://*/*
// @description i hate scgool gg bois
// @version 1
// @run-at document-start
// ==/UserScript==


/* to make it work get your principle/teacher to unblock jsfiddle.net and you can now use this!*/
(function() {
    'use strict';
    if (document.URL.search("\\?jsfiddle.net")==-1 ? true : false) {
        window.location.replace(document.URL+"?jsfiddle.net");
    }
})();
