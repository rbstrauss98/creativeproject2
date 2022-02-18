
document.getElementById("userform").addEventListener("submit", function(event) {
    event.preventDefault();

    randNum = Math.floor(Math.random() * 8)+1;
    
    if (randNum != 1){
      document.getElementById("kanyeImage").src = "images/kanyehead" + randNum + ".png";
    }
    else {
      document.getElementById("kanyeImage").src = "images/kanyehead.png";
    }
    

    function getApr(){
    const fullURL = "https://api.kanye.rest";
    console.log(fullURL);
    fetch(fullURL)
    .then(function(response) {
      return response.json();
        }).then(function(json) {
        console.log(json);
        const quoteResponse = json["quote"];
        if (quoteResponse.includes("Shut the") || quoteResponse.includes("sex") || quoteResponse.includes("shit")){ //Filters out the overly inappropriate quotes
          getApr();
        }
        else{
          document.getElementById("quoteText").innerHTML = '"' + quoteResponse + '"';
          let textNode = document.createTextNode(" -Kanye West"); 
          document.getElementById("quoteText").appendChild(textNode);
        }
                
        });
      }
      getApr();
  });

