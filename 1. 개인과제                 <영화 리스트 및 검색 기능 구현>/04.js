const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTE5ZDcyMGQ4YTM5Mzg2Njk3MjU5ZTcxNjNlZjhiYyIsInN1YiI6IjY0NzA4N2I5NzcwNzAwMDBkZjEzZGQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qsdY4rXn-7jYUf8PwRXStzlDcISDYLBTZbW2bJ_j07w',
    },
};

fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=5e19d720d8a39386697259e7163ef8bc&language=ko-KR&page=1',
    options
)
    .then((response) => response.json())
    .then((data) => {
        let rows = data.results;
        // const a = 'movies';
        for (i = 0; i < rows.length; i++) {
            // console.log(document.getElementById('movies'));
            let temp_html = `<div class="movieBox" id="movie">
                                <li class="movieCard" id="movies">
                                    <img class="moviePoster_path" src="https://image.tmdb.org/t/p/w500${rows[i].poster_path}" alt="이미지없음." />
                                    <h2 class="movieTitle">${rows[i].title}</h2>
                                    <p class="movieOverview">${rows[i].overview}</p>
                                    <p class="movieVoteAverage">${rows[i].vote_average}</p>
                                </li>
                            </div>`;
            console.log((document.getElementById('movie').innerHTML += temp_html));
        }
    })
    .catch((err) => console.error(err));
