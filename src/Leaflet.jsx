import React from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkerCluster from "./Clusters";

const position = [46.0953589, -73.1733771];
const mapStyle = { height: "90vh" };

const Leaflet = () => {
  let markers;

  const addMarkers = async () => {
    //let response = await fetch("../data/trivial.json");
    //let geojsonFeatureCollection = await response.json();
    let geojsonFeatureCollection =
    {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5787686,
              45.5977363
            ]
          },
          "properties": {
            "name": "Ateliers G. Paquette inc. (Montréal)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, sécheuse, cuisinière, plaque de cuisson, congélateur, réfrigérateur, micro-ondes, lave-vaisselle, déshumidificateur, cellier et de refroidisseurs à vin",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ateliers G. Paquette inc. (Montréal)</h1><p>6744, Rue Jarry Est, Saint-Léonard, H1P 1W3<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7113871,
              45.4905847
            ]
          },
          "properties": {
            "name": "Électro Experts (Ville St-Laurent)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Amplificateur, broyeur à déchet, compacteur d'ordures, congélateur, cuisinière, poêle, four, déshumidificateur, four à micro-ondes, hotte de ventilation de cuisinière, lave-vaisselle, machine à laver, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Experts (Ville St-Laurent)</h1><p>4000, Côte Vertu, Ville St-Laurent, H4R 1V4<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4713626,
              45.4887701
            ]
          },
          "properties": {
            "name": "Électro Experts (St-Hubert)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Amplificateur, broyeur à déchet, compacteur d'ordures, congélateur, cuisinière, poêle, four, déshumidificateur, four à micro-ondes, hotte de ventilation de cuisinière, lave-vaisselle, machine à laver, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Experts (St-Hubert)</h1><p>3755, Boulevard Taschereau, St-Hubert, J4T 2G4<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.344497,
              46.7981493
            ]
          },
          "properties": {
            "name": "Ateliers G. Paquette inc. (Québec)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, sécheuse, cuisinière, plaque de cuisson, congélateur, réfrigérateur, micro-ondes, lave-vaisselle, déshumidificateur, cellier et de refroidisseurs à vin",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ateliers G. Paquette inc. (Québec)</h1><p>6210, Boulevard Wilfrid-Hamel, L'Ancienne-Lorette, G2E 2H7<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4480193,
              45.7513651
            ]
          },
          "properties": {
            "name": "Ateliers G. Paquette inc. (Repentigny)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, sécheuse, cuisinière, plaque de cuisson, congélateur, réfrigérateur, micro-ondes, lave-vaisselle, déshumidificateur, cellier et de refroidisseurs à vin",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ateliers G. Paquette inc. (Repentigny)</h1><p>104, Rue Laroche, Repentigny, J6A 7M5<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.3246345,
              46.8138827
            ]
          },
          "properties": {
            "name": "Au Royaume du Service enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur, cuisinière, congélateur, lave-vaisselle, laveuse, laveuse frontale, sécheuse, appareil de buanderie, four encastré, plaque de cuisson",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Au Royaume du Service enr.</h1><p>3660, Boulevard Masson, Québec, G1P 1K1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -68.5360673,
              48.4474
            ]
          },
          "properties": {
            "name": "Service LP",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Cuisinière, plaque de cuisson, hotte, four encastrable, lave-vaisselle, laveuse et sécheuse et plus",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service LP</h1><p>190, Rue Saint-Germain Ouest, Rimouski, G5L 4B7<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -68.5151325,
              48.4454777
            ]
          },
          "properties": {
            "name": "Service de Réparation Gilles Dubé",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service de Réparation Gilles Dubé</h1><p>41, 3e Rue E, Rimouski, G5L 2G7<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -67.4512834,
              48.8038998
            ]
          },
          "properties": {
            "name": "Le Réparateur enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Le Réparateur enr.</h1><p>27, Rang de la Coulée, Matane, G4W 9A1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -67.5379648,
              48.8485557
            ]
          },
          "properties": {
            "name": "Réparation CLF",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation CLF</h1><p>177, Avenue Fraser, Matane, G4W 3H4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.5993963,
              46.3253565
            ]
          },
          "properties": {
            "name": "Électro Experts (Trois-Rivières)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Amplificateur, broyeur à déchet, compacteur d'ordures, congélateur, cuisinière, poêle, four, déshumidificateur, four à micro-ondes, hotte de ventilation de cuisinière, lave-vaisselle, machine à laver, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Experts (Trois-Rivières)</h1><p>6855, Boulevard Jean XXIII, Trois-Rivières Ouest, G9A 5C9<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.605724,
              45.5725635
            ]
          },
          "properties": {
            "name": "Électro Experts (Montréal, Pie IX)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Amplificateur, broyeur à déchet, compacteur d'ordures, congélateur, cuisinière, poêle, four, déshumidificateur, four à micro-ondes, hotte de ventilation de cuisinière, lave-vaisselle, machine à laver, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Experts (Montréal, Pie IX)</h1><p>8260, Boulevard Pie IX, Montréal, H1Z 3T6<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4330075,
              46.0428065
            ]
          },
          "properties": {
            "name": "Électro Experts (Joliette)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Amplificateur, broyeur à déchet, compacteur d'ordures, congélateur, cuisinière, poêle, four, déshumidificateur, four à micro-ondes, hotte de ventilation de cuisinière, lave-vaisselle, machine à laver, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Experts (Joliette)</h1><p>183, Boulevard Antonio-Barette, Joliette, J6E 1E6<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.5052533,
              45.8821964
            ]
          },
          "properties": {
            "name": "Électro Experts (Drummondville)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Amplificateur, broyeur à déchet, compacteur d'ordures, congélateur, cuisinière, poêle, four, déshumidificateur, four à micro-ondes, hotte de ventilation de cuisinière, lave-vaisselle, machine à laver, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Experts (Drummondville)</h1><p>1315, Rue Cormier, Drummondville, J2C 6M1<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.3271976,
              46.8042217
            ]
          },
          "properties": {
            "name": "Électro Experts (Québec)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Amplificateur, broyeur à déchet, compacteur d'ordures, congélateur, cuisinière, poêle, four, déshumidificateur, four à micro-ondes, hotte de ventilation de cuisinière, lave-vaisselle, machine à laver, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Experts (Québec)</h1><p>4885, Boulevard Wilfrid-Hamel, Québec, G1P 2J7<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.9380485,
              45.3990667
            ]
          },
          "properties": {
            "name": "Électro Experts (Sherbrooke)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Amplificateur, broyeur à déchet, compacteur d'ordures, congélateur, cuisinière, poêle, four, déshumidificateur, four à micro-ondes, hotte de ventilation de cuisinière, lave-vaisselle, machine à laver, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Experts (Sherbrooke)</h1><p>2655, Rue King Ouest, Sherbrooke, J1L 2G4<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7761058,
              45.5837142
            ]
          },
          "properties": {
            "name": "Électro Experts (Laval)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Amplificateur, broyeur à déchet, compacteur d'ordures, congélateur, cuisinière, poêle, four, déshumidificateur, four à micro-ondes, hotte de ventilation de cuisinière, lave-vaisselle, machine à laver, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Experts (Laval)</h1><p>2275, Boulevard Dagenais Ouest, Laval, H7L 6B1<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.1940658,
              46.8521524
            ]
          },
          "properties": {
            "name": "Frigo Service inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur, cuisinière, congélateur, lave-vaisselle, laveuse, sécheuse, poêle au gaz et poêle BBQ",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Frigo Service inc.</h1><p>3436, Boulevard Sainte-Anne, Québec, G1E 6Z2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.607326,
              46.3714542
            ]
          },
          "properties": {
            "name": "Lajoie CVAC (Trois-Rivières)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Système de chauffage central (fournaise, chaudière) à air chaud, à l'eau chaude, à l’huile (mazout), au gaz, électrique, au bois, thermopompe, plancher radiant, chauffe-piscine, chauffe-eau, système de climatisation central à air pulsé, climatiseur mural, thermopompe centrale et murale, air climatisé (conditionné), système de ventilation, échangeur d'air, contrôle, système de chauffage central à air chaud, à l'eau chaude, à vapeur, infrarouge, radiant, chauffe-piscine, chauffe-eau, foyer, cuisinière, prise pour le barbecue",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Lajoie CVAC (Trois-Rivières)</h1><p>7100, Boulevard des Forges, Trois-Rivières, G8Y 1Y5<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.6891788,
              46.6175489
            ]
          },
          "properties": {
            "name": "Lajoie CVAC (Shawinigan)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Système de chauffage central (fournaise, chaudière) à air chaud, à l'eau chaude, à l’huile (mazout), au gaz, électrique, au bois, thermopompe, plancher radiant, chauffe-piscine, chauffe-eau, système de climatisation central à air pulsé, climatiseur mural, thermopompe centrale et murale, air climatisé (conditionné), système de ventilation, échangeur d'air, contrôle, système de chauffage central à air chaud, à l'eau chaude, à vapeur, infrarouge, radiant, chauffe-piscine, chauffe-eau, foyer, cuisinière, prise pour le barbecue",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Lajoie CVAC (Shawinigan)</h1><p>321, 7e Avenue, Shawinigan, G9T 2B4<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.101487,
              46.2714816
            ]
          },
          "properties": {
            "name": "Denis Lambert Électroménagers",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Réfrigérateur, lave-vaisselle, laveuse, sécheuse, petit électroménager, micro-ondes, machine à expresso, machine à café, grille-pain, cuisinière, congélateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Denis Lambert Électroménagers</h1><p>1091, Route Gagné, Saint-Justin, J0K 2V0<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.1733771,
              46.0953589
            ]
          },
          "properties": {
            "name": "Service Jonathan Bellehumeur inc.",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Lessiveuse, sécheuse, cuisinière, réfrigérateur, lave-vaisselle, thermo-pompe",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Jonathan Bellehumeur inc.</h1><p>100, Rang de la Rivière-Bayonne N, Berthierville, J0K 1A0<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.9222693,
              46.2577841
            ]
          },
          "properties": {
            "name": "Lemay Électro-Ménagers",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Lemay Électro-Ménagers</h1><p>681, Boulevard Saint-Laurent E, Louiseville, J5V 1J1<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.203234,
              46.8797249
            ]
          },
          "properties": {
            "name": "Monsieur Electro",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur, poêle, laveuse, sécheuse, lave-vaisselle, congélateur, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Monsieur Electro</h1><p>378, Rue Des Bremailles, Québec, G1C 8A2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.372231,
              46.894569
            ]
          },
          "properties": {
            "name": "Roy Services d'électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager ainsi que les appareils au gaz naturel et propane",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Roy Services d'électroménagers</h1><p>580, De la Douceur, Québec, G3G 1T3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.4970857,
              46.9812834
            ]
          },
          "properties": {
            "name": "Électroménagers Mike Service",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électroménagers Mike Service</h1><p>11, Rue Harvey, Saint-Gabriel-de-Valcartier, G0A 4S0<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.0771503,
              46.0465213
            ]
          },
          "properties": {
            "name": "Piché Marco Services enr.",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Piché Marco Services enr.</h1><p>77, Rue Paul, Ste-Anne-de-Sorel, J3P 0K6<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2838648,
              46.7990577
            ]
          },
          "properties": {
            "name": "L'Doc de l'électro",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>L'Doc de l'électro</h1><p>399, Rue Jacquard, Québec, G1N 4J6<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4816342,
              45.3547268
            ]
          },
          "properties": {
            "name": "Max Service",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Sécheuse à gaz, cuisinière à gaz, table de cuisson au gaz, réfrigirateur, congélateur, laveuse, sécheuse, lave vaiselle, plaque de cuisson électrique, plaque de cuisson à induction, cuisinière électrique, cuisinière à induction",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Max Service</h1><p>128, Rue Perron, Saint-Philippe, J0L 2K0<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4602829,
              45.4864652
            ]
          },
          "properties": {
            "name": "Service 2000 Électroménagers (Greenfield Park)",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Réfrigérateur, laveuse, sécheuse, cuisinière, lave-vaisselle, barbecue, électroménager au gaz",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service 2000 Électroménagers (Greenfield Park)</h1><p>4180, Grande Allée, Greenfield Park, J4V 3N2<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.2913281,
              45.6449934
            ]
          },
          "properties": {
            "name": "Chatigny inc. Réparation d'électroménagers",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, sécheuse, réfrigérateur, lave-vaisselle, cuisinière, air climatisé",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Chatigny inc. Réparation d'électroménagers</h1><p>225, Rue Dominique, Saint-Amable, J0L 1N0<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -66.3843483,
              50.2074122
            ]
          },
          "properties": {
            "name": "Atelier Jr Électroménagers",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Sécheuse, lave-vaisselle, réfrigérateur, laveuse, cuisinière, congélateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Atelier Jr Électroménagers</h1><p>472, Avenue Cartier, Sept-Îles, G4R 2T6<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5939661,
              45.643316
            ]
          },
          "properties": {
            "name": "Vincent Robillard inc.",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Lave-vaisselle, réfrigérateur, congélateur, laveuse, sécheuse, cuisinière électrique et au gaz",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Vincent Robillard inc.</h1><p>12685, 28e Avenue, Montréal, H1E 2A9<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8207185,
              45.6176149
            ]
          },
          "properties": {
            "name": "Relève Technique Marcel Legros",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Broyeur, four encastré, laveuse frontale, laveuse, secheuse, cellier, compacteur, congélateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Relève Technique Marcel Legros</h1><p>15290, Rue Parthenais , Boisbriand, J7G 1X9<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.3493351,
              47.1038565
            ]
          },
          "properties": {
            "name": "André Ouellet Service",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Sécheuse, lave-vaisselle, réfrigérateur, laveuse, cuisinière, congélateur, micro-ondes, hotte",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>André Ouellet Service</h1><p>91, 9e Rue, L’Islet, G0R 2C0<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.0698831,
              45.2358536
            ]
          },
          "properties": {
            "name": "Le Technicien Pro",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Congélateur, lave-vaisselle, cuisinière, sécheuse, laveuse, réfrigérateur, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Le Technicien Pro</h1><p>130, Rue du Vallon, Sainte-Catherine-de-Hatley, J0B 1W0<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7132529,
              45.5975307
            ]
          },
          "properties": {
            "name": "Appareil Électrotech Laval inc.",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Sécheuse à gaz, lave-vaisselle, réfrigérateur, laveuse, cuisinière, cuisinière au gaz, congélateur, micro-ondess, cuisinière à induction, plaque de cuisson, plaque de cuisson à gaz, four encastré, broyeur, cellier, réfrigérateur à vin, hotte de cuisinière, compacteur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Appareil Électrotech Laval inc.</h1><p>1505, Rue du Jura, Laval, H7M 5K1<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.6054221,
              46.1191196
            ]
          },
          "properties": {
            "name": "J.Pitre Services",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Cuisinière, lave-vaisselle, air climatisé, congélateur, appareil au gaz propane et gaz naturel",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>J.Pitre Services</h1><p>1294, Rue de Saint-Jovite, Mont-Tremblant, J8E 3J9<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4104646,
              45.4986928
            ]
          },
          "properties": {
            "name": "Serva Plus",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Cuisinière, lave-vaisselle, congélateur,laveuse, four encastré, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Serva Plus</h1><p>2305, Rue Fernand, Saint-Hubert, J3Y 5B2<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6493461,
              45.6081921
            ]
          },
          "properties": {
            "name": "À Domicile Le Technicien Idéal inc.",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Réfrigérateur, congélateur, cuisinière, lave-vaisselle, laveuse, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>À Domicile Le Technicien Idéal inc.</h1><p>982, Avenue Jules-Armand, Laval, H7C 2E4<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.1908365,
              45.4383234
            ]
          },
          "properties": {
            "name": "Alix Service d'électroménagers",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Alix Service d'électroménagers</h1><p>238, Chemin Chambly, Marieville, J3M 1N9<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5093828,
              45.5209061
            ]
          },
          "properties": {
            "name": "Oxebo",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Réfrigérateur, cuisinière, laveuse, sécheuse, lave-vaisseller, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Oxebo</h1><p>794, Rue Ste-Hélène, Longueuil, J4K 3R5<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.534025,
              45.3829601
            ]
          },
          "properties": {
            "name": "Les Entreprises N. Pilon",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Les Entreprises N. Pilon</h1><p>89, Chemin Saint-François-Xavier, Candiac, J5R 4V4<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8093687,
              45.5861275
            ]
          },
          "properties": {
            "name": "Gendreau Richard inc.",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Gendreau Richard inc.</h1><p>3411, Rue Constance, Fabreville, H7P 4J1<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7522301,
              45.3468032
            ]
          },
          "properties": {
            "name": "Refrigeration Pierre Tremblay",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Refrigeration Pierre Tremblay</h1><p>201, Rue Bergevin, Châteauguay, J6K 5A9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -75.0519456,
              46.3982429
            ]
          },
          "properties": {
            "name": "Le Joli Service",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Le Joli Service</h1><p>1825, Chemin de Éperviers , Nominingue, J0W 1R0<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.0664477,
              48.4371616
            ]
          },
          "properties": {
            "name": "J. Sirois Electrique inc.",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Aspirateur, appareil commercial et de restaurant, moteur, outil électrique, petits électroménager, pièce de BBQ, ventilation/chauffage",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>J. Sirois Electrique inc.</h1><p>2203, Rue Roussel, Chicoutimi, G7G 1W4<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.2947634,
              45.346115
            ]
          },
          "properties": {
            "name": "Daniel Service inc",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Cuisinière, lave-vaisselle, congélateur,laveuse, plaque de cuisson, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Daniel Service inc</h1><p>60, Rue du Blé, Saint-Jean-sur-Richelieu, J2W 1H5<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6590682,
              45.5308423
            ]
          },
          "properties": {
            "name": "Réparation Flash - Rue Charles de la tour, Montréal",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, laveuse frontal, poêle, broyeur, réfrigérateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation Flash - Rue Charles de la tour, Montréal</h1><p>9300, Rue Charles de la Tour, Montréal, H4N 1M2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6038323,
              45.5232533
            ]
          },
          "properties": {
            "name": "Appliance Specialist inc.",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Cuisinière, lave-vaisselle, laveuse, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Appliance Specialist inc.</h1><p>306-5655, Avenue du Parc, Montréal, H2V 4H1<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.9815278,
              46.0553519
            ]
          },
          "properties": {
            "name": "Électroménager Michael Croteau",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Électroménager commercial, congélateur, laveuse, lave-vaisselle, cuisinière, sécheuse, réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électroménager Michael Croteau</h1><p>728, Rue Notre-Dame O, Victoriaville, G6P 1T8<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6084874,
              45.5252118
            ]
          },
          "properties": {
            "name": "Électromenagers Outremont",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cuisinière, laveuse, sécheuse, réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électromenagers Outremont</h1><p>6011, Avenue du Parc, Montréal, H2V 4H4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4761753,
              45.4965272
            ]
          },
          "properties": {
            "name": "Plante Réfrigération",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Plante Réfrigération</h1><p>3316, Grande Allée, Saint-Hubert, J4T 2S5<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6289317,
              45.5154402
            ]
          },
          "properties": {
            "name": "Reparation D'Apareille Electrique inc.",
            "categories": [

            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Reparation D'Apareille Electrique inc.</h1><p>200-2795, Chemin Bates , Montréal, H3S 1B5<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6021171,
              45.5345297
            ]
          },
          "properties": {
            "name": "Dantech Électro",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Cuisinière, plaque de cuisson, gaz, induction, plaque de cuisson élément tubulaire et radiant, lave vaisselle, laveuse frontale, verticale, hotte de cuisine, air climatisé: mural, central, thermopompe, HVAC: heating, ventilation, air conditionné",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Dantech Électro</h1><p>6298, Avenue de Châteaubriand, Montréal, H2S 2N4<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8301209,
              45.4942168
            ]
          },
          "properties": {
            "name": "Réparation Flash - Rue Brentwood, Dollard-Des Ormeaux",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, laveuse frontal, poêle, broyeur, réfrigérateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation Flash - Rue Brentwood, Dollard-Des Ormeaux</h1><p>29, Rue Brentwood, Dollard-des-Ormeaux, H9A 2P8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6699807,
              45.5191884
            ]
          },
          "properties": {
            "name": "Électroménagers DD",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cuisinière, four, laveuse, sécheuse, lave-vaisselle, micro-ondes, réfrigérateur, congélateur, hotte de ventillation",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électroménagers DD</h1><p>730, Boulevard Montpellier, Saint-Laurent, H4L 5B3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6069254,
              45.5255438
            ]
          },
          "properties": {
            "name": "Réparation Flash - Rue Jeanne Mance, Montréal",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, laveuse frontal, poêle, broyeur, réfrigérateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation Flash - Rue Jeanne Mance, Montréal</h1><p>5955, Jeanne Mance, Montréal, H2V 4K9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5995541,
              45.540219
            ]
          },
          "properties": {
            "name": "Atelier de Réparation Roméo",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cuisinière, four, laveuse, sécheuse, lave-vaisselle , micro-ondes, réfrigérateur, congélateur, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Atelier de Réparation Roméo</h1><p>1309, Rue Beaubien E, Montréal, H2G 1K7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6640435,
              45.5279751
            ]
          },
          "properties": {
            "name": "Allo Services",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, micro-ondes, petit-électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Allo Services</h1><p>705-950, Boulevard Lebeau , Saint-Laurent, H4N 0A4<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6596179,
              45.5382017
            ]
          },
          "properties": {
            "name": "Electros Fabuleux",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cellier, congélateur, cuisinière, four encastré, lave-vaisselle, laveuse, réfrigérateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electros Fabuleux</h1><p>9600, Rue Meilleur, Montréal, H2N 2E3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6068101,
              45.5254068
            ]
          },
          "properties": {
            "name": "Réparations électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparations électroménagers</h1><p>5943, Rue Jeanne-Mance, Montréal, H2V 4K9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.602269,
              45.523398
            ]
          },
          "properties": {
            "name": "Appliances Specialiste",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Appliances Specialiste</h1><p>5587, Rue Jeanne-Mance, Montréal, H2V 4K7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6327861,
              45.5121607
            ]
          },
          "properties": {
            "name": "Circle 1 Tech inc.",
            "categories": [

            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Circle 1 Tech inc.</h1><p>2795, Chemin Bates, Montréal, H3S 1B5<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5978362,
              45.5435589
            ]
          },
          "properties": {
            "name": "Ateliers Nelson",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, four, four encastrable, plaque de cuisson",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ateliers Nelson</h1><p>6562, Avenue Papineau, Montréal, H2G 2X2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.554957,
              45.515348
            ]
          },
          "properties": {
            "name": "Service Lavergne",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, foyer electrique",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Lavergne</h1><p>1119, Rue Saint-André, Montréal, H2L 4Z6<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.59271,
              45.4694545
            ]
          },
          "properties": {
            "name": "Services B & N 2013 inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Services B & N 2013 inc.</h1><p>5164, Rue Notre-Dame O, Montréal, H4C 1T3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5717403,
              45.5217112
            ]
          },
          "properties": {
            "name": "Jean-Guy Rochette Réparation",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Jean-Guy Rochette Réparation</h1><p>12-3843, Rue Saint-Hubert, Montréal, H2L 4A4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.586659,
              45.547431
            ]
          },
          "properties": {
            "name": "Frigo Mobile",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, réfrigérateur, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Frigo Mobile</h1><p>5938, Rue Molson, Montréal, H1Y 3B9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5489209,
              45.5297106
            ]
          },
          "properties": {
            "name": "Répare Moi Vite",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigerateur, cuisinière électrique, laveuse, sécheuse, lave-vaisselle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Répare Moi Vite</h1><p>Montréal, H2K 3G4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6333986,
              45.5584332
            ]
          },
          "properties": {
            "name": "Dream Elect",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Dream Elect</h1><p>204-1765, Rue Émile-Yelle, Montréal, H2M 1L1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.599832,
              45.5557682
            ]
          },
          "properties": {
            "name": "Ameublement De Lorimier enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ameublement De Lorimier enr.</h1><p>2662, Rue Jean-Talon E, Montréal, H2A 1V3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6019476,
              45.5708618
            ]
          },
          "properties": {
            "name": "Centre de Pièces et Services DB inc. (Montréal)",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Cafetière, lave-vaisselle, laveuse, réfrigérateur, aspirateur, cuisinière, four encastré",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Centre de Pièces et Services DB inc. (Montréal)</h1><p>8000, Boulevard Pie IX, Montréal, H1Z 3T3<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7487121,
              45.55595
            ]
          },
          "properties": {
            "name": "Centre de Pièces et Services DB inc. (Laval)",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Cafetière, lave-vaisselle, laveuse, réfrigérateur, aspirateur, cuisinière, four encastré",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Centre de Pièces et Services DB inc. (Laval)</h1><p>3300, Boulevard St-Martin O, Laval, H7T 1A1<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6222774,
              45.5669029
            ]
          },
          "properties": {
            "name": "Vision Design Electro-Usagés",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigerateur, cuisinière électrique, laveuse top et frontale, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Vision Design Electro-Usagés</h1><p>8719, 8e Avenue, Montréal, H1Z 2X4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6824042,
              45.5620228
            ]
          },
          "properties": {
            "name": "S.E.S. Service inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière, sécheuse, congélateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>S.E.S. Service inc.</h1><p>22, Boulevard Lévesque E, Laval, H7G 1B4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7872531,
              45.4825268
            ]
          },
          "properties": {
            "name": "AA Électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>AA Électroménagers</h1><p>2180, Route TransCanadienne, Dorval, H9P 2N4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.550787,
              45.532056
            ]
          },
          "properties": {
            "name": "Ameublement Frontenac",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ameublement Frontenac</h1><p>1840B, Rue Frontenac, Montréal, H2K 2Z1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5723884,
              45.4550466
            ]
          },
          "properties": {
            "name": "Bibi Électrique",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Bibi Électrique</h1><p>5163, Rue de Verdun, Verdun, H4G 1N7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6421819,
              45.4545089
            ]
          },
          "properties": {
            "name": "Farmer Electric",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Farmer Electric</h1><p>7455, Rue Sherbrooke O, Montréal, H4B 1S3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6529776,
              45.5686727
            ]
          },
          "properties": {
            "name": "Meuble Fleury",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Meuble Fleury</h1><p>1850, Fleury E, Montréal, H2B 1H6<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6600917,
              45.5468892
            ]
          },
          "properties": {
            "name": "Siroflex",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse et sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Siroflex</h1><p>9900, Boulevard Saint-Laurent , Montréal, H3L 2N7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5676516,
              45.5870927
            ]
          },
          "properties": {
            "name": "Service Servotech",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, four, déshumidificateur, chauffage centrale, pompe de chaleur, chaudière électrique",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Servotech</h1><p>6954, Rue de Touraine, Saint-Léonard, H1T 3T2<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.735861,
              45.4721
            ]
          },
          "properties": {
            "name": "Mazzara Reparation Electromenagers",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, four",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Mazzara Reparation Electromenagers</h1><p>200, Chemin de la Côte-Vertu, Dorval, H4S 2A3<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6411369,
              45.5860283
            ]
          },
          "properties": {
            "name": "Action Réparation",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, four, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Action Réparation</h1><p>10670, Avenue de Bruxelles , Montréal-Nord, H1H 4R6<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5814643,
              45.5919245
            ]
          },
          "properties": {
            "name": "Hi-Tech Électroménagers",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, four, grille-pain, machine à café, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Hi-Tech Électroménagers</h1><p>6245, Boulevard Metropolitain, Saint-Léonard, H1P 1X7<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5004278,
              45.5265462
            ]
          },
          "properties": {
            "name": "Electro-Frigo inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, cuisinière au gaz",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electro-Frigo inc.</h1><p>670, Rue Martel, Longueuil, J4J 1C7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5762588,
              45.5893238
            ]
          },
          "properties": {
            "name": "Les Réparations Vincenzo Floridia enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Les Réparations Vincenzo Floridia enr.</h1><p>6235, Rue de la Villanelle, Saint-Léonard, H1S 1W2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5823653,
              45.5904392
            ]
          },
          "properties": {
            "name": "Fizz Industrie",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Fizz Industrie</h1><p>6131, Boulevard Metropolitain, Saint-Léonard, H1P 1X7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5547969,
              45.5790013
            ]
          },
          "properties": {
            "name": "Les Electroménagers Robert Bélanger",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Les Electroménagers Robert Bélanger</h1><p>5547, Rue Bossuet, Montréal, H1M 2M6<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4852673,
              45.5082298
            ]
          },
          "properties": {
            "name": "Réparation d'Électromenagers Serge",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur, laveuse, sécheuse.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation d'Électromenagers Serge</h1><p>301-1340, Rue Conefroy, Longueuil, J4K 5B3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7561711,
              45.5225545
            ]
          },
          "properties": {
            "name": "Service Électroménager Oméga inc.",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, cuisinière, appareil de climatisation, thermopompe",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Électroménager Oméga inc.</h1><p>100A-2555, Avenue du Havre-des-Îles, Laval, H7W 4R4<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4807806,
              45.5014137
            ]
          },
          "properties": {
            "name": "Yves Rioux Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Yves Rioux Service</h1><p>1909, Rue Bonaparte, Saint-Hubert, J4T 2C2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.733401,
              45.582104
            ]
          },
          "properties": {
            "name": "Crystal Electro",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, poêle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Crystal Electro</h1><p>2440, Boulevard Industriel, Laval, H7S 2G7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6508943,
              45.4234882
            ]
          },
          "properties": {
            "name": "Service de Laveuse Lasalle",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service de Laveuse Lasalle</h1><p>100, Avenue Lafleur, Lasalle, H8R 3G9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.628807,
              45.603463
            ]
          },
          "properties": {
            "name": "Électro Marpad",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Marpad</h1><p>5148, Boulevard Henri-Bourassa E, Montréal-Nord, H1G 2S6<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4820949,
              45.512559
            ]
          },
          "properties": {
            "name": "G Pelletier Réparation",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur, laveuse, sécheuse, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>G Pelletier Réparation</h1><p>2303, Rue Sainte-Hélène, Longueuil, J4K 3T8 <br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.47973,
              45.5177426
            ]
          },
          "properties": {
            "name": "Normand Matte Electroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Normand Matte Electroménagers</h1><p>2293, Rue Joliette, Longueuil, J4K 4Z7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6016418,
              45.5958256
            ]
          },
          "properties": {
            "name": "Lavigne Services inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Lavigne Services inc.</h1><p>8915, Rue Mauriac, Saint-Léonard, H1P 2N4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6212159,
              45.6206903
            ]
          },
          "properties": {
            "name": "Ménagers Daniel",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ménagers Daniel</h1><p>2-12365, Rue Matte, Montréal-Nord, H1G 3R5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4790893,
              45.5403922
            ]
          },
          "properties": {
            "name": "Plomberie C.L. Langlois",
            "categories": {
              "3": "Climatisation"
            },
            "subcategories": "Chauffage commercial, plomberie commerciale, chauffage à la vapeur, brûleur à gaz, combustion, climatisation, chauffage insutriel, fournaise haute efficacité, dispositif antirefoulement, fournaise, bouilloire",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Plomberie C.L. Langlois</h1><p>888, Rue Boulé, Longueuil, J4J 1T5<br/>Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6247621,
              45.6221071
            ]
          },
          "properties": {
            "name": "Centre D'Appareils Ménagers RH Beaulieu",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Centre D'Appareils Ménagers RH Beaulieu</h1><p>6273, Boulevard Léger, Montréal-Nord, H1G 6K8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5231997,
              45.6002672
            ]
          },
          "properties": {
            "name": "M. Appareils Électroménagers Réparations",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière, sécheuse, four encastré",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>M. Appareils Électroménagers Réparations</h1><p>8555, Avenue Pierre-de Coubertin, Montréal, H1L 2E5 <br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4709752,
              45.5322677
            ]
          },
          "properties": {
            "name": "Atelier Econo Ménager enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière, sécheuse, poêle, micro-ondes, four",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Atelier Econo Ménager enr.</h1><p>415, Rue Goyette, Longueuil, J4J 2X3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7220142,
              45.5973709
            ]
          },
          "properties": {
            "name": "Ami Electro Plus inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière avec four, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ami Electro Plus inc.</h1><p>1711, Boulevard des Laurentides, Laval, H7M 2P5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7555285,
              45.4386617
            ]
          },
          "properties": {
            "name": "PRD Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>PRD Service</h1><p>87, Avenue Allan Point, Dorval, H9S 2Z3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4694155,
              45.4987684
            ]
          },
          "properties": {
            "name": "Action Raymond",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Action Raymond</h1><p>1663, Rue Albert, Saint-Hubert, J4T 1V1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.2131701,
              45.5550819
            ]
          },
          "properties": {
            "name": "C. Couture Électros",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>C. Couture Électros</h1><p>298, Sir Wilfrid Laurier, Beloeil, J4G 3G7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8007516,
              45.4822334
            ]
          },
          "properties": {
            "name": "Service Par Excellence Plomberie Et Chauffage ltée",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Chauffage",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Par Excellence Plomberie Et Chauffage ltée</h1><p>65, Boulevard Brunswick, Dollard-des-Ormeaux, H9B 2N4<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5512572,
              45.628382
            ]
          },
          "properties": {
            "name": "Trans Global Service",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière, micro-ondes, hotte de cuisinière, climatisation, déshumidificateur, refroidisseur à vin",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Trans Global Service</h1><p>10001, Boulevard Métropolitain E, Pointe-aux-Trembles, H1B 5Y3<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7521102,
              45.5980898
            ]
          },
          "properties": {
            "name": "AÉRO Mécanique Turcotte inc.",
            "categories": {
              "3": "Climatisation"
            },
            "subcategories": "Climatisation résidentiel, chauffage résidentiel, thermopompe résidentiel, géothermie résidentielle, déshumidification résidentielle, raditant résidentiel",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>AÉRO Mécanique Turcotte inc.</h1><p>1289, Boulevard Dagenais O, Laval, H7L 5Z9<br/>Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4357622,
              45.5140602
            ]
          },
          "properties": {
            "name": "Le Réparateur De La Rive-Sud",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière, sécheuse, four encastré, poêle, congélateur, plaque de cuisson",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Le Réparateur De La Rive-Sud</h1><p>19-4250, Rue Legault, Saint-Hubert, J3Y 3W8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7620882,
              45.5851958
            ]
          },
          "properties": {
            "name": "Service 2000 Électroménagers (Laval)",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur, laveuse, sécheuse, cuisinière, lave-vaisselle, barbecue, électroménager au gaz",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service 2000 Électroménagers (Laval)</h1><p>2285, Rue Michelin, Laval, H7L 5B8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4639643,
              45.56353
            ]
          },
          "properties": {
            "name": "Métro Sud Gaz Naturel Services inc.",
            "categories": {
              "3": "Climatisation"
            },
            "subcategories": "Climatisation et chauffage",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Métro Sud Gaz Naturel Services inc.</h1><p>820, Boul Guimond, Longueuil, J4G 1T5<br/>Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.557951,
              45.3859222
            ]
          },
          "properties": {
            "name": "Centre De Service Daniel enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Centre De Service Daniel enr.</h1><p>2, Rue St-Pierre, Saint-Constant, J5A 2E1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4334798,
              45.4924678
            ]
          },
          "properties": {
            "name": "Bergeron Denis",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Bergeron Denis</h1><p>3890, Rue Laval, Saint-Hubert, J3Y 4E7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5689735,
              45.3904553
            ]
          },
          "properties": {
            "name": "Service d'Entretien Micro",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service d'Entretien Micro</h1><p>4849, Rue des Ormes, Sainte-Catherine, J5C 1L4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4686099,
              45.4914428
            ]
          },
          "properties": {
            "name": "BB Service Électro",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>BB Service Électro</h1><p>3734, Grande Allée, Saint-Hubert, J4T 2V2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8997438,
              45.5482257
            ]
          },
          "properties": {
            "name": "Électro S Gohier",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière, micro-ondes, hotte de cuisinière, climatisation, déshumidificateur, plaque de cuisson, broyeur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro S Gohier</h1><p>695, Rue Guy, Deux-Montagnes, J7R 1W2<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6164427,
              45.707582
            ]
          },
          "properties": {
            "name": "ServiGaz",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Cuisinière, climatisation, plancher radiant, foyer au gaz, barbecue, chauffe eau, chauffe piscine, tuyautrie de gaz, aérotherme, chaudière, fournaise",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>ServiGaz</h1><p>98, Rue du Calvados, Terrebonne, J6W 0A4 <br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.3361453,
              45.5325406
            ]
          },
          "properties": {
            "name": "N.Grisé & Fils",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière, four encastré, sécheuse, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>N.Grisé & Fils</h1><p>334, Chemin de la Rabastalière E, Saint-Bruno, J3V 2A6<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8344966,
              45.6441853
            ]
          },
          "properties": {
            "name": "Labelle Service Eléctroménagers",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Labelle Service Eléctroménagers</h1><p>214, Boulevard du Curé-Labelle, Sainte-Thérèse, J7E 2X7<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4320808,
              45.4867275
            ]
          },
          "properties": {
            "name": "Roldan Services inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Roldan Services inc.</h1><p>4175, Rue de la Légion, Saint-Hubert, J3Y 1Y9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5721732,
              45.6468144
            ]
          },
          "properties": {
            "name": "Electro-Vac",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electro-Vac</h1><p>12120, Rue Germain-Charland, Montréal, H1E 6S6 <br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4933575,
              45.4110824
            ]
          },
          "properties": {
            "name": "Insta Gaz",
            "categories": {
              "3": "Climatisation"
            },
            "subcategories": "Chauffage et ventilation",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Insta Gaz</h1><p>639, Boulevard Taschereau, La Prairie, J5R 1V5<br/>Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8026474,
              45.5688454
            ]
          },
          "properties": {
            "name": "Services Dynamo inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Services Dynamo inc.</h1><p>394, Rue Hortense, Laval, H7P 3L4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4261363,
              45.772735
            ]
          },
          "properties": {
            "name": "Service Electromenagers Laflamme",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, micro-ondes, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Electromenagers Laflamme</h1><p>147, Rue Beauchesne, Repentigny, J5Y 1Y1<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.0677529,
              45.4121933
            ]
          },
          "properties": {
            "name": "Réparation D'Électroménagers Michel Clément",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, micro-ondes, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation D'Électroménagers Michel Clément</h1><p>2883, Antonio-Barrette, Vaudreuil-Dorion, J7V 9Z2<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8358998,
              45.659918
            ]
          },
          "properties": {
            "name": "Service Michel Lapointe",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Cuisinière, lave-vaisselle, laveuse, réfrigérateur, sécheuse, climatisation, thermopompe",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Michel Lapointe</h1><p>17, Rue de Matagami, Blainville, J7B 1W2<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.3465515,
              45.5844727
            ]
          },
          "properties": {
            "name": "Techpro-Gaz inc.",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Chauffe-piscine, foyer, poêle au gaz, foyer extérieur, cuisinière, barbecue au gaz, chauffage, chauffage d'appoint",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Techpro-Gaz inc.</h1><p>825, Rue Marcel-Gamache, Sainte-Julie, J3E 2N3<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8890293,
              45.6850379
            ]
          },
          "properties": {
            "name": "RÉPARATION FN INC.",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, micro-ondes, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>RÉPARATION FN INC.</h1><p>43, Rue du Poitou, Blainville, J7C 4M8<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8949665,
              45.6342839
            ]
          },
          "properties": {
            "name": "Plomberie Riopel & Grignon inc.",
            "categories": {
              "3": "Climatisation"
            },
            "subcategories": "Chauffage au gaz",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Plomberie Riopel & Grignon inc.</h1><p>4050, Rue Ferland, Boisbriand, J7E 4H5<br/>Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7315314,
              45.3100631
            ]
          },
          "properties": {
            "name": "GA Réparation enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, foyer electrique",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>GA Réparation enr.</h1><p>10, Rue Myre, Mercier, J6R 0A1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4966978,
              45.7148281
            ]
          },
          "properties": {
            "name": "Jacques Pharand Service ltée",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Jacques Pharand Service ltée</h1><p>273, Rue du Grand-Héron, Terrebonne, J6V 0B7<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8938393,
              45.5687348
            ]
          },
          "properties": {
            "name": "Services PHM",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Services PHM</h1><p>290, Rue Labelle, Saint-Eustache, J7P 2P2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.3637458,
              45.4124027
            ]
          },
          "properties": {
            "name": "Gaz Xtra",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Gaz Xtra</h1><p>4824, Chemin de Salaberry, Carignan, J3L 0K4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5579187,
              45.6623867
            ]
          },
          "properties": {
            "name": "Service d'Appareils Electro Ménagers Martin inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service d'Appareils Electro Ménagers Martin inc.</h1><p>10177, Boulevard Perras, Montréal, H1C 2H8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6706677,
              45.456418
            ]
          },
          "properties": {
            "name": "AAA Appliance Services",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, climatiseur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>AAA Appliance Services</h1><p>5620, Avenue Emerald, Côte Saint-Luc, H4W 2S8<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -75.6401737,
              45.5019472
            ]
          },
          "properties": {
            "name": "Perfecto Electroménager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, cellier, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Perfecto Electroménager</h1><p>2-102, Rue De Candiac, Gatineau, J8R 1Z4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.512426,
              45.986371
            ]
          },
          "properties": {
            "name": "DR Services Et Pièces",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière, sécheuse, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>DR Services Et Pièces</h1><p>1129, Chemin Archambault RR 1, Crabtree, J0K 1B0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.2145194,
              45.2645888
            ]
          },
          "properties": {
            "name": "Services Comtois",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Ouvre-porte, ligne d'eau pour réfrigérateur, lave-vaisselle, hotte de poêle, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Services Comtois</h1><p>295, Rue J-É-Jeannotte, Les Coteaux, J7X 1P3<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.567256,
              45.5016889
            ]
          },
          "properties": {
            "name": "Réparation d'Électro LT",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Machine à expresso, machine à café, laveuse, lave-vaisselle, grille-pain, cuisinière, congélateur, électroménager commercial",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation d'Électro LT</h1><p>Montréal<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4206365,
              45.9000482
            ]
          },
          "properties": {
            "name": "Flamme D'Eau inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Chauffage, appareil au gaz naturel",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Flamme D'Eau inc.</h1><p>3906, Rue Magnan, L'Assomption , J5W 0L1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.9670524,
              45.7773952
            ]
          },
          "properties": {
            "name": "Combustion BNG inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Chaudière et chauffe-eau",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Combustion BNG inc.</h1><p>1828, Rue Jacques-Blanchet, Saint-Jérôme, J7Z 0B3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6181315,
              45.5309272
            ]
          },
          "properties": {
            "name": "Réparation A +",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, cellier, cuisinière, climatiseur, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation A +</h1><p>6968, Rue Marconi, Montréal, H2S 3K1<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.9062212,
              45.6929958
            ]
          },
          "properties": {
            "name": "Service Gilles Nault Réparation d'Électroménager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, four encastré, cuisinière à plaque",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Gilles Nault Réparation d'Électroménager</h1><p>45-A, Rue Georges-Hériot, Blainville, J7C 0G9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2891884,
              46.7036984
            ]
          },
          "properties": {
            "name": "Caron Service à Domicile",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, plaque chauffante",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Caron Service à Domicile</h1><p>1341, Rue des frênes, Saint-Rédempteur, G6K 1B8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.3215026,
              46.8063339
            ]
          },
          "properties": {
            "name": "Giasson Laco - Réparateur d'électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, cuisinière avec four, sécheuse, plaque de cuisson",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Giasson Laco - Réparateur d'électroménagers</h1><p>4400, Boulevard Wilfrid-Hamel, Québec, G1P 2J8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.1914354,
              46.72283
            ]
          },
          "properties": {
            "name": "Service Paradis enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Paradis enr.</h1><p>988, Rue de l'Émeraude, Saint-Jean-Chrysostome, G6Z 2W4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5802493,
              45.4753206
            ]
          },
          "properties": {
            "name": "Montreal Appliance Repair",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, four",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Montreal Appliance Repair</h1><p>4020, Rue Saint-Ambroise, Montréal, H4C 2C7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4199331,
              45.7812014
            ]
          },
          "properties": {
            "name": "F.Greco Réparateur d'électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>F.Greco Réparateur d'électroménagers</h1><p>Rue Champagneur, Repentigny, J5Y 3L3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6460633,
              45.5495416
            ]
          },
          "properties": {
            "name": "Rosa Electro Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Rosa Electro Service</h1><p>9177, Rue Basile-Routhier, Montréal, H3M 1T5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7895133,
              45.5559919
            ]
          },
          "properties": {
            "name": "RAMITEC Technicien en Electromenagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>RAMITEC Technicien en Electromenagers</h1><p>4699, Boulevard Cléroux, Laval, H7T 3C1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6582102,
              45.4268428
            ]
          },
          "properties": {
            "name": "Gaz Nat-Mar inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Chauffage au gaz",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Gaz Nat-Mar inc.</h1><p>37, Avenue Stirling, Lasalle, H8R 3N7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.304418,
              46.8145401
            ]
          },
          "properties": {
            "name": "Service de Réfrigération Côté enr.",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, cellier, cuisinière, climatiseur, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service de Réfrigération Côté enr.</h1><p>3035, Boulevard de Monaco, Québec, G1P 3H5<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.3000938,
              46.7312547
            ]
          },
          "properties": {
            "name": "Électro Matheo - Réparation d'Électroménager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, sécheuse, cuisinière, four encastré, réfrigérateur, lave- vaisselle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro Matheo - Réparation d'Électroménager</h1><p>307, Marie-Victorin, Saint-Nicolas, G7A 2X2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2273798,
              46.824518
            ]
          },
          "properties": {
            "name": "Monfette Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Échangeur d'air, hotte de cuisine, four à micro-ondes, aspirateur, malaxeur sur pied, moteur à bateau",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Monfette Service</h1><p>317, Chemin de la Canardière, Québec, G1L 4X2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2253338,
              46.821272
            ]
          },
          "properties": {
            "name": "Québec Service de Laveuses inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Québec Service de Laveuses inc.</h1><p>213, 3ème Avenue, Québec, G1L 2V7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2148584,
              46.8744041
            ]
          },
          "properties": {
            "name": "Pro de la Capitale inc.",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Sécheuse, lave-vaisselle, réfrigérateur, laveuse, cuisinière, congélateur, micro-ondes, hotte",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Pro de la Capitale inc.</h1><p>321, Avenue Joseph-Giffard, Québec, G1C 1N1<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.4210016,
              46.6590208
            ]
          },
          "properties": {
            "name": "Allard Électros inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Allard Électros inc.</h1><p>495, Route Germain, Lévis, G7A 2N4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2484191,
              46.8685668
            ]
          },
          "properties": {
            "name": "François Paradis service et instalation d'électroménager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>François Paradis service et instalation d'électroménager</h1><p>3935, Rue Emmanuel Fortin, Québec, G1C 4R8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.3572331,
              46.8678523
            ]
          },
          "properties": {
            "name": "Picard Électroménager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Picard Électroménager</h1><p>480, Rue de la Fève, Québec, G2A 4V0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.7789328,
              46.2180241
            ]
          },
          "properties": {
            "name": "PGE Pièces & Service (Plessisville)",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, cellier, cuisinière, broyeur, hotte de poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>PGE Pièces & Service (Plessisville)</h1><p>1723, Avenue des Érables, Plessisville, G6L 2E3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.952781,
              46.055953
            ]
          },
          "properties": {
            "name": "PGE Pièces & Service (Victoriaville)",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, cellier, cuisinière, broyeur, hotte de poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>PGE Pièces & Service (Victoriaville)</h1><p>107, Rue Victoria, Victoriaville, G6P 5G1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.5504216,
              46.3351052
            ]
          },
          "properties": {
            "name": "Le Ray Parateur",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur, cuisinière, laveuse, sécheuse, lave-vaisseller, poêle, four encastré, fourneau, plaque de cuisson",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Le Ray Parateur</h1><p>Rue Saint Olivier, Trois-Rivières, G9A 4G1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.518794,
              46.3667262
            ]
          },
          "properties": {
            "name": "BR Service Électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>BR Service Électroménagers</h1><p>268, Rue Saint-Laurent, Trois-Rivières, G8T 6G7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.3447827,
              46.7982624
            ]
          },
          "properties": {
            "name": "Service O Presto inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service O Presto inc.</h1><p>6216, Boulevard Wilfrid-Hamel, L'Ancienne-Lorette, G2E 2H7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2167647,
              46.8809236
            ]
          },
          "properties": {
            "name": "Électroménagers Jean Villeneuve",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, cuisinière, cuisinière au gaz propane",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électroménagers Jean Villeneuve</h1><p>633, Rue Belliard, Québec, G1C 7N2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.1984395,
              46.8750305
            ]
          },
          "properties": {
            "name": "Atelier de réparations espresso RStH",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Cafetière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Atelier de réparations espresso RStH</h1><p>586, Avenue Joseph-Giffard, Québec, G1C 0L8<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.441853,
              46.7961368
            ]
          },
          "properties": {
            "name": "Appareils Ménagers Hamel, Prop.; Robert Pinel",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Appareils Ménagers Hamel, Prop.; Robert Pinel</h1><p>Avenue Notre Dame, Québec, G2G 0C4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.2590685,
              46.4081185
            ]
          },
          "properties": {
            "name": "Electromecanique Gentilly",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electromecanique Gentilly</h1><p>895, Boulevard Bécancour, Bécancour, G9H 3S9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2896898,
              46.6997203
            ]
          },
          "properties": {
            "name": "Ast Electromenager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ast Electromenager</h1><p>1293, Rue de la Sapinière, Saint-Rédempteur, G6K 1A8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2997622,
              46.7748402
            ]
          },
          "properties": {
            "name": "Beaudoin Electronique",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Micro-ondes, téléviseur (LED, OLED, 4K, 3D, ACL, Plasma, à rétro-projection, à écran cathodique), projecteur (DLP, ACL), DVD, Blu Ray, HDDVD, vidéo, chaine stéréo, amplificateur, amplificateur d’auto, radio d’auto, téléphone sans fil, caméra (vidéo, photo), lecteur CD, écouteur, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Beaudoin Electronique</h1><p>945, Route de l'Église, Québec, G1V 3V2<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.8958143,
              46.0154325
            ]
          },
          "properties": {
            "name": "Le réparateur d'électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cuisinière, lave-vaisselle, laveuse, réfrigérateur, sécheuse, poêle, broyeur à déchets, hotte de cuisine",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Le réparateur d'électroménagers</h1><p>129, 9ème Rang, Saint-Christophe-d'Arthabaska, G6S 0J8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.5691267,
              46.3199774
            ]
          },
          "properties": {
            "name": "Bournival Réparation Électroménager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, poêle, four encastré",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Bournival Réparation Électroménager</h1><p>290, Rue Deshaies, Trois-Rivières, G9A 5N9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2708282,
              46.1125946
            ]
          },
          "properties": {
            "name": "Richard Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cusinière, réfrigérateur, congélateur, laveuse, sécheuse, déshumidificateur, machine à eau, lave-vaisselle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Richard Service</h1><p>2070, Rue Notre Dame E, Thetford Mines, G6G 2W2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.0219975,
              46.4398623
            ]
          },
          "properties": {
            "name": "Thibodeau Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, micro-ondes, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Thibodeau Service</h1><p>83, Boulevard Larochelle, Sainte-Marie, G6E 3Y7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.1663059,
              46.8253665
            ]
          },
          "properties": {
            "name": "Electromenager St-Joseph",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electromenager St-Joseph</h1><p>265, Rue Saint-Joseph, Lévis, G6V 1E7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.8645547,
              46.3002567
            ]
          },
          "properties": {
            "name": "Service de Laveuses AR-RO inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service de Laveuses AR-RO inc.</h1><p>220, Rue Fleury, Saint-Joseph-de-Beauce, G0S 2V0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.4986437,
              46.3823846
            ]
          },
          "properties": {
            "name": "Claude Jacques Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Claude Jacques Service</h1><p>399, Rue Alphonse Piché, Trois-Rivières, G8V 1R5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.1593883,
              46.6240403
            ]
          },
          "properties": {
            "name": "A à Z Services Electroménagers enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, cuisinière, plaque de cuisson",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>A à Z Services Electroménagers enr.</h1><p>1901, Rue du Pont, Saint-Lambert-de-Lauzon, G0S 2W0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.3164632,
              46.814605
            ]
          },
          "properties": {
            "name": "SGL Air Conditioning Heating inc.",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Climatisation, ventilation et chauffage",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>SGL Air Conditioning Heating inc.</h1><p>3315, Boulevard Neuvialle, Québec, G1P 3A7<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.3691484,
              46.8980014
            ]
          },
          "properties": {
            "name": "Entreprise Plourde et Fils inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Entreprise Plourde et Fils inc.</h1><p>505, Rue Lepire, Québec, G3G 1S8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.2385251,
              45.5459375
            ]
          },
          "properties": {
            "name": "SélectroTech",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, sécheuse, réfrigérateur, lave-vaisselle et cuisinière électrique",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>SélectroTech</h1><p>746, Rue Yves-Sylvestre, McMasterville, J3G 6V8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2427132,
              46.8026232
            ]
          },
          "properties": {
            "name": "Option Technique",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Appareil électronique et informatique",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Option Technique</h1><p>750, Côte de la Pente-Douce, Québec, G1N 2M1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2852807,
              46.9449479
            ]
          },
          "properties": {
            "name": "Refrigeration Vifer enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Refrigeration Vifer enr.</h1><p>9, Chemin des Pentes, Lac-Beauport, G3B 1L4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.713659,
              46.8013163
            ]
          },
          "properties": {
            "name": "Service électroménager Guillaume Parent",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service électroménager Guillaume Parent</h1><p>30, 5ème rang, Saint-Raphaël, G0R 4C0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.14343,
              46.8259974
            ]
          },
          "properties": {
            "name": "Auben Electro Menager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Auben Electro Menager</h1><p>11, Rue St Michel, Lévis, G6V 1J2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.7080942,
              46.6458006
            ]
          },
          "properties": {
            "name": "J Grenier Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>J Grenier Service</h1><p>221, Chemin Du Domaine-Saint-Mauric, Grand-Mère, G9T 7J4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.8718314,
              46.5942249
            ]
          },
          "properties": {
            "name": "Fournier Simon",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Fournier Simon</h1><p>421, Chemin de la Rivière-Etchemin, Sainte-Claire, G0R 2V0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.619819,
              45.707363
            ]
          },
          "properties": {
            "name": "Service Antonio Électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cuisinière au gaz, cuisinière électrique, laveuse, sécheuse, lave-vaisselle, réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Antonio Électroménagers</h1><p>11-1520, Grande Allée, Terrebonne, J6W 6A8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6809365,
              45.5134214
            ]
          },
          "properties": {
            "name": "Réparation Électroménager Montréal",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, cuisinière, plaque de cuisson, four micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation Électroménager Montréal</h1><p>Montréal, H4L 3M3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.2591032,
              45.3567158
            ]
          },
          "properties": {
            "name": "Cardinal Électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Cardinal Électroménagers</h1><p>306, Rue Des Forêts, Saint-Jean-Sur-Richelieu, J2W 2E4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.2052068,
              46.5688051
            ]
          },
          "properties": {
            "name": "Services Électroménagers Mauricien",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Services Électroménagers Mauricien</h1><p>121, Rue Ste Marguerite, Sainte-Anne-de-la-Pérade, G0X 2J0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.6925616,
              46.615703
            ]
          },
          "properties": {
            "name": "Bernard Gauthier inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Chauffe-eau et éléctricité résidentielle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Bernard Gauthier inc.</h1><p>598, 7e Avenue, Grand-Mère, G9T 2B2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2505586,
              46.8228166
            ]
          },
          "properties": {
            "name": "Aspirateur Quebec",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Balayeuse, aspirateur central, aspirateur commercial",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Aspirateur Quebec</h1><p>550, Boulevard Wilfrid-Hamel, Québec, G1M 3E5<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4718856,
              46.1858957
            ]
          },
          "properties": {
            "name": "Spécialiste De La Machine À Coudre",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Spécialiste De La Machine À Coudre</h1><p>6501, Chemin de Saint-Jean, Saint-Félix-de-Valois, J0K 2M0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.8294069,
              46.8648953
            ]
          },
          "properties": {
            "name": "St-Raymond Service enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>St-Raymond Service enr.</h1><p>877, Côte Joyeuse, Saint-Raymond, G3L 4B5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.7813255,
              45.4127998
            ]
          },
          "properties": {
            "name": "Bélanger Électroménager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cellier, congélateur, réfrigérateur, cuisinière électrique / au gaz, plaque de cuisson électrique / à induction / au gaz, four à vapeur, four encastré, laveuse à linge, lave-vaisselle, micro-ondes, sécheuse électrique / au gaz, broyeur à déchets",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Bélanger Électroménager</h1><p>31, Rue des frênes, Granby, J2J 2L9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.9428237,
              45.625645
            ]
          },
          "properties": {
            "name": "Laroche Service inc.",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Machine à laver, sèche-linge, lave-vaisselle, réfrigérateur, échangeur d’air, hotte de cuisine, four encastré, convecteur, four à micro-ondess, cellier",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Laroche Service inc.</h1><p>405, Av. de la Concorde, Saint-Hyacinthe, J2S 4P1<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4328977,
              46.1563322
            ]
          },
          "properties": {
            "name": "Michel Dubeau Électroménagers inc.",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Sécheuse, lave-vaisselle, réfrigérateur, laveuse, cuisinière, congélateur, micro-ondess, machine à expresso, grille-pain",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Michel Dubeau Électroménagers inc.</h1><p>560, Avenue Cézanne, Saint-Félix-de-Valois, J0K 2M0<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.220786,
              46.037574
            ]
          },
          "properties": {
            "name": "SOS Service Électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, sécheuse, réfrigérateur, congélateur, cuisinière, plaques de cuisson, four encastré, lave-vaisselle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>SOS Service Électroménagers</h1><p>1787, Route 117, Val-David, J0T 2N0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.7297697,
              45.4015082
            ]
          },
          "properties": {
            "name": "Electro Plus Sylvain Hevey",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electro Plus Sylvain Hevey</h1><p>297, Rue Principale, Granby, J2G 8E2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.9716606,
              45.3951424
            ]
          },
          "properties": {
            "name": "Le Réparateur",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigerateurs, cuisinière, laveuse, sécheuse, lave-vaisselle, cellier",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Le Réparateur</h1><p>4336, Boulevard Industriel, Sherbrooke, J1L 2S8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.602428,
              46.118536
            ]
          },
          "properties": {
            "name": "Centre Électronique St-Jovite",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Centre Électronique St-Jovite</h1><p>1208, Rue de Saint Jovite, Mont-Tremblant, J8E 3J9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.2128408,
              46.007662
            ]
          },
          "properties": {
            "name": "Laurentides propane inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Appareil au gaz",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Laurentides propane inc.</h1><p>7015, Boulevard Labelle, Val-Morin, J0T 2R0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.9591608,
              46.0548406
            ]
          },
          "properties": {
            "name": "RépaRabais",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>RépaRabais</h1><p>22, Rue Carignan, Victoriaville, G6P 4Z6<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.960614,
              45.62722
            ]
          },
          "properties": {
            "name": "Joel Therrien Svc",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Joel Therrien Svc</h1><p>2465, Rue Nelson, Saint-Hyacinthe, J2S 1X7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.9320561,
              45.6236037
            ]
          },
          "properties": {
            "name": "Jimmy Lachance Service Électroménager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Jimmy Lachance Service Électroménager</h1><p>16440, Avenue Saint-Louis, Saint-Hyacinthe, J2T 3E8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.74636,
              45.2048886
            ]
          },
          "properties": {
            "name": "Électroménagers Jean-Marc Bélanger",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, sécheuse, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électroménagers Jean-Marc Bélanger</h1><p>401, Rue du Sud, Cowansville, J2K 2X6<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.977655,
              45.604102
            ]
          },
          "properties": {
            "name": "Vincent Service",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Réfrigérateur, laveuse, sécheuse, cuisinière, lave-vaisselle, micro-ondes, climatiseur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Vincent Service</h1><p>5370, Rue Joncaire, Saint-Hyacinthe, J2S 3W9<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.9802294,
              45.646585
            ]
          },
          "properties": {
            "name": "Lemondes Service enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Lemondes Service enr.</h1><p>6020, Boulevard Laframboise, Saint-Hyacinthe, J2R 1E9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.7407882,
              45.3979816
            ]
          },
          "properties": {
            "name": "Lamoureux & Freres enr.",
            "categories": {
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Aspirateur, échangeur d'air, hotte de cuisine",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Lamoureux & Freres enr.</h1><p>295, Rue Robinson, Granby, J2G 7M7<br/>Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.0903689,
              45.3803687
            ]
          },
          "properties": {
            "name": "Electro Sylvain Desrochers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, sécheuse, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electro Sylvain Desrochers</h1><p>75, Chemin du Lac-Montjoie, Sherbrooke, J1R 0C1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.9448224,
              45.6271011
            ]
          },
          "properties": {
            "name": "JCR Electro",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, sécheuse, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>JCR Electro</h1><p>647, Avenue de la Concorde , Saint-Hyacinthe, J2S 4P5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.7453083,
              45.4010286
            ]
          },
          "properties": {
            "name": "Gousy Gaston",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse et sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Gousy Gaston</h1><p>652, Rue Douville, Granby, J2G 3K1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.9642412,
              45.3853508
            ]
          },
          "properties": {
            "name": "Electro Fredette Matelas Zen-confort",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, four micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electro Fredette Matelas Zen-confort</h1><p>4229, Boulevrd Bourque, Sherbrooke, J1N 1S7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.192236,
              45.5420355
            ]
          },
          "properties": {
            "name": "Réparation d'Électroménager Claude Tessier Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation d'Électroménager Claude Tessier Service</h1><p>401, Rue du Prince Edward , Otterburn Park, J3H 1W3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.2074675,
              45.557443
            ]
          },
          "properties": {
            "name": "Couture Electro",
            "categories": [
              "Gros électroménagers",
              "Petits électroménagers"
            ],
            "subcategories": "Cuisinière, réfrigérateur, lave-vaisselle, laveuse, sécheuse",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Couture Electro</h1><p>67, Rue Verchères, Beloeil, J3G 2J6<br/>Gros électroménagers, Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.8058023,
              46.06835
            ]
          },
          "properties": {
            "name": "René Gill Service de Réparation Électroménager",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>René Gill Service de Réparation Électroménager</h1><p>108, Rue Georges, Pierreville, J0G 1J0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.1615339,
              45.428487
            ]
          },
          "properties": {
            "name": "Lutel Service enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, four",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Lutel Service enr.</h1><p>860, Rue Sainte-Marie, Marieville, J3M 1J1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.9313366,
              45.7793479
            ]
          },
          "properties": {
            "name": "Appareils Electro-Ménagers J-M Chaperon",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Appareils Electro-Ménagers J-M Chaperon</h1><p>325, Rue du Roi, Asbestos, J1T 1S7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.9458457,
              45.6208037
            ]
          },
          "properties": {
            "name": "Veilleux G Service Electro",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Veilleux G Service Electro</h1><p>1900, Rue Saint-Pierre , Saint-Hyacinthe, J2T 1P5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.9437635,
              46.0919357
            ]
          },
          "properties": {
            "name": "LM Svc",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>LM Svc</h1><p>145, Rue François Bourgeois, Victoriaville, G6T 2G9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.815558,
              45.4278812
            ]
          },
          "properties": {
            "name": "MRP Services",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>MRP Services</h1><p>216-1633, Rue Principale, Granby, J2J 0M7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.1304396,
              45.2608609
            ]
          },
          "properties": {
            "name": "Magog Electro Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Magog Electro Service</h1><p>1107, Rue Principale E, Magog, J1X 1Z5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8981103,
              45.6847943
            ]
          },
          "properties": {
            "name": "Clinique de l'électro",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Cusinière, réfrigérateur, congélateur, laveuse, sécheuse, machine à café, aspirateur central, lave-vaisselle, four micro-ondes, four, cuisinière électrique, broyeur, four a micro-ondes, climatiseur, déshumidificateur, celliers, refroidisseur d'eau",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Clinique de l'électro</h1><p>1261, Boulevard du Curé-Labelle, Blainville, J7C 4K5<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6138831,
              45.7515017
            ]
          },
          "properties": {
            "name": "Mékano Service Électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cusinière, réfrigérateur, congélateur, laveuse, sécheuse, machine à café, aspirateur central, lave-vaisselle, four micro-ondes, four traditionnel",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Mékano Service Électroménagers</h1><p>2653, Rue Dumont, Mascouche, J7K 1R3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.2326977,
              45.3045887
            ]
          },
          "properties": {
            "name": "Duval Meubles Usagés enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Duval Meubles Usagés enr.</h1><p>380, 2e Avenue, Saint-Jean-sur-Richelieu, J2X 2B8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.0028528,
              45.8075349
            ]
          },
          "properties": {
            "name": "Lafantaisie Alain enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, four micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Lafantaisie Alain enr.</h1><p>141, Rue Josée, Saint-Jérôme, J7Y 4S4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.070325,
              45.8634486
            ]
          },
          "properties": {
            "name": "Électro-Réparation FM service de réparation à domicile",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro-Réparation FM service de réparation à domicile</h1><p>Rue Lessage, Prévost, J0R 1T0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.5182413,
              45.869856
            ]
          },
          "properties": {
            "name": "SM Service inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>SM Service inc.</h1><p>2265, Rue Saint-Pierre, Drummondville, J2C 5A7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.93509,
              45.799058
            ]
          },
          "properties": {
            "name": "Réparation d'électroménagers Sylvain Corbeil",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation d'électroménagers Sylvain Corbeil</h1><p>2799, Boulevard Sainte Sophie, Sainte-Sophie, J5J 2V3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.1091444,
              46.0380898
            ]
          },
          "properties": {
            "name": "Services Yves Métivier enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Services Yves Métivier enr.</h1><p>A-98, Rue Jacques-Cartier, Sorel-Tracy, J3P 2E3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.692808,
              45.7617703
            ]
          },
          "properties": {
            "name": "Appareils Masson Service",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, cellier, déshumidificateur, climatiseur, distributrice d'eau, plaque chauffante, broyeur, micro-ondes, four encastré",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Appareils Masson Service</h1><p>2448, Rue de l'Azalée, Terrebonne, J7M 0J7<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4940894,
              45.6464644
            ]
          },
          "properties": {
            "name": "Service SibTeck Montréal Réparation de Laveuse et Sécheuse, électroménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, four micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service SibTeck Montréal Réparation de Laveuse et Sécheuse, électroménagers</h1><p>12510, Rue Parent, Pointe-aux-Trembles, H1B 2N5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.567256,
              45.5016889
            ]
          },
          "properties": {
            "name": "Électroménager Réparation Mathieu Dupuis",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, four micro-onde, four encastré, plaque de cuisson",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électroménager Réparation Mathieu Dupuis</h1><p>Montréal<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5995338,
              45.6913573
            ]
          },
          "properties": {
            "name": "Bourgeois Réparation enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, micro-ondes, cuisinière, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Bourgeois Réparation enr.</h1><p>2097, Chemin Saint-Charles, Terrebonne, J6W 5Y3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.220359,
              45.9119042
            ]
          },
          "properties": {
            "name": "Labelle D Services",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Lave-vaisselle, laveuse, sécheuse, réfrigérateur, congélateur, poêle, cuisinière, four, broyeur, cellier, appareil au gaz",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Labelle D Services</h1><p>10, Rue Pierre, Morin-Heights, J0R 1H0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.470335,
              45.753429
            ]
          },
          "properties": {
            "name": "Electrobec",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, congélateur, sécheuse, cuisinière, plaque de cuisson, four micro-ondes, cellier",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electrobec</h1><p>415, Boulevard Lacombe, Repentigny, J5Z 1N9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4900955,
              45.6396427
            ]
          },
          "properties": {
            "name": "AR FOURNITURE inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, four micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>AR FOURNITURE inc.</h1><p>12020, Rue Notre-Dame E, Pointe-aux-Trembles, H1B 2Y7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4671553,
              45.7398185
            ]
          },
          "properties": {
            "name": "Pilon Réfrigération Électros inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Pilon Réfrigération Électros inc.</h1><p>108, Rue Lavigne, Repentigny, J6A 6B5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.0014259,
              45.7835342
            ]
          },
          "properties": {
            "name": "Réparation Appareil Electrique De Laurentide",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation Appareil Electrique De Laurentide</h1><p>577, Rue St Georges, Saint-Jérôme, J7Z 5B7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.1261439,
              46.0043466
            ]
          },
          "properties": {
            "name": "Electro Sorel",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electro Sorel</h1><p>155, Rue de la Savane, Sorel-Tracy, J3P 6V3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.4985502,
              47.4468005
            ]
          },
          "properties": {
            "name": "Clinique Réparation Électroménager Roberto Lavoie",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Air conditionné, lave-vaisselle, climatiseur, laveuse, électroménager commercial, micro-ondes, réfrigérateur, congélateur, sécheuse, cuisinière, hotte et poêle, déshumidificateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Clinique Réparation Électroménager Roberto Lavoie</h1><p>10, Rue Dodier, Baie-Saint-Paul, G3Z 1G2<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.0442881,
              48.4435446
            ]
          },
          "properties": {
            "name": "Minutech inc. - Service de réparations de minuteries d'appareils électroménagers à Chicoutimi",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Minutech inc. - Service de réparations de minuteries d'appareils électroménagers à Chicoutimi</h1><p>1539, Boulevard de Tadoussac, Chicoutimi, G7G 4X9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.0528367,
              48.4125004
            ]
          },
          "properties": {
            "name": "Technigam",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Réfrigérateur, laveuse, cuisinière, lave-vaisselle, sécheuse, micro-ondes, hotte, refroidisseur à vin, déshumidificateur, batteur sur socle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Technigam</h1><p>980, Boulevard de l'Université, Chicoutimi, G7H 6H1<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.0972656,
              48.4460332
            ]
          },
          "properties": {
            "name": "Service Carol Bérubé",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Carol Bérubé</h1><p>107, Rue Octave, Chicoutimi, G7G 4C9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -75.9848252,
              46.3844945
            ]
          },
          "properties": {
            "name": "Services Flansberry inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Services Flansberry inc.</h1><p>165, Rue Principale N, Maniwaki, J9E 2B9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -75.4649148,
              46.5515053
            ]
          },
          "properties": {
            "name": "Alain Brisebois Reparation",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Alain Brisebois Reparation</h1><p>1616, Boulevard Albiny Paquette, Mont-Laurier, J9L 1M9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -75.4735789,
              46.4720873
            ]
          },
          "properties": {
            "name": "Nord Réfrigération",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Congélateur et réfrigérateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Nord Réfrigération</h1><p>511, Chemin de la Lièvre, Mont-Laurier, J9L 3G3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.1760173,
              48.4055124
            ]
          },
          "properties": {
            "name": "Service JMA",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service JMA</h1><p>2695, Boulevard du Royaume, Jonquière, G7X 7V3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.16728,
              48.3987551
            ]
          },
          "properties": {
            "name": "Top Service DB",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cuisinière, réfrigérateur, lave-vaisselle, laveuse, sécheuse, appareil au gaz (domestique). RBQ : 5644-6602-01. Membre CMMTQ.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Top Service DB</h1><p>2568, Rue Brodeur, Jonquière, G7S 5R5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -69.5201895,
              47.8280571
            ]
          },
          "properties": {
            "name": "Service Bernard Dubé",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, four micro-ondes, poêle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Bernard Dubé</h1><p>60, Chemin des Raymond, Rivière-du-Loup, G5R 2H5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -69.5101598,
              47.8284053
            ]
          },
          "properties": {
            "name": "Services Jocelyn Beaulieu",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, four micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Services Jocelyn Beaulieu</h1><p>85, Rue Alfred Fortin, Rivière-du-Loup, G5R 4M9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -68.1786548,
              48.5797181
            ]
          },
          "properties": {
            "name": "Emilien Nadeau",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Emilien Nadeau</h1><p>2070, Boul Benoît-Gaboury, Mont-Joli, G5H 2X4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -67.4426851,
              48.4657088
            ]
          },
          "properties": {
            "name": "Électro-Vallée",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro-Vallée</h1><p>78, Rue Lambert, Amqui, G5J 1P8<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -69.5379012,
              47.8362538
            ]
          },
          "properties": {
            "name": "Frigitec",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Frigitec</h1><p>164, Rue Lafontaine, Rivière-du-Loup, G5R 3A5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2433518,
              48.4232598
            ]
          },
          "properties": {
            "name": "Service CG enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service CG enr.</h1><p>2000, Rue Price, Jonquière, G7X 5S1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -69.5403169,
              47.8378171
            ]
          },
          "properties": {
            "name": "Service JPL",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service JPL</h1><p>50, Rue Iberville, Rivière-du-Loup, G5R 1H1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.3583248,
              49.9143505
            ]
          },
          "properties": {
            "name": "Bruyere Electromenager Pieces",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Bruyere Electromenager Pieces</h1><p>324, 2e Rue, Chibougamau, G8P 1M4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -69.086904,
              48.7403977
            ]
          },
          "properties": {
            "name": "Figma",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Figma</h1><p>8, Route 138, Forestville, G0T 1E0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -67.5349935,
              48.8457642
            ]
          },
          "properties": {
            "name": "Matane Service De Pièces",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, four micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Matane Service De Pièces</h1><p>246, Rue St Pierre, Matane, G4W 2B5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -67.5427601,
              48.5322437
            ]
          },
          "properties": {
            "name": "Electromenagers Mario Beaulieu",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electromenagers Mario Beaulieu</h1><p>50, Rue St Pierre E, Val-Brillant, G0J 3L0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -77.8025254,
              48.1055383
            ]
          },
          "properties": {
            "name": "Le Tech Michel Cusson",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Le Tech Michel Cusson</h1><p>1400, Chemin Sullivan, Val-d'Or, J9P 1M1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -79.1424147,
              48.2368014
            ]
          },
          "properties": {
            "name": "Atelier DC Récupération",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Atelier DC Récupération</h1><p>3167, Boulevard Rideau, Rouyn-Noranda, J0Z 1Y1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -68.34622,
              48.5281251
            ]
          },
          "properties": {
            "name": "Electro Service MP inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electro Service MP inc.</h1><p>38, Rue Saint-Alphonse, Sainte-Luce, G0K 1P0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -79.0186711,
              48.2482119
            ]
          },
          "properties": {
            "name": "Doiron Atelier Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Doiron Atelier Service</h1><p>150, 9e Rue, Rouyn-Noranda, J9X 2B6<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -66.3494555,
              50.2251615
            ]
          },
          "properties": {
            "name": "Réfrigération Chabot",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réfrigération Chabot</h1><p>62, Rue Doire, Sept-Îles, G4R 5G7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -66.3740679,
              50.2089099
            ]
          },
          "properties": {
            "name": "Les Electros JGL",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Les Electros JGL</h1><p>379, Avenue Jolliet, Sept-Îles, G4R 2B1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.3083407,
              46.0987981
            ]
          },
          "properties": {
            "name": "Jamerlu, Mr Rasoir (Deco Cuisine)",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Four électrique, four à convection de comptoir, grille-pain, cafetière, machine à café, machine à capuccino, friteuse, malaxeur, robot culinaire, laveuse, congélateur, lave-vaisselle, sécheuse, échangeur d'air",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Jamerlu, Mr Rasoir (Deco Cuisine)</h1><p>626, Rue Saint-Alphonse N, Thetford Mines, G6G 3W8<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.6355329,
              45.8537084
            ]
          },
          "properties": {
            "name": "Dany Lachance Électromenagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, réfrigérateur, appareil au gaz propane",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Dany Lachance Électromenagers</h1><p>136, Boulevard Canam Sud, Saint-Gédéon-de-Beauce, G0M 1T0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.6650746,
              46.1142786
            ]
          },
          "properties": {
            "name": "Atelier de l'Electro-Ménager GB inc.",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, déshumidificateur, climatiseur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Atelier de l'Electro-Ménager GB inc.</h1><p>13010, 1ère Avenue, Saint-Georges, G5Y 2E6<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.7136616,
              46.1185709
            ]
          },
          "properties": {
            "name": "Specialiste De L'Electro",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Climatisation, thermo-pompe, chauffe-piscine",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Specialiste De L'Electro</h1><p>2530, 42e Rue N, Saint-Georges, G5Z 0V1<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.3473863,
              46.4133703
            ]
          },
          "properties": {
            "name": "Electro Menager Mario Boilard",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electro Menager Mario Boilard</h1><p>119, Route de la Station, Sainte-Justine, G0R 1Y0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.8929107,
              45.4041718
            ]
          },
          "properties": {
            "name": "Electro Sherbrooke",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur, laveuse, lave-vaisselle et cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electro Sherbrooke</h1><p>Sherbrooke<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.6795985,
              46.1067756
            ]
          },
          "properties": {
            "name": "Appareils Menagers St-Georges",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Appareils Menagers St-Georges</h1><p>2570, 11e Avenue, Saint-Georges, G5Y 7T9<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -78.1358399,
              48.5691973
            ]
          },
          "properties": {
            "name": "Service Gagnon-Brochu Tech",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Gagnon-Brochu Tech</h1><p>341, 9e Rue O, Amos, J9T 2Z7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -78.1120016,
              48.5629235
            ]
          },
          "properties": {
            "name": "Astro Service inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Astro Service inc.</h1><p>92, Rue Beaudry, Amos, J9T 3V2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.7796148,
              46.2081738
            ]
          },
          "properties": {
            "name": "Cloutier Armand",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Cloutier Armand</h1><p>202, 20e Avenue, Beauceville, G5X 1W4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.4366128,
              46.6158973
            ]
          },
          "properties": {
            "name": "Services Électroménagers Steve Fortier",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Réfrigérateur, cuisinière, laveuse, sécheuse, lave-vaisselle, cellier, climatiseur, déshumidificateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Services Électroménagers Steve Fortier</h1><p>81, Rue Blanchet, Saint-Apollinaire, G0S 2E0<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -74.1527823,
              45.2673384
            ]
          },
          "properties": {
            "name": "Climatisation Claude Pilon",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Climatisation, ventilation et chauffage",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Climatisation Claude Pilon</h1><p>360, Boulevard Mgr Langlois, Salaberry-de-Valleyfield, J6S 0A6<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.6607238,
              45.4986504
            ]
          },
          "properties": {
            "name": "Luc Jacques Services",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Luc Jacques Services</h1><p>640, Rue Angus N, Westbury, J0B 1R0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5094849,
              45.5361205
            ]
          },
          "properties": {
            "name": "RD Electrique",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Aspirateur central, aspirateur commercial, machine espresso, cafetière, humidificateur, rasoir, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>RD Electrique</h1><p>220, Rue Saint-Jean , Longueuil, J4H 2X5<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4293998,
              45.7546047
            ]
          },
          "properties": {
            "name": "Ben Service",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière, plaque chauffante, climatiseur, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ben Service</h1><p>692, Rue Notre-Dame, Repentigny, J6A 2W8<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5004278,
              45.5265462
            ]
          },
          "properties": {
            "name": "On Répare Ton Électro",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>On Répare Ton Électro</h1><p>670, Rue Martel, Longueuil, J4J 1C7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -70.4578039,
              46.6842652
            ]
          },
          "properties": {
            "name": "Électroménagers Roger Therrien enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électroménagers Roger Therrien enr.</h1><p>1226, Rue Principale, Saint-Philémon, G0R 4A0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8925543,
              45.5428004
            ]
          },
          "properties": {
            "name": "Constantin Service D'Appareils Ménagers inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Constantin Service D'Appareils Ménagers inc.</h1><p>607, Chemin d'Oka, Deux-Montagnes, J7R 1L5<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.3544633,
              45.5273311
            ]
          },
          "properties": {
            "name": "Les Services de réparations d'électroménagers Gilles Thibodeau",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, congélateur, lave-vaisselle, sécheuse, cuisinière, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Les Services de réparations d'électroménagers Gilles Thibodeau</h1><p>1215, Rue de Sainte-Foy, Saint-Bruno, J3V 3C3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.6759825,
              46.4727816
            ]
          },
          "properties": {
            "name": "Repair Café (Notre-Dame-du-Mont-Carmel)",
            "categories": [

            ],
            "subcategories": "Atelier offrant l’accès à des outils et à de l’expertise (vêtement, meuble, appareils électrique, bicyclette, vaisselle, objets utile, jouet, et autres)",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>Repair Café (Notre-Dame-du-Mont-Carmel)</h1><p>3880, Rue de l'Hôtel de Ville, Notre-Dame-du-Mont-Carmel, G0X 3J0<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.610337,
              45.5309348
            ]
          },
          "properties": {
            "name": "Les Affûtés (Petite Italie)",
            "categories": [

            ],
            "subcategories": "Atelier offrant l’accès à des outils et à de l’expertise (petits électroménagers, ébénisterie, menuiserie, tricot, couture, électronique, zéro déchet, rénovation, vélo)",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>Les Affûtés (Petite Italie)</h1><p>6552, Boulevard Saint-Laurent , Montréal, H2S 3C6<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7417594,
              45.6795048
            ]
          },
          "properties": {
            "name": "Repair Café (Terrebonne)",
            "categories": [

            ],
            "subcategories": "Atelier offrant l’accès à des outils et à de l’expertise (vêtement, meuble, appareils électrique, bicyclette, vaisselle, objets utile, jouet, et autres)",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>Repair Café (Terrebonne)</h1><p>460, Rue de Neuilly, Terrebonne, J6Y 1R2<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2213274,
              46.8213974
            ]
          },
          "properties": {
            "name": "Atelier La Patente, coopérative de solidarité",
            "categories": [

            ],
            "subcategories": "Atelier offrant l’accès à des outils et à de l’expertise (petits électroménagers, bois, métal, textile, électronique, etc.)",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>Atelier La Patente, coopérative de solidarité</h1><p>507, Rue des Sables, Montréal, G1J 2Y1<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5611614,
              45.5234194
            ]
          },
          "properties": {
            "name": "Les Affûtés (Village)",
            "categories": [

            ],
            "subcategories": "Atelier offrant l’accès à des outils et à de l’expertise (petits électroménagers, ébénisterie, menuiserie, tricot, couture, électronique, zéro déchet, rénovation, vélo)",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>Les Affûtés (Village)</h1><p>1385, Rue Ontario E, Montréal, H2L 1S1<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.5609558,
              46.7331937
            ]
          },
          "properties": {
            "name": "Denis Cloutier Service D'Appareils Ménagers",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, congélateur, lave-vaisselle, sécheuse, cuisinière",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Denis Cloutier Service D'Appareils Ménagers</h1><p>741, Rue Boivin, Saint-Tite, G0X 3H0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6113938,
              45.5434021
            ]
          },
          "properties": {
            "name": "Mon atelier",
            "categories": [

            ],
            "subcategories": "Atelier offrant l’accès à des outils et à de l’expertise (vêtement, meuble, appareils électrique, bicyclette, vaisselle, objets utile, jouet, et autres)",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>Mon atelier</h1><p>1201, Rue Jean-Talon E, Montréal, H2R 1W1<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6802068,
              45.596453
            ]
          },
          "properties": {
            "name": "Espress-O-Café Services et Réparations",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Machine à café",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Espress-O-Café Services et Réparations</h1><p>2680, Boulevard de Blois, Laval, H7E 1R4<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.6082951,
              45.5306709
            ]
          },
          "properties": {
            "name": "La Tasse a Cafe",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Machine à café",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>La Tasse a Cafe</h1><p>25, Rue Beaubien E, Montréal, H2S 1P7<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.3057531,
              45.4445919
            ]
          },
          "properties": {
            "name": "Appareils menagers PL",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, réfrigérateur, congélateur, lave-vaisselle, sécheuse, cuisinière, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Appareils menagers PL</h1><p>1414, Rue Duberger, Chambly, J3L 4X6<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5902695,
              45.5206067
            ]
          },
          "properties": {
            "name": "Raplapla",
            "categories": {
              "2": "Jeux et jouets"
            },
            "subcategories": "Jouet en tissu",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Raplapla</h1><p>69, Rue Villeneuve Ouest, Montréal, H2T 2R4<br/>Jeux et jouets</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.5233383,
              45.8656214
            ]
          },
          "properties": {
            "name": "Morissette Service inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, sécheuse, cuisinière, lave-vaisselle, réfrigérateur, congélateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Morissette Service inc.</h1><p>2681, Rue Saint-Pierre, Drummondville, J2C 7Y3<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.3875034,
              45.4940149
            ]
          },
          "properties": {
            "name": "Les Services S.J.M. inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, réfrigérateur, congélateur, lave-vaisselle, sécheuse, cuisinière, micro-ondes",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Les Services S.J.M. inc.</h1><p>1515, Rue Bernard, Saint-Hubert, J3Y 5J7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.4338624,
              45.4942072
            ]
          },
          "properties": {
            "name": "Lebel Électro inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur, laveuse, sécheuse, cuisinière, lave-vaisselle et plus",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Lebel Électro inc.</h1><p>Saint-Hubert, J3Y 3E1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.634291,
              45.5394002
            ]
          },
          "properties": {
            "name": "La Remise (Saint-Laurent)",
            "categories": [

            ],
            "subcategories": "Bibliothèque d'outils et ateliers de bois et de couture",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>La Remise (Saint-Laurent)</h1><p>411-8280, Boulevard Saint-Laurent, Montréal, H2P 2L8<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.7472529,
              45.552929
            ]
          },
          "properties": {
            "name": "Le Studio – Espace numérique ",
            "categories": [

            ],
            "subcategories": "Impression de pièces 3D",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>Le Studio – Espace numérique </h1><p>1535, Boulevard Chomedey, Laval, H7V 3R2​​​​<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.601551,
              45.537382
            ]
          },
          "properties": {
            "name": "La Remise (Beaubien)",
            "categories": [

            ],
            "subcategories": "Bibliothèque d'outils et atelier de vélo",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>La Remise (Beaubien)</h1><p>1050, Rue Beaubien Est, Montréal, H2S 1T4<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.7979506,
              45.1298886
            ]
          },
          "properties": {
            "name": "Les Armatures Coaticook inc.",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Réparation électromécanique variée (moteur électrique, démarreur, alternateur, pompe, laveuse à pression, génératrice, compresseur à air)",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Les Armatures Coaticook inc.</h1><p>146, Rue Gendreau, Coaticook, J1A 2N1<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.0941527,
              45.5953007
            ]
          },
          "properties": {
            "name": "Les Électros Sylvain inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cuisinière, réfrigérateur, congélateur, laveuse, sécheuse, lave-vaisselle",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Les Électros Sylvain inc.</h1><p>650, Boulevard Laurier, Sainte-Madeleine, J0H 1S0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.0014029,
              45.5709179
            ]
          },
          "properties": {
            "name": "Windsor Électroniques inc.",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Petit électroménager, électronique, télévision, radio, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Windsor Électroniques inc.</h1><p>74, 2ieme Avenue, Windsor, J1S 1Z3<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.8209079,
              45.131872
            ]
          },
          "properties": {
            "name": "Aqua-Pro Électrique inc.",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Aspirateur, aspirateur central, traitement de l'eau, outils",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Aqua-Pro Électrique inc.</h1><p>520, Rue Main Ouest, Coaticook, J1A 1P9<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.9812998,
              45.5439832
            ]
          },
          "properties": {
            "name": "Électroménager FB",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Réfrigérateur, cuisinière, lave-vaisselle, laveuse, sécheuse, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électroménager FB</h1><p>643, Route 143 Sud, Windsor, J1S 0G7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.2152355,
              45.553183
            ]
          },
          "properties": {
            "name": "Ma balayeuse",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Aspirateur chariot, aspirateur central ",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Ma balayeuse</h1><p>200, Boulevard Sir-Wilfrid-Laurier, Beloeil, J3G 4G7<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.7967246,
              45.128982
            ]
          },
          "properties": {
            "name": "Centre d'Aspirateur J. Veilleux enr.",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Aspirateur",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Centre d'Aspirateur J. Veilleux enr.</h1><p>189, Rue Saint-Jacques Sud, Coaticook, J1A 2P1<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.8055112,
              45.1338158
            ]
          },
          "properties": {
            "name": "Les Outils Demers enr.",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Petit électroménager, outil",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Les Outils Demers enr.</h1><p>D-24, Rue Court, Coaticook, J1A 1K9<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.2392759,
              46.8311592
            ]
          },
          "properties": {
            "name": "Électro-Écono",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électro-Écono</h1><p>2005, 1re Avenue, Québec, G1L 3M4<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5381883,
              45.5535522
            ]
          },
          "properties": {
            "name": "La Remise (Hochelaga)",
            "categories": [

            ],
            "subcategories": "Bibliothèque d'outils",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>La Remise (Hochelaga)</h1><p>1875, Avenue Morgan, Montréal, H1V 2R1<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -75.7407756,
              45.4469307
            ]
          },
          "properties": {
            "name": "Pièces et services d'appareils ménagers GR",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, sécheuse, cuisinière, four encastré, plaque de cuisson, réfrigérateur, congélateur, lave-vaisselle, broyeur, compacteur, refroidisseur à vin, air climatisé, humidificateur, déshumidificateur, échangeur d'air",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Pièces et services d'appareils ménagers GR</h1><p>77, Boul St-Raymond, Gatineau, J8Y 1S4<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.3097772,
              45.4942809
            ]
          },
          "properties": {
            "name": "Fab Lab du Musée de l’Ingéniosité J. Armand Bombardier",
            "categories": [

            ],
            "subcategories": "Atelier offrant l’accès à des stations de réparation, des outils, des imprimantes 3D, un banc d’électronique, des découpeuses laser et une communauté de pratique pour la réparation de petits électroménagers, d'appareils électroniques et de matériels audiovisuels",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>Fab Lab du Musée de l’Ingéniosité J. Armand Bombardier</h1><p>1001, Avenue J.-A. Bombardier, Valcourt, J0E 2L0<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -65.4817579,
              48.0505256
            ]
          },
          "properties": {
            "name": "Coopérative de Solidarité Horizons Gaspésiens (Café réparation et bibliothèque d'outils)",
            "categories": [

            ],
            "subcategories": "Atelier offrant l’accès à des outils et à de l’expertise pour réparer divers objets. Bibliothèque d'outils variés (cuisine, menuiserie, artisanat, mécanique, jardinage, électricité, etc.)",
            "repairServiceTypes": [
              "Autoréparation"
            ],
            "popupContent": "<h1>Coopérative de Solidarité Horizons Gaspésiens (Café réparation et bibliothèque d'outils)</h1><p>A-193, Avenue Grand-Pré, Bonaventure, G0C 1E0<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -79.196533,
              48.2291841
            ]
          },
          "properties": {
            "name": "Service PCC",
            "categories": {
              "3": "Climatisation"
            },
            "subcategories": "Climatiseur de toit, climatiseur de plancher, climatiseur de fenêtre, climatiseur d'appartement, climatiseur résidentiel, climatiseur portatif, climatiseur encastrable, thermopompe, appareil au gaz naturel, bruleur au gaz naturel, appareil de cuisson au gaz naturel, barbecue au gaz naturel, chauffe eau au gaz naturel, chauffe eau électrique, climatiseur commercial",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service PCC</h1><p>3506, Rang Saint-Cyr, Rouyn-Noranda, J0Z 1Y1<br/>Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -75.432792,
              45.6128247
            ]
          },
          "properties": {
            "name": "Atelier du meuble usagé",
            "categories": {
              "0": "Gros électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Réfrigérateur, cuisinière, laveuse, sécheuse, lave-vaisselle, déshumidificateur, aspirateur central, air climatisé, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Atelier du meuble usagé</h1><p>854, Avenue de l'Ange-Gardien, L'Ange-Gardien, J8L 4B9<br/>Gros électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.3432995,
              45.5279708
            ]
          },
          "properties": {
            "name": "Réparation St-Bruno inc.",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Vélo, petit moteur (tondeuse, souffleuse, outil de paysagement à essence, etc.)",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Réparation St-Bruno inc.</h1><p>1459, Rue Montarville, St-Bruno, J3V 3T6<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.8914849,
              45.5674873
            ]
          },
          "properties": {
            "name": "ABC Electronique",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Appareil électronique (téléviseur, système audio, micro-onde, chargeur d’auto électrique, etc.)",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>ABC Electronique</h1><p>A-90, Rue Saint-Laurent, Saint-Eustache, J7P 1W8<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.6537056,
              45.3097243
            ]
          },
          "properties": {
            "name": "Atelier Sylvain Soucy enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, sécheuse, cuisinière, réfrigérateur, lave-vaisselle, four encastré",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Atelier Sylvain Soucy enr.</h1><p>120, Rue de Wolfe, Bromont, J2L 1K1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -75.7115162,
              45.4857439
            ]
          },
          "properties": {
            "name": "Cosmo-Tech Services inc.",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Laveuse, sécheuse, cuisinière, four, plaque de cuisson, tiroir chauffant, hotte de cuisinie, lave-vaisselle, réfrigérateur, congélateur, micro-ondes, climatiseur mural, climatiseur extérieur, thermopompe, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Cosmo-Tech Services inc.</h1><p>134, Rue du Barry, Gatineau, J8T 3P1<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.6373796,
              48.5591322
            ]
          },
          "properties": {
            "name": "Hudon Réfrigération enr.",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "Réfrigérateur, congélateur, cuisinière, lave-vaisselle, laveuse, sécheuse, refroidisseur à vin, micro-ondes, air climatisé, thermopompe, chauffe piscine, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Hudon Réfrigération enr.</h1><p>651, Chemin du Pont-Taché, Alma, G8B 5B6<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.2968083,
              45.3109883
            ]
          },
          "properties": {
            "name": "Mathieu Brassard Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, sécheuse, lave-vaisselle, cuisinière, four encastrable, plaque de cuisson, réfrigérateur, congélateur, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Mathieu Brassard Service</h1><p>847, Rue Hébert, Saint-Jean-sur-Richelieu, J3B 2H2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.6402711,
              48.5514215
            ]
          },
          "properties": {
            "name": "Les appareils ménagers J.M. Brisson",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Vente (appareils et pièces) et réparation de gros électroménagers de marque Amana, Danby, Huebsch, KitchenAid, Maytag et Whirlpool.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Les appareils ménagers J.M. Brisson</h1><p>121, Avenue du Pont Nord, Alma, G8B 5C1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.643879,
              48.5609907
            ]
          },
          "properties": {
            "name": "T T F Électrique ltée",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, sécheuse, réfrigérateur, lave-vaisselle, cuisinière, hotte de cuisine, échangeur d'air, chauffage, vente d'électroménager usagé, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>T T F Électrique ltée</h1><p>643, Boulevard de Quen, Alma, G8B 5Z2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -66.1231451,
              48.1099395
            ]
          },
          "properties": {
            "name": "Service 132 inc.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Cuisinière, réfrigérateur, lave-vaisselle, laveuse, sécheuse, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service 132 inc.</h1><p>89, Rue Penouil, Carleton-sur-Mer, G0C 1J0<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.3120601,
              46.7654892
            ]
          },
          "properties": {
            "name": "Aspirateur 911",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Aspirateur à traineau, aspirateur central",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Aspirateur 911</h1><p>999, Avenue de Bourgogne, Sainte-Foy, G1W 4S6<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -79.0215953,
              48.2422473
            ]
          },
          "properties": {
            "name": "Electro-Doc",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Electro-Doc</h1><p>15, Avenue Horne, Rouyn-Noranda, J9X 4S1<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -71.9367492,
              45.3956943
            ]
          },
          "properties": {
            "name": "Caffix",
            "categories": {
              "1": "Petits électroménagers"
            },
            "subcategories": "Cafetière espresso",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Caffix</h1><p>2632, Rue Hertel, Sherbrooke, J1J 2J3<br/>Petits électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.5132555,
              45.5259236
            ]
          },
          "properties": {
            "name": "3ZCOM Informatique",
            "categories": [

            ],
            "subcategories": "Ordinateur, ordinateur portable",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>3ZCOM Informatique</h1><p>962, Rue Saint-Laurent Ouest, Longueuil, J4K 1C6<br/></p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -68.5579936,
              48.4370918
            ]
          },
          "properties": {
            "name": "Service Alain Gauvin",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Électroménager",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Service Alain Gauvin</h1><p>531, Rue Lausanne, Rimouski, G5L 4B7<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.9993176,
              45.327062
            ]
          },
          "properties": {
            "name": "Paul Emond Service",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, sécheuse, cuisinière, réfrigérateur, lave-vaiselle, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Paul Emond Service</h1><p>39, Avenue Des Mésanges, Les Cèdres, J7T 1A6<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.4402102,
              48.6635683
            ]
          },
          "properties": {
            "name": "Électroménagers Naud Service inc.",
            "categories": {
              "0": "Gros électroménagers",
              "1": "Petits électroménagers",
              "3": "Climatisation"
            },
            "subcategories": "",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Électroménagers Naud Service inc.</h1><p>932, Rue Truchon, Saint-Félicien, G8K 1J9<br/>Gros électroménagers, Petits électroménagers, Climatisation</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -72.3261192,
              48.5849371
            ]
          },
          "properties": {
            "name": "Lesage Sylvain Services",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, sécheuse, lave-vaisselle, cuisinière, réfrigérateur, congélateur, micro-ondes, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Lesage Sylvain Services</h1><p>434, Rue Principale, Saint-Prime, G8J 1S2<br/>Gros électroménagers</p>"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -73.9128832,
              45.5567739
            ]
          },
          "properties": {
            "name": "Carl Charron enr.",
            "categories": [
              "Gros électroménagers"
            ],
            "subcategories": "Laveuse, sécheuse, lave-vaisselle, cuisinière, etc.",
            "repairServiceTypes": {
              "1": "Réparateur"
            },
            "popupContent": "<h1>Carl Charron enr.</h1><p>739, Rue Raby, Deux-Montagnes, J7R 6E8<br/>Gros électroménagers</p>"
          }
        }
      ]
    }
    console.log(geojsonFeatureCollection);
    markers = [];
    for (let feature of geojsonFeatureCollection.features) {
      markers.push({
        position: {
          lng: feature.geometry.coordinates[0],
          lat: feature.geometry.coordinates[1]
        }
      })
    }
    let markers2 = [];
    for (let i = 0; i < 10000; i++) {
      markers2.push({
        position: {
          lng: -122.673447 + Math.random() * 200.0,
          lat: 45.5225581 - 60 + Math.random() * 80
        }
      });
    }
  };

  addMarkers();

  return (
    <>
      <Map center={position} zoom={2} style={mapStyle} maxZoom={20}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerCluster markers={markers} addMarkers={addMarkers} />
      </Map>
      <div>
        clearLayers and addLayers used. Look at the console to check performance
      </div>
    </>
  );
};

export default Leaflet;
