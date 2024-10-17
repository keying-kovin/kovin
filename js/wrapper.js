const img = document.querySelectorAll('.banner .image img')
const imgBox = document.querySelector('.banner .image')
const wrapper = document.querySelector('.banner .wrapper')
const prev = document.querySelector('.banner .prev')
const next = document.querySelector('.banner .next')
const radius = document.querySelectorAll('.banner .radius li')
const imgWidth = imgBox.children[0].offsetWidth
let wrapIndex = 0

// 克隆第一张图片
// let clonefirstImg = img[0].cloneNode()
// imgBox.appendChild(clonefirstImg)
// 随时修改wrapper的图册
const imgs = [
    './image/banner/800-1.jpg',
    './image/banner/ep-haruka-1.jpg',
    './image/banner/Haruka-1.jpg',
    './image/banner/openadoor-2.jpg',
    './image/banner/sign-1.jpg',
    './image/banner/siroiro-2.jpg',
    './image/banner/tour-2024-25-1.jpg',
    './image/banner/banner8.jpg',
    './image/banner/800-1.jpg'
]

for(let i = 0; i < img.length; i++) {
    img[i].src = imgs[i]
}

// 小圆点动画
function toggle() {
    document.querySelector('.radius .active').classList.remove('active')
    document.querySelector(`.radius li:nth-child(${wrapIndex + 1})`).classList.add('active')
}

// 点击小圆点改变图片
for(let i = 0; i < radius.length; i++) {
    radius[i].addEventListener('click', function(){
        clearInterval(timeId)
        if(wrapIndex === 0 && i === radius.length - 1) {
            prev.click()
        } else if(wrapIndex === radius.length - 1 && i === 0) {
            next.click()
        } else {
            wrapIndex = i
            imgBox.style.transform = `translateX(calc(${-wrapIndex} * ${imgWidth}px))`
            imgBox.style.transition = 'all 0.5s ease'
        }
        toggle()
    })
}

// 函数节流 锁
let lock = true

prev.addEventListener('click', function(){
    if(lock === false) return
    wrapIndex--
    if(wrapIndex < 0){
        imgBox.style.transform = 'translateX(-6400px)'
        imgBox.style.transition = 'none'
        wrapIndex = img.length - 2
        setTimeout(() =>{
            imgBox.style.transform = `translateX(calc(${-wrapIndex} * ${imgWidth}px))`
            imgBox.style.transition = 'all 0.5s ease'
        }, 0)
    } else {
        imgBox.style.transform = `translateX(calc(${-wrapIndex} * ${imgWidth}px))`
    }

    toggle()
    // console.log(wrapIndex)

    // 执行函数后 0.5s后开锁
    lock = false
    setTimeout(() => {
        lock = true
    }, 500);
})

next.addEventListener('click', function(){
    if(lock === false) return
    wrapIndex++
    imgBox.style.transform = `translateX(calc(${-wrapIndex} * ${imgWidth}px))`
    imgBox.style.transition = 'all 0.5s ease'
    if(wrapIndex === img.length - 1){
        wrapIndex = 0
        setTimeout(() => {  // setTimeout 设置延时 里面的语句会在设置的时间后执行
            imgBox.style.transform = 'translateX(0px)'
            imgBox.style.transition = 'none'
        }, 500)
    }
    toggle()
    // console.log(wrapIndex)

    // 执行函数后 0.5s后开锁
    lock = false
    setTimeout(() => {
        lock = true
    }, 500)
})

let timeId = setInterval(function(){
    next.click()
}, 3500)

// 鼠标进入停止
wrapper.addEventListener('mouseenter', function(){
    clearInterval(timeId)
})

// 鼠标移除消除停止
wrapper.addEventListener('mouseleave', function(){
    clearInterval(timeId)
    timeId = setInterval(function(){
        next.click()
    }, 3500)
})

