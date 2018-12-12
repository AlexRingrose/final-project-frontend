import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})

export class ChartViewComponent implements OnInit {
  componentRef;
  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;

  constructor ( public _api: ApiService, private componentFactoryResolver: ComponentFactoryResolver ) { }

  public createComponent (): void {
    const chartComponent = this.componentFactoryResolver.
        resolveComponentFactory( ChartComponent );
    this.componentRef = this.parent.createComponent( chartComponent );
  }

  ngOnInit() {
  }

}
