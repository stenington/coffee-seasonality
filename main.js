L.mapbox.accessToken = 'pk.eyJ1Ijoic3RlbmluZ3RvbiIsImEiOiJCRlpWYl84In0.SYWh5tptxy1Axk4eWj9YRg';
var map = L.mapbox.map('map', 'stenington.jci46bki');
map.legendControl.addLegend(document.getElementById('legend').innerHTML);

var features = omnivore.topojson('data.json')
  .on('ready', function() {
    features.setStyle({
      fillColor: 'transparent',
      fillOpacity: 0.5,
      weight: 0.5
    });

    features.addTo(map);

    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var colors = ['transparent', 'purple', 'red', 'teal', 'yellow', 'pink'];

    var range = document.getElementById('range');
    function colorIt(){
      var month = monthNames[range.value | 0];
      features.eachLayer(function(layer){
        layer.setStyle({
          fillColor: colors[layer.feature.properties[month] || 0]
        });
      });
    }
    range['oninput' in range ? 'oninput' : 'onchange'] = colorIt;
    colorIt();
  });
