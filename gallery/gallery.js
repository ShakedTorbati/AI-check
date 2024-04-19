alert("hi");
function barack() {  
  alert("hello")  
  var all= document.getElementById('everything');
  var load= document.getElementById('loading');     
  load.style.display="block"; 
  all.style.display="none"; 
  setTimeout(clean, 1000); 
  console.log("clean2");    
 
}

function clean(){
  var all= document.getElementById('everything');
  var load= document.getElementById('loading');  
  load.style.display="none"; 
  all.style.display="none";   
  console.log("clean");

}

function chatgpt(){
  var all= document.getElementById('everything');
  var load= document.getElementById('loading');     
  load.style.display="block"; 
  all.style.display="none"; 
  setTimeout(clean, 1000); 
  console.log("clean2"); 
}
function dalle(){
  var all= document.getElementById('everything');
  var load= document.getElementById('loading');     
  load.style.display="block"; 
  all.style.display="none"; 
  setTimeout(clean, 1000); 
  console.log("clean2"); 
}

function damsel(){
  var all= document.getElementById('everything');
  var load= document.getElementById('loading');     
  load.style.display="block"; 
  all.style.display="none"; 
  setTimeout(clean, 1000); 
  console.log("clean2"); 
}

function nba(){
  var all= document.getElementById('everything');
  var load= document.getElementById('loading');     
  load.style.display="block"; 
  all.style.display="none"; 
  setTimeout(clean, 1000); 
  console.log("clean2"); 
}

function neymar(){
  var all= document.getElementById('everything');
  var load= document.getElementById('loading');     
  load.style.display="block"; 
  all.style.display="none"; 
  setTimeout(clean, 1000); 
  console.log("clean2"); 
}

function telescope(){
  var all= document.getElementById('everything');
  var load= document.getElementById('loading');     
  load.style.display="block"; 
  all.style.display="none"; 
  setTimeout(clean, 1000); 
  console.log("clean2"); 
}

function vegatables(){
  var all= document.getElementById('everything');
  var load= document.getElementById('loading');     
  load.style.display="block"; 
  all.style.display="none"; 
  setTimeout(clean, 1000); 
  console.log("clean2"); 
} 

function virus(){
  var all= document.getElementById('everything');
  var load= document.getElementById('loading');     
  load.style.display="block"; 
  all.style.display="none"; 
  setTimeout(clean, 1000); 
  console.log("clean2"); 
}
var True=0
var False=0
 //This function simulate the check with google and ai,
 //it isn't work but in the future we want to add Google information and build artificial intelligence.
function check(){
  var date
  var date_in_google
  var header_in_article
  var header_in_site
  var site_in_google
  var artical
  var ai
  if (date==date_in_google){
    alert("checking date")
    True=True+10
  }
  else{
    alert("checking date")
    False=False+10
  }
  if (header_in_site==header_in_site){
    alert("checking header")
    True=True+15
  }
  else{
    alert("checking header")
    False=False+15
  }
  if (site_in_google==artical){
    alert("checking site in google")
    True=True+30
  }
  else{
    alert("checking site in google")
    False=False+30
  }
  //in the final stage, we check with ai if the artical is True 
  if(ai==artical){
    alert("checking ai")
    True=True+45
  }
  else{
    alert("checking ai")
    False=False+45
  }
  
 }
