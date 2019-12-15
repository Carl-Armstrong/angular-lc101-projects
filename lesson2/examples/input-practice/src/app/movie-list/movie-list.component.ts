import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      if(!this.movies.includes(newTitle)){
         if (newTitle === '') {
            window.alert("There is nothing in the text box")
         } else {
         this.movies.push(newTitle);
         }
      } else {
         window.alert("This title is already on the list");
      }
   }
}