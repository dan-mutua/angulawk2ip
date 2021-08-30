import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

public username: any;
public Profile:any;
public Repos:any;
public errMsg:any;


  constructor(private githubService:GithubService) { }

  public search(){
    this.githubService.Profile(this.username).subscribe(data=>{
      this.Profile = data;
    }, error=>{
      this.errMsg=error
    });
    this.githubService.Repos(this.username).subscribe(
      (data) => {
        this.Repos = data;
      },
      (error) => {
        this.errMsg = error;
      }
    );
  }
  ngOnInit(): void {
  }

}
