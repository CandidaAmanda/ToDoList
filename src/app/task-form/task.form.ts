import { Component } from "@angular/core";
import { taskItem } from '../task-item/task.item';
import { LoggingService } from '../services/logging.service';
import { DataService } from '../services/data.service';

@Component({
selector: 'task-form',
templateUrl:'./task.form.html'
})

export class taskFormComponent{

    buttonEnabled:boolean=false;
    ItemName:string;

    constructor(private loggingService:LoggingService, private dataService: DataService)
  {
    setTimeout(()=>{this.buttonEnabled=true},2000);
  }

  
  taskName:string='';
  taskPriority:string='';
  numberOfTasks:number=0;
  tasksPresent:boolean=false;
  taskItemList:taskItem[]=[];
  newTaskItem:taskItem;

  onAddTask(event:any){

    console.log(event);

    if (this.taskName !="" && this.taskPriority!="")
    {
      this.newTaskItem=new taskItem(this.taskName,this.taskPriority);
      this.taskItemList.push(this.newTaskItem);
      this.dataService.onItemAdded(this.newTaskItem);
      this.tasksPresent=true;
      this.loggingService.onLoggingData(this.taskName);
    }

    else
    {alert ("Please enter required fields");}

    this.taskName ="";
    this.taskPriority="";
  
    
    this.numberOfTasks=this.taskItemList.length;
    

  }

  onTLC(event)
  {
  alert (event.ItemName);
  //   console.log(ItemName);
  //
  console.log(event); 
}
  
}