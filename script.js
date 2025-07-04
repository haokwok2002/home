const audio = document.getElementById("bgm");
const btnIcon = document.getElementById("btn-icon");
const playingIcon = document.getElementById("playing-icon");
const switcher = document.querySelector('.music-switcher');

let isPlaying = true; // 默认播放

// 自动播放并取消静音（等待加载完成）
window.addEventListener("DOMContentLoaded", () => {
    audio.muted = false;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
        console.warn("自动播放失败，可能被浏览器拦截。");
        });
    }
});

// 切换播放状态函数（仅限鼠标点击）
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        btnIcon.src = "assets/images/music_button_off.png";
        playingIcon.src = "assets/images/music_playing_gif_static.png";
    } else {
        audio.play();
        btnIcon.src = "assets/images/music_button_playing.png";
        playingIcon.src = "assets/images/music_playing.gif";
    }
    isPlaying = !isPlaying;
}

// 仅通过鼠标点击触发切换
switcher.addEventListener("click", togglePlay);
