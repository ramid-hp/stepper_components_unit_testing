import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  activeTab = 0;
  policyTabToggle=true
  constructor() { }

  ngOnInit(): void {
  }

  changeTab=(data)=>{
    this.policyTabToggle=false
    this.activeTab=data
  }
  switch=(index)=>{
    this.activeTab=0
   }

}
