setTimeout(() => {
    console.log("This work")
    let element = document.getElementById("this_element");
    element.innerText = "This changed, didn't it";
},
    2000)