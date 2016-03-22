'use strict';
var cheapWatcherDiv = document.createElement('div');
cheapWatcherDiv.setAttribute('class', 'cheap-watcher');
cheapWatcherDiv.setAttribute('ng-app', 'app');
document.body.appendChild(cheapWatcherDiv);
$(".cheap-watcher").load(chrome.extension.getURL('views/test.html'));
