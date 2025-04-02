var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GeoCodingPluginResults_1 = new ol.format.GeoJSON();
var features_GeoCodingPluginResults_1 = format_GeoCodingPluginResults_1.readFeatures(json_GeoCodingPluginResults_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoCodingPluginResults_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoCodingPluginResults_1.addFeatures(features_GeoCodingPluginResults_1);
var lyr_GeoCodingPluginResults_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeoCodingPluginResults_1, 
                style: style_GeoCodingPluginResults_1,
                popuplayertitle: 'GeoCoding Plugin Results',
                interactive: true,
                title: '<img src="styles/legend/GeoCodingPluginResults_1.png" /> GeoCoding Plugin Results'
            });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });
var format_lab1_3 = new ol.format.GeoJSON();
var features_lab1_3 = format_lab1_3.readFeatures(json_lab1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_3.addFeatures(features_lab1_3);
var lyr_lab1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_3, 
                style: style_lab1_3,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_3.png" /> lab1'
            });
var format_buildings_4 = new ol.format.GeoJSON();
var features_buildings_4 = format_buildings_4.readFeatures(json_buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_4.addFeatures(features_buildings_4);
var lyr_buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_4, 
                style: style_buildings_4,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_4.png" /> buildings'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GeoCodingPluginResults_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_lab1_3.setVisible(true);lyr_buildings_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GeoCodingPluginResults_1,lyr_highway_2,lyr_lab1_3,lyr_buildings_4];
lyr_GeoCodingPluginResults_1.set('fieldAliases', {'address:(0,0)': 'address:(0,0)', });
lyr_highway_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'motor_vehicle': 'motor_vehicle', 'maxspeed': 'maxspeed', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'access': 'access', 'noname': 'noname', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'surface': 'surface', 'ref': 'ref', 'lanes': 'lanes', });
lyr_lab1_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_buildings_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:province': 'addr:province', 'religion': 'religion', 'opening_hours': 'opening_hours', 'name': 'name', 'community_centre:for': 'community_centre:for', 'community_centre': 'community_centre', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:region': 'addr:region', 'addr:housenumber': 'addr:housenumber', 'addr:district': 'addr:district', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'building:levels': 'building:levels', 'address': 'address', });
lyr_GeoCodingPluginResults_1.set('fieldImages', {'address:(0,0)': '', });
lyr_highway_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'motor_vehicle': '', 'maxspeed': '', 'horse': '', 'foot': '', 'bicycle': '', 'access': '', 'noname': '', 'name:etymology:wikidata': '', 'name': '', 'surface': '', 'ref': '', 'lanes': '', });
lyr_lab1_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_buildings_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:province': 'TextEdit', 'religion': 'TextEdit', 'opening_hours': 'TextEdit', 'name': 'TextEdit', 'community_centre:for': 'TextEdit', 'community_centre': 'TextEdit', 'amenity': 'TextEdit', 'addr:street': 'TextEdit', 'addr:region': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:district': 'TextEdit', 'addr:country': 'TextEdit', 'addr:city': 'TextEdit', 'building:levels': 'TextEdit', 'address': '', });
lyr_GeoCodingPluginResults_1.set('fieldLabels', {'address:(0,0)': 'no label', });
lyr_highway_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'motor_vehicle': 'no label', 'maxspeed': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'access': 'no label', 'noname': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'surface': 'no label', 'ref': 'no label', 'lanes': 'no label', });
lyr_lab1_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_buildings_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:province': 'no label', 'religion': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'community_centre:for': 'no label', 'community_centre': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:region': 'no label', 'addr:housenumber': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'building:levels': 'no label', 'address': 'no label', });
lyr_buildings_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});