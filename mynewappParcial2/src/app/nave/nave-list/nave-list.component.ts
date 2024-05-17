import { Component, OnInit } from '@angular/core';
import { Nave } from '../nave';
import { NaveService } from '../nave.service';

@Component({
  selector: 'app-nave-list',
  templateUrl: './nave-list.component.html',
  styleUrls: ['./nave-list.component.css']
})
export class NaveListComponent implements OnInit {

  selectedNave!: Nave;
  selected = false;
  numeroRebeldes:Number=0
  numeroImperiales:Number=0
  numeroNeutrales:Number=0

  naves: Array<Nave>=[];
  constructor(private naveService: NaveService) {}

    getNaves(): void {
      this.naveService.getBooks().subscribe((naves) => {
        this.naves = naves;
        this.numeroRebeldes=this.ContarRebeldes();
        this.numeroImperiales=this.ContarImperiales();
        this.numeroNeutrales=this.ContarNeutrales();
      });
    }
    onSelected(nave: Nave): void {
      this.selected = true;
      this.selectedNave = nave;
    }

    ContarRebeldes():number{
      let rebeldes= 0;
      for (let nave of this.naves){
        if (nave.bando == "Rebelión"){
          rebeldes ++;
        }
      }
      return rebeldes
    }

    ContarImperiales():number{
      let imperiales= 0;
      for (let nave of this.naves){
        if (nave.bando == "Imperio"){
          imperiales ++;
        }
      }
      return imperiales
    }

    ContarNeutrales():number{
      let neutrales= 0;
      for (let nave of this.naves){
        if (nave.bando == "Neutral"){
          neutrales ++;
        }
      }
      return neutrales
    }

  ngOnInit() {
    this.getNaves();
  }

}
