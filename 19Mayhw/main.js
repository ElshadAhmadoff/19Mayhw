let in1 = document.querySelector(".i1");
let in2 = document.querySelector(".i2");
let in3 = document.querySelector(".i3");
let in4 = document.querySelector(".i4");
let in5 = document.querySelector("#file-upload");
let addBtn = document.querySelector(".add-btn");
let subBtn = document.querySelector(".sub-btn");
let fileAdded = document.querySelector("#file-added")
let ull = document.querySelector(".u1"); 
let ull2 = document.querySelector(".u2"); 
let ull3 = document.querySelector(".u3"); 
let ull4 = document.querySelector(".u4"); 
let h1 = document.querySelector("h1"); 
addBtn.addEventListener("click",function () {
    in5.click();
})
in5.addEventListener("change",function (e) {
    let tv = e.target.files;
    for (const file of tv) {
        let reader = new FileReader();
        reader.onloadend = (e) =>{
            let elem = `
            <div class="wrapper mt-3">
                <img src ="${e.target.result}"
            </div>
            `
            fileAdded.innerHTML += elem;
        }
        reader.readAsDataURL(file); 
    }
    in5.setAttribute("class","d-none")
})
subBtn.addEventListener("click",add)
function add() {
    let ulli1 = "<li class ='list-group-item text-center'>" + "NAME        :  " + in1.value + "</li>";
    let ulli2 = "<li class ='list-group-item text-center'>" + "SURNAME        :   " + in2.value + "</li>";
    let ulli3 = "<li class ='list-group-item text-center'>" + "FATHER'S NAME        :   " + in3.value + "</li>";
    let ulli4 = "<li class ='list-group-item text-center'>" + "WAS BORNED        :   " + in4.value + "</li>";
    ull.innerHTML += ulli1;
    ull2.innerHTML += ulli2;
    ull3.innerHTML += ulli3;
    ull4.innerHTML += ulli4;
    h1.innerHTML = "The process was completed successfully"
    in1.setAttribute("class","d-none");
    in2.setAttribute("class","d-none");
    in3.setAttribute("class","d-none");
    in4.setAttribute("class","d-none");
    subBtn.setAttribute("class","d-none");
    addBtn.setAttribute("class","d-none");
}


