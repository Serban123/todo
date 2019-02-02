function adauga() {
    var input = document.getElementById("text-input").value;
    
   var li = document.createElement("li");
   li.setAttribute("class","list-item");
   var div = document.createElement("div");
   div.setAttribute("class","list-item__center");
   var node = document.createTextNode(input);
   li.appendChild(div);
   div.appendChild(node);

    var check = document.createElement("ons-checkbox");
    check.setAttribute("input-id","check-2");

    li.appendChild(check);

   var ul = document.getElementById("list");
    ul.appendChild(li)

    document.getElementById("text-input").value = "";
    

}

function sterge() {
    
    var ul2 = document.getElementById("list");

    
    ul2.innerHTML = "";
}

    
    