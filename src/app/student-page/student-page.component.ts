import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetUserRespDTO, UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-student-page',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.scss'
})
@Injectable({providedIn: 'root'})
export class StudentPageComponent {
  eventJoinCode!: string;
  user$!: Observable<GetUserRespDTO>;
  userEvents!: EventDTO[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user$ = this.userService.getUser("8E728743-8AEA-43A3-9B21-6C243D74AEA2");
    let ev1 = new EventDTO();
    ev1.name = 'test1';
    
    let ev2 = new EventDTO();
    ev2.name = 'test2';
    
    this.userEvents = [
      ev1, ev2
    ]
  }
}

class EventDTO {
  name!: string;
}