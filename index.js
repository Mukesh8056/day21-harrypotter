//https://openlibrary.org/search/authors.json?q=j%20k%20rowling

// author

// https://wizard-world-api.herokuapp.com/Houses

 //0367baf3-1cb6-4baf-bede-48e17e1cd005-Gryffindor
 //805fd37a-65ae-4fe5-b336-d767b8b7c73a-Ravenclaw'
 //85af6295-fd01-4170-a10b-963dd51dce14-Hufflepuff
 //a9704c47-f92e-40a4-8771-ed1899c9b9c1-'Slytherin



search=()=>{

    let input=document.getElementById("input").value;
    // console.log(input)

var author = fetch(`https://wizard-world-api.herokuapp.com/Houses/${input}`)
    console.log(author)

// author.then((data)=> {
// console.log(data.json())
// })


author.then((data)=>data.json()).then((data1)=>
{  
    console.log(data1)
     console.log(data1.name)
    console.log(data1.ghost)
    console.log(data1.houseColours)
    console.log(data1.ghost )
    console.log(data1.traits.length)
    let title=document.getElementById("title")  .innerHTML=` NAME:${data1.name}`
    let content=document.getElementById("content").innerHTML=`GHOST:${data1.ghost}`
    let content1=document.getElementById("content1").innerHTML=`HOUSE COLOR: ${data1.houseColours}`
    let content2=document.getElementById("content2").innerHTML=`FOUNDER:${data1.founder}`
    let content3=document.getElementById("content3").innerHTML=`TOTAL  OF TRAITERS MEMBERS:${data1.traits.length}`
    let content4=document.getElementById("content4").innerHTML=`COMMON ROOM:${data1.commonRoom}`
    let content5=document.getElementById("content5").innerHTML=`ANIMAL:${data1.animal}`

    
}
)
 }