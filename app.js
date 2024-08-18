let btn = document.querySelector("#facts");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    // console.log(fact)
    let p = document.querySelector("#fact");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) { 
        console.log("error", e);
        return "No fact found";
    }
}

let btn1 = document.querySelector("#dog");
btn1.addEventListener("click",async()=>{
    let img = await dogimg();
    let i=document.querySelector("div img");
    i.setAttribute("src",img);
});

let dogurl="https://dog.ceo/api/breeds/image/random";

async function dogimg() {
    try{
        let res = await axios.get(dogurl);
        return res.data.message;
    }catch(e){
        console.log("error", e);
        return "No image found";
    }
}

let btn2 = document.querySelector("#joke");
btn2.addEventListener("click",async()=>{
    let joke = await getJokes();
    let p=document.querySelector("#fact1");
    p.innerText = joke;
});

const url3 = "https://icanhazdadjoke.com/";
async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" }};
        let res = await axios.get(url3, config);
        return res.data.joke;
    }catch(err) {
        console.log(err);
        return "No data found";
    }
}


const url4 = "http://universities.hipolabs.com/search?country=";
let btn3 = document.querySelector("#univer");

btn3.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getColleges(country);
    show(colArr);
});

async function getColleges(country) {
    try {
        let res = await axios.get(url4 + country);
        return res.data; 
    } catch (err) {
        console.log(err);
        return [];
    }
}

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = ""; 
    for (let col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = col.web_pages[0] || "#"; 
        a.innerText = col.name; 
        a.target = "_blank"; 
        li.appendChild(a);
        list.appendChild(li);
    }
}

