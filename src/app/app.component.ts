
import { Component } from '@angular/core';
import { GithubService} from './service/github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulawk2ip';

 
users:string[]=[]
constructor( private githubService:GithubService){}

// search(){
//  this.githubService.getData().subscribe((data: any) =>{
//    console.log(data)
//    this.users = data
//  })

// }

}


