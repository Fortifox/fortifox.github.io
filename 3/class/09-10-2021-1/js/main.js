// // 1
// const promo__adv = document.querySelector('.promo__adv');
// promo__adv.style.display = 'none';

// // 2
// const promo__genre = document.querySelector('.promo__genre');
// promo__genre.innerText = 'Эпическая фантастика';

// // 3
// const promo__bg = document.querySelector('.promo__bg');
// promo__bg.classList.add('bg_new');
const currentMovies = document.querySelectorAll('.promo__interactive-item');
const addForm = document.querySelector('.add');
const addInput = addForm.querySelector('.adding__input');
const list = document.querySelector('.promo__interactive-list');
const filmList = document.querySelectorAll('.promo__interactive-item');

// Data Base of films
const movieDB = {
    movies: [
        "ГЛАВНЫЙ ГЕРОЙ",
        "ГЛАДИАТОР",
        "ГОДЗИЛЛА 2",
        "ВРЕМЯ",
        "НИКТО",
    ]
};

// event add new film on page
addForm.addEventListener('submit', () => {
    const correctMovies = addNewFilmAndSort(movieDB.movies, addInput);
    removePrevFilmsList(filmList);
    list.innerHTML = genNewList(correctMovies);
});

// functions

// add new film and return sorted DB
const addNewFilmAndSort = (DB, input) => {
    const newFilm = input.value;
    DB.push(newFilm.toUpperCase());
    return DB.sort();
};

// remome previus films <li> in <ul>
const removePrevFilmsList = (list) => {
    list.forEach((item) => {
        item.remove();
    });
};

// generate new html list and return it
const genNewList = (moviesList) => {
    let tempStr = '';
    moviesList.forEach((item) => {
        tempStr = ` 
            ${tempStr}
            <li class="promo__interactive-item">${item}
                <div class="delete"></div>
            </li>
        `;
    });
    return tempStr;
};