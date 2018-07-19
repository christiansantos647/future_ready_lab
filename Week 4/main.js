/*eslint-env browser*/

//api endpoint for 10 random users
const url = "https://randomuser.me/api/?results=10";

fetch(url)
    //define an api callback, that runs when we get the api response
    //then(callback)

    .then(function(response){
    
        //get only the JSON, not the whole response
        return response.json();
    
})
    .then(function(data){
    
        var authors = data.results;
    
        //for each author in our array
        authors.forEach(function(author){
            
            //puts the author's name and picture in the list
            const authorUL = document.getElementById("authors");
            
            //create HTML tags
            //li = list item, img = image, span = text
            var li = document.createElement("li"), 
                img = document.createElement("img"), 
                span = document.createElement("span");
            
            //<img src=author.picture.medium>
            img.src = author.picture.medium;
            
            //<span> Author.name.first Author.name.last </span>
            span.innerHTML = author.name.first + " " + author.name.last;
            
            //add our new tags to the HTML
            li.appendChild(img);
            li.appendChild(span);
            authorUL.appendChild(li);
            
        });
    
})