
//! book constructor
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}

//! display constructor
function Display(){
    
}

Display.prototype.add=function(book){
    let element=document.getElementById('table-body');
    let UiString;

    UiString=`<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`;

  element.innerHTML += UiString;
}

Display.prototype.clear=function () {
    let formSubmit=document.getElementById('formSubmit');
    formSubmit.reset();
}

Display.prototype.validate=function(book){

    if(book.name.length<2 || book.author.length<2)
    {
        return false;
    }else{
        return true;
    }
}

Display.prototype.show=function(type,msgType){

    let msg=document.getElementById('message');
    msg.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong> Message :  </strong> ${msgType}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`

  setTimeout(function(){
    msg.innerHTML='';
  },5000); //! after 5 second this alert will disappear
}

document.getElementById('formSubmit').addEventListener('submit',store);

function store(e){
    console.log('form submitted');
    let name=document.getElementById('book').value;
    let author=document.getElementById('author').value;
    let type;
    let fiction=document.getElementById('fiction');
    let computerProgramming=document.getElementById('computerProgramming');
    let cooking=document.getElementById('cooking');

    if(fiction.checked)
    {
        type=fiction.value;
    }else if(computerProgramming.checked){
        type=computerProgramming.value;

    }else if (cooking.checked)
    {
        type=cooking.value;
    }

    const book=new Book(name,author,type);
    console.log(book);
    const display=new Display();
    console.log(display);

    if(display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show('success','Your Book has beed added successfully');
    }else{

        //show some error
        display.show('danger','Your Book is not added.There is the problem with the book name or author name');
    }
    

    e.preventDefault();
}
