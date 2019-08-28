const img = `<img class= "card-img-top"  "image" src="assets/images/Dahl.jpg" alt="bookCoverImage">`
const img1 =`<img class="card-img-top"  "image" src="assets/images/Dahl.jpg" alt="bookCoverImage">`
const img2= `<img class="card-img-top"  "image" src="assets/images/Dahl.jpg" alt="bookCoverImage">`
const button = `<button class="btn btn-primary" id="btn1">Show Description</button>`

let bookList = [
    {"img": img, 
    "title": "The Book Title", 
    "button" : button,
    "summary": "Sula takes you through the lives and diverging paths of two best friends: Nel and Sula."    
}, 

    {"img": img1, 
    "title": "Book1",
    "button" : button,
    "summary": "Sethe was born a slave and escaped to Ohio, but eighteen years later she is still not free. She has too many memories of Sweet Home, the beautiful farm where so many hideous things happened."
}, 
    {"img": img2, 
    "title": "Book Title2",
    "button" : button,
    "summary": "Sula takes you through the lives and diverging paths of two best friends: Nel and Sula."    
},   
]




class HeaderComponent {
    constructor (header){
        this.header = header
        this.button = button
           this.template = `
        <h1>${header}</h1>
        
      `
                      
    }
}


    

class CardComponent {
    template= `
    <div class="card-body">${new bookList.img}
                <h5 class="card-title">${new bookList.title}</h5>
                ${new ButtonComponent().template}
                <div class="row">
                <p id="summaryText">${new bookList.summary}</p>
            </div>
            </div>
        </div>
    `
    
    
           
}


class Container {
    template = `
        <div>
            ${new HeaderComponent("My Favorite Books").template}
         
            ${new CardComponent().template}
       
        
        </div>`
}

document.getElementById("root").innerHTML = `${new Container().template}`


//document.addEventListener('click', function(e){
    //     if(e.target && e.target.id=="btn1"){
    //         if(document.getElementById("btn1").textContent == "Hide Description"){
    //             document.getElementById("bluestEye").innerText = ""
    //             document.getElementById("btn1").innerText = "Show Description"
    //         }
    //         else if{ 
    //             document.getElementById("bluestEye").innerText = B1
    //             document.getElementById("btn1").innerText = "Hide Description"
    //         } 
    //         else if(e.target && e.target.id=="btn2"){
    //                 if(document.getElementById("btn1").textContent=="Hide Description"){
    //                     document.getElementById("sula").textContent=""
    //                     document.getElementById("btn1").innerText="Show Description"
    //                 }
    //                     else{
    //                         document.getElementById("sula").innerText = B2
    //                         document.getElementById("btn1").innerText="Hide Description"
    
    //                     }
    // }
    // }  }


    
document.addEventListener('click', function(e){
    if(e.target && e.target.id=="btn1"){
        if(document.getElementById("btn1").textContent == "Hide Description"){
            document.getElementById("summaryText").innerText = ""
            document.getElementById("btn1").innerText = "Show Description"
        }
        else { 
            document.getElementById("summaryText").innerText = "this is my discription"
            document.getElementById("btn1").innerText = "Hide Description"
        } 
    if(e.target && e.target.id=="btn2"){
                if(document.getElementById("btn2").textContent=="Hide Description"){
                    document.getElementByValue("sula").textContent=""
                    document.getElementById("btn2").innerText="Show Description"
                }
                    else{
                        document.getElementById("sula").innerText = B2
                        document.getElementById("btn2").innerText="Hide Description"

                  }          }
}})