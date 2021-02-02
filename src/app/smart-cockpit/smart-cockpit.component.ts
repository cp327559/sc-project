import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-cockpit',
  templateUrl: './smart-cockpit.component.html',
  styleUrls: ['./smart-cockpit.component.css']
})
export class SmartCockpitComponent implements OnInit {
  today: Date;
  constructor() { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.today = new Date();
  }

}
