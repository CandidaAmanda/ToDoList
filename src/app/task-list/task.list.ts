import { Component, Input,Output, EventEmitter } from "@angular/core";
import { taskItem } from '../task-item/task.item';

@Component({
    selector:'task-list',
    templateUrl:'./task.list.html'
})

export class taskListComponent{

    // @Output() taskCalled = new EventEmitter<{ItemName:string}>();
    @Output() taskCalled = new EventEmitter();
    
    @Input() taskItemName :string ='o';
    @Input('tip') taskItemPriority :string='o';

    ItemName:string;

    onChildButtonClicked()
    {
        this.ItemName='Candida';
        this.taskCalled.emit({ItemName:this.ItemName});
    }
   

}