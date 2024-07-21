


//カウントダウン機能
function updateCountdown() {
    const now = new Date();
    const birthday = new Date(now.getFullYear(), 6, 22); // 矢澤にこの誕生日 (7月22日)

    
    const diff = birthday - now;

    if (diff <= 0) {
        showCelebration();
        document.getElementById('countdown').innerHTML = "Happy Birthday, Nico!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
}

function showCelebration(){
    const celebrationContainer = document.getElementById('celebration-container');
    celebrationContainer.classList.add('show');
    setTimeout(() => {
        celebrationContainer.classList.remove('show');
    }, 2000); // 5秒後にお祝いの演出を消す

}

setInterval(updateCountdown, 1000);
