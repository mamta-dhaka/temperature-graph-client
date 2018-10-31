import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { DataService } from './services/data.service';
import Data from './models/data.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public lineChartData: any [] = [];
  public lineChartLabels: any[] = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: any[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor(
    private dataService: DataService
  ) { }

  public newData: Data = new Data()

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe(data => {
        this.lineChartData.push({data: data.map((d: any) => d.temperature), label: 'Series A'});
        this.lineChartLabels.push(data.map((d: any) => (moment(new Date(d.date))).format('ddd')));
        // chartConfig.datasets[0].data = respData.dataPoints.map(dataPoint => dataPoint.temperature);

        console.log('>>>>>>>>>>', this.lineChartLabels)
        console.log(data);
      });
  }
  public randomize():void {
    let _lineChartData: any[] = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
