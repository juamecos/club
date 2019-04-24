// Lastest news

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1wN1bHqX8zkIS2f5DusWJVuuLwhoaNiA3D6lSr0J8o0E/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    // Sort the articles by date
    const sortedByDate = data.sort((a, b) =>  new Date(b.date) - new Date(a.date));

    // filter published articles
    const published = sortedByDate.filter(el => el.published  === "TRUE");
   
    // pic only the latest 4 articles
    const latestArticles = published.slice(0,4);
    const wrapper = document.querySelector(".latest-news__wrapper");
    console.log(latestArticles);
    latestArticles.forEach((item, index) => {
        let i = index + 1;
        let output = "";
        if (i !== 1) {
          item.paragraph1 = item.paragraph1.substring(0, 119);
          output = `
        <div class="article article--${i}">
                <div class="article__container">
                    <h2 class="article__title article__title--${i}">${item.title}</h2>
                    <h3 class="article__subtitle article__subtitle--${i}">${item.subtitle}</h3>
                    <div class="article__info">
                        <p class="article__author article__author--${i}">${item.author}</p>
                        <time class="article__date article__date--${i}">${item.date}</time>
                    </div>
                    <p class="article__text article__text--${i}">${item.paragraph1}&nbsp;&nbsp;<a href="#" class="btn btn--txt btn--txt--${i}">Read more &RightArrow;</a></p>
                    `
        } else {
          output = `
        <div class="article article--${i}">
                <div class="article__container">
                    <h2 class="article__title article__title--${i}">${item.title}</h2>
                    <h3 class="article__subtitle article__subtitle--${i}">${item.subtitle}</h3>
                    <div class="article__info">
                        <p class="article__author article__author--${i}">${item.author}</p>
                        <time class="article__date article__date--${i}">${item.date}</time>
                    </div>
                    <img src=${item.image} alt="" class="article__img">
                    <p class="article__text article__text--${i}">${item.paragraph1}</p>
                    <p class="article__text article__text--${i}">${item.paragraph2}&nbsp;&nbsp;<a href="#" class="btn btn--txt btn--txt--${i}">Read more &RightArrow;</a></p>
                    
                </div>
            </div>
        `; 
        }
        
        wrapper.innerHTML += output; 
    });

    

  }

window.addEventListener('DOMContentLoaded', init)