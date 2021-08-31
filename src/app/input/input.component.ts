import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

public username: any;
public profileData:any;
public reposData:any;
public errMsg:any;


  constructor(private githubService:GithubService) { }

  public search(){
    this.githubService.profile(this.username).subscribe(data=>{
      this.profileData = data;
      // console.log(this.profileData.login)
    }, error=>{
      this.errMsg=error
    });
    this.githubService.repos(this.username).subscribe(
      (data) => {
        this.reposData = data;
      },
      (error) => {
        this.errMsg = error;
      }
    );
  }
  ngOnInit(): void {
  }

}
