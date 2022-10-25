import { Component, OnInit } from '@angular/core';
import { Appointments } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent implements OnInit {
  appointments: Appointments[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.findAll();
    console.log(this.appointments);
  }

  findAll(): void {
    this.appointmentService.getAll().subscribe((resposta) => {
      this.appointments = resposta;
      console.log(this.appointments)
    })
  }
}
