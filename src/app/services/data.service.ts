import { taskItem } from '../task-item/task.item';

export class DataService{

listOfTasks:taskItem[]=[];

onItemAdded (newTaskItem:taskItem){
    this.listOfTasks.push(newTaskItem);
    console.log(this.listOfTasks);
}

displayList(){

    return this.listOfTasks;
}


}

