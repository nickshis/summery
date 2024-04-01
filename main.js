let tp = document.querySelectorAll('.main div')

tp.forEach(el => {
    el.onclick = () => {
        let way = el.classList
        location.assign('/pages/' + way.value + '/')
    }
})