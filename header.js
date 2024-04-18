let header = document.getElementById("header");
header.innerHTML=`
<div id="topall">
    <div align="right" id="toppix"> 
     <a href= "../html/home.html"><img src = "../img/logo2.png"/></a>
    </div>

    <div align="right" id="topbuttons">
        <button class="buttons" id="homebutton" type="submit" onclick="gotohome()">home</button>
         <button class="buttons" id="gallerybutton" type="submit" onclick="gotogallery()">gallery</button>
    </div>
</div>
 

<style>
#topbuttons{
    display: flex;
    flex-direction: row;
    justify-content:end;
    
    height: 60px;

   
    
    
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
height: 150px;
background-color:#A8DDE1;
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
background-color:LavenderBlush;
position: sticky;
 }

img{
height:50%;
width: 50%;
}

#homebutton{
    color:rgb(47, 91, 87);
}

.homebutton:hover, #homebutton:hover {
    background-color:DarkSalmon;

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
    window.location.href="gallery/gallery.html";
}

function gotohome(){
    window.location.href="../index.html";
}