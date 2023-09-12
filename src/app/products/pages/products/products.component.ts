import { CurrencyPipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-products-pages',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy{

  public isProductIsVisble : boolean = false;

  public changesPrice : number = 10;

  constructor(){}
  ngOnInit(): void {
    console.log('ngOnInit');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('ngOnChanges');
    
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
    
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
  }

  increasePrice(){
    this.changesPrice++;
  }
  
}
