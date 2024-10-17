let chosenSlideNumber = 1 // 当前选择的幻灯片编号
let offset = 0  // 幻灯片偏移量
let barOffset = 0   // 导航条偏移量
let intervalID  // 定时器

// 启动幻灯片轮播
startSlide()
// 获取所有抽屉按钮 为每个变量添加点击事件
const drawerBtn = Array.from(document.querySelectorAll('.drawer-btn'))
drawerBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        clearInterval(intervalID) // 清除定时器
        startSlide() // 重新启动幻灯片轮播
    })
})

// 获取幻灯片区域
const slideSection = document.querySelector('#slide-section')

// 鼠标进入幻灯片停止定时器
slideSection.addEventListener('mouseenter', function() {
    clearInterval(intervalID)
})

// 鼠标移出时重新打开定时器
slideSection.addEventListener('mouseleave', function(){
    startSlide()
})

// 切换到指定编号的幻灯片
function slideTo(slideNumber) {
    drawerboxToggle(slideNumber) // 切换抽屉面版状态
    drawerbtnToggle(slideNumber)    // 切换抽屉按钮状态
    // 更新偏移量
    let previousSlideNumber = chosenSlideNumber
    chosenSlideNumber = slideNumber
    offset += (chosenSlideNumber - previousSlideNumber) * (-100) // 计算幻灯片的偏移量
    barOffset += (chosenSlideNumber - previousSlideNumber) * (100) // 计算导航条的偏移量
    barSlide(barOffset) // 移动导航条
    // 获取所有的幻灯片 为每个幻灯片设置偏移量
    const slides = document.querySelectorAll('.card')
    Array.from(slides).forEach(slide => {
        slide.style.transform = `translateY(${offset}%)`
    })
}

// 切换抽屉面板状态
function drawerboxToggle(drawerboxNumber) {
    let previousSlideNumber = chosenSlideNumber
    const drawerboxes = document.querySelectorAll('.drawerbox')
    drawerboxes[previousSlideNumber - 1].classList.toggle('active')   // 切换前一个抽屉面板的状态
    drawerboxes[drawerboxNumber - 1].classList.toggle('active')     // 切换当前抽屉面板的状态
}

// 切换抽屉按钮的状态
function drawerbtnToggle(drawerBtnNumber) {
    let previousSlideNumber = chosenSlideNumber
    const drawerBtns = document.querySelectorAll('.drawer-btn')
    drawerBtns[previousSlideNumber - 1].classList.toggle('active')
    drawerBtns[drawerBtnNumber - 1].classList.toggle('active')
}

// 移动导航条
function barSlide(barOffset) {
    const bar = document.querySelector('#bar')
    bar.style.transform = `translateY(${barOffset}%)`
}

// 启动幻灯片轮播
function startSlide() {
    intervalID = setInterval(function() {
        slideTo(chosenSlideNumber % 4 + 1) // 每次切换到下一个幻灯片
    }, 3000)
}