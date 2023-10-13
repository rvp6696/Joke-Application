// Get references to HTML elements using their IDs
const jokeContainer = document.getElementById("joke-content")
const getJokeBtn = document.getElementById("joke-btn")

// Define the URL for fetching jokes from the JokeAPI
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


// Define a function to fetch and display jokes
let getJokes = () => {
    fetch(url)
        .then(response => response.json())
        .then((jokedata) => {
            jokeContainer.innerText = `${jokedata.joke}`
        })
        .catch((error) => {
            console.log("Error")
        })
}

// Add a click event listener to the "Get New Joke" button
getJokeBtn.addEventListener("click", getJokes)