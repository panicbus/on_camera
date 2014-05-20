// all the json data for marker locations and routeline

var geoJson_features = [
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-118.44536304473877, 34.06382338375145]
  },
  properties: {
    title: 'Camera 1',
    description: 'Westwood Village',
    'marker-color': '#548cba',
    'marker-size': 'large',
    'marker-symbol': 1,
    location_id: 1
  }
},

{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-122.39996910095215, 37.79325327800921]
  },
  properties: {
    title: 'Station 9',
    description: 'Financial District',
    'marker-color': '#548cba',
    'marker-size': 'large',
    'marker-symbol': 9,
    location_id: 9
  }
},

////// the route linestring starts here ///////
{
  "geometry": {
    "coordinates": [
      [
      -122.42674827575682,
      37.76786513360663
    ],
    
    [ -122.42674827575682,
      37.76786513360663
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
