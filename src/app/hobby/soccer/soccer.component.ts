import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.scss']
})
export class SoccerComponent implements OnInit, OnDestroy {
  id: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
