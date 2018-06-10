import { EmployeeCardComponent } from './employeeCard.component';

export class EmployeeDiagramComponent {

  constructor() {
    this.enableCollapse = false;
  }

  render(template, employee) {

    if (this.isTeamLead(employee)) {
      const teamLead = this.renderTeamlead(employee);
      template.appendChild(teamLead);
    }
    
    if (this.isSenior(employee)) {
      const senior = this.renderSenior(employee);
      template.appendChild(senior);
    }

    if (this.isJunior(employee)) {
      const junior = this.renderJunior(employee);
      template.appendChild(junior);
    }

    for (let child of employee.children) {
      this.render(document.getElementById(employee.id), child);
    }
  }

  isTeamLead(employee) {
    return !employee.superiorId;
  }

  isSenior(employee) {

    if(employee.superiorId) {
      return employee.children.length !== 0;
    }  
    
  }

  isJunior(employee) {
    return employee.children.length === 0;
  }

  renderTeamlead(employee) {
    return this.renderCardWrapper(employee, 'teamlead');
  }

  renderSenior(employee) {
    return this.renderCardWrapper(employee, 'senior');
  }

  renderJunior(employee) {
    return this.renderCardWrapper(employee, 'junior');
  }

  renderCardWrapper(employee, type) {
    const card = (new EmployeeCardComponent(employee)).render();
    const element = document.createElement('li');
    element.setAttribute('class', type);
    element.innerHTML = `
      <div class='card-wrapper'></div>
      <div class='${employee.id}'><i class="fa fa-minus-square-o" aria-hidden="true"></i></div>
      <ul id='${employee.id}' class='${type}'></ul>
    `;
    element.getElementsByClassName('card-wrapper')[0].appendChild(card);

    // element.getElementsByClassName(employee.employeeid)[0].onclick = () => this.onClick()
    return element;
  }
}
