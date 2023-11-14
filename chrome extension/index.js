let arr=[]
const input=document.getElementById("san")
const savebtn=document.getElementById("tan")
const prtbtn=document.getElementById("pan")
const savbtn=document.getElementById("dan")
const delbtn=document.getElementById("fan")
const leads=JSON.parse(localStorage.getItem("arr"))

if(leads){
    arr = leads
    render()
}
savbtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        arr.push(tabs[0].url)
        localStorage.setItem("arr", JSON.stringify(arr) )
        render()
    })


})

savebtn.addEventListener("click",function(){

    arr.push(input.value)
    input.value=""
    localStorage.setItem("arr",JSON.stringify(arr))
    render()
    
})

delbtn.addEventListener("click",function(){
    localStorage.clear()
    arr.length=0
    render()


})

function render(){
    let listitems=""
    for(let i=0;i<arr.length;i++){
    
        listitems+=`<li> <a href='${arr[i]}' target='_blank'> ${arr[i]}</a> </li>`
    }
    prtbtn.innerHTML=listitems
}

