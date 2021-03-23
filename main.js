const moreBtn = document.querySelector('.info .metadata .titleAndBtn .moreBtn');
const title = document.querySelector('.info .metadata .titleAndBtn .title');

moreBtn.addEventListener('click', () => {  // moreBtn이 클릭될때마다 지정된 함수를 호출하는 이벤트 발생
    moreBtn.classList.toggle('clicked');  // clicked 클래스 토글링
    title.classList.toggle('clamp');  // clamp 클래스 토글링
});