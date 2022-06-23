import { PureTaskListComponent } from './pure-task-list.component';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';
import { TasksState } from './../state/task.state';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { NgxsModule, Store } from '@ngxs/store';
import { InternalStateOperations } from '@ngxs/store/src/internal/state-operations';


@NgModule({
  imports:[CommonModule,NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent,TaskListComponent],
  declarations:[TaskComponent,TaskListComponent,PureTaskListComponent],
  providers:[]
})
export class TaskModule{}
