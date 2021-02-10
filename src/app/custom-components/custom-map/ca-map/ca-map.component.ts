import { AfterContentInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import {
  ToastController,
  Platform
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  MarkerOptions,

  Marker,
  GoogleMapsAnimation,
  MyLocation,
  LatLng,
  CameraPosition,
  HtmlInfoWindow,
  Geocoder,
  GeocoderResult
} from '@ionic-native/google-maps';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

declare var google;


@Component({
  selector: 'app-ca-map',
  templateUrl: './ca-map.component.html',
  styleUrls: ['./ca-map.component.scss'],
})
export class CaMapComponent implements OnInit {

 // @ViewChild('map', { static: true }) mapElementRef: any;

 @ViewChild('map') mapElementRef: ElementRef;
 @Input() center = { lat: -34.397, lng: 150.644 };
 @Input() selectable = true;
 @Input() closeButtonText = 'Cancel';
 
 
 
  
 latitude;
 longitude: number;
 address1;
 address2;
 clickListener: any;
 googleMaps: any;
 idedit;
 router: any;
 map: GoogleMap;
 address:string;
 lang;
 lat;
 marker1: Marker;

 constructor(
   public toastCtrl: ToastController,
   private platform: Platform,
   private renderer: Renderer2,
   private http: HttpClient
   ) { }

 ngOnInit() {
   // Since ngOnInit() is executed before `deviceready` event,
   // you have to wait the event.
   this.platform.ready();
   this.loadMap();
   
 }

 loadMap() {
   this.map = GoogleMaps.create('map_canvas', { });
   
   this.goToMyLocation();
   this.map.one(GoogleMapsEvent.MAP_READY)
     .then(() => {
       console.log('Map is ready!');

       this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(
           (data) => {
               // alert("Click MAP");
           }
       );
     });

     this.map.addEventListener(GoogleMapsEvent.MAP_CLICK).subscribe(latlng => {
       // the latlng variable contains the data
        console.log("marker1",this.marker1);
       
       if (this.marker1 != null) {
         console.log("indide null");
        
          this.marker1.destroy();
          this.marker1.remove();
          console.log("marker1",this.marker1);
     }
       let lat: any = latlng[0].lat
       let lng: any = latlng[0].lng
       let LatLng1 = new LatLng(lat,lng);
       console.log(lat);
       console.log(lng);
       console.log(LatLng1);
       this.map.animateCamera({
         target: LatLng1,
         zoom: 17,
         duration: 5000
       });
       
       this.getAddress(lat ,lng).
       subscribe(geoData =>{ 
               console.log(geoData);
               this.address1=geoData.first ;
               this.address2=geoData.second;
       });
       this.marker1= this.map.addMarkerSync({
         title: this.address1,
         snippet: this.address2,
         position:{lat, lng} ,
         animation: GoogleMapsAnimation.BOUNCE
       });
     
       this.marker1.showInfoWindow();
       
     
       
       
   });
   this.searchforplace("Fransabank baalbeck Lebanon");
    
 
     
 }









 goToMyLocation(){
   this.map.clear();
   this.searchforplace("Fransabank baalbeck Lebanon");
   // Get the location of you
   this.map.getMyLocation().then((location: MyLocation) => {
     console.log(JSON.stringify(location, null ,2));

     // Move the map camera to the location with animation
     this.map.animateCamera({
       target: location.latLng,
       zoom: 17,
       duration: 5000
     });

     //add a marker
     let marker: Marker = this.map.addMarkerSync({
       title: 'Here you are',
     
       position: location.latLng,
       animation: GoogleMapsAnimation.BOUNCE
     });

     //show the infoWindow
     marker.showInfoWindow();


    

  

     this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
       (data) => {
           // console.log("Click MAP",data);
       }
     );
   })
   .catch(err => {
   
     this.showToast(err.error_message);
   });
 }

 async showToast(message: string) {
   let toast = await this.toastCtrl.create({
     message: message,
     duration: 2000,
     position: 'middle'
   });
   toast.present();
 }



 private getAddress(lat: Number, lng: Number)
 {
   console.log(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
    environment.googleMapsAPIKey
  }`);
  return this.http
    .get<any>(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
        environment.googleMapsAPIKey
      }`
    )
    .pipe(
      map(geoData => {
        if (!geoData || !geoData.results || geoData.results.length === 0) {
          return null;
        }
        console.log("geoData" ,geoData.results);
        return {"first":geoData.results[0].formatted_address,"second": geoData.results[1].formatted_address};
      })
    );
}




searchforplace(address)
{
  console.log("inside search");
  this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
 Geocoder.geocode({
   "address": address
 })
 .then((results: GeocoderResult[]) => {
   console.log("results",results);
 
   return this.map.addMarker({
     'position': results[0].position,
     'title':  JSON.stringify(results[0].position)
   })
 })
 .then(ddata=>{
        console.log("ddatte",ddata);
 });

});
 
}


}
