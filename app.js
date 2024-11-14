function message(){
    alert("Thanks for purchasing a mobile phone from us!")
}

function increaseBtn(){
    // var currentVal=0;
    var currentVal = parseInt(document.getElementById("counterBox").value);
    currentVal++
document.getElementById("counterBox").value=currentVal;
    
}

function dereaseBtn(){
    var dereaseValue=parseInt(document.getElementById("counterBox").value);
    dereaseValue --;
    document.getElementById("counterBox").value=dereaseValue;
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }



//get data 
function getData(e){
    e.preventDefault();
    var userName=document.getElementById("userName").value;
    // document.write(userName+"<br>");  
    console.log(userName);
    

    var email=document.getElementById("email").value;
    console.log(email);
    // document.write(email+"<br>");  

    var pswrd =document.getElementById("password").value;
    console.log(pswrd);
    // document.write(pswrd);  
}


function readMore() {
    var fullText = document.getElementById("full-text");
    var buttonText = document.getElementById("read-more");
  
    if (fullText.style.display === "none") {
      fullText.style.display = "block";
      buttonText.innerHTML = "Read Less";
    } else {
      fullText.style.display = "none";
      buttonText.innerHTML = "Read More";
    }
  }
  var students = [];
  var updateIndex = null;
  
  function addStudent() {
    var name = document.getElementById('name').value;
    var classVal = document.getElementById('class').value;
    students.push({ name: name, class: classVal });
    displayStudents();
    document.getElementById('name').value = '';
    document.getElementById('class').value = '';
  }
  
  function displayStudents() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    for (var i = 0; i < students.length; i++) {
      var student = students[i];
      var row = '<tr><td>' + student.name + '</td><td>' + student.class + '</td><td><button onclick="deleteStudent(' + i + ')">Delete</button></td><td><button onclick="editStudent(' + i + ')">Edit</button></td></tr>';
      tableBody.innerHTML += row;
    }
  }
  
  function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
  }
  
  function editStudent(index) {
    var student = students[index];
    document.getElementById('edit-form').style.display = 'block';
    document.getElementById('edit-name').value = student.name;
    document.getElementById('edit-class').value = student.class;
    updateIndex = index;
  }
  
  function updateStudent() {
    var name = document.getElementById('edit-name').value;
    var classVal = document.getElementById('edit-class').value;
    students[updateIndex].name = name;
    students[updateIndex].class = classVal;
    displayStudents();
    document.getElementById('edit-form').style.display = 'none';
  }