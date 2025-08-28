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
var format_LimiteMunicipal_3 = new ol.format.GeoJSON();
var features_LimiteMunicipal_3 = format_LimiteMunicipal_3.readFeatures(json_LimiteMunicipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_3.addFeatures(features_LimiteMunicipal_3);
var lyr_LimiteMunicipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_3, 
                style: style_LimiteMunicipal_3,
                popuplayertitle: 'Limite Municipal',
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipal_3.png" /> Limite Municipal'
            });
var format_fbds_sp_3516200_app_4 = new ol.format.GeoJSON();
var features_fbds_sp_3516200_app_4 = format_fbds_sp_3516200_app_4.readFeatures(json_fbds_sp_3516200_app_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fbds_sp_3516200_app_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fbds_sp_3516200_app_4.addFeatures(features_fbds_sp_3516200_app_4);
var lyr_fbds_sp_3516200_app_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fbds_sp_3516200_app_4, 
                style: style_fbds_sp_3516200_app_4,
                popuplayertitle: 'fbds_sp_3516200_app',
                interactive: true,
                title: '<img src="styles/legend/fbds_sp_3516200_app_4.png" /> fbds_sp_3516200_app'
            });
var format_fbds_sp_3516200_massas_dagua_5 = new ol.format.GeoJSON();
var features_fbds_sp_3516200_massas_dagua_5 = format_fbds_sp_3516200_massas_dagua_5.readFeatures(json_fbds_sp_3516200_massas_dagua_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fbds_sp_3516200_massas_dagua_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fbds_sp_3516200_massas_dagua_5.addFeatures(features_fbds_sp_3516200_massas_dagua_5);
var lyr_fbds_sp_3516200_massas_dagua_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fbds_sp_3516200_massas_dagua_5, 
                style: style_fbds_sp_3516200_massas_dagua_5,
                popuplayertitle: 'fbds_sp_3516200_massas_dagua',
                interactive: true,
                title: '<img src="styles/legend/fbds_sp_3516200_massas_dagua_5.png" /> fbds_sp_3516200_massas_dagua'
            });
var format_fbds_sp_3516200_rios_duplos_6 = new ol.format.GeoJSON();
var features_fbds_sp_3516200_rios_duplos_6 = format_fbds_sp_3516200_rios_duplos_6.readFeatures(json_fbds_sp_3516200_rios_duplos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fbds_sp_3516200_rios_duplos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fbds_sp_3516200_rios_duplos_6.addFeatures(features_fbds_sp_3516200_rios_duplos_6);
var lyr_fbds_sp_3516200_rios_duplos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fbds_sp_3516200_rios_duplos_6, 
                style: style_fbds_sp_3516200_rios_duplos_6,
                popuplayertitle: 'fbds_sp_3516200_rios_duplos',
                interactive: true,
                title: '<img src="styles/legend/fbds_sp_3516200_rios_duplos_6.png" /> fbds_sp_3516200_rios_duplos'
            });
var format_fbds_sp_3516200_rios_simples_7 = new ol.format.GeoJSON();
var features_fbds_sp_3516200_rios_simples_7 = format_fbds_sp_3516200_rios_simples_7.readFeatures(json_fbds_sp_3516200_rios_simples_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fbds_sp_3516200_rios_simples_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fbds_sp_3516200_rios_simples_7.addFeatures(features_fbds_sp_3516200_rios_simples_7);
var lyr_fbds_sp_3516200_rios_simples_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fbds_sp_3516200_rios_simples_7, 
                style: style_fbds_sp_3516200_rios_simples_7,
                popuplayertitle: 'fbds_sp_3516200_rios_simples',
                interactive: true,
                title: '<img src="styles/legend/fbds_sp_3516200_rios_simples_7.png" /> fbds_sp_3516200_rios_simples'
            });
var format_fbds_sp_3516200_nascentes_8 = new ol.format.GeoJSON();
var features_fbds_sp_3516200_nascentes_8 = format_fbds_sp_3516200_nascentes_8.readFeatures(json_fbds_sp_3516200_nascentes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fbds_sp_3516200_nascentes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fbds_sp_3516200_nascentes_8.addFeatures(features_fbds_sp_3516200_nascentes_8);
var lyr_fbds_sp_3516200_nascentes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fbds_sp_3516200_nascentes_8, 
                style: style_fbds_sp_3516200_nascentes_8,
                popuplayertitle: 'fbds_sp_3516200_nascentes',
                interactive: true,
                title: '<img src="styles/legend/fbds_sp_3516200_nascentes_8.png" /> fbds_sp_3516200_nascentes'
            });
var format_rvoresEstadoGeralBOM12734unid_9 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralBOM12734unid_9 = format_rvoresEstadoGeralBOM12734unid_9.readFeatures(json_rvoresEstadoGeralBOM12734unid_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralBOM12734unid_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralBOM12734unid_9.addFeatures(features_rvoresEstadoGeralBOM12734unid_9);
var lyr_rvoresEstadoGeralBOM12734unid_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralBOM12734unid_9, 
                style: style_rvoresEstadoGeralBOM12734unid_9,
                popuplayertitle: 'Árvores - Estado Geral: BOM  (12734 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralBOM12734unid_9.png" /> Árvores - Estado Geral: BOM  (12734 unid.)'
            });
var format_rvoresEstadoGeralMORTA649unid_10 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralMORTA649unid_10 = format_rvoresEstadoGeralMORTA649unid_10.readFeatures(json_rvoresEstadoGeralMORTA649unid_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralMORTA649unid_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralMORTA649unid_10.addFeatures(features_rvoresEstadoGeralMORTA649unid_10);
var lyr_rvoresEstadoGeralMORTA649unid_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralMORTA649unid_10, 
                style: style_rvoresEstadoGeralMORTA649unid_10,
                popuplayertitle: 'Árvores - Estado Geral: MORTA (649 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralMORTA649unid_10.png" /> Árvores - Estado Geral: MORTA (649 unid.)'
            });
var format_rvoresEstadoGeralPSSIMO236unid_11 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralPSSIMO236unid_11 = format_rvoresEstadoGeralPSSIMO236unid_11.readFeatures(json_rvoresEstadoGeralPSSIMO236unid_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralPSSIMO236unid_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralPSSIMO236unid_11.addFeatures(features_rvoresEstadoGeralPSSIMO236unid_11);
var lyr_rvoresEstadoGeralPSSIMO236unid_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralPSSIMO236unid_11, 
                style: style_rvoresEstadoGeralPSSIMO236unid_11,
                popuplayertitle: 'Árvores - Estado Geral: PÉSSIMO (236 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralPSSIMO236unid_11.png" /> Árvores - Estado Geral: PÉSSIMO (236 unid.)'
            });
var format_rvoresEstadoGeralRUIM1525unid_12 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralRUIM1525unid_12 = format_rvoresEstadoGeralRUIM1525unid_12.readFeatures(json_rvoresEstadoGeralRUIM1525unid_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralRUIM1525unid_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralRUIM1525unid_12.addFeatures(features_rvoresEstadoGeralRUIM1525unid_12);
var lyr_rvoresEstadoGeralRUIM1525unid_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralRUIM1525unid_12, 
                style: style_rvoresEstadoGeralRUIM1525unid_12,
                popuplayertitle: 'Árvores - Estado Geral: RUIM (1525 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralRUIM1525unid_12.png" /> Árvores - Estado Geral: RUIM (1525 unid.)'
            });
var format_rvoresEstadoGeralTIMO36333unid_13 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralTIMO36333unid_13 = format_rvoresEstadoGeralTIMO36333unid_13.readFeatures(json_rvoresEstadoGeralTIMO36333unid_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralTIMO36333unid_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralTIMO36333unid_13.addFeatures(features_rvoresEstadoGeralTIMO36333unid_13);
var lyr_rvoresEstadoGeralTIMO36333unid_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralTIMO36333unid_13, 
                style: style_rvoresEstadoGeralTIMO36333unid_13,
                popuplayertitle: 'Árvores - Estado Geral: ÓTIMO (36333 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralTIMO36333unid_13.png" /> Árvores - Estado Geral: ÓTIMO (36333 unid.)'
            });
var format_rvoresImuneaoCorte8unid_14 = new ol.format.GeoJSON();
var features_rvoresImuneaoCorte8unid_14 = format_rvoresImuneaoCorte8unid_14.readFeatures(json_rvoresImuneaoCorte8unid_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresImuneaoCorte8unid_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresImuneaoCorte8unid_14.addFeatures(features_rvoresImuneaoCorte8unid_14);
var lyr_rvoresImuneaoCorte8unid_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresImuneaoCorte8unid_14, 
                style: style_rvoresImuneaoCorte8unid_14,
                popuplayertitle: 'Árvores Imune ao Corte (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresImuneaoCorte8unid_14.png" /> Árvores Imune ao Corte (8 unid.)'
            });
var group_rvores = new ol.layer.Group({
                                layers: [lyr_rvoresEstadoGeralBOM12734unid_9,lyr_rvoresEstadoGeralMORTA649unid_10,lyr_rvoresEstadoGeralPSSIMO236unid_11,lyr_rvoresEstadoGeralRUIM1525unid_12,lyr_rvoresEstadoGeralTIMO36333unid_13,lyr_rvoresImuneaoCorte8unid_14,],
                                fold: 'close',
                                title: 'Árvores'});
var group_HidrografiaFBDS = new ol.layer.Group({
                                layers: [lyr_fbds_sp_3516200_app_4,lyr_fbds_sp_3516200_massas_dagua_5,lyr_fbds_sp_3516200_rios_duplos_6,lyr_fbds_sp_3516200_rios_simples_7,lyr_fbds_sp_3516200_nascentes_8,],
                                fold: 'close',
                                title: 'Hidrografia FBDS'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipal_3.setVisible(true);lyr_fbds_sp_3516200_app_4.setVisible(false);lyr_fbds_sp_3516200_massas_dagua_5.setVisible(false);lyr_fbds_sp_3516200_rios_duplos_6.setVisible(false);lyr_fbds_sp_3516200_rios_simples_7.setVisible(false);lyr_fbds_sp_3516200_nascentes_8.setVisible(false);lyr_rvoresEstadoGeralBOM12734unid_9.setVisible(false);lyr_rvoresEstadoGeralMORTA649unid_10.setVisible(false);lyr_rvoresEstadoGeralPSSIMO236unid_11.setVisible(false);lyr_rvoresEstadoGeralRUIM1525unid_12.setVisible(false);lyr_rvoresEstadoGeralTIMO36333unid_13.setVisible(false);lyr_rvoresImuneaoCorte8unid_14.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipal_3,group_HidrografiaFBDS,group_rvores];
lyr_LimiteMunicipal_3.set('fieldAliases', {'ID': 'ID', 'CD_GEOCODM': 'CD_GEOCODM', 'NM_MUNICIP': 'NM_MUNICIP', });
lyr_fbds_sp_3516200_app_4.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'APP_M': 'APP_M', 'AREA_HA': 'AREA_HA', });
lyr_fbds_sp_3516200_massas_dagua_5.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'AREA_HA', });
lyr_fbds_sp_3516200_rios_duplos_6.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'AREA_HA': 'AREA_HA', });
lyr_fbds_sp_3516200_rios_simples_7.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'COMP_KM': 'COMP_KM', });
lyr_fbds_sp_3516200_nascentes_8.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', });
lyr_rvoresEstadoGeralBOM12734unid_9.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralMORTA649unid_10.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralPSSIMO236unid_11.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralRUIM1525unid_12.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralTIMO36333unid_13.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresImuneaoCorte8unid_14.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LimiteMunicipal_3.set('fieldImages', {'ID': 'TextEdit', 'CD_GEOCODM': 'TextEdit', 'NM_MUNICIP': 'TextEdit', });
lyr_fbds_sp_3516200_app_4.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_fbds_sp_3516200_massas_dagua_5.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_fbds_sp_3516200_rios_duplos_6.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_fbds_sp_3516200_rios_simples_7.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_fbds_sp_3516200_nascentes_8.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_rvoresEstadoGeralBOM12734unid_9.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralMORTA649unid_10.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralPSSIMO236unid_11.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralRUIM1525unid_12.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralTIMO36333unid_13.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresImuneaoCorte8unid_14.set('fieldImages', {'fid': '', 'nome_popular': '', 'nome_cientifico': '', 'legislacao': '', });
lyr_LimiteMunicipal_3.set('fieldLabels', {'ID': 'hidden field', 'CD_GEOCODM': 'hidden field', 'NM_MUNICIP': 'hidden field', });
lyr_fbds_sp_3516200_app_4.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_fbds_sp_3516200_massas_dagua_5.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_fbds_sp_3516200_rios_duplos_6.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_fbds_sp_3516200_rios_simples_7.set('fieldLabels', {'fid': 'no label', 'GEOCODIGO': 'no label', 'MUNICIPIO': 'no label', 'UF': 'no label', 'CD_UF': 'no label', 'HIDRO': 'no label', 'COMP_KM': 'no label', });
lyr_fbds_sp_3516200_nascentes_8.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_rvoresEstadoGeralBOM12734unid_9.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralMORTA649unid_10.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralPSSIMO236unid_11.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralRUIM1525unid_12.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralTIMO36333unid_13.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'header label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresImuneaoCorte8unid_14.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_rvoresImuneaoCorte8unid_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});