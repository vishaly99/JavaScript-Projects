const form = document.querySelector("form")
const container = document.querySelector(".image-conatiner")
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = form.querySelector('input').value;
    if (value == "") {
        alert("enter the value")
    }
    else {
        tvMazeApp(value)
    }

})
async function tvMazeApp(query) {
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const res = await req.json();
    console.log(res);
    makeImages(res);
}
function makeImages(shows) {
    for(let show of shows)
    {
        if(show.show.image)
        {   
            console.log(show.show.image.medium);
            const img = document.createElement('img');
            img.src=show.show.image.medium;
            container.append(img);
        }
    }
}