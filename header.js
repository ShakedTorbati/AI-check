let header = document.getElementById("header");
header.innerHTML=`
<div id="topall">
    <div align="left" id="topbuttons">
    <img src="logo2.png">
        <button class="buttons" id="homebutton" type="submit" onclick="gotohome()">home</button>
         <button class="buttons" id="gallerybutton" type="submit" onclick="gotogallery()">gallery</button>
    </div>
</div>
 

<style>
#topbuttons{
    display: flex;
    flex-direction: row;
    justify-content:end;
    
    height: 40px;

   
    
    
}

#toptext{
    font-size:25px;
    width:200px;
    justify-content:space-between;


}
#toppix{
    width:650px;
    height:150px;
}
#topall{
display: flex;
flex-direction: row;
justify-content:space-between;
height: 100px;
background-color:Lavender;
color:LavenderBlush;
font-family:Oswald;

}

#homebutton{
    width: 100px;
    font-size: 20px;
    text-align:center; 

}

#gallerybutton{
    width: 100px;
    font-size: 20px;
    text-align:center; 

}

#aboutusbutton{
    width: 100px;
    font-size: 20px;
    text-align:center;  

}



body {
align-items: center;
color:Black;

 }

img{
height:50%;
width: 50%;
}

#homebutton{
    color:rgb(47, 91, 87);
}

.homebutton:hover, #homebutton:hover {
    background-color:DarkViolet;

}
#gallerybutton{
    color:rgb(47, 91, 87);
}

.gallerybutton:hover, #gallerybutton:hover {
    background-color:DarkSalmon;

}

#aboutbutton{
    color:rgb(47, 91, 87);

}

.aboutbutton:hover, #aboutbutton:hover {
    background-color:DarkSalmon;
}
</style>`

function gotogallery(){
    window.location.href="gallery.html";
}

function gotohome(){
    window.location.href="index.html";
}