import { Component, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Board, Iboard } from '../../../models/board.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-initial-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './initial-input.component.html',
  styleUrl: './initial-input.component.scss'
})
export class InitialInputComponent {
  @Output() onSubmittingInfo = new EventEmitter<any>();
  @Output() onCancelBtnClicked = new EventEmitter<any>();

  boardForm: FormGroup;
  boardData: Iboard = {} as Iboard;

  constructor(private formBuilder: FormBuilder) {
    this.boardForm = this.formBuilder.group({
      boardName: ['', Validators.required],
      columns: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.columns.push(this.createColumn("Todo"));
    this.columns.push(this.createColumn("In-Progress"));
    this.columns.push(this.createColumn("Completed"));
  }

  createColumn(columnName: string): FormGroup {
    return this.formBuilder.group({
      name: [columnName, Validators.required],
      tasks: this.formBuilder.array([])
    });
  }

  addColumn() {
    this.columns.push(this.formBuilder.group({
      name: ['', Validators.required],
      tasks: this.formBuilder.array([])
    }));
  }

  removeColumn(columnIndex: number) {
    this.columns.removeAt(columnIndex);
  }

  addTask(columnIndex: number) {
    const tasks = (this.boardForm.get('columns') as FormArray).at(columnIndex).get('tasks') as FormArray;
    tasks.push(this.formBuilder.group({
      taskName: ['', Validators.required],
      taskDescription: ['', ]
    }));
  }

  removeTask(columnIndex: number, taskIndex: number) {
    const tasks = (this.boardForm.get('columns') as FormArray).at(columnIndex).get('tasks') as FormArray;
    tasks.removeAt(taskIndex);
  }

  get columns(): FormArray {
    return this.boardForm.get('columns') as FormArray;
  }

  getColumnTasks(columnIndex: number): FormArray | null  {
    const column = this.columns.at(columnIndex);
    return column ? column.get('tasks') as FormArray : null;
  }

   onSubmit() {
    if (this.boardForm.valid) {
      this.boardData = this.boardForm.value as Iboard;
      this.onSubmittingInfo.emit(this.boardData);
    }
  }

  onCancel() {
    this.onCancelBtnClicked.emit(null);
  }

}
