import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { } from "mapbox-gl-leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //Map variable para integracion de mapas
  map: any;

  //Icons variable para los iconos
  icon: any;

  //Marcadores fijos de los supermercados en chile


  constructor() { }


  ngOnInit(): void {
    this.map = L.map('map').setView([-33.4372, -70.6506], 14);
    //var token = "pk.eyJ1IjoiYW5nZWxodGMxOTk2IiwiYSI6ImNrOWVrbG81ejAzYTUzbXF0NGF0djQ0MmIifQ.eMCfvr5U0hM9GVy6XFDVog"; // replace with your Mapbox API Access token. Create a Mapbox account and find it on https://account.mapbox.com/
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

  }

  //

  /**
     * Muestra al usuario un Popup al usuario cuando hace click sobre un punto determinado
     * @method mapClick
     * @param {*} e
     * @memberof MapaComponent
     */
  mapClick(e) {

    let mar = L.marker([e.latlng.lat, e.latlng.lng],
      { icon: this.icon }).
      bindPopup('<strong>Nombre del punto de referencia <br>' + + '<br>Coordenadas</strong> <br> LON:'
        + e.latlng.lng + '<br>' + 'LAT:' + e.latlng.lat).
      addTo(this.map).
      openPopup();

  }



}
