import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team : Team[] = [];
  constructor(private ts: TeamServiceService) { }

  ngOnInit(): void {
    this.getAllTeam();
    console.log(this.team);

  }

  getAllTeam():void{
    this.ts.getTeam().subscribe((resposta) =>{
      this.team = resposta;
      console.log(this.team)
    })
  }

}
