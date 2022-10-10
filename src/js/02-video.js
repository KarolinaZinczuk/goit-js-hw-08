import Player from '@vimeo/player'; 

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// const onPlay = function(data) {
//     player.getCurrentTime().then(function(seconds) {
//         localStorage.setItem('videoplayer-current-time', seconds);
//         console.log (`Current video time:` + localStorage.getItem(`videoplayer-current-time`))
//     })
// };

const onPlay = function (data) { 
    localStorage.setItem( 'videoplayer-current-time', JSON.stringify(data.seconds) ); 
};

const throttle = require('lodash.throttle');
player.on(`timeupdate`, throttle(onPlay, 1000));

if (localStorage.length !== 0) {
    player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`));
};