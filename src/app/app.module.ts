import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 



import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { taskFormComponent } from './task-form/task.form';
import { taskListComponent } from './task-list/task.list';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    taskFormComponent,
    taskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
