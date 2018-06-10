export default class MapEmployee {

    constructor() {
        this.mapEmployee = {};
        this.rootEmployee ={};
    }

    getMapEmployee(employees){
      
      for (let employee of employees){
        this.mapEmployee[employee.id] = employee;
      }
      return this.mapEmployee
    }


    getTreeEmployee(employees){
      for (let employee of employees){
        employee.children = [];
      }


      for (let employee of employees){
          if(!employee.superiorId){
            this.rootEmployee = this.mapEmployee[employee.id];
          }else {
            this.mapEmployee[employee.superiorId].children.push(employee)
          }
      }
      return  this.rootEmployee;
    }
    // deleteByID(id){
    //   for (let employee of employees){
    //     employee.children = [];
    //   }
    //
    //   let employeeForID = this.mapEmployee;
    //
    //   let superiorId = employeeForID[id].superiorId;
    //   for (let child of employeeForId[superiorId].children){
    //     if( child.id == id){
    //       employeeForId[superiorId].children.spilce(child,1)
    //     }
    //   }
    //   console.log();
    //   // employeeForId[employee.superiorId].children.for each child -> child.id === employee.id -> spilce child
    // }

}
