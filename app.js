document.querySelector('.button1').addEventListener('click', init);

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1ibW3g04xoA491mT_NTaWSsFHXbFixHKd0SFP3qg2pNo/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    // alert('Successfully processed!')
    const card1 = document.querySelector(".latest-news__news--1");
    card1.innerHTML = `
    <div class="news">
                        <div class="news__card">
                            <img src=${data[1].picturelarge} alt="Muscari neglectum" class="news__img">
                            <div class="news__text-box u-padding-vertical-medium">
                                <h4 class="news__title">${data[1].family}</h4>
                                <h5 class="news__subtitle">${data[1].commonName}</h5>
                                <p class="news__paragraph--card">${data[1].habitat}&nbsp;<a href="#" class="btn btn--text">Read more &rarr;</a></p>
                                
                                <div class="news__info">
                                    <span class="news__author">J. J. Mena</span>
                                    <span class="news__date">17 Apr 2019</span>
                                </div>                                
                            </div>
                        </div>
                    </div>
    `;
    console.log(data[1], typeof data[1].picturelarge);
  }

window.addEventListener('DOMContentLoaded', init)