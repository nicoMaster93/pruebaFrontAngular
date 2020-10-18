import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss']
})
export class HowComponent implements OnInit {

  constructor(public rest: RestService) { }
  marcas:any;
  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(){
    const postData = new FormData();
    postData.append('page', "1");
    this.rest.getDataRestApi(postData,"get")
    .then(data => {  
      let cd : any = data;
      if(cd.success){
        this.marcas = cd.data.response.data
        console.log(this.marcas);
      }
    });
  }

}
