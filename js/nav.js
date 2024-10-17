const lis = document.querySelectorAll('.nav-box .nav li')
// const box = document.querySelector('.nav .btm-box')

const scrollLis = document.querySelectorAll('.nav-scroll .nav li')
// const scrollBox = document.querySelector('.nav-scroll .nav .btm-box')

const navBox = document.querySelector('.nav-box')
const scrollNavBox = document.querySelector('.nav-scroll')

// 导航栏随着鼠标点击改变
// for(let i = 0; i < lis.length; i++)
// {
//     lis[i].addEventListener('click', function(){
//         box.style.left = `calc(100% / ${+lis.length} * ${+i})`
//         box.style.backgroundColor = `rgba(255, 255, 255, 0.${+i + 5})`
//         scrollBox.style.left = `calc(100% / ${+lis.length} * ${+i})`
//         scrollBox.style.backgroundColor = `rgba(255, 255, 255, 0.9)`
//     })

//     scrollLis[i].addEventListener('click', function(){
//         box.style.left = `calc(100% / ${+lis.length} * ${+i})`
//         box.style.backgroundColor = `rgba(255, 255, 255, 0.${+i + 5})`
//         scrollBox.style.left = `calc(100% / ${+lis.length} * ${+i})`
//         scrollBox.style.backgroundColor = `rgba(255, 255, 255, 0.9)`
//     })
// }


window.addEventListener('scroll', function(){
    const n = document.documentElement.scrollTop
    if(n >= 60) {
        scrollNavBox.style.opacity = '1'
        scrollNavBox.style.display = 'block'
    }
    else {
        scrollNavBox.style.opacity = '0'
        scrollNavBox.style.display = 'none'
    }
})