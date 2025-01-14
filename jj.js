var map = null;
var zoom1=null;
var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var maCarte;
function chargercarte()
{
    

    var centreCarte = new google.maps.LatLng(36.359375,9.217529);
    var optionsCarte = {
        zoom: 8,
        center: centreCarte,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    maCarte = new google.maps.Map(document.getElementById("map_content"), optionsCarte);
    
}


function calcRoute() {
 var base    = document.getElementById("myBiz");
   var car = base.getElementsByTagName("Coordinate")[0];
   
   var carx = "CarLat: " + car.getElementsByTagName("x")[0].firstChild.data;
   var cary = "CarLng: " + car.getElementsByTagName("y")[0].firstChild.data;
   var cx = car.getElementsByTagName("x")[0].firstChild.data;
   var cy = car.getElementsByTagName("y")[0].firstChild.data;
   var zx = car.getElementsByTagName("w")[0].firstChild.data;
   var zy = car.getElementsByTagName("z")[0].firstChild.data;
   var zonew = "ZoneLat: " + car.getElementsByTagName("w")[0].firstChild.data;
   var zonez = "ZoneLng: " + car.getElementsByTagName("z")[0].firstChild.data;
   
   alert("Coordinates: \n\n" + carx + "\n" + cary + "\n" 
            + zonew + "\n" + zonez);


  chargercarte()
  var depart = new google.maps.LatLng(cx, cy);
  var arrive = new google.maps.LatLng(zx,zy);

   // var d= document.getElementById("lag").value;
    // var a=document.getElementById('longi').value;
  
    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});	
	
    directionsDisplay.setMap(maCarte);
    
    var requeteItineraire = {
        origin: depart,
        destination: arrive,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
             
    directionsService.route(requeteItineraire, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            var distance = response.routes[0].legs[0].distance.value;
            var duree = response.routes[0].legs[0].duration.value;
                       
     //  document.getElementById('distance').innerHTML = "la distance en klm="+distance/1000 + " km</br>"+"durée="+Math.round((duree/3600)*10)/10 + " heure";
        //document.getElementById('duree').innerHTML = "durée="+Math.round((duree/3600)*10)/10 + " heure";
        }
        else
        {
            alert("Addresse de d&eacut;part ou d'arrivé incorrecte");
        }
    });
	
	var marker = new google.maps.Marker({
			title: 'Car Is Here',
			animation: google.maps.Animation.DROP,
	        icon: 'cmarker.png',
			position: new google.maps.LatLng(cx, cy)
		});
		marker.setMap(maCarte);
		
	var marker = new google.maps.Marker({
			title: 'Parking Abdul Razzaq Charaib',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.797739,   10.185537)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Laffayet',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.812291,   10.18046)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Al Mokhtar Atiah North',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.801665,   10.183016)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Al Mokhtar Atiah South',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.801175,   10.183477)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Corner of Habib Borguiba',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.801085,   10.188156)
		});
	marker.setMap(maCarte);
		var marker = new google.maps.Marker({
			title: 'Parking Beb el Kadhra',
			//animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.80981,     10.173134)
		});
		marker.setMap(maCarte);
		var marker = new google.maps.Marker({
			title: 'Parking Beb Jdid',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.792198 ,  10.17578)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Mohammed V',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.804509,   10.186921)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Sidi el Aloui',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.806931,   10.16439)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking El Kassabah',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.799062 ,  10.165764)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Beb Souika',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.804646 ,  10.171493)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking El Hafsya',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.803091,   10.169647)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Palmarium',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.799028,   10.181021 )
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Kheiredine Basha',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.818329,   10.184067)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Al Khortoum',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.813605 ,  10.176578)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Ghana Street',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.806252,   10.182597)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Ministry of Interior',
	        //animation: google.maps.Animation.DROP,
	        icon: 'pmarker.png',
			position: new google.maps.LatLng(36.79953,    10.185178)
		});
	marker.setMap(maCarte);
	var marker = new google.maps.Marker({
			title: 'Parking Is Here',
	        animation: google.maps.Animation.DROP,
	        icon: 'parking.png',
			position: new google.maps.LatLng(zx, zy)
		});
	marker.setMap(maCarte);
}