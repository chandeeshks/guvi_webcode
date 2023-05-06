// create a div element
let d = document.createElement("div");
d.setAttribute("class","container")
document.body.append(d);

//another div
let d1 = document.createElement("div");
d1.setAttribute("class","content")
document.body.append(d1);
d.append(d1)

//another div
let d2 = document.createElement("div");
d2.setAttribute("class","display")
document.body.append(d2);
d.append(d2)

//create hr
let hr = document.createElement("hr")





// d2.innerHTML+=`<p class="isbn"></p>`
// d2.innerHTML+=`<p class="no_of_pages"></p>`
// d2.innerHTML+=`<p class="author_book"></p>`
// d2.innerHTML+=`<p class="publishername"></p>`
// d2.innerHTML+=`<p class="publisherdate"></p>`
// d2.innerHTML+=`<p class="character"></p>`

//create a unorderlist
let ul = document.createElement("ul");
ul.setAttribute("class","unorder-list");
ul.setAttribute("style","list-style-type:none");
d1.append(ul);

//create a listitem
let li = document.createElement("li");
li.setAttribute("class","listitem");
ul.append(li);

//create a input
let input1 = document.createElement("input")
input1.setAttribute("type","button")
input1.setAttribute("onclick","bookone()")
input1.setAttribute("value","First")
input1.setAttribute("class","input")
input1.setAttribute("id","1")
li.append(input1)


ul.innerHTML+=`<li class="listitem"><input class="input" id="2" type="button" value="2" onclick="booktwo()"</li>`
ul.innerHTML+=`<li class="listitem"><input class="input" id="3" type="button" value="3" onclick="bookthree()"</li>`
ul.innerHTML+=`<li class="listitem"><input class="input" id="4" type="button" value="4" onclick="bookfour()"</li>`
ul.innerHTML+=`<li class="listitem"><input class="input" id="5"  type="button" value="5" onclick="bookfive()"</li>`
ul.innerHTML+=`<li class="listitem"><input class="input" id="6"  type="button" value="6" onclick="booksix()"</li>`
ul.innerHTML+=`<li class="listitem"><input class="input" id="7"  type="button" value="7" onclick="bookseven()"</li>`
ul.innerHTML+=`<li class="listitem"><input class="input" id="8"  type="button" value="8" onclick="bookeight()"</li>`
ul.innerHTML+=`<li class="listitem"><input class="input" id="9"  type="button" value="9" onclick="booknine()"</li>`
ul.innerHTML+=`<li class="listitem"><input class="input" id="10"  type="button" value="last" onclick="bookten()"</li>`

//create br
let br = document.createElement("br");


//fetch api
async function bookone(){
    try{
        let api = await fetch("https://anapioficeandfire.com/api/books/1");
        let data = await api.json();
        console.log(data)
        if(data){
            renderdata(data);
        }
        else{
            hiddeshow()
        }
    }
    catch(error){
      hiddeshow()
    }
}
//booktwo
async function booktwo(){
    try{
        let api = await fetch("https://anapioficeanfire.com/api/books/2");
        let data = await api.json();
        if(data){
            renderdata(data);
        }
        else{
            hiddeshow()
        }
    }
    catch(error){
        hiddeshow()
    }
}

//bookthree
async function bookthree(){
    try{
        let api = await fetch("https://anapioficeandfire.com/api/books/3");
        let data = await api.json();
        if(data){
            renderdata(data);
        }
        else{
            hiddeshow()
        }
    }
    catch(error){
        hiddeshow()
    }
}

//bookfour
async function bookfour(){
    try{
        let api = await fetch("https://anapioficeandfire.com/api/books/4");
        let data = await api.json();
        if(data){
            renderdata(data);
        }
        else{
            hiddeshow()
        }
    }
    catch(error){
        hiddeshow()
    }
}

//bookfive
async function bookfive(){
    try{
        let api = await fetch("https://anapioficeandfire.com/api/books/5");
        let data = await api.json();
        if(data){
            renderdata(data);
        }
        else{
            hiddeshow();
        }
    }
    catch(error){
        hiddeshow()
    }
}

//booksix
async function booksix(){
    try{
        let api = await fetch("https://anapioficeandfire.com/api/books/6");
        let data = await api.json();
        if(data){
            renderdata(data);
        }
        else{
            hiddeshow()
        }
    }
    catch(error){
        hiddeshow()
    }
}


//bookseven
async function bookseven(){
    try{
        let api = await fetch("https://anapioficeandfire.com/api/books/7");
        let data = await api.json();
        if(data){
            renderdata(data);
        }
        else{
            hiddeshow()
        }
    }
    catch(error){
        hiddeshow()
    }
}

//bookeight
async function bookeight(){
    try{
        let api = await fetch("https://anapioficeandfire.com/api/books/8");
        let data = await api.json();
        if(data){
            renderdata(data);
        }
        else{
            hiddeshow()
        }
    }
    catch(error){
        hiddeshow()
    }
}

//booknine
async function booknine(){
    try{
        let api = await fetch("https://anapioficeandfire.com/api/book/9");
        let data = await api.json();
        if(data){
            renderdata(data);
        }
        else{
            hiddeshow()
        }
    }
    catch(error){
        hiddeshow()
    }
}

//bookten
async function bookten(){
    try{
        let api = await fetch("https://anapioficeandfire.com/api/books/10");
        let data = await api.json();
        if(data){
            renderdata(data);
        }
        else{
            hiddeshow()
        }
    }
    catch(error){
        hiddeshow()
    }
}


//hidden
function hiddeshow(){
    let element = document.createElement("div");
    element.setAttribute("class","no-data")
    d.append(element)
    element.innerText="Something went wrong"
}




function renderdata(data=[]){
  console.log(data)
  //create div
  let d3 = document.createElement("div")
  let d4 = document.createElement("div")
  let d5 = document.createElement("div")
  let d6 = document.createElement("div")
  let d7 = document.createElement("div")
  let d8 = document.createElement("div")
  let d9 = document.createElement("div")
  let d10 = document.createElement("div");
  








  //give value to div
  d2.innerHTML+=`<br>`
  d3.innerText+=`Name: ${data.name}`;
  d4.innerText+=`Isbn: ${data.isbn}`;
  d5.innerText+=`No.Of.Pages: ${data.numberOfPages}`;
  d6.innerText+=`Author of the book: ${data.authors}`;
  d7.innerText+=`Publisher Name: ${data.publisher}`;
  d8.innerText+=`Released Date: ${data.released}`;
  d9.innerText+=`character :`;
  d10.innerText+=`Book: ${data.url}`;


 //append
  d2.append(d10)
  d2.innerHTML+=`<br>`
  d2.append(d3)
  d2.append(br)
  d2.append(d4)
  d2.innerHTML+=`<br>`
  d2.append(d5)
  d2.innerHTML+=`<br>`
  d2.append(d6)
  d2.innerHTML+=`<br>`
  d2.append(d7)
  d2.innerHTML+=`<br>`
  d2.append(d8)
  d2.innerHTML+=`<br>`
  d2.append(d9)
  for(var i=0; i<5; i++){
    d2.append(`${data.characters[i]}`)
    d2.innerHTML+=`<br>`
  }
  d2.innerHTML+=`<br>`
  
 

}
