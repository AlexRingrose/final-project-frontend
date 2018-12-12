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

  getPast5 () {
    if ( this.validInput( this.search ) ) {
      this._api.stockIntraDay( this.search, '30min' ).subscribe(
        ( res ) => {
          const dataAry = [];
          let timestampAry = [];

          console.log( 'Api Response', res );

          /*
            if key (cut out date) is 'new' add to label array
          */

          // for ( const label of Object.keys( res[ 'Time Series (30min)' ] ) ) {
          //   timestampAry.push( label.substring(0, 10) );

          //   if (temp !== currentLbl || currentLbl !== '' ) {
          //     timestampAry.push( temp );
          //     currentLbl = temp;
          //   }
          // }

          let currentLbl = '';
          for ( const [label, data] of Object.entries( res[ 'Time Series (30min)' ] ) ) {

            // Building data array
            dataAry.push( parseFloat(data[ '4. close' ]).toFixed(2) );

            /*
              Building label array,
              grabs date and assigns if is a 'new' date,
              non-new dates are empty labels
            */
           
            if ( currentLbl !== '') {
              if ( label !== currentLbl) {
                const tempLbl = label.substring(0, 10);
                timestampAry.push( tempLbl );
                currentLbl = tempLbl;
              } else {
                timestampAry.push( '' );
              }
            } else {
              const tempLbl = label.substring(0, 10);
                timestampAry.push( tempLbl );
                currentLbl = tempLbl;
            }
          }

          // for ( const data of Object.values( res[ 'Time Series (30min)' ] ) ) {
          //   dataAry.push( parseFloat(data[ '4. close' ]).toFixed(2) );
          // }

          timestampAry = timestampAry.reverse();

          this.dataSet = {
            data: dataAry.reverse()
          };

          console.log(timestampAry);
          console.log(this.dataSet);

          this._data.dataArray = [ this.dataSet ];
          this._data.dataLength = dataAry.length;
          console.log( this._data.dataArray );
        }
      );
    }
  }


  getDay () {
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
