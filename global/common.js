document.addEventListener('DOMContentLoaded', function() {
    const bg = document.getElementById('bg');
    const se = document.getElementById('se');
    const buttons = document.querySelectorAll('button');

    // 버튼 클릭 시 효과음 재생
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            playSoundEffect();
        });
    });

    // 쿠키에서 저장된 볼륨 값 가져오기
    const backgroundMusicVolume = getCookie('backgroundMusicVolume');
    const soundEffectsVolume = getCookie('soundEffectsVolume');

    // 쿠키가 존재하는 경우, 볼륨 설정
    if (backgroundMusicVolume) {
        bg.volume = backgroundMusicVolume;
    }
    if (soundEffectsVolume) {
        se.volume = soundEffectsVolume;
    }

});

function playSoundEffect() {
    const sound = document.getElementById('se');
    sound.play();
}

function getCookie(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + '=')) {
            return cookie.substring(cookieName.length + 1);
        }
    }
    return null;
}
