
    // declaring variables
    let cityName,finalcity,button;


    // getting html 
    cityName = document.querySelector('.cityname');
    button = document.querySelector('.submitcity');  

    // adding event listeners

    button.addEventListener('click',(()=>{
        finalcity = cityName.value;
        console.log(finalcity);
        data();
        
    }))

    // function
    function data() {
        const apiCall = fetch(`http://api.weatherapi.com/v1/current.json?key=667f2359c5f74355a7463248211501&q=${finalcity}`)
        .then(result=>{
            console.log(result);
            return result.json();
        })
        .then(data=>{
            console.log(data);
            let cityName = data.location.name;
            let localtime = data.location.localtime;
            let weatherTrue = data.current.temp_c;
            let weatherFeels = data.current.feelslike_c;
            let imgIcon = data.current.condition.icon;
            let weatherNow = data.current.condition.text;

            document.querySelector('.cityname-heading').textContent ='Location: '+ cityName;
            document.querySelector('.timenow').textContent ='Time Now: '+  localtime;
            document.querySelector('.feelslike').textContent ='Feels Like: '+ weatherFeels + ' C';
            document.querySelector('.actual').textContent ='Weather Now: ' + weatherTrue + ' C';
            document.querySelector('.iconweather').src = imgIcon;
            document.querySelector('.how-it-feels').innerHTML =weatherNow;
        })
        .catch(error =>{
            document.querySelector('.cityname-heading').textContent =`Can't find your location`;
        })
    };
