import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor() { 
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Internacional', 'Política', 'Nacional', 'Aprendizaje', 'Deportes',];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [31, 59, 80, 81, 56], label: 'Último mes'},
    {data: [44, 48, 40, 72, 86], label: 'Mes actual'}
  ];

  ngOnInit() {
   
  }

}
