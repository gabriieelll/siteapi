const apiKey = '3d5e62c0214759ab463dcb625eb379a3';
const apiUrl = 'https://api.themoviedb.org/3';

// Função para obter filmes populares
async function getPopularMovies() {
    try {
        const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Erro ao obter filmes populares:', error);
    }
}

// Função para exibir filmes na página
function displayMovies(movies) {
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Nota: ${movie.vote_average}</p>
            <button onclick="showMovieDetails(${movie.id})">Detalhes</button>
        `;
        moviesList.appendChild(movieElement);
    });
}

// Função para buscar filmes populares e exibi-los na página
async function loadPopularMovies() {
    const popularMovies = await getPopularMovies();
    displayMovies(popularMovies);
}

// Função para buscar detalhes de um filme específico
async function getMovieDetails(movieId) {
    try {
        const response = await fetch(`${apiUrl}/movie/${movieId}?api_key=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter detalhes do filme:', error);
    }
}

// Função para exibir detalhes de um filme específico
async function showMovieDetails(movieId) {
    const movieDetails = await getMovieDetails(movieId);
    console.log('Detalhes do filme:', movieDetails);

    // Implemente a lógica para exibir os detalhes na página
    // (sinopse, elenco, classificação, pôster, trailer)
}
document.addEventListener('DOMContentLoaded', loadPopularMovies);

