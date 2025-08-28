var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_perimetromunicipal_3 = new ol.format.GeoJSON();
var features_perimetromunicipal_3 = format_perimetromunicipal_3.readFeatures(json_perimetromunicipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perimetromunicipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perimetromunicipal_3.addFeatures(features_perimetromunicipal_3);
var lyr_perimetromunicipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perimetromunicipal_3, 
                style: style_perimetromunicipal_3,
                popuplayertitle: 'perimetro municipal',
                interactive: true,
                title: '<img src="styles/legend/perimetromunicipal_3.png" /> perimetro municipal'
            });
var format_rvoresEstadoGeralBOM_4 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralBOM_4 = format_rvoresEstadoGeralBOM_4.readFeatures(json_rvoresEstadoGeralBOM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralBOM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralBOM_4.addFeatures(features_rvoresEstadoGeralBOM_4);
var lyr_rvoresEstadoGeralBOM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralBOM_4, 
                style: style_rvoresEstadoGeralBOM_4,
                popuplayertitle: 'Árvores - Estado Geral: BOM ',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralBOM_4.png" /> Árvores - Estado Geral: BOM '
            });
var format_rvoresEstadoGeralMORTA_5 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralMORTA_5 = format_rvoresEstadoGeralMORTA_5.readFeatures(json_rvoresEstadoGeralMORTA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralMORTA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralMORTA_5.addFeatures(features_rvoresEstadoGeralMORTA_5);
var lyr_rvoresEstadoGeralMORTA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralMORTA_5, 
                style: style_rvoresEstadoGeralMORTA_5,
                popuplayertitle: 'Árvores - Estado Geral: MORTA',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralMORTA_5.png" /> Árvores - Estado Geral: MORTA'
            });
var format_rvoresEstadoGeralPSSIMO_6 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralPSSIMO_6 = format_rvoresEstadoGeralPSSIMO_6.readFeatures(json_rvoresEstadoGeralPSSIMO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralPSSIMO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralPSSIMO_6.addFeatures(features_rvoresEstadoGeralPSSIMO_6);
var lyr_rvoresEstadoGeralPSSIMO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralPSSIMO_6, 
                style: style_rvoresEstadoGeralPSSIMO_6,
                popuplayertitle: 'Árvores - Estado Geral: PÉSSIMO',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralPSSIMO_6.png" /> Árvores - Estado Geral: PÉSSIMO'
            });
var format_rvoresEstadoGeralRUIM_7 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralRUIM_7 = format_rvoresEstadoGeralRUIM_7.readFeatures(json_rvoresEstadoGeralRUIM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralRUIM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralRUIM_7.addFeatures(features_rvoresEstadoGeralRUIM_7);
var lyr_rvoresEstadoGeralRUIM_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralRUIM_7, 
                style: style_rvoresEstadoGeralRUIM_7,
                popuplayertitle: 'Árvores - Estado Geral: RUIM',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralRUIM_7.png" /> Árvores - Estado Geral: RUIM'
            });
var format_rvoresEstadoGeralTIMO_8 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralTIMO_8 = format_rvoresEstadoGeralTIMO_8.readFeatures(json_rvoresEstadoGeralTIMO_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralTIMO_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralTIMO_8.addFeatures(features_rvoresEstadoGeralTIMO_8);
var lyr_rvoresEstadoGeralTIMO_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralTIMO_8, 
                style: style_rvoresEstadoGeralTIMO_8,
                popuplayertitle: 'Árvores - Estado Geral: ÓTIMO',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralTIMO_8.png" /> Árvores - Estado Geral: ÓTIMO'
            });

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_perimetromunicipal_3.setVisible(true);lyr_rvoresEstadoGeralBOM_4.setVisible(false);lyr_rvoresEstadoGeralMORTA_5.setVisible(false);lyr_rvoresEstadoGeralPSSIMO_6.setVisible(false);lyr_rvoresEstadoGeralRUIM_7.setVisible(false);lyr_rvoresEstadoGeralTIMO_8.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,lyr_perimetromunicipal_3,lyr_rvoresEstadoGeralBOM_4,lyr_rvoresEstadoGeralMORTA_5,lyr_rvoresEstadoGeralPSSIMO_6,lyr_rvoresEstadoGeralRUIM_7,lyr_rvoresEstadoGeralTIMO_8];
lyr_perimetromunicipal_3.set('fieldAliases', {'ID': 'ID', 'CD_GEOCODM': 'CD_GEOCODM', 'NM_MUNICIP': 'NM_MUNICIP', });
lyr_rvoresEstadoGeralBOM_4.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralMORTA_5.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralPSSIMO_6.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralRUIM_7.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralTIMO_8.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_perimetromunicipal_3.set('fieldImages', {'ID': 'TextEdit', 'CD_GEOCODM': 'TextEdit', 'NM_MUNICIP': 'TextEdit', });
lyr_rvoresEstadoGeralBOM_4.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralMORTA_5.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralPSSIMO_6.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralRUIM_7.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralTIMO_8.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_perimetromunicipal_3.set('fieldLabels', {'ID': 'hidden field', 'CD_GEOCODM': 'hidden field', 'NM_MUNICIP': 'hidden field', });
lyr_rvoresEstadoGeralBOM_4.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralMORTA_5.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralPSSIMO_6.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralRUIM_7.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralTIMO_8.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'header label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralTIMO_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});