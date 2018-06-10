import { ActionComponent } from '../src/components/action.component';
var jsdom = require('mocha-jsdom');
var sinon = require('sinon');
import { expect }  from 'chai';


describe('ActionComponent', () => {
    jsdom();

    let employee;
    let component;

    let template;
    let editButton;
    let saveButton;
    
    beforeEach(() => {
        employee = {
            employeeId: '10',
        };

        component = new ActionComponent(
            employee, 
            () => {}, 
            () => {}, 
            () => {},
        );
        
        template = component.render();

        editButton = template.getElementsByClassName('fa-pencil')[0];
        saveButton = template.getElementsByClassName('fa-floppy-o')[0];
    });

    it('should have all actions', () => {
        const actionsCount = template.getElementsByTagName('i').length;
        expect(actionsCount).to.equal(5);

        expect(Number(saveButton.style.opacity)).to.equal(0);
    });

    it('onClickEdit should show and hide edit action correctly', () => {
        component.onClickEdit();
        expect(Number(editButton.style.opacity)).to.equal(0);
        expect(Number(saveButton.style.opacity)).to.equal(1);

        component.onClickEdit();
        expect(Number(editButton.style.opacity)).to.equal(1);
        expect(Number(saveButton.style.opacity)).to.equal(0);
    });

    
    it('onClickEdit should call call back function correctly', () => {
        const editCallback = sinon.spy(component, 'onEdit');
        const saveCallback = sinon.spy(component, 'onSave');

        component.onClickEdit();
        sinon.assert.called(editCallback);
        sinon.assert.notCalled(saveCallback);

        component.onClickEdit();
        sinon.assert.calledOnce(editCallback);
        sinon.assert.called(saveCallback);
    });

});