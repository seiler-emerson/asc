import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professionals } from 'src/app/models/professionals.model';
import { ProfessionalsService } from 'src/app/services/professionals.service';
import { Specialties } from 'src/app/models/specialties.model';
import { SpecialtiesService } from 'src/app/services/specialties.service';

@Component({
  selector: 'app-professional-search',
  templateUrl: './professional-search.component.html',
  styleUrls: ['./professional-search.component.css']
})
export class ProfessionalSearchComponent implements OnInit {
  professionals: Professionals[] = [];
  responsiveOptions;
  specialties: Specialties[] = [];

  constructor(private ps: ProfessionalsService, private route: ActivatedRoute, private sps: SpecialtiesService) {
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
    }];
  }

  ngOnInit(): void {
    // this.professionals = this.ps.getAll();
    // this.specialties = this.sps.getAllSpecialties();

    // this.route.params.subscribe(params => {
      //  arrumar pra funcionar o filtro por nome e especialidade 
      // if (params['searchProfessional'])
      //   this.professionals = this.ps.getAll().filter(professional =>
      //     professional.name.toLowerCase().includes(params['searchProfessional'].toLowerCase()));
      // else 
      // if (params['searchProfessional'])
      //   this.professionals = this.ps.getAll().filter(professional =>
      //     professional.specialty.toLowerCase().includes(params['searchProfessional'].toLowerCase()));
      // else
      //   this.professionals = this.ps.getAll();
    }
    
  }
