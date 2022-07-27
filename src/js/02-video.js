import Player from '@vimeo/player';
import trottle from 'lodash.throttle';

const video = document.querySelector('#vimeo-player')
const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player(video);

player.on('timeupdate', trottle(playTime, 1000)
);

function playTime({seconds}){   
    localStorage.setItem("videoplayer-current-time",seconds);
};
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
