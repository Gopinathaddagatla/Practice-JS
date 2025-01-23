let jsonUrl = 'https://www.reddit.com/r/reactjs.json';

let jsonData;
fetch(jsonUrl).then((res)=>res.json()).then((data)=>data.data.children.map((element,index)=>{
    console.log(element.data.selftext_html)    
    document.body.innerHTML += `<p>${element.data.selftext}</p>`
}));

