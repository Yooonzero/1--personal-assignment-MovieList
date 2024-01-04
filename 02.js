const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTE5ZDcyMGQ4YTM5Mzg2Njk3MjU5ZTcxNjNlZjhiYyIsInN1YiI6IjY0NzA4N2I5NzcwNzAwMDBkZjEzZGQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qsdY4rXn-7jYUf8PwRXStzlDcISDYLBTZbW2bJ_j07w',
    },
};
function showAlert(id) {
    alert(`영화 id : ${id}`);
}
function findMovie() {
    fetch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=5e19d720d8a39386697259e7163ef8bclanguage=ko-KR&page=1',
        options
    )
        .then((response) => response.json())
        .then((data) => {
            let rows = data.results;
            let foundMovie = document.getElementById('searchInput').value;

            let b = rows.filter((i) => {
                let a = i.title;
                console.log(a, foundMovie, a === foundMovie);
                return a === foundMovie;
            });
            console.log(b);
            // 데이터의 title 값 필요하고, 그걸 input 값이랑 비교하고,
            // 공통되는 부분 있으면 출력하고,
            // console.log(foundMovie);
        });
}

fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=5e19d720d8a39386697259e7163ef8bclanguage=ko-KR&page=1',
    options
)
    .then((response) => response.json())
    .then((data) => {
        let rows = data.results;
        rows.forEach((a) => {
            let temp_html = `<li onclick="showAlert(${a.id})" class="movieCard" id="m-card"">
                                <img class="moviePoster_path" src="https://image.tmdb.org/t/p/w500${a.poster_path}" alt="이미지없음." />
                                <div calss="poster">
                                    <h2 class="movieTitle">${a.title}</h2>
                                    <p class="movieOverview">${a.overview}</p>
                                    <p class="movieVoteAverage">${a.vote_average}</p>
                                </div>
                            </li>`;
            // console.log(temp_html);
            // document.querySelector('#m-box').innerHTML = temp_html;
        });
    })
    .catch((err) => console.error(err));
