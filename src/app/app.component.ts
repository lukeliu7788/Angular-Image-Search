import { Component } from '@angular/core';
import { ImagesServiceService } from './images-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Image Search';
  searchTerm='';
  loading=false;
  images=[];
  constructor(private imageservice:ImagesServiceService){
  }
  onSubmit(){
    this.images=[];
    this.loading=true;
    this.imageservice.search(this.searchTerm)
    .subscribe((result:any) => {
      this.images=result.photos;
      // console.log(result);
      this.loading=false;
    });
  }


}
