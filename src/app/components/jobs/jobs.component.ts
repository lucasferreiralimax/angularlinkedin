import { Component, OnInit } from '@angular/core';

import { JobsService } from '../../services/jobs.service'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.styl']
})
export class JobsComponent implements OnInit {

  constructor(private jobsService:JobsService) { }

  jobs = []

  getJobs(): void {
    this.jobsService.getJobs()
        .subscribe(jobs => this.jobs = jobs)
  }

  ngOnInit() {
    this.getJobs()
  }

}
