/*VARIABLES*/
//melodies (weather type)
var sun = new Audio();
    sun.src = "Audio/Weather/sunny.mp3";
    sun.loop = true;
    sun.volume = 0.35;
    var sunCheck = false;
var cloud = new Audio();
    cloud.src = "Audio/Weather/cloudy.mp3";
    cloud.loop = true;
    cloud.volume = 1;
    var cloudCheck = false;
var rain = new Audio();
    rain.src = "Audio/Weather/raining.mp3";
    rain.loop = true;
    rain.volume = 0.4;
    var rainCheck = false;
var snow = new Audio();
    snow.src = "Audio/Weather/snowing.mp3";
    snow.loop = true;
    var snowCheck = false;
var hail = new Audio();
    hail.src = "Audio/Weather/hailing.mp3";
    hail.loop = true;
    hail.volume = 0.7;
    var hailCheck = false;
var thunder = new Audio();
    thunder.src = "Audio/Weather/thunderstorm.mp3";
    thunder.loop = true;
    thunder.volume = 0.4;
    var thunderCheck = false;

//background effects (temperature audio)
var neg10 = new Audio();
    neg10.src="Audio/Temperatures/-10.mp3";
var neg20 = new Audio();
    neg20.src="Audio/Temperatures/-20.mp3"; 
var neg30 = new Audio();
    neg30.src="Audio/Temperatures/-30.mp3";
var pos0 = new Audio();
    pos0.src="Audio/Temperatures/0.mp3"; 
var neg40 = new Audio();
    neg40.src="Audio/Temperatures/-40.mp3"; 
var pos10 = new Audio();
    pos10.src="Audio/Temperatures/10.mp3";
var pos20 = new Audio();
    pos20.src="Audio/Temperatures/20.mp3"; 
var pos30 = new Audio();
    pos30.src="Audio/Temperatures/30.mp3";
var pos40 = new Audio();
    pos40.src="Audio/Temperatures/40.mp3";    

//different pitches (morning, afternoon, and night)
var sunMorning = new Audio();
    sunMorning.src="Audio/Pitch/SunnyMorning.mp3";
    sunMorning.volume=0.35;
    sunMorning.loop;
var sunNight = new Audio();
    sunNight.src="Audio/Pitch/SunnyNight.mp3";
    sunNight.volume=0.35; 
    sunNight.loop;
var cloudMorning = new Audio();
    cloudMorning .src="Audio/Pitch/CloudyMorning.mp3";
    cloudMorning.loop;
var cloudNight = new Audio();
    cloudNight.src="Audio/Pitch/CloudyNight.mp3"; 
    cloudNight.loop;
var rainMorning = new Audio();
    rainMorning.src="Audio/Pitch/RainingMorning.mp3";
    rainMorning.volume=0.4;
    rainMorning.loop;
var rainNight = new Audio();
    rainNight.src="Audio/Pitch/RainingNight.mp3";
    rainNight.volume=0.4;
    rainNight.loop;
var snowMorning = new Audio();
    snowMorning.src="Audio/Pitch/SnowingMorning.mp3";
    snowMorning.loop;
var snowNight = new Audio();
    snowNight.src="Audio/Pitch/SnowingNight.mp3";  
    snowNight.loop;
var hailMorning = new Audio();
    hailMorning.src="Audio/Pitch/HailingMorning.mp3";
    hailMorning.volume=0.7;
    hailMorning.loop;
var hailNight = new Audio();
    hailNight.src="Audio/Pitch/HailingNight.mp3";
    hailNight.volume=0.7;
    hailNight.loop;
var thunderMorning = new Audio();
    thunderMorning.src="Audio/Pitch/ThunderstormMorning.mp3";
    thunderMorning.volume=0.4;
    thunderMorning.loop;
var thunderNight = new Audio();
    thunderNight.src="Audio/Pitch/ThunderstormNight.mp3"; 
    thunderNight.volume=0.4;
    thunderNight.loop;

//natural disaster audio
var natDisScream = new Audio();
    natDisScream.src="Audio/Nat Dis/screams.mp3"; 
    natDisScream.loop;
    natDisScream.volume = 0.08;
var natDisBgd = new Audio();
    natDisBgd.src="Audio/Nat Dis/bretts lofi.mp3";
    natDisBgd.loop;
    natDisBgd.volume = 0.2;

/*PAUSING*/
//pause everything
function pauseAll(){
  pauseAllTemp();
  pauseAllWeather();
  pauseNatDis();
}
//pause background effects (temperature)
function pauseAllTemp() {
  neg10.pause();
  neg20.pause();
  neg30.pause();
  neg40.pause();
  pos0.pause();
  pos10.pause();
  pos20.pause();
  pos30.pause();
  pos40.pause();
}

//pause everything but background effects and natural disaster
function pauseAllWeather(){
  //pause
  sun.pause();
  cloud.pause();
  hail.pause();
  rain.pause();
  snow.pause();
  thunder.pause();
  sunMorning.pause();
  sunNight.pause();
  cloudMorning.pause();
  cloudNight.pause();
  rainMorning.pause();
  rainNight.pause();
  snowMorning.pause();
  snowNight.pause();
  hailMorning.pause();
  hailNight.pause();
  thunderMorning.pause();
  thunderNight.pause();

  //make false
  sunCheck = false;
  cloudCheck = false;
  hailCheck = false;
  rainCheck = false;
  snowCheck = false; 
  thunderCheck = false;
}

//pause natural disaster audio
function pauseNatDis(){
  natDisScream.pause();
  natDisBgd.pause();
}

/*PLAY AUDIO*/
//play melodies (weather condition)
function playSun() {
  pauseAllWeather();
  sun.play();
  sunCheck = true;
}
function playCloudy() {
  pauseAllWeather();
  cloud.play();
  cloudCheck = true;
}
function playRaining() {
  pauseAllWeather();
  rain.play();
  rainCheck = true;
}
function playSnowing() {
  pauseAllWeather();
  snow.play();
  snowCheck = true;
}
function playHailing() {
  pauseAllWeather();
  hail.play();
  hailCheck = true;
}
function playThunder() {
  pauseAllWeather();
  thunder.play();
  thunderCheck = true;
}

//play background effects (temperature)
function playNeg10() {
      pauseAllTemp();
      neg10.play();
      neg10.volume = 0.45;
      neg10.loop = true;
}function playNeg20() {
      pauseAllTemp();
      neg20.play();
      neg20.volume = 0.15;
      neg20.loop = true;
}function playNeg30() {
      pauseAllTemp();
      neg30.play();
      neg30.volume = 0.35;
      neg30.loop = true;
}function playNeg40() {
      pauseAllTemp();
      neg40.play();
      neg40.volume = 0.05;
      neg40.loop = true;
}function playPos0() {
      pauseAllTemp();
      pos0.play();
      pos0.volume = 0.65;
      pos0.loop = true;
}function playPos10() {
      pauseAllTemp();
      pos10.play();
      pos10.volume = 0.65;
      pos10.loop = true;
}function playPos20() {
      pauseAllTemp();
      pos20.play();
      pos20.volume = 0.75;
      pos20.loop = true;
}function playPos30() {
      pauseAllTemp();
      pos30.play();
      pos30.volume = 0.35;
      pos30.loop = true;
}function playPos40() {
      pauseAllTemp();
      pos40.play();
      pos40.volume = 0.35;
      pos40.loop = true;
}

//play pitches (morning, afternoon, and night)
//afternoon
function regPitch(){
    if (sunCheck == true){
      playSun();
    }
    if (cloudCheck == true){
      playCloudy();
    }
    if (rainCheck == true){
      playRaining();
    }
    if (snowCheck == true){
      playSnowing();
    }
    if (hailCheck == true){
      playHailing();
    }
    if (thunderCheck == true){
      playThunder();
    }
}
//morning
function highPitch(){
  if (sunCheck == true){
    pauseAllWeather();
    sunMorning.play();
    sunCheck = true;
  }
  if (cloudCheck == true){
    pauseAllWeather();
    cloudMorning.play();
    cloudCheck = true;
  }
  if (rainCheck == true){
    pauseAllWeather();
    rainMorning.play();
    rainCheck = true;
  }
  if (snowCheck == true){
    pauseAllWeather();
    snowMorning.play();
    snowCheck = true;
  }
  if (hailCheck == true){
    pauseAllWeather();
    hailMorning.play();
    hailCheck = true;
  }
  if (thunderCheck == true){
    pauseAllWeather();
    thunderMorning.play();
    thunderCheck = true;
  }
}
//night
function lowPitch(){
  if (sunCheck == true){
    pauseAllWeather();
    sunNight.play();
    sunCheck = true;
  }
  if (cloudCheck == true){
    pauseAllWeather();
    cloudNight.play();
    cloudCheck = true;
  }
  if (rainCheck == true){
    pauseAllWeather();
    rainNight.play();
    rainCheck = true;
  }
  if (snowCheck == true){
    pauseAllWeather();
    snowNight.play();
    snowCheck = true;
  }
  if (hailCheck == true){
    pauseAllWeather();
    hailNight.play();
    hailCheck = true;
  }
  if (thunderCheck == true){
    pauseAllWeather();
    thunderNight.play();
    thunderCheck = true;
  }
}
//play natural disaster audio
function playNatDis(){
  natDisBgd.play();
  natDisScream.play();
}