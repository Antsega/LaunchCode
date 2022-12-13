function init() {
const takeOffBtn = document.getElementById('takeoff')
const landBtn = document.getElementById('landing')
const abrtBtn = document.getElementById('missionAbort')


takeOffBtn.addEventListener('click', function() {
    let bool = window.confirm('Confirm that the shuttle is ready for takeoff')
    if (bool) {
        document.getElementById('flightStatus').innerHTML = "Shuttle in flight"
        document.querySelector('#shuttleBackground').style.backgroundColor = 'blue'
        document.getElementById('rocket').height += 10_000
        document.getElementById('spaceShuttleHeight').innerHTML =  document.getElementById('rocket').height
        document.querySelector('#shuttleBackground').style.height = "100%"
    }
})

landBtn.addEventListener('click', function() {
    window.alert('The shuttle is landing. Landing gear engaged.')
    document.getElementById('flightStatus').innerHTML = 'The shuttle has landed'
    document.querySelector('#shuttleBackground').style.backgroundColor = 'green'
    document.getElementById('rocket').height += 0
    document.getElementById('spaceShuttleHeight').innerHTML =  document.getElementById('rocket').height
    document.querySelector('#shuttleBackground').style.height = "40%"

})

abrtBtn.addEventListener('click', function() {
    let bool = window.confirm('Confirm that you want to abort the mission.')
    if (bool) {
        document.getElementById('flightStatus').innerHTML = "Mission aborted"
        document.querySelector('#shuttleBackground').style.backgroundColor = 'green'
        document.getElementById('rocket').height = 0
        document.getElementById('spaceShuttleHeight').innerHTML =  document.getElementById('rocket').height
        document.querySelector('#shuttleBackground').style.height = "40%"
    }
})


}

window.addEventListener('load',init)

