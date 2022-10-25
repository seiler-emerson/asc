import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
baseUrl: String = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getTeam(): Observable<Team[]>{
    const url = this.baseUrl + '/team';
    return this.httpClient.get<Team[]>(url);
  }
}
