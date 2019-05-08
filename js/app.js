    var map = new ol.Map({
        target: "map",
        layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([2.3495396, 48.8676305]),
            zoom: 12
        })
    });