$(document).ready(function () {
  getStudentData().then(function(studentData) {
    console.log(studentData)
  }).catch(function(err) {
    console.log(err);
  })
});

function buildStudentList(stundentData) {
  return studentData.students.map(function(student, index) {
    return convertStudentObjectToListItem(student)
  })
}

function convertStudentObjectToListItem(student) {

  var studentName = document.createTextNode([student.first_name, student.last_name].join(' '));
  studentNameContainer.appendChild(studentName);
  
  var studentNameContainer = document.createElement('p');
  var studentDOBContainer = document.createElement('p');
  var studentEmailContainer = document.createElement('p');

  var studentListItem = document.createElement('li');
  studentListItem.appendChild(studentNameContainer);
  studentListItem.appendChild(studentDOBContainer);
  studentListItem.appendChild(studentEmailContainer);
}

function renderStudentList(studentList) {

}

function getStudentData() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8000/students',
      success: resolve,
      error: reject
    });
  });
}
