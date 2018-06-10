import CourseGreeter from './course-greeter';
import GetJson from './parser-json'
import { MainApp } from './components/main.component'

  // import {
  //   createInsertTag
  // }
  // from './InsertNewCard'
import MapEmployee from './mapEmployee'
const JsonData = new GetJson();

let employees = JsonData.GetJsonData();

let mapEmployee = new MapEmployee();

let map = mapEmployee.getMapEmployee(employees);

let tree = mapEmployee.getTreeEmployee(employees);

const rootULID = 1;
//
// console.log(map);
// employeeForId[employee.superiorId].children.for each child -> child.id === employee.id -> spilce child


// const greeter = new CourseGreeter('ES6 and Beyond');

(new MainApp()).render(tree);

window.clickFunction = function(value) {
  let displayTag = document.getElementById(value.id).style.display;
  if (displayTag === 'none') {
    document.getElementById(value.id).style.display = 'block';
  } else {
    document.getElementById(value.id).style.display = 'none';
  }
}

window.displayFunction = function(value) {
  let displayTag = document.getElementById(value).style.display;
  if (displayTag === 'none') {
    document.getElementById(value).style.display = 'block';
  } else {
    document.getElementById(value).style.display = 'none';
  }
}

// window.deleteFunction = function(id){
// console.log(id.id);
// }
//
// window.editFunction = function(value){
//   console.log(value);
// }
window.deleteFunction = function(value) {
  let superiorId = map[value].superiorId;
  for (let child of map[superiorId].children) {
    if (child.id === value) {
      var i = map[superiorId].children.indexOf(child);
      if (i != -1) {
        map[superiorId].children.splice(i, 1);
      }
    }
  }
  document.getElementById(rootULID).remove();
  RenderHTML(tree);
}

window.dbclickFunction = function(id) {
  tree = map[id];
  delete tree.superiorId;
  document.getElementById(rootULID).remove();
  RenderHTML(tree);
}


window.InsertNewCard = function(value) {
  let employee = map[value];
  let tagInsert = createInsertTag(employee)
  document.getElementById(employee.employeeId + employee.id).appendChild(
    tagInsert);
}

window.changeAvatar = function() {
  document.getElementById('myFileInput').click();

}
