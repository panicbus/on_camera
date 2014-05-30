// all the json data for marker locations and routeline


var geoJson_features = [
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-118.15211176872253, 34.14567708986222]
  },
  properties: {
    title: 'Camera 1',
    description: 'Downtown Pasadena',
    icon: {
      "iconUrl": "assets/cctv_marker.png",
      "iconSize": [30, 30], // size of the icon
      "iconAnchor": [15, 40], // point of the icon which will correspond to marker's location
      "popupAnchor": [0, -35], // point from which the popup should open relative to the iconAnchor
      "className": "dot"
    },
    'marker-color': '#2E403E',
    'marker-size': 'large',
    'marker-symbol': 'city',
    location_id: 1
  }
},
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-118.23827505111693, 34.04916593685887]
  },
  properties: {
    title: 'Camera 2',
    description: 'Convention Center',
    icon: {
      "iconUrl": "assets/cctv_marker.png",
      "iconSize": [30, 30], // size of the icon
      "iconAnchor": [15, 30], // point of the icon which will correspond to marker's location
      "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
      "className": "dot"
    },
    'marker-color': '#2E403E',
    'marker-size': 'large',
    'marker-symbol': 'city',
    location_id: 2
  }
},
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-118.23845744132996, 34.06614309903811]
  },
  properties: {
    title: 'Camera 3',
    description: 'Chinatown',
    icon: {
      "iconUrl": "assets/cctv_marker.png",
      "iconSize": [30, 30], // size of the icon
      "iconAnchor": [15, 30], // point of the icon which will correspond to marker's location
      "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
      "className": "dot"
    },
  'marker-color': '#2E403E',
  'marker-size': 'large',
  'marker-symbol': 'city',
    location_id: 3
  }
},
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-118.34167420864105, 34.10160638993377]
  },
  properties: {
    title: 'Camera 4',
    description: 'Hollywood Boulevard',
    icon: {
      "iconUrl": "assets/cctv_marker.png",
      "iconSize": [30, 30], // size of the icon
      "iconAnchor": [15, 30], // point of the icon which will correspond to marker's location
      "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
      "className": "dot"
    },
    'marker-color': '#2E403E',
    'marker-size': 'large',
    'marker-symbol': 'city',
    location_id: 4
  }
},

////// the route linestring starts here ///////
{
  "geometry":{
    "coordinates":[
          [
            -118.23816776275635,
            34.04938817298568
          ],
          [
            -118.23808193206789,
            34.051201598010444
          ],
          [
            -118.24447631835936,
            34.05657053094319
          ],
          [
            -118.24220180511475,
            34.058028261980844
          ],
          [
            -118.24108600616455,
            34.05923709309435
          ],
          [
            -118.23803901672365,
            34.06599200840498
          ],
          [
            -118.23855400085448,
            34.066134211361266
          ],
          [
            -118.23812484741211,
            34.065778703523065
          ],
          [
            -118.23872566223146,
            34.064463311552615
          ],
          [
            -118.24306011199951,
            34.065956457628594
          ],
          [
            -118.24117183685301,
            34.06670302079997
          ],
          [
            -118.2409143447876,
            34.06709407507407
          ],
          [
            -118.24267387390138,
            34.06805392791322
          ],
          [
            -118.24717998504637,
            34.072462001305944
          ],
          [
            -118.25104236602782,
            34.072568645401255
          ],
          [
            -118.25228691101073,
            34.074559310537
          ],
          [
            -118.26069831848145,
            34.07814949902613
          ],
          [
            -118.26520442962646,
            34.077403036722764
          ],
          [
            -118.26657772064209,
            34.0783272271763
          ],
          [
            -118.26988220214844,
            34.07996230865873
          ],
          [
            -118.27151298522948,
            34.08170399116713
          ],
          [
            -118.2738733291626,
            34.083303463958096
          ],
          [
            -118.27730655670165,
            34.09026970418749
          ],
          [
            -118.27889442443848,
            34.09098051279948
          ],
          [
            -118.28597545623778,
            34.09744859688645
          ],
          [
            -118.29279899597168,
            34.101819604583554
          ],
          [
            -118.3417224884033,
            34.10160638993377
          ]
         ],
          "type": "LineString"
        },
      "properties": {
        "stroke": "#000",
        "stroke-opacity": 1,
        "stroke-width": 3
      },
       type: "Feature"
    }
];

