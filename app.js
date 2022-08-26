const submitBtn = document.getElementById('submit');
const rated = document.getElementById('rating');
const thankElement = document.querySelector('.card-thank')
const mainElement = document.querySelector('.card-main');
const ratings = document.querySelectorAll('.btn');

ratings.forEach((rating) => {
    rating.onclick = () => {
        rated.innerHTML = rating.innerHTML;
    }
})

submitBtn.onclick = () => {
    thankElement.classList.toggle('hidden');
    mainElement.classList.toggle('hidden');
    // ratings.forEach((rating) => {
    //     console.log(rating)
    //     rating.onclick = () => {
    //         console.log(rating.innerHTML)
    //         rated.innerHTML = rating.innerHTML;
    //     }
    // })
}

