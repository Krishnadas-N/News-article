import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Articles } from '../../core/interfaces/articles';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit,OnDestroy{
   searchQuery=''
   imageUrl="https://img.freepik.com/free-vector/newspaper-concept-illustration_114360-22666.jpg?w=826"
   articles:Articles[]=[];
    articleSubscription:Subscription|undefined
    constructor(private articleService:ApiService) {
    }
    ngOnInit(): void {
    this.loadArticles()
    }
    loadArticles(){
      this.articleSubscription =this.articleService.getAtricles(this.searchQuery).subscribe({
        next:(res)=>{
            this.articles= res;
             console.log(this.articles)
        },
        error:(err)=>{
          alert(err.message)
        }
      })
    }
ngOnDestroy(): void {
if(this.articleSubscription){
this.articleSubscription.unsubscribe()
}
}
}
