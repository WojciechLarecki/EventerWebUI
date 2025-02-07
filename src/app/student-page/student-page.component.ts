import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-page',
  imports: [FormsModule],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.scss'
})
export class StudentPageComponent {
  student!: Student;
  eventJoinCode!: string;

  ngOnInit() {
    // load student from api
    this.student = new Student();
    this.student.Name = 'Wojciech';
    this.student.Surname = 'Larecki';
    let ev1 = new EventDTO();
    ev1.name = 'test1';
    
    let ev2 = new EventDTO();
    ev2.name = 'test2';
    
    this.student.Events = [
      ev1, ev2
    ]
  }
}

class Student {
  Name!: string;
  Surname!: string;
  Events!: EventDTO[];
}

class EventDTO {
  name!: string;
}