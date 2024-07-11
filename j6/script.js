
//Task 1: Creating and Appending an Element
const mydiv = document.createElement('div');
console.log(mydiv);
const addText = document.createTextNode('Hello World!...😀')
mydiv.appendChild(addText);
document.body.appendChild(mydiv)

//Task 2: Changing the Content of an Existing Element

const text = document.querySelector('p')
// p.outerHTML=`This is updated Content`;
text.innerHTML = "This is updated content";

//Task 3: Creating and Appending a List of Items

function New(items) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(items));
    document.querySelector('.item').appendChild(li)
}
New('Item-3')
New('Item-4')

//Task 4: Editing an Attribute of an Element

const img = document.querySelector("img");
img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eBaLch5sUuKiSrU5sZtLhHe2-BuVVvBv2A&s")

//Task 5: Deleting an Element
const removetext = document.querySelector(".element")
removetext.remove()