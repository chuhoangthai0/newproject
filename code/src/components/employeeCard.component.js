import { ActionComponent } from './action.component';


export class EmployeeCardComponent {
  constructor(employee) {
    
    this.employee = employee
    this.enableActions = false;
    this.isEdit = false;
    this.viewInfo = {
      fullName: {},
      department: {},
      employeeId: {}
    }

    this.editForm = {
      formLastName: {},
      formFirstName: {},
      formDepartment: {},
      formEmployeeId: {}
    }
    
    this.init();
  }

  init() {
    this.initTemplate();
    this.initAction();
    this.initForm();
    this.onSave();
  }

  initTemplate() {
    this.element = document.createElement('a');
    this.element.innerHTML =`
      <div class="info" id ="${this.employee.employeeId}">
        <div class="img">
          <img src="images/avatar.png">
        </div>
        <div class="card-info">
          <h1 class="fullName">${this.employee.firstName} ${this.employee.lastName}</h1>
          <h3 class="department">${this.employee.department}</h3>
          <h3 class="employeeId">${this.employee.employeeId}</h3>
          <h4>@kms-technology.com</h4>
        </div>
        <div class="card-edit">
          <form action="">
            <input type="text" name="firstName" class="firstName" value="${this.employee.firstName}">
            <input type="text" name="lastName" class="lastName" value="${this.employee.lastName}">
            <br>
            <select class="Department">
              <option value="Management">Management</option>
              <option value="IT">IT</option>
              <option value="Delivery">Delivery</option>
              <option value="Technology Services">Technology Services</option>
            </select>
            <br>
            <input type="text" name="lastName" class="EmployeeId" value="${this.employee.employeeId}">
            <h4>@kms-technology.com</h4>
          </form>
        </div>
      </div>
      <div class='action'></div>
    `;

    this.element.getElementsByClassName('info')[0].onclick = () => this.onClick();
  }

  initAction() {
    const actionTemplate = (new ActionComponent(
      this.employee,
      this.onEdit.bind(this),
      this.onSave.bind(this),
      null,
    )).render();
    this.action = this.element.getElementsByClassName('action')[0];
    this.action.appendChild(actionTemplate);
  }

  initForm() {

    this.cardInfo = this.element.getElementsByClassName('card-info')[0];
    this.cardEditForm = this.element.getElementsByClassName('card-edit')[0];

    this.viewInfo.fullName = this.cardInfo.getElementsByClassName('fullName')[0];
    this.viewInfo.department  = this.cardInfo.getElementsByClassName('department')[0];
    this.viewInfo.employeeId = this.cardInfo.getElementsByClassName('employeeId')[0];

    this.editForm.formLastName = this.cardEditForm.getElementsByClassName('firstName')[0];
    this.editForm.formFirstName = this.cardEditForm.getElementsByClassName('lastName')[0];
    this.editForm.formDepartment = this.cardEditForm.getElementsByClassName('Department')[0];
    this.editForm.formEmployeeId =this.cardEditForm.getElementsByClassName('EmployeeId')[0];
    
  }

  onClick() {
    if(!this.isEdit) {
      this.action.style.opacity = Number(this.enableActions);
      this.enableActions = !this.enableActions;
    }
  }

  onEdit() {
    this.isEdit = true ;
    this.element.getElementsByClassName('info')[0].style.poiterEvent= 'none';
    this.cardInfo.style.display = 'none';
    this.cardEditForm.style.display = 'block';
  }

  onSave() {
    this.isEdit = false ;
    this.cardInfo.style.display = 'block';
    this.cardEditForm.style.display = 'none';
    this.viewInfo.fullName.innerHTML = this.editForm.formFirstName.value +' '+this.editForm.formLastName.value;
    this.viewInfo.department.innerHTML= this.editForm.formDepartment.value;
    this.viewInfo.employeeId.innerHTML= this.editForm.formEmployeeId.value;
  }

  render() {
    return this.element;
  }

}