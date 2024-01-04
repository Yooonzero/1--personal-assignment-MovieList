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
    );
    // 함수 작동 테스트 콘솔
    // console.log('확인 콘솔 !!!!'); // 정상작동 확인.

    // let foundMovie = document.getElementsByClassName('text'); // class로 요소의 value값을 가져오면 undefined 나옴.

    let foundMovie = document.getElementById('searchInput');

    console.log(foundMovie.value); // 데이터 값 출력 테스트 콘솔 => id 로 요소의 value값을 받아오는데 성공.

    // 해야될건 뭐야?input에 값을 입력하고 나면
    // 1. 클릭으로 함수가 실행확인, // 정상작동 확인.
    // 2. input 의 value 값과 data의 title의 value 값을 비교 하고,
    // 3. 일치하는 부분이 있는 value 값을 가진 title의 데이터만 가져와서 아래쪽에 출력.
    // 비교 하려면,
    // 1. 반복문으로 하나하나씩 만나보고, 값을 걸러서 가져오려면 filter를 사용하면 되는건지
    // 2. 아래쪽에 rows로 반복문을 돌린 값들이 있으니 저기서 구현시켜도 되는지,

    // dom으로 input 에 들어간거를 javascript로 받아올 수 있다. id로 해도 되고 queryselector를 써도된ㄴ다.
    // 그거를 처음받아온 데이터 안에서 검색을 해야함.
    // 그 중에서 우리가 가져온 input값으로 그걸 비교해서 걸러야 된다.
    // 반복문 안에, 검사하는걸 넣으면 되는데, filter === data.results / 각각의 개체에 input 을 가지고 필터링.
    // movies.filter() javascript 문자열 검색 includes
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
            console.log(temp_html);
            // document.querySelector('#m-box').innerHTML = temp_html;
        });
    })
    .catch((err) => console.error(err));
