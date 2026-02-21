function validateName(name) {
    if (arguments.length === 0)
        throw "Cookie name is required";
    if (typeof name !== "string")
        throw "Cookie name must be a string";
}


function getCookie(cookieName){
    validateName(cookieName);
    let cookies = document.cookie.split("; ");
    for(let i=0;i<cookies.length;i++){
        let splited = cookies[i].split("=");
        if(splited[0]===cookieName){
            return decodeURIComponent(splited[1]);
        }
    }
    return null;
}

function setCookie(cookieName, cookieValue, expireDate) {

  if(expireDate instanceof Date){
    document.cookie = `${cookieName}=${cookieValue};expires=${expireDate.toUTCString()}`;
  }else if(expireDate !== undefined && !(expireDate instanceof Date)) {
    document.cookie = `${cookieName}=${cookieValue};max-age=${expireDate}`;
  }else {
    document.cookie = `${cookieName}=${cookieValue}`;
  }
}

function deleteCookie(){
    var date = new Date();
        var d = date.getDate();
        date.setDate(d - 5);
    var name = document.getElementById("delName").value;
    document.cookie = name +`=;expires=${date}`;
}

function getAllCookies(){
  let cookies = document.cookie.split("; ");
  let result = {};
  if(document.cookie===""){
    return result;
  }
  for(let i =0;i<cookies.length;i++){
    let splited = cookies[i].split("=");
    result[splited[0]]=decodeURIComponent(splited[1]);
  }
  return result;

}

function hasCookie(cookieName) {
    return getCookie(cookieName) !== null;
}

