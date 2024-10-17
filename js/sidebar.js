(function(){
    // 侧边导航栏
const sideBox = document.querySelector('.sidebar')

sideBox.children[2].addEventListener('click', function(){
    window.scrollTo(0, 0)
})
window.addEventListener('scroll', function(){
    const n = document.documentElement.scrollTop
    if(n >= 300) {
        sideBox.style.opacity = '1'
    }
    else {
        sideBox.style.opacity = '0'
        const ac = document.querySelector('.sidebar .active')
        if (ac) ac.classList.remove('active')
    }
})

})();

// 自执行函数 防止变量污染
(function(){
    // 点击变色
    const barList = document.querySelector('.sidebar')
    barList.addEventListener('click', function(e) {
        if (e.target.tagName === 'DIV' && e.target.dataset.name){
            const ac = document.querySelector('.sidebar .active')
            if (ac) ac.classList.remove('active')
            e.target.classList.add('active')

            const topDis = document.querySelector(`#${e.target.dataset.name}`).offsetTop
            document.documentElement.scrollTop = topDis
        }
    })

    window.addEventListener('scroll', function(){
        const ac = document.querySelector('.sidebar .active')
        if (ac) ac.classList.remove('active')
        
        const live = document.querySelector(`#live`)
        const main = document.querySelector(`#main`)
        const n = document.documentElement.scrollTop
        if (n >= live.offsetTop && n < main.offsetTop) {
            document.querySelector('[data-name=live]').classList.add('active')
        } else if (n >= main.offsetTop) {
            document.querySelector('[data-name=main]').classList.add('active')
        }
    })
})();