import { Component, Input, OnInit,SimpleChanges,  OnChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price : number= 0;

  ngOnInit(): void {
    console.log('ngOnInit');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log({changes});
    
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
  }


}
