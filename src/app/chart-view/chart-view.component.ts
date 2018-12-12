import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartComponent } from '../chart/chart.component';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})

export class ChartViewComponent implements OnInit {
  componentRef;
  dataSet;
  search;
  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;

  constructor ( public _api: ApiService, public _data: ChartDataService, private componentFactoryResolver: ComponentFactoryResolver ) { }

  public createComponent (): void {
    const chartComponent = this.componentFactoryResolver.
        resolveComponentFactory( ChartComponent );
    this.componentRef = this.parent.createComponent( chartComponent );
  }

  validInput ( input ) {
    if ( input !== '' && input.length > 3 ) {
      return true;
    }
  }

  getIntraDay () {
    if ( this.validInput( this.search ) ) {
      this._api.stockIntraDay( this.search, '30min' ).subscribe(
        ( res ) => {
          const dataAry = [];

          console.log( 'Api Response', res );

          for ( const data of Object.values( res[ 'Time Series (Daily)' ] ) ) {
            dataAry.push( data[ '4. close' ] );
          }

          this.dataSet = {
            data: dataAry
          };

          this._data.dataArray = [ this.dataSet ];
          this._data.dataLength = dataAry.length;
          console.log( this._data.dataArray );
        }
      );
    }
  }


  getDaily () {
    if ( this.validInput( this.search ) ) {
      this._api.stockDaily( this.search ).subscribe(
        ( res ) => {
          const dataAry = [];

          console.log( 'Api Response', res );

          for ( const data of Object.values( res[ 'Time Series (Daily)' ] ) ) {
            dataAry.push( data[ '4. close' ] );
          }

          this.dataSet = {
            data: dataAry
          };

          this._data.dataArray = [this.dataSet];
          this._data.dataLength = dataAry.length;
          console.log(this._data.dataArray);
        }
      );
    }
  }

  ngOnInit() {
  }

}
