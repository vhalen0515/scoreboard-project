const onePointHome = document.getElementById('home-add-one')
const twoPointHome = document.getElementById('home-add-two')
const threePointHome = document.getElementById('home-add-three')
const onePointGuest = document.getElementById('guest-add-one')
const twoPointGuest = document.getElementById('guest-add-two')
const threePointGuest = document.getElementById('guest-add-three')
const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')
const resetHomeBtn = document.getElementById('reset-home-btn')
const resetGuestBtn = document.getElementById('reset-guest-btn')
let homeCount = 0
let guestCount = 0

onePointHome.addEventListener('click', handleButtonClick)
twoPointHome.addEventListener('click', handleButtonClick)
threePointHome.addEventListener('click', handleButtonClick)

onePointGuest.addEventListener('click', handleButtonClick)
twoPointGuest.addEventListener('click', handleButtonClick)
threePointGuest.addEventListener('click', handleButtonClick)

resetHomeBtn.addEventListener('click', handleButtonClick)
resetGuestBtn.addEventListener('click', handleButtonClick)

function handleButtonClick(event) {
    const clickedButton = event.target

    if (clickedButton === onePointHome) {
        homeCount++
    } else if (clickedButton === twoPointHome) {
        homeCount += 2
    } else if (clickedButton === threePointHome) {
        homeCount += 3
    }
    homeScore.innerHTML = homeCount

    if (clickedButton === onePointGuest) {
        guestCount++
    } else if (clickedButton === twoPointGuest) {
        guestCount += 2
    } else if (clickedButton === threePointGuest) {
        guestCount += 3
    }
    guestScore.innerHTML = guestCount

    if (clickedButton === resetHomeBtn) {
        homeCount = homeCount - homeCount
        homeScore.innerHTML = 0
    } else if (clickedButton === resetGuestBtn) {
        guestCount = guestCount - guestCount
        guestScore.innerHTML = 0
    }
}