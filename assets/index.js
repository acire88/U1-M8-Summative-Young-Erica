const img= `<img   class= "image" src="assets/images/Dahl.jpg" alt="bookCoverImage">`
const img1=`<img   class="image" src="assets/images/Sachar.jpg" alt="bookCoverImage">`
const img2= `<img   class="image" src="assets/images/b4.jpg" alt="bookCoverImage">`
const img3= `<img   class="image" src="assets/images/p2.jpg" alt="bookCoverImage">`
const img4= `<img   class="image" src="assets/images/Beloved.jpg" alt="bookCoverImage">`
let button1= `<button class="btn btn-primary" id="btn1">Show Description</button>`
let button2= `<button class="btn btn-primary" id="btn2">Show Description</button>`
let button3= `<button class="btn btn-primary" id="btn3">Show Description</button>`
let button4= `<button class="btn btn-primary" id="btn4">Show Description</button>`
let button5= `<button class="btn btn-primary" id="btn5">Show Description</button>`




let summary1 =`The BFG stands for Big Friendly Giant, who unexpectedly spirits a little girl named Sophie out of bed, and into the land of the child-eating giants.  With Sophie in his top pocket, the BFG sets off to rid the world of the big, gruesome giants who guzzle up 'human beans' - the Bloodbottler, the Fleshlumpeater and all their rotsome friends.
`
let summary2=`There's a Boy in the Girls' Bathroom is a 1987 juvenile fiction book from the author Louis Sachar, about a fifth-grade bully named Bradley whose behavior improves after intervention from a school counselor. The title comes from a point when a character, Jeff, is horribly embarrassed after accidentally entering the girls' bathroom while trying to go to the school counselor's office when a teacher gives him the wrong directions."
`
let summary3= `Thirteen-year-old Brian Robeson, haunted by his secret knowledge of his mother’s infidelity, is traveling by single-engine plane to visit his father for the first time since the divorce. When the plane crashes, killing the pilot, the sole survivor is Brian. He is alone in the Canadian wilderness with nothing but his clothing, a tattered windbreaker, and the hatchet his mother had given him as a present.
`
let summary4= `
Billy has long dreamt of owning not one, but two, dogs. So when he’s finally able to save up enough money for two pups to call his own—Old Dan and Little Ann—he’s ecstatic. It doesn’t matter that times are tough; together they’ll roam the hills of the Ozarks.

Soon Billy and his hounds become the finest hunting team in the valley. Stories of their great achievements spread throughout the region, and the combination of Old Dan’s brawn, Little Ann’s brains, and Billy’s sheer will seems unbeatable. But tragedy awaits these determined hunters—now friends—and Billy learns that hope can grow out of despair, and that the seeds of the future can come from the scars of the past.
`
let summary5= `In ''Beloved,'' Ms. Morrison turns away from the contemporary scene that has been her concern of late. This new novel is set after the end of the Civil War, during the period of so-called Reconstruction, when a great deal of random violence was let loose upon blacks, both the slaves freed by Emancipation and others who had been given or had bought their freedom earlier. But there are flashbacks to a more distant period, when slavery was still a going concern in the South and the seeds for the bizarre and calamitous events of the novel were sown. The setting is similarly divided: the countryside near Cincinnati, where the central characters have ended up, and a slave-holding plantation in Kentucky, ironically named Sweet Home, from which they fled 18 years before the novel opens."`

class BookComponent {
    constructor(title, img, button1, summary){
        
        this.title = title
        this.img = img
        this.button1 = button1
        this.summary= summary
   

        this.template = `
      
        
        <div class="card" style="width: 14rem;">
  <div class="card-img-top">${this.img}</div
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
       ${this.button1}
        </div>
    
        `
    }
}

class BookListComponent{

    constructor(){
        this.template = `


        ${new BookComponent("The BFG", img, button1, summary1 ).template}
        ${new BookComponent("There's a Boy in the Girls Bathroom", img1, button2, summary2 ).template}
        ${new BookComponent("THe Hatchet", img2, button3, summary3 ).template}
        ${new BookComponent("Where the Red Fern Grows", img3, button4, summary4 ).template}
        ${new BookComponent("Beloved", img4, button5, summary1 ).template} 

<div class="md-col-6">
        <div class="card">
        <div class="card-header">
          Summary
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
          <p id="T1"></p>
          <p id="T2"></p>
          <p id="T3"></p>
          <p id="T4"></p>
          <p id="T5"></p>
          </blockquote>
        </div>
      </div>
      </div>
      

        `
     
    }
}



document.addEventListener('click', function(e){

        if(e.target && e.target.id=="btn1"){
            if(document.getElementById("btn1").textContent == "Hide Description"){
                document.getElementById("T1").innerText = ""
                document.getElementById("btn1").innerText = "Show Description"  
            }
            else { 
                document.getElementById("T1").innerText = summary1
                document.getElementById("btn1").innerText = "Hide Description"
            }
        }
        })

        document.addEventListener('click', function(e){

            if(e.target && e.target.id=="btn2"){
                if(document.getElementById("btn2").textContent == "Hide Description"){
                    document.getElementById("T2").innerText = ""
                    document.getElementById("btn2").innerText = "Show Description"  
                }
                else { 
                    document.getElementById("T2").innerText = summary2
                    document.getElementById("btn2").innerText = "Hide Description"
                }
            }
            })

            document.addEventListener('click', function(e){

                if(e.target && e.target.id=="btn3"){
                    if(document.getElementById("btn3").textContent == "Hide Description"){
                        document.getElementById("T3").innerText = ""
                        document.getElementById("btn3").innerText = "Show Description"  
                    }
                    else { 
                        document.getElementById("T3").innerText = summary3
                        document.getElementById("btn3").innerText = "Hide Description"
                    }
                }
                })

                document.addEventListener('click', function(e){

                    if(e.target && e.target.id=="btn4"){
                        if(document.getElementById("btn4").textContent == "Hide Description"){
                            document.getElementById("T4").innerText = ""
                            document.getElementById("btn4").innerText = "Show Description"  
                        }
                        else { 
                            document.getElementById("T4").innerText = summary4
                            document.getElementById("btn4").innerText = "Hide Description"
                        }
                    }
                    })

                    document.addEventListener('click', function(e){

                        if(e.target && e.target.id=="btn5"){
                            if(document.getElementById("btn5").textContent == "Hide Description"){
                                document.getElementById("T5").innerText = ""
                                document.getElementById("btn5").innerText = "Show Description"  
                            }
                            else { 
                                document.getElementById("T5").innerText = summary5
                                document.getElementById("btn5").innerText = "Hide Description"
                            }
                        }
                        })


document.getElementById("root").innerHTML=  `${new BookListComponent().template}`


// ===============================================================================================================================

// const img= `<img   class= "image" src="assets/images/Dahl.jpg" alt="bookCoverImage">`
// const img1=`<img   class="image" src="assets/images/Sachar.jpg" alt="bookCoverImage">`
// const img2= `<img   class="image" src="assets/images/b4.jpg" alt="bookCoverImage">`
// const img3= `<img   class="image" src="assets/images/p2.jpg" alt="bookCoverImage">`
// const img4= `<img   class="image" src="assets/images/Beloved.jpg" alt="bookCoverImage">`
// const button1= `<button class="btn btn-primary" id="btn1">Show Description</button>`
// // const button2= `<button class="btn btn-primary" id="btn2">Show Description</button>`
// // const button3= `<button class="btn btn-primary" id="btn3">Show Description</button>`

// let summary1 =`This debut novel follows a young Black girl.`
// let summary2=` "There's a Boy in the Girls' Bathroom is a 1987 juvenile fiction book from the author Louis Sachar, about a fifth-grade bully 
//     named Bradley whose behavior improves after intervention from a school counselor. The title comes from a point when a character, 
//     Jeff, is horribly embarrassed after accidentally entering the girls' bathroom while trying to go to the school counselor's office 
//     when a teacher gives him the wrong directions."
// `
// let summary3= `Thirteen-year-old Brian Robeson, haunted by his secret knowledge of his mother’s infidelity, is traveling by single-engine 
// plane to visit his father for the first time since the divorce. When the plane crashes, killing the pilot, the sole survivor is Brian. He 
// is alone in the Canadian wilderness with nothing but his clothing, a tattered windbreaker, and the hatchet his mother had given him as a 
// present.
// `
// let summary4= `
// Billy has long dreamt of owning not one, but two, dogs. So when he’s finally able to save up enough money for two pups to call his own—Old Dan and Little Ann—he’s ecstatic. It doesn’t matter that times are tough; together they’ll roam the hills of the Ozarks.

// Soon Billy and his hounds become the finest hunting team in the valley. Stories of their great achievements spread throughout the region, and the combination of Old Dan’s brawn, Little Ann’s brains, and Billy’s sheer will seems unbeatable. But tragedy awaits these determined hunters—now friends—and Billy learns that hope can grow out of despair, and that the seeds of the future can come from the scars of the past.

// `
// // let summary5= 

// class ButtonComponent{
//     constructor(){
//         this.template=`
//         <button class="btn btn-primary" id="btn1">Show Description</button>
//        `
//     }
    
// }

// class BookComponent {
//     constructor(title, img, summary){
        
//         this.title = title
//         this.img = img
   

//         this.template = `
//        <div class="row">
        
//         <div class="card" style="width: 18rem;">
//   <div class="card-img-top">${this.img}</div
//   <div class="card-body">
//     <h5 class="card-title">${this.title}</h5>
//          ${new ButtonComponent().template}
//   </div>
// </div>
// </div>
//         `
//     }
// }


// class BookListComponent{

//     constructor(){
//         this.template = `
      
//         ${new BookComponent("The BFG", img).template}
//         ${new BookComponent("There's a Boy in the Girls Bathroom", img1 ).template}
//         ${new BookComponent("THe Hatchet", img2 ).template}
//         ${new BookComponent("Where the Red Fern Grows", img3 ).template}
//         ${new BookComponent("Beloved", img4 ).template}
       
//         `
//     }
// }



// document.addEventListener('click', function(e){
//         if(e.target && e.target.id==="btn1"){
//             if(document.getElementById("btn1").textContent = "Hide Description"){
//                 document.getElementById("T1").innerText = ""
//                 document.getElementById("btn1").innerText = "Show Description"  
//             }
//             else { 
//                 document.getElementById("T1").innerText = summary1
//                 document.getElementById("btn1").innerText = "Hide Description"
//             } }
//         })

//     //    else (e.target && e.target.id==="btn2"){
//     //                 if( document.getElementById("btn2").textContent=="Hide Description"){
//     //                 document.getElementById("T2").innerText=""
//     //                 document.getElementById("btn2").innerText="Show Description"
//     //                 }
//     //                     else{
//     //                         document.getElementById("T2").innerText == summary2
//     //                         document.getElementById("btn2").innerText="Hide Description"
    
//     //                   }              
//     //                  }          
   


// document.getElementById("root").innerHTML=  `${new BookListComponent().template}`