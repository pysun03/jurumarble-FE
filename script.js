document.addEventListener('DOMContentLoaded', function() {
    const bg = document.getElementById('bg');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const se = document.getElementById('se');
    const soundEffects = document.getElementById('soundEffects');
    const buttons = document.querySelectorAll('button');

    // 배경 음악 재생
    bg.play();

    // 배경 음악 볼륨 조절
    backgroundMusic.addEventListener('input', function() {
        bg.volume = backgroundMusic.value;
    });

    // 효과음 볼륨 조절
    soundEffects.addEventListener('input', function() {
        se.volume = soundEffects.value;
    });

    // 버튼 클릭 시 효과음 재생
    buttons.forEach(button => {
        button.addEventListener('click', playSoundEffect);
    });
});

function playSoundEffect() {
    const sound = document.getElementById('se');
    sound.play();
}
