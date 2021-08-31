import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  @Input() profileData:any;
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
