import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professionals } from 'src/app/models/professionals.model';
import { Specialties } from 'src/app/models/specialties.model';
import { ProfessionalsService } from 'src/app/services/professionals.service';
import { SpecialtiesService } from 'src/app/services/specialties.service';

@Component({
  selector: 'app-search-professional',
  templateUrl: './search-professional.component.html',
  styleUrls: ['./search-professional.component.css']
})
export class SearchProfessionalComponent implements OnInit {
  searchProfessional!: string;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchProfessional'])
        this.searchProfessional = params['searchProfessional']
    })
  }

  search(): void {
    if (this.searchProfessional)
      this.router.navigateByUrl('/search/' + this.searchProfessional)
  }

}
