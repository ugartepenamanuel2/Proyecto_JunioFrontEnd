import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Salario, tEmpleado, tEmpleado2 } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
 //   Array empleados  //
    arrayEmpleados: Salario [] = []

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {
    chart: {
      backgroundColor: {
        linearGradient: [500, 500, 500, 500],
        stops: [[0, 'rgb(255, 255, 255)']],
      },
      type: 'column',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [],
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Salario',
            valueSuffix: '€'
        }
    },
    credits: {
      enabled: false,
    },accessibility: {
      point: {
        valueSuffix: '€'
      }
    },
    series: [
      {
        name: 'Empleados',
        data: [],
        color: '#A7B0CA',
      },
    ],
  };
  
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleados();
  }

  empleados(){

    this.empleadoService.obtenerEmpleadoSueldo().subscribe((data) =>{
      // Cogemos el array  y le mete dni, nombre y sueldo //
        this.arrayEmpleados = data.map((salary:any)=>{
          return new Salario(salary._dni,salary._nombre,salary._sueldo)
          
        })
        
          // Posteamos el sueldos//
        const dataSeries = this.arrayEmpleados.map((x: Salario)=> x._sueldo)
         // Posteamos los nombres//
        const dataCategorias = this.arrayEmpleados.map((x: Salario)=> x._nombre)
  
        this.chartOptions.title["text"] = "Salario con Impuestos"
        this.chartOptions.series[0]["data"] = dataSeries
        this.chartOptions.xAxis["categories"] = dataCategorias
        this.chartOptions.series["name"] = "Empleados"

// Lo ponemos en el grafico empleados//

    Highcharts.chart("empleados",this.chartOptions)
   })
  }
}
