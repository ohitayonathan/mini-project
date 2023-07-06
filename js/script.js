const name = document.getElementById("nama");
const email = document.getElementById("email");
const makanan = document.getElementById("makanan");
const tombol = document.getElementById("tombol");

tombol.addEventListener("click", function(event){
    event.preventDefault()
    const nameValue = nama.value
    const emailValue = email.value
    const makananValue = makanan.value
    dataValidation(nameValue, emailValue, makananValue)
})

function dataValidation(name, email, makanan){
    if (name == "" || email =="" || makanan ==""){
        alert("Semua data harus diisi !!!")
    }else{
        updateUI(name, email, makanan)
    }
}

function updateUI(name, email, makanan){
    const name2 = document.getElementById("nama2");
    const email2 = document.getElementById("email2");
    const makanan2 = document.getElementById("makanan2");
    nama2.textContent = name
    email2.textContent = email
    makanan2.textContent = makanan
}

var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 3000)
function plusDiv(index){
    showImage(slideIndex += index)
}

function showImage(index){
    console.log(index)
    const imgList = document.getElementsByClassName("slider")
    if(index > imgList.length){slideIndex = 1}
    if(index < 1){slideIndex = imgList.length}
    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "block"
}
