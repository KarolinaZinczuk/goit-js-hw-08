const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function(data) {
    // data is an object containing properties specific to that event

    player.getCurrentTime().then(function(seconds) {
        // seconds = the current playback position
        localStorage.setItem('videoplayer-current-time', seconds);
        console.log (`Current video time:` + localStorage.getItem(`videoplayer-current-time`))
    }).catch(function(error) {
        // an error occurred
    });
};


var throttle = require('lodash.throttle');
player.on(`timeupdate`, throttle(onPlay, 1000));

if (localStorage.length !== 0) {
    player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`));
};