export class ActionComponent {

  constructor(
    employee,
    onEdit,
    onSave,
    onDelete
  ) {
    this.employee = employee;
    this.onEdit = onEdit;
    this.onSave = onSave;
    this.onDelete = onDelete;
    
    this.editButton = null;
    this.isEditing = false;

    this.init();
  }

  
  init() {
    this.element = document.createElement('div');
    this.element.innerHTML =
      `
      <div class='iconTag ${this.employee.employeeId}' style="display: block;" >
        <div class="edit">
          <i class="fa fa-pencil" aria-hidden="true"></i>
          <i class="fa fa-floppy-o" aria-hidden="true" style="opacity: 0"></i>
        </div>
        <div class=""><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
        <div class=""><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
        <div class="delete"><i class="fa fa-trash" aria-hidden="true"></i></div>
      </div>
    `;

    
    this.editButton = this.element.getElementsByClassName('edit')[0];
    this.editButton.onclick = () => this.onClickEdit();

    this.element.getElementsByClassName('delete')[0].onclick = () => this.ondelete();
  }

  onClickEdit() {
    this.editButton.getElementsByClassName('fa-pencil')[0].style.opacity = Number(this.isEditing);
    this.editButton.getElementsByClassName('fa-floppy-o')[0].style.opacity =  Number(!this.isEditing);
    
    if (this.isEditing) {
      this.onSave();
    } else {
      this.onEdit();
    }

    this.isEditing = !this.isEditing;
  }

  render() {
    return this.element;
  }
}
