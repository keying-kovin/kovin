const albumLis = document.querySelectorAll('.mainContain>.album .album-box .albums li')
const albumName = document.querySelectorAll('.mainContain>.album .album-box .albums li .name')
const albumImg = document.querySelector('.mainContain>.album .album-box .albums li')


for(let i = 0; i < albumLis.length; i++) {
    albumLis[i].addEventListener('mouseenter', function(){
        albumLis[i].style.padding = '0'
        albumName[i].style.transform = 'translateY(0)'
        albumName[i].style.width = '100%'
    })
    albumLis[i].addEventListener('mouseleave', function(){
        albumLis[i].style.padding = '0px 10px 10px 10px'
        albumName[i].style.transform = 'translateY(100px)'
        albumName[i].style.width = 'calc(100% - 20px)'
    })
}