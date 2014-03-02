raw_weather_string = httpGet("http://api.openweathermap.org/data/2.5/weather?q=Columbia,MO")
weather_object = JSON.parse(raw_weather_string)

temp_kelvin = weather_object.main.temp

//° F = 9/5(° K - 273) + 32
temp_f = (9/5)*(temp_kelvin - 273) + 32
chrome.browserAction.setBadgeText({text: Math.round(temp_f * 10)/10 + "°"})
//also check out chrome.browserAction.setBadgeBackgroundColor()

/*
Also - the icon can be a CANVAS!!!
http://smus.com/dynamic-icons-chrome-extensions/
*/


function httpGet(theUrl)
{
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}