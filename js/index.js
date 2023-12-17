



function quots(){
    

var text = ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” " , "“You only live once, but if you do it right, once is enough.”" , "“To live is the rarest thing in the world. Most people exist, that is all.”" ,"“Without music, life would be a mistake.”"];


var userNames = ["― Albert Einstein " , "― Mae West " , "― Oscar Wilde " ,"― Andre Gide"];

var imges =['1.jpg.jpeg','2.jpg.jpeg','3.jpg.jpeg','4.jpg.jpeg'];


var num = Math.floor(Math.random() * userNames.length);

selected_img=imges[num];

document.getElementById("p").innerHTML=userNames[num];
document.getElementById("span").innerHTML=text[num];
document.getElementById("imge").src=`./imgess/${selected_img}`;


}



   



