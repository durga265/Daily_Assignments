//1.Select Element by ID

//document by getelement by id
const uniqueid = document.getElementById('uniqueid');
//change the background color and font-size
uniqueid.style.backgroundColor = 'yellow';
uniqueid.style.fontSize = '36px';

//2.Select Elements by Class Name
const classpara = document.getElementsByClassName('classpara');
for (let i = 0; i < classpara.length; i++) {
    classpara[i].style.color = 'mediumseagreen';
}


//3.Select Elements by Tag Name
const button = document.getElementsByTagName('button');
for (let i = 0; i < button.length; i++) {
    button[i].style.border = '1px solid royalblue';
}


// 4. Select Element by Query Selector
const nestedElement = document.querySelector('.parent');
nestedElement.querySelector(".nestedElement").style.fontStyle = 'italic';

//5.. Select Elements by Query Selector All
const span = document.querySelectorAll('span')
span.forEach(function(value){
    value.style.margin="30px"
})

//6.Change Styles of Selected Elements 

const favorite = document.getElementById('favorite');

favorite.style.backgroundColor = 'yellow';
favorite.style.textAlign = 'center';
favorite.style.fontSize = '28px';
favorite.style.border = '5px solid red';
favorite.style.borderRadius = '15px';
favorite.style.fontFamily = 'Arial, Helvetica, sans-serif';



