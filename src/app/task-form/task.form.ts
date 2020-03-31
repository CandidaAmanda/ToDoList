import { Component } from "@angular/core";
import { taskItem } from '../task-item/task.item';

@Component({
selector: 'task-form',
templateUrl:'./task.form.html'
})

export class taskFormComponent{

    buttonEnabled:boolean=false;
    constructor()
  {
    setTimeout(()=>{this.buttonEnabled=true},2000);
  }

  taskName:string='';
  taskPriority:string='';
  numberOfTasks:number=0;
  taskItemList:taskItem[]=[];

  onAddTask(event:any){

    console.log(event);

    if (this.taskName !="" && this.taskPriority!="")
    {
      this.taskItemList.push(new taskItem(this.taskName,this.taskPriority));
    }

    else
    {alert ("Please enter required fields");}

    this.taskName ="";
    this.taskPriority="";
  
    
    this.numberOfTasks=this.taskItemList.length;
    

  }
  
}