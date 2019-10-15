import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.onItemsRetrieved((items) => this.items = items);
    this.itemService.subject.subscribe(x=>{
      if(x){
        this.itemService.onItemsRetrieved((items) => this.items = items);
      }
    })
  }

}
