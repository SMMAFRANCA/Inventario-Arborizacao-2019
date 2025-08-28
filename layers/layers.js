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
var format_APP164unid230278996m_4 = new ol.format.GeoJSON();
var features_APP164unid230278996m_4 = format_APP164unid230278996m_4.readFeatures(json_APP164unid230278996m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP164unid230278996m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP164unid230278996m_4.addFeatures(features_APP164unid230278996m_4);
var lyr_APP164unid230278996m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP164unid230278996m_4, 
                style: style_APP164unid230278996m_4,
                popuplayertitle: 'APP (164 unid. / 2302789.96 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP164unid230278996m_4.png" /> APP (164 unid. / 2302789.96 m²)'
            });
var format_readeUsoEspecial337unid311074946m_5 = new ol.format.GeoJSON();
var features_readeUsoEspecial337unid311074946m_5 = format_readeUsoEspecial337unid311074946m_5.readFeatures(json_readeUsoEspecial337unid311074946m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeUsoEspecial337unid311074946m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial337unid311074946m_5.addFeatures(features_readeUsoEspecial337unid311074946m_5);
var lyr_readeUsoEspecial337unid311074946m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial337unid311074946m_5, 
                style: style_readeUsoEspecial337unid311074946m_5,
                popuplayertitle: 'Área de Uso Especial (337 unid. / 3110749.46 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial337unid311074946m_5.png" /> Área de Uso Especial (337 unid. / 3110749.46 m²)'
            });
var format_reaInstitucional227unid132587382m_6 = new ol.format.GeoJSON();
var features_reaInstitucional227unid132587382m_6 = format_reaInstitucional227unid132587382m_6.readFeatures(json_reaInstitucional227unid132587382m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaInstitucional227unid132587382m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional227unid132587382m_6.addFeatures(features_reaInstitucional227unid132587382m_6);
var lyr_reaInstitucional227unid132587382m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional227unid132587382m_6, 
                style: style_reaInstitucional227unid132587382m_6,
                popuplayertitle: 'Área Institucional (227 unid. / 1325873.82 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional227unid132587382m_6.png" /> Área Institucional (227 unid. / 1325873.82 m²)'
            });
var format_reaPatrimonial33unid15807656m_7 = new ol.format.GeoJSON();
var features_reaPatrimonial33unid15807656m_7 = format_reaPatrimonial33unid15807656m_7.readFeatures(json_reaPatrimonial33unid15807656m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaPatrimonial33unid15807656m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial33unid15807656m_7.addFeatures(features_reaPatrimonial33unid15807656m_7);
var lyr_reaPatrimonial33unid15807656m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial33unid15807656m_7, 
                style: style_reaPatrimonial33unid15807656m_7,
                popuplayertitle: 'Área Patrimonial (33 unid. / 158076.56 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial33unid15807656m_7.png" /> Área Patrimonial (33 unid. / 158076.56 m²)'
            });
var format_Lote500unid13686901m_8 = new ol.format.GeoJSON();
var features_Lote500unid13686901m_8 = format_Lote500unid13686901m_8.readFeatures(json_Lote500unid13686901m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote500unid13686901m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote500unid13686901m_8.addFeatures(features_Lote500unid13686901m_8);
var lyr_Lote500unid13686901m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote500unid13686901m_8, 
                style: style_Lote500unid13686901m_8,
                popuplayertitle: 'Lote (500 unid. / 136869.01 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote500unid13686901m_8.png" /> Lote (500 unid. / 136869.01 m²)'
            });
var format_reaVerde1913unid803592797m_9 = new ol.format.GeoJSON();
var features_reaVerde1913unid803592797m_9 = format_reaVerde1913unid803592797m_9.readFeatures(json_reaVerde1913unid803592797m_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaVerde1913unid803592797m_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde1913unid803592797m_9.addFeatures(features_reaVerde1913unid803592797m_9);
var lyr_reaVerde1913unid803592797m_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde1913unid803592797m_9, 
                style: style_reaVerde1913unid803592797m_9,
                popuplayertitle: 'Área Verde (1913 unid. / 8035927.97 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde1913unid803592797m_9.png" /> Área Verde (1913 unid. / 8035927.97 m²)'
            });
var format_EMDEF10unid218783m_10 = new ol.format.GeoJSON();
var features_EMDEF10unid218783m_10 = format_EMDEF10unid218783m_10.readFeatures(json_EMDEF10unid218783m_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMDEF10unid218783m_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMDEF10unid218783m_10.addFeatures(features_EMDEF10unid218783m_10);
var lyr_EMDEF10unid218783m_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMDEF10unid218783m_10, 
                style: style_EMDEF10unid218783m_10,
                popuplayertitle: 'EMDEF (10 unid. / 2187.83 m²)',
                interactive: true,
                title: '<img src="styles/legend/EMDEF10unid218783m_10.png" /> EMDEF (10 unid. / 2187.83 m²)'
            });
var format_APP_11 = new ol.format.GeoJSON();
var features_APP_11 = format_APP_11.readFeatures(json_APP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_11.addFeatures(features_APP_11);
var lyr_APP_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP_11, 
                style: style_APP_11,
                popuplayertitle: 'APP',
                interactive: true,
                title: '<img src="styles/legend/APP_11.png" /> APP'
            });
var format_MassasDgua_12 = new ol.format.GeoJSON();
var features_MassasDgua_12 = format_MassasDgua_12.readFeatures(json_MassasDgua_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassasDgua_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua_12.addFeatures(features_MassasDgua_12);
var lyr_MassasDgua_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua_12, 
                style: style_MassasDgua_12,
                popuplayertitle: 'Massas D\'água',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua_12.png" /> Massas D\'água'
            });
var format_RiosDuplos_13 = new ol.format.GeoJSON();
var features_RiosDuplos_13 = format_RiosDuplos_13.readFeatures(json_RiosDuplos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosDuplos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos_13.addFeatures(features_RiosDuplos_13);
var lyr_RiosDuplos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos_13, 
                style: style_RiosDuplos_13,
                popuplayertitle: 'Rios Duplos',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos_13.png" /> Rios Duplos'
            });
var format_RiosSimples_14 = new ol.format.GeoJSON();
var features_RiosSimples_14 = format_RiosSimples_14.readFeatures(json_RiosSimples_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosSimples_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples_14.addFeatures(features_RiosSimples_14);
var lyr_RiosSimples_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples_14, 
                style: style_RiosSimples_14,
                popuplayertitle: 'Rios Simples',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples_14.png" /> Rios Simples'
            });
var format_Nascentes_15 = new ol.format.GeoJSON();
var features_Nascentes_15 = format_Nascentes_15.readFeatures(json_Nascentes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes_15.addFeatures(features_Nascentes_15);
var lyr_Nascentes_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes_15, 
                style: style_Nascentes_15,
                popuplayertitle: 'Nascentes',
                interactive: true,
                title: '<img src="styles/legend/Nascentes_15.png" /> Nascentes'
            });
var format_rvoresEstadoGeralBOM12734unid_16 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralBOM12734unid_16 = format_rvoresEstadoGeralBOM12734unid_16.readFeatures(json_rvoresEstadoGeralBOM12734unid_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralBOM12734unid_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralBOM12734unid_16.addFeatures(features_rvoresEstadoGeralBOM12734unid_16);
var lyr_rvoresEstadoGeralBOM12734unid_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralBOM12734unid_16, 
                style: style_rvoresEstadoGeralBOM12734unid_16,
                popuplayertitle: 'Árvores - Estado Geral: BOM  (12734 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralBOM12734unid_16.png" /> Árvores - Estado Geral: BOM  (12734 unid.)'
            });
var format_rvoresEstadoGeralMORTA649unid_17 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralMORTA649unid_17 = format_rvoresEstadoGeralMORTA649unid_17.readFeatures(json_rvoresEstadoGeralMORTA649unid_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralMORTA649unid_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralMORTA649unid_17.addFeatures(features_rvoresEstadoGeralMORTA649unid_17);
var lyr_rvoresEstadoGeralMORTA649unid_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralMORTA649unid_17, 
                style: style_rvoresEstadoGeralMORTA649unid_17,
                popuplayertitle: 'Árvores - Estado Geral: MORTA (649 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralMORTA649unid_17.png" /> Árvores - Estado Geral: MORTA (649 unid.)'
            });
var format_rvoresEstadoGeralPSSIMO236unid_18 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralPSSIMO236unid_18 = format_rvoresEstadoGeralPSSIMO236unid_18.readFeatures(json_rvoresEstadoGeralPSSIMO236unid_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralPSSIMO236unid_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralPSSIMO236unid_18.addFeatures(features_rvoresEstadoGeralPSSIMO236unid_18);
var lyr_rvoresEstadoGeralPSSIMO236unid_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralPSSIMO236unid_18, 
                style: style_rvoresEstadoGeralPSSIMO236unid_18,
                popuplayertitle: 'Árvores - Estado Geral: PÉSSIMO (236 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralPSSIMO236unid_18.png" /> Árvores - Estado Geral: PÉSSIMO (236 unid.)'
            });
var format_rvoresEstadoGeralRUIM1525unid_19 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralRUIM1525unid_19 = format_rvoresEstadoGeralRUIM1525unid_19.readFeatures(json_rvoresEstadoGeralRUIM1525unid_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralRUIM1525unid_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralRUIM1525unid_19.addFeatures(features_rvoresEstadoGeralRUIM1525unid_19);
var lyr_rvoresEstadoGeralRUIM1525unid_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralRUIM1525unid_19, 
                style: style_rvoresEstadoGeralRUIM1525unid_19,
                popuplayertitle: 'Árvores - Estado Geral: RUIM (1525 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralRUIM1525unid_19.png" /> Árvores - Estado Geral: RUIM (1525 unid.)'
            });
var format_rvoresEstadoGeralTIMO36333unid_20 = new ol.format.GeoJSON();
var features_rvoresEstadoGeralTIMO36333unid_20 = format_rvoresEstadoGeralTIMO36333unid_20.readFeatures(json_rvoresEstadoGeralTIMO36333unid_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresEstadoGeralTIMO36333unid_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresEstadoGeralTIMO36333unid_20.addFeatures(features_rvoresEstadoGeralTIMO36333unid_20);
var lyr_rvoresEstadoGeralTIMO36333unid_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresEstadoGeralTIMO36333unid_20, 
                style: style_rvoresEstadoGeralTIMO36333unid_20,
                popuplayertitle: 'Árvores - Estado Geral: ÓTIMO (36333 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresEstadoGeralTIMO36333unid_20.png" /> Árvores - Estado Geral: ÓTIMO (36333 unid.)'
            });
var format_rvoresImunesaoCorte8unid_21 = new ol.format.GeoJSON();
var features_rvoresImunesaoCorte8unid_21 = format_rvoresImunesaoCorte8unid_21.readFeatures(json_rvoresImunesaoCorte8unid_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoresImunesaoCorte8unid_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoresImunesaoCorte8unid_21.addFeatures(features_rvoresImunesaoCorte8unid_21);
var lyr_rvoresImunesaoCorte8unid_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoresImunesaoCorte8unid_21, 
                style: style_rvoresImunesaoCorte8unid_21,
                popuplayertitle: 'Árvores - Imunes ao Corte (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoresImunesaoCorte8unid_21.png" /> Árvores - Imunes ao Corte (8 unid.)'
            });
var group_rvores = new ol.layer.Group({
                                layers: [lyr_rvoresEstadoGeralBOM12734unid_16,lyr_rvoresEstadoGeralMORTA649unid_17,lyr_rvoresEstadoGeralPSSIMO236unid_18,lyr_rvoresEstadoGeralRUIM1525unid_19,lyr_rvoresEstadoGeralTIMO36333unid_20,lyr_rvoresImunesaoCorte8unid_21,],
                                fold: 'close',
                                title: 'Árvores'});
var group_HidrografiaFBDS = new ol.layer.Group({
                                layers: [lyr_APP_11,lyr_MassasDgua_12,lyr_RiosDuplos_13,lyr_RiosSimples_14,lyr_Nascentes_15,],
                                fold: 'close',
                                title: 'Hidrografia FBDS'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_APP164unid230278996m_4,lyr_readeUsoEspecial337unid311074946m_5,lyr_reaInstitucional227unid132587382m_6,lyr_reaPatrimonial33unid15807656m_7,lyr_Lote500unid13686901m_8,lyr_reaVerde1913unid803592797m_9,lyr_EMDEF10unid218783m_10,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipal_3.setVisible(true);lyr_APP164unid230278996m_4.setVisible(false);lyr_readeUsoEspecial337unid311074946m_5.setVisible(false);lyr_reaInstitucional227unid132587382m_6.setVisible(false);lyr_reaPatrimonial33unid15807656m_7.setVisible(false);lyr_Lote500unid13686901m_8.setVisible(false);lyr_reaVerde1913unid803592797m_9.setVisible(false);lyr_EMDEF10unid218783m_10.setVisible(false);lyr_APP_11.setVisible(false);lyr_MassasDgua_12.setVisible(false);lyr_RiosDuplos_13.setVisible(false);lyr_RiosSimples_14.setVisible(false);lyr_Nascentes_15.setVisible(false);lyr_rvoresEstadoGeralBOM12734unid_16.setVisible(false);lyr_rvoresEstadoGeralMORTA649unid_17.setVisible(false);lyr_rvoresEstadoGeralPSSIMO236unid_18.setVisible(false);lyr_rvoresEstadoGeralRUIM1525unid_19.setVisible(false);lyr_rvoresEstadoGeralTIMO36333unid_20.setVisible(false);lyr_rvoresImunesaoCorte8unid_21.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipal_3,group_reasPblicas,group_HidrografiaFBDS,group_rvores];
lyr_LimiteMunicipal_3.set('fieldAliases', {'ID': 'ID', 'CD_GEOCODM': 'CD_GEOCODM', 'NM_MUNICIP': 'NM_MUNICIP', });
lyr_APP164unid230278996m_4.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'layer': 'layer', 'path': 'path', });
lyr_readeUsoEspecial337unid311074946m_5.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'layer': 'layer', 'path': 'path', });
lyr_reaInstitucional227unid132587382m_6.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'layer': 'layer', 'path': 'path', });
lyr_reaPatrimonial33unid15807656m_7.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'layer': 'layer', 'path': 'path', });
lyr_Lote500unid13686901m_8.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'layer': 'layer', 'path': 'path', });
lyr_reaVerde1913unid803592797m_9.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'layer': 'layer', 'path': 'path', });
lyr_EMDEF10unid218783m_10.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'layer': 'layer', 'path': 'path', });
lyr_APP_11.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'APP_M': 'APP_M', 'AREA_HA': 'AREA_HA', });
lyr_MassasDgua_12.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'AREA_HA', });
lyr_RiosDuplos_13.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'AREA_HA': 'AREA_HA', });
lyr_RiosSimples_14.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'COMP_KM': 'COMP_KM', });
lyr_Nascentes_15.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', });
lyr_rvoresEstadoGeralBOM12734unid_16.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralMORTA649unid_17.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralPSSIMO236unid_18.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralRUIM1525unid_19.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresEstadoGeralTIMO36333unid_20.set('fieldAliases', {'Código': 'Código', 'Data da co': 'Data da Coleta', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Longitude': 'Longitude', 'Latitude d': 'Latitude d', 'Nome popul': 'Nome Popular', 'Família b': 'Família', 'Nome cient': 'Nome Científico', 'Altura (m)': 'Altura (m)', 'DAP (cm)': 'DAP (cm)', 'Estado ger': 'Estado Geral', 'Doença ou': 'Doença', 'Agentes (f': 'Agentes', 'Intensidad': 'Intensidad', 'Local da f': 'Local da f', 'Injúria': 'Injúria', 'Grau da(s)': 'Grau da(s)', 'Vandalismo': 'Vandalismo', 'Assimetria': 'Assimetria', 'Local(ais)': 'Local(ais)', 'Presença': 'Presença', 'Conflito(s': 'Conflito(s', 'Conflitos': 'Conflitos', 'Ação(õe': 'Ação(õe', });
lyr_rvoresImunesaoCorte8unid_21.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LimiteMunicipal_3.set('fieldImages', {'ID': 'TextEdit', 'CD_GEOCODM': 'TextEdit', 'NM_MUNICIP': 'TextEdit', });
lyr_APP164unid230278996m_4.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_readeUsoEspecial337unid311074946m_5.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_reaInstitucional227unid132587382m_6.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_reaPatrimonial33unid15807656m_7.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Lote500unid13686901m_8.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_reaVerde1913unid803592797m_9.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EMDEF10unid218783m_10.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_APP_11.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua_12.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos_13.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples_14.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes_15.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_rvoresEstadoGeralBOM12734unid_16.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralMORTA649unid_17.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralPSSIMO236unid_18.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralRUIM1525unid_19.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresEstadoGeralTIMO36333unid_20.set('fieldImages', {'Código': 'TextEdit', 'Data da co': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude d': 'TextEdit', 'Nome popul': 'TextEdit', 'Família b': 'TextEdit', 'Nome cient': 'TextEdit', 'Altura (m)': 'TextEdit', 'DAP (cm)': 'TextEdit', 'Estado ger': 'TextEdit', 'Doença ou': 'TextEdit', 'Agentes (f': 'TextEdit', 'Intensidad': 'TextEdit', 'Local da f': 'TextEdit', 'Injúria': 'TextEdit', 'Grau da(s)': 'TextEdit', 'Vandalismo': 'TextEdit', 'Assimetria': 'TextEdit', 'Local(ais)': 'TextEdit', 'Presença': 'TextEdit', 'Conflito(s': 'TextEdit', 'Conflitos': 'TextEdit', 'Ação(õe': 'TextEdit', });
lyr_rvoresImunesaoCorte8unid_21.set('fieldImages', {'fid': '', 'nome_popular': '', 'nome_cientifico': '', 'legislacao': '', });
lyr_LimiteMunicipal_3.set('fieldLabels', {'ID': 'hidden field', 'CD_GEOCODM': 'hidden field', 'NM_MUNICIP': 'hidden field', });
lyr_APP164unid230278996m_4.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_readeUsoEspecial337unid311074946m_5.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_reaInstitucional227unid132587382m_6.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_reaPatrimonial33unid15807656m_7.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Lote500unid13686901m_8.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_reaVerde1913unid803592797m_9.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_EMDEF10unid218783m_10.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_APP_11.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua_12.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosDuplos_13.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples_14.set('fieldLabels', {'fid': 'no label', 'GEOCODIGO': 'no label', 'MUNICIPIO': 'no label', 'UF': 'no label', 'CD_UF': 'no label', 'HIDRO': 'no label', 'COMP_KM': 'no label', });
lyr_Nascentes_15.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_rvoresEstadoGeralBOM12734unid_16.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralMORTA649unid_17.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralPSSIMO236unid_18.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralRUIM1525unid_19.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'inline label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresEstadoGeralTIMO36333unid_20.set('fieldLabels', {'Código': 'hidden field', 'Data da co': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude d': 'hidden field', 'Nome popul': 'inline label - visible with data', 'Família b': 'inline label - visible with data', 'Nome cient': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'DAP (cm)': 'inline label - visible with data', 'Estado ger': 'inline label - visible with data', 'Doença ou': 'inline label - visible with data', 'Agentes (f': 'inline label - visible with data', 'Intensidad': 'inline label - visible with data', 'Local da f': 'inline label - visible with data', 'Injúria': 'inline label - visible with data', 'Grau da(s)': 'inline label - visible with data', 'Vandalismo': 'inline label - visible with data', 'Assimetria': 'inline label - visible with data', 'Local(ais)': 'header label - visible with data', 'Presença': 'inline label - visible with data', 'Conflito(s': 'inline label - visible with data', 'Conflitos': 'inline label - visible with data', 'Ação(õe': 'inline label - visible with data', });
lyr_rvoresImunesaoCorte8unid_21.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_rvoresImunesaoCorte8unid_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});