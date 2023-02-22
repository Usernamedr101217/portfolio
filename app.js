const projects = [
    {
        id: 1,
        link: 'https://happycookings.netlify.app/',
        name: 'Happy Cookings',
        code: 'https://github.com/Usernamedr101217/Recipe',
        img: 'p-img/recipe.png',
        Used: 'Html, Css, Javascript',
        Des: "I really like api, and another project with an api, of course. However, I still need to improve my design skill after this project."
    },
    {
        id: 2,
        link: 'https://dataforcountry.netlify.app/',
        name: 'Country Data',
        code: 'https://github.com/Usernamedr101217/Country',
        img: 'p-img/country.jpg',
        Used: 'Html, Css, Javascript, React, Vite',
        Des: "The third project, using a country api. Honestly, this is not an impressive one. "
    },
    {
        id: 3,
        link: 'https://rookiebot.vercel.app/',
        name: 'Rookie Bot',
        code: 'https://github.com/Usernamedr101217/bot',
        img: 'p-img/bot.png',
        Used: 'Html, Css, Javascript, Vite, ExpressJs',
        Des: "ChatGPT is not accessible in my country, then I see they have a api, so I think I maybe able to try to build a simple one; I'll need to find tutorials to guide me, as this is my first time building a server-side application . It quite hard but the result is satisfying"
    },
    {
        id: 4,
        link: 'https://rawstars.vercel.app/',
        name: 'Rawstars',
        code: 'https://github.com/Usernamedr101217/bs',
        img: 'p-img/bs.png',
        Used: 'Reactjs, Vite, Material UI',
        Des: "This project is for display the stats about the game I liked. It have all kind of stats displayed on it in different form. It also have a customization function"
    },
]

const list = document.querySelector('.projects-list')
const project = document.getElementsByClassName('projects-wrapper')
const btn = document.getElementsByClassName('p-btn')




function openTabs(event, tabs) {
    let i;
    const tabContent = document.querySelectorAll('.tabs-wrapper');
    const btn = document.getElementsByClassName('btn');

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    for (i = 0; i < btn.length; i++) {
        btn[i].className = btn[i].className.replace(" active", "");
    }

    document.getElementById(tabs).style.display = 'block';
    event.currentTarget.className += ' active'
}
document.getElementById("defaultOpen").click()

function showData() {
    let displayData = projects.map((item) => {
        return `<div class="projects-wrapper">
                    <div class="header">
                      <img src=${item.img} alt="picture" class="t-icon">
                      <div>
                          <a href=${item.link} class="link" target="_blank"><h3>${item.name}</h3></a>
                          <a href="${item.code}" class="code-link"><button class="source-btn">Code</button></a>
                          <span>${item.Used}</span>
                      </div>
                    </div>
                    
                    <p>${item.Des}</p>
                </div>`;
    });
    displayData = displayData.join('');
    list.innerHTML = displayData
}

showData()

for (let i = 0 ; i < btn.length; i++) {
    btn[i].addEventListener('click' , showDesc);
}

function showDesc() {
    for (let i = 0; i < project.length; i++) {
        project[i].classList.toggle('toggle')
    }
}
console.log(project)