import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  public listePosts=[];
   private CurrentPays;
  
  constructor(
    private http:HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.CurrentPays = params['name'];})
        console.log(this.CurrentPays);
        this.http.get("http://localhost:3000/data?pays="+this.CurrentPays).subscribe((resultat : any)=>{
        this.listePosts=resultat;
        console.log(this.listePosts)})
      }
}
