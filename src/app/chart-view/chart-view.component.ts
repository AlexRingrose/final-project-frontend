import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartComponent } from '../chart/chart.component';
import { ChartDataService } from '../chart-data.service';
import { UserService } from '../user.service';

@Component( {
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: [ './chart-view.component.css' ]
} )

export class ChartViewComponent implements OnInit {
  componentRef;
  dataSet;
  @ViewChild( 'parent', { read: ViewContainerRef } )
  parent: ViewContainerRef;

  constructor ( public _api: ApiService, public _user: UserService, public _data: ChartDataService,
    private componentFactoryResolver: ComponentFactoryResolver ) { }

  public createComponent (): void {
    const chartComponent = this.componentFactoryResolver.
      resolveComponentFactory( ChartComponent );
    this.componentRef = this.parent.createComponent( chartComponent );
  }

  validInput ( input ) {
    if ( input !== '' ) {
      if ( input.length > 3 ) {
        return true;
      }
    }
  }

  getPast5 () {
    if ( this.validInput( this._api.search ) ) {
      this._api.stockIntraDay( this._api.search, '30min' ).subscribe(
        ( res ) => {
          let dataAry = [];
          const labelAry = [];
          let timestampAry = [];

          console.log( 'Api Response', res );

          /*
           Builds the Data Array and inital Label array
           from entries of the response
           */
          for ( const [ label, data ] of Object.entries(
            res[ 'Time Series (30min)' ] ) ) {

            dataAry.push( parseFloat( data[ '4. close' ] ).toFixed( 2 ) );
            timestampAry.push( label.substring( 5, 10 ) );
          }

          // Reverse Array to display earliest date first
          timestampAry = timestampAry.reverse();

          /*
            Filtering label array,
            grabs date and assigns if is a 'new' date,
            non-new dates are empty labels
          */
          let currentLbl = '';
          let countLbl = 1;
          for ( const label of timestampAry ) {
            if ( currentLbl === '' ) {
              labelAry.push( label );
              currentLbl = label;
            } else {

              if ( label !== currentLbl ) {
                if ( countLbl > 4 ) { break; }
                labelAry.push( label );
                currentLbl = label;
                countLbl++;
              } else {
                labelAry.push( '' );
              }
            }
          }

          // clip data array to match labels and reverse
          dataAry = dataAry.reverse().slice( 0, labelAry.length );

          this.dataSet = { data: dataAry };

          this._data.dataArray = [ this.dataSet ];
          this._data.labelArray = labelAry;
          this._data.dataLength = dataAry.length;

          // Create new chart component,
          // if one already exists then destory it
          if ( this.componentRef ) {
            this.componentRef.destroy();
          }
          this.createComponent();
        }
      );
    }
  }

  saveFavorite () {
    if ( this.validInput( this._api.search ) ) {
      const fav = this._api.search.toUpperCase();
      this._user.saveFavorite( { name: fav } ).subscribe(
        ( res: any ) => {
          console.log( res );
        }
      );
    }
  }



  // getDay () {
  //   if ( this.validInput( this.search ) ) {
  //     this._api.stockDaily( this.search ).subscribe(
  //       ( res ) => {
  //         const dataAry = [];

  //         console.log( 'Api Response', res );

  //         for ( const data of Object.values( res[ 'Time Series (Daily)' ] ) ) {
  //           dataAry.push( data[ '4. close' ] );
  //         }

  //         this.dataSet = {
  //           data: dataAry
  //         };

  //         this._data.dataArray = [this.dataSet];
  //         this._data.dataLength = dataAry.length;
  //         console.log(this._data.dataArray);
  //       }
  //     );
  //   }
  // }

  ngOnInit () {
    this.getPast5();
  }

}
