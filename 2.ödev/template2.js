//Kullanıcıdan aldığımız verinin ilk harfi ve son harfi görünsün geriye kalan karakter kadar * (yıldız) olsun ==> Alınan örneğin Hamit  ==>  H***t
//Yardımcı oalcak metotlar v.s                                                                          function
//string ==> replace,sub,String,charAt()
//loop


var userString=prompt("String giriniz")

//1st Way
function toTheStars(){
    document.write(userString.substring(0,1) + '*'.repeat(userString.length-2) + userString.charAt(userString.length-1)+"<br>")
}
toTheStars()

document.write("<br>"+"~~~~~~~~~~~~~~~~~~~~~~~~~~"+"<br>")

//2nd Way
function toTheStars2(){
    var stars=[]
    for (var i = 1; i < userString.length-1; i++) {
        stars.push("*")
    }
    document.write(userString.substring(0,1)+stars.join('')+userString.charAt(userString.length-1))
}
toTheStars2()
