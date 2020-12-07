// ==UserScript==
// @name         SCEPaperDownloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Easy news backup!
// @author       Kamfu
// @match        http://epaper.sinchew.com.my/sinchewepaper/mobimax/reader/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var saveBtn = document.createElement('button');
    saveBtn.setAttribute('type','button');
    saveBtn.classList.add('saveBtn');
    saveBtn.innerText = 'Download';
    saveBtn.style.position = 'fixed';
    saveBtn.style.top = '0px';
    saveBtn.style.right = '0px';
    saveBtn.style.zIndex = '3';
    saveBtn.style.borderRadius = '3px';
    saveBtn.style.margin = '5px';
    saveBtn.style.padding = '5px';
    saveBtn.style.borderWidth = '1px';
    saveBtn.style.borderColor = 'black';
    saveBtn.onclick = function () {
        var pageNumber = window.location.hash.substr(1).replace('page/','');
        var promptNumber = prompt("Please enter page number", pageNumber);
        if (promptNumber == null || promptNumber == '') {
            promptNumber = 1;
        }
        window.open('http://epaper.sinchew.com.my/sinchewepaper/mobimax/draft/'+paramMagid+'/pages/medium/'+promptNumber+'.JPG', '_blank');
    };
    document.body.appendChild(saveBtn);
})();
