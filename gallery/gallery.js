function barack() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "block";
  all.style.display = "none";
  setTimeout(clean_barack, 1000);
  console.log("clean2");

}
function answers_barack() {
  var date = document.getElementById('answers-date');
  var header = document.getElementById('answers-header_check');
  var google = document.getElementById('answers-google_check');
  var ai = document.getElementById('answers-ai');
  var final1 = document.getElementById('final1');
  var final2 = document.getElementById('final2');
  var results = document.getElementById('results');
  results.style.display = "block";
  date.innerText = "1.date:MARCH 18, 2024 6:35 PM CET-True"
  header.innerText = "2.header check:the title versus the article - the same topic-True"
  google.innerText = "3.google check:checking how many international news sites have the same case-True"
  ai.innerText = "4.ai check-True"
  final1.innerText = "100% True, 0% False, THE ARTICLE IS";
  final2.innerText = "TRUE";
  final2.style.color="green";
}
function clean_barack() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "none";
  all.style.display = "none";
  console.log("clean");
  answers_barack()
}
function clean() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "none";
  all.style.display = "none";
  console.log("clean");
}

function chatgpt() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "block";
  all.style.display = "none";
  setTimeout(clean_chatgpt, 1000);
  console.log("clean2");

}
function answers_chatgpt() {
  document. body. style. backgroundColor="#FFFAFA"
  var date = document.getElementById('answers-date');
  var header = document.getElementById('answers-header_check');
  var google = document.getElementById('answers-google_check');
  var ai = document.getElementById('answers-ai');
  var final1 = document.getElementById('final1');
  var final1 = document.getElementById('final1');
  var results = document.getElementById('results');
  results.style.display = "block";
  date.innerText = "1. Date: March 25, 2024 - True";
  header.innerText = "2. Header check: The title versus the article - the same topic - True";
  google.innerText = "3. Google check - False";
  ai.innerText = "4. AI check - Not Sure";
  final1.innerText = "50% True, 50% False, THE ARTICLE IS";
  final2.innerText = "FALSE";
  final2.style.color="red";
}

function clean_chatgpt() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "none";
  all.style.display = "none";
  console.log("clean");
  answers_chatgpt();
}
function dalle() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "block";
  all.style.display = "none";
  setTimeout(clean, 1000);
  console.log("clean2");
}

function damsel() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "block";
  all.style.display = "none";
  setTimeout(clean, 1000);
  console.log("clean2");
}

function nba() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "block";
  all.style.display = "none";
  setTimeout(clean, 1000);
  console.log("clean2");
}

function neymar() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "block";
  all.style.display = "none";
  setTimeout(clean, 1000);
  console.log("clean2");
}

function telescope() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "block";
  all.style.display = "none";
  setTimeout(clean, 1000);
  console.log("clean2");
}

function vegatables() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "block";
  all.style.display = "none";
  setTimeout(clean, 1000);
  console.log("clean2");
}

function virus() {
  var all = document.getElementById('everything');
  var load = document.getElementById('loading');
  load.style.display = "block";
  all.style.display = "none";
  setTimeout(clean, 1000);
  console.log("clean2");
}
var True = 0
var False = 0
var date
var date_in_google
var header_in_article
var header_in_site
var site_in_google
var article
var ai
//This function simulate the check with google and ai,
//it doesn't work but in the future we want to add Google information and build artificial intelligence.
function check() {
  //checking if the date is possible
  if (date == date_in_google) {
    alert("checking date")
    True = True + 10
  }
  else {
    alert("checking date")
    False = False + 10
  }
  //checking if the header is like the title
  if (header_in_article == header_in_site) {
    alert("checking header")
    True = True + 15
  }
  else {
    alert("checking header")
    False = False + 15
  }
  //checking with google, if there are more articles about the topic
  if (site_in_google == article) {
    alert("checking site in google")
    True = True + 30
  }
  else {
    alert("checking site in google")
    False = False + 30
  }
  //in the final stage, we check with ai if the article is True 
  if (ai == article) {
    alert("checking ai")
    True = True + 45
  }
  else {
    alert("checking ai")
    False = False + 45
  }
  //with all the data we checked, we calculate if the article is true or false
  if (True >= 90 || False < 90) {
    console.log("The article is true");
  }
  else if (True < 90 || False >= 90) {
    console.log("The article is false");
  }
}