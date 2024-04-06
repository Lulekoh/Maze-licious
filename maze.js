/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

/* Apply styles */
html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #def;
    font-family: 'Poppins', sans-serif;
}

#view {
    margin-top: 30px;
}

#mazeContainer {
    margin: 0 auto;
    opacity: 0;
    display: inline-block;
    border-radius: 10px;
}

#mazeContainer #mazeCanvas {
    margin: 0;
    display: block;
    border: 2px solid black;
    height: 400px;
}

input, select {
    cursor: pointer;
    background-color: rgba(40, 0, 0, 0.30);
    height: 45px;
    width: 150px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    display: inline-block;
    font-size: 15px;
    text-align: center;
    text-decoration: none;
    appearance: none;
}

input:hover, select:hover {
    background-color: rgba(20, 10, 30, 0.70);
}

input:active, select:active {
    background-color: blue;
}

input:focus, select:focus {
    outline: none;
}

.custom-select {
    display: inline-block;
}

.custom-select select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-repeat: no-repeat;
    background-position: 125px center;
}

#Message-Container {
    visibility: hidden;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(10, 0, 0, 0.30);
    z-index: 1;
}

#Message-Container #message {
    width: 300px;
    height: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -150px;
    margin-top: -150px;
}

#page {
    text-align: center;
    height: auto;
    width: auto;
    margin: auto;
}

#page #menu {
    margin: auto;
    padding: 10px;
    height: 65px;
    box-sizing: border-box;
}

#page #menu h1 {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 3.2rem;
}

#page #view {
    position: absolute;
    top: 65px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
}

.border {
    border: 10px solid black;
    border-radius: 10px;
}

#instructions {
    margin-top: 425px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 400px) {
    input, select {
        width: 120px;
    }
}

