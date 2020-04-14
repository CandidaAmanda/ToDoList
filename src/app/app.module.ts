import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 



import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { taskFormComponent } from './task-form/task.form';
import { taskListComponent } from './task-list/task.list';
import { PriorityStyle } from './priority-style/priority-style.directive';
import { TaskStyleDirective } from './priority-style/task-style.directive';
import { UnlessDirective } from './unless.directive';
import { LoggingService } from './services/logging.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    taskFormComponent,
    taskListComponent,
    PriorityStyle,
    TaskStyleDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
