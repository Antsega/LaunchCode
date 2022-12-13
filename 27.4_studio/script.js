function startup () {
    window.addEventListener('load', function () {
        let url = "https://handlers.education.launchcode.org/static/astronauts.json"
        
        fetch(url).then(function (response) {
          response.json().then(function (json) {
            let index = 0;
            const container = document.getElementById('container')
              for (let i = 0; i < json.length; i++) {
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName} : Team Member ${i + 1}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li id='active'>Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills.toString()}</li>
                </ul>
                    </div>
       <img class="avatar" src='${json[i].picture}'>
    </div>
    `;    
              }
          })
        });
        })
    };

    startup()
