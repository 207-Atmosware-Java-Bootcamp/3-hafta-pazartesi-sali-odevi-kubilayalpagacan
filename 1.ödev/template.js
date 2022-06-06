// ÖDEV: Math.round(Math.random()*10+1))
// bilgisayar tarafında rastgele  sayılar 1-10 arasında rastgele olsun oluştursun ve bitiş değeri 1<=X<=kullanıcı tarafından bitiş sayısına göre sayılar oluşturulsun 
// bu sayıları bir diziye atama yapalım
// bu sayılardan ilk eleman  ===> dizi[0]
// bu sayılardan son eleman ===> dizi[dizi.length-1]
// bu sayıların küçükten büyüğe sıralama ===> dizi.sort()
// bu sayıların büyükten küçüğe sıralama ===> dizi.sort().reverse()
// bu sayıların toplamları  ===> sum=0  sum+=i;
// bu sayıların çift sayı toplamları  ===> if(dizi[i]%2==0)
// bu sayıların tek sayı toplamları  ===> if(dizi[i]%2==1)
// bu sayıların her birine 1 ekleyerek yeni bir dizi oluşturalım ==> iterative for ile her bir eleman erişmek ve 1 eklemek bunun dinamik kısmını ES kısmında göreceğiz.

var number=Number(prompt("Bitiş sayısı giriniz:"))
var numberArray=[]
for (var i = 0; i < number; i++) {
  var randomNumber=Math.floor(Math.random() * 9) + 1;
  numberArray.push(randomNumber)
}
document.write("Random array: "+numberArray+"<br>")
document.write("First element of array: "+numberArray[0]+"<br>")
document.write("Second element of array: "+numberArray[number-1]+"<br>")
document.write("Lower to Upper elements: "+numberArray.sort()+"<br>")
document.write("Upper to Lower elements:"+ numberArray.sort().reverse()+"<br>")
var sum=0
for (var i = 0; i < number; i++) {
  sum+=numberArray[i]
}
document.write("Sum of array is: "+ sum + "<br>")
var evenSum=0
for (var i = 0; i < number; i++) {
  if(numberArray[i]%2==0)
  evenSum+=numberArray[i]
}
document.write("Sum of even numbers in array is: "+ evenSum + "<br>")
var oddSum=0
for (var i = 0; i < number; i++) {
  if(numberArray[i]%2==1)
  oddSum+=numberArray[i]
}
document.write("Sum of odd numbers in array is: "+ oddSum + "<br>")
newNumberArray=[]

for (var i = 0; i < number; i++) {
  newNumberArray.push(numberArray[i]+=1)
}
document.write("New Array: "+newNumberArray)

// var newNumberArray=numberArray.map(x=>x+1)
// document.write("New Array: "+newNumberArray) with map function