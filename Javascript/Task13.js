let movies = [
    { title: "Avatar", rating: "4-star" },
    { title: "Inception", rating: "5-star" },
    { title: "Titanic", rating: "3-star" }
];

let movie = movies.find(movie => movie.rating === "5-star");

console.log(movie.title);