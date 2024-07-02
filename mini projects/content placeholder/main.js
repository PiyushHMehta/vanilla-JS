const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

function getData() {
    header.innerHTML = `<img src="../blackbox-images/atom.svg" alt="">`
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, illo!`
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="">`
    name.innerHTML = `Jane Doe`
    date.innerHTML = `14 oct, 2024`

    // remove animation classes after data is load
    animated_bgs.forEach(animated_bg => animated_bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(animated_bg_text => animated_bg_text.classList.remove('animated-bg-text'))
}


setTimeout(getData, 3000);