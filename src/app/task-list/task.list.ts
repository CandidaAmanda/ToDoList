import { Component, Input,Output, EventEmitter, OnInit } from "@angular/core";
import { taskItem } from '../task-item/task.item';
import { DataService } from '../services/data.service';

@Component({
    selector:'task-list',
    templateUrl:'./task.list.html'
})

export class taskListComponent implements OnInit{

    

    constructor (private dataService: DataService)
    {}
    totalItemsList:taskItem[]=[];

    ngOnInit()
    {

        this.totalItemsList=this.dataService.displayList();
        console.log("Inside task List service");
        console.log(this.totalItemsList);

    }
    
    // @Output() taskCalled = new EventEmitter<{ItemName:string}>();
    @Output('abc') taskCalled = new EventEmitter<{ItemName:string}>();
    
    @Input() taskItemName :string ='o';
    @Input('tip') taskItemPriority :string='o';

    ItemName:string;

    onChildButtonClicked()
    {
        this.ItemName='Candida';
        this.taskCalled.emit({ItemName:this.ItemName});
        
    }

    


   

}