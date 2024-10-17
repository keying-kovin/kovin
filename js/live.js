const videos = document.querySelector('.liveContain .content .videos')
const videoNum = document.querySelectorAll('.liveContain .videos li')
const nextBtm = document.querySelector('.liveContain .lives .next')
const prevBtm = document.querySelector('.liveContain .lives .prev')
const contentBox = document.querySelector('.liveContain .content')
const videoWidth = videos.children[0].offsetWidth + 10
// 滚动的flag
let page = 0 

// 让box的长度与内容总长度相同
videos.style.width = `calc(${videoWidth} * ${videoNum.length}px)`

nextBtm.addEventListener('click', function(){
    page++
    // 判断条件：滚动的长度不超过超出的长度 如超过 直接滑到最后
    if((page) * videoWidth >= videos.offsetWidth - contentBox.offsetWidth) {
        videos.style.transform = `translateX(${-videos.offsetWidth + contentBox.offsetWidth}px)`
        // 让标签减少 防止滚动超出盒子长度
        page--
    }
    else
    {
        videos.style.transform = `translateX(calc(${-page} * ${videoWidth}px))`
    }
})

prevBtm.addEventListener('click', function(){
    page--
    if(page < 0) {
        page++
    }
    videos.style.transform = `translateX(calc(${-page} * ${videoWidth}px))`
})