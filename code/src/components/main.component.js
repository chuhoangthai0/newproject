import { EmployeeDiagramComponent } from './employeeDiagram.component';

export class MainApp {

  render(employee) {
    const app = document.getElementById('app');

    app.innerHTML = `
      <div class='tree'>
        <ul class='diagram'></ul>
      </div>
    `;
  
    const diagram = app.getElementsByClassName('diagram')[0];
  
    (new EmployeeDiagramComponent()).render(diagram, employee);
  }

}
