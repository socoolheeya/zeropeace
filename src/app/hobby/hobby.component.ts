import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {
  parentRouteId: number;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
