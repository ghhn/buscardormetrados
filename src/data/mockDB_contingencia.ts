// @ts-nocheck
import type { Partida } from "../types";

export const mockPartidasContingencia: Partida[] = [
    {
        "id": "1",
        "codigo": "OE.1",
        "descripcion": "OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE",
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "2",
        "codigo": "OE.1.1",
        "descripcion": "OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "3",
        "codigo": "OE.1.1.1",
        "descripcion": "CONSTRUCCIONES PROVISIONALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "4",
        "codigo": "OE.1.1.1.1",
        "descripcion": "Almacén Oficina y Caseta de Guardiania",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.1.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.1 CONSTRUCCIONES PROVISIONALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "5",
        "codigo": "OE.1.1.1.6",
        "descripcion": "Servicios higienicos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.1.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.1 CONSTRUCCIONES PROVISIONALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "6",
        "codigo": "OE.1.1.1.8",
        "descripcion": "Cartel de Obra de 2.40X3.60",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.1.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.1 CONSTRUCCIONES PROVISIONALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "7",
        "codigo": "OE.1.1.2",
        "descripcion": "INSTALACIONES PROVISIONALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "8",
        "codigo": "OE.1.1.2.3",
        "descripcion": "Energia Electrica Provisional",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.1.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.2 INSTALACIONES PROVISIONALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "9",
        "codigo": "OE.1.1.2.4",
        "descripcion": "Abastecimiento Provisional de agua",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.1.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.2 INSTALACIONES PROVISIONALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "10",
        "codigo": "OE.1.1.3",
        "descripcion": "TRABAJOS PRELIMINARES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "11",
        "codigo": "OE.1.1.3.1",
        "descripcion": "LIMPIEZA DE TERRENO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1.1.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "12",
        "codigo": "OE.1.1.3.1.1",
        "descripcion": "Eliminación de maleza y arbustos de fácil extracción",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.1.1.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES",
            "OE.1.1.3.1 LIMPIEZA DE TERRENO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "13",
        "codigo": "OE.1.1.3.1.2",
        "descripcion": "Traslado de material en desuso d=100 m",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.1.1.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES",
            "OE.1.1.3.1 LIMPIEZA DE TERRENO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "14",
        "codigo": "OE.1.1.3.1.3",
        "descripcion": "Limpieza de terreno",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.1.1.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES",
            "OE.1.1.3.1 LIMPIEZA DE TERRENO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "15",
        "codigo": "OE.1.1.3.1.4",
        "descripcion": "Acarreo manual de material de desmonte",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.1.1.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES",
            "OE.1.1.3.1 LIMPIEZA DE TERRENO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "16",
        "codigo": "OE.1.1.3.1.5",
        "descripcion": "Eliminacion de desmonte con maquinaria",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.1.1.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.3 TRABAJOS PRELIMINARES",
            "OE.1.1.3.1 LIMPIEZA DE TERRENO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "17",
        "codigo": "OE.1.1.7",
        "descripcion": "MOVILIZACIÓN DE CAMPAMENTO, MAQUINARIA Y HERRAMIENTAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "18",
        "codigo": "OE.1.1.7.1",
        "descripcion": "Movilización y desmovilización de equipos",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.1.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.7 MOVILIZACIÓN DE CAMPAMENTO, MAQUINARIA Y HERRAMIENTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "19",
        "codigo": "OE.1.1.7.2",
        "descripcion": "Flete Terrestre",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.1.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.7 MOVILIZACIÓN DE CAMPAMENTO, MAQUINARIA Y HERRAMIENTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "20",
        "codigo": "OE.1.1.9",
        "descripcion": "TRAZOS, NIVELES Y REPLANTEO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "21",
        "codigo": "OE.1.1.9.1",
        "descripcion": "Trazo, niveles y replanteo preliminar",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.1.1.9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.9 TRAZOS, NIVELES Y REPLANTEO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "22",
        "codigo": "OE.1.1.9.2",
        "descripcion": "Trazo y Replanteo durante el proceso",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.1.1.9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.1 OBRAS PROVISIONALES Y TRABAJOS PRELIMINARES",
            "OE.1.1.9 TRAZOS, NIVELES Y REPLANTEO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "23",
        "codigo": "OE.1.2",
        "descripcion": "SEGURIDAD Y SALUD",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "24",
        "codigo": "OE.1.2.1",
        "descripcion": "ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "25",
        "codigo": "OE.1.2.1.1",
        "descripcion": "Elaboracion, Implementacion y administracion del Plan de Seguridad y Salud en el Trabajo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.1 ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "26",
        "codigo": "OE.1.2.1.2",
        "descripcion": "Equipos de Proteccion Individual",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.1.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.1 ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "27",
        "codigo": "OE.1.2.1.3",
        "descripcion": "Equipos de Proteccion Colectiva",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.1 ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "28",
        "codigo": "OE.1.2.1.4",
        "descripcion": "Señalizacion Temporal de Seguridad",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.1 ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "29",
        "codigo": "OE.1.2.1.5",
        "descripcion": "Capacitacion en Seguridad y Salud",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.1 ELABORACIÓN, IMPLEMENTACIÓN Y ADMINISTRACIÓN DEL PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "30",
        "codigo": "OE.1.2.2",
        "descripcion": "RECURSOS PARA RESPUESTAS ANTE EMERGENCIAS EN SEGURIDAD Y SALUD DURANTE EL TRABAJO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "31",
        "codigo": "OE.1.2.2.1",
        "descripcion": "Equipos de Primeros Auxilios y de Socorro",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.2 RECURSOS PARA RESPUESTAS ANTE EMERGENCIAS EN SEGURIDAD Y SALUD DURANTE EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "32",
        "codigo": "OE.1.2.2.2",
        "descripcion": "Equipos contra incendios",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.2 RECURSOS PARA RESPUESTAS ANTE EMERGENCIAS EN SEGURIDAD Y SALUD DURANTE EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "33",
        "codigo": "OE.1.2.3",
        "descripcion": "PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.1.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "34",
        "codigo": "OE.1.2.3.1",
        "descripcion": "Plan para la vigilancia prevención y control de COVID en el trabajo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.1.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.3 PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "35",
        "codigo": "OE.1.2.3.2",
        "descripcion": "Equipos de Proteccion Individual -Covid19",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.1.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.3 PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "36",
        "codigo": "OE.1.2.3.3",
        "descripcion": "Equipos de Proteccion Colectivo ante el COVID-19",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.3 PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "37",
        "codigo": "OE.1.2.3.4",
        "descripcion": "Señalización temporal de seguridad ante el COVID-19",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.1.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.3 PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "38",
        "codigo": "OE.1.2.3.5",
        "descripcion": "Servicio de Pruebas COVID - 19",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.1.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.1 OBRAS PROVISIONALES, TRABAJOS PRELIMINARES, SEGURIDAD Y SALUD.",
            "OE.1.2 SEGURIDAD Y SALUD",
            "OE.1.2.3 PLAN PARA LA VIGILANCIA PREVENCION Y CONTROL DE COVID EN EL TRABAJO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "39",
        "codigo": "OE.2",
        "descripcion": "ESTRUCTURAS.",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE",
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "40",
        "codigo": "OE.2.1",
        "descripcion": "MOVIMIENTO DE TIERRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "41",
        "codigo": "OE.2.1.1",
        "descripcion": "EXCAVACIONES MASIVA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "42",
        "codigo": "OE.2.1.1.1",
        "descripcion": "Excavacion con maquinaria",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.1 EXCAVACIONES MASIVA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "43",
        "codigo": "OE.2.1.2",
        "descripcion": "EXCAVACIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "44",
        "codigo": "OE.2.1.2.1",
        "descripcion": "EXCAVACIONES SIMPLES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.1.2",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "45",
        "codigo": "OE.2.1.2.1.1",
        "descripcion": "Excavacion manual de zanjas para Zapatas",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.1.2.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.2 EXCAVACIONES",
            "OE.2.1.2.1 EXCAVACIONES SIMPLES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "46",
        "codigo": "OE.2.1.2.1.2",
        "descripcion": "Excavacion manual de zanjas para Vigas de Cimentación",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.1.2.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.2 EXCAVACIONES",
            "OE.2.1.2.1 EXCAVACIONES SIMPLES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "47",
        "codigo": "OE.2.1.4",
        "descripcion": "RELLENOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "48",
        "codigo": "OE.2.1.4.1",
        "descripcion": "Relleno compactado con material de prestamo",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.1.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.4 RELLENOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "49",
        "codigo": "OE.2.1.4.2",
        "descripcion": "Relleno compactado c/equipo con material de afirmado e=0.15m",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.1.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.4 RELLENOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "50",
        "codigo": "OE.2.1.5.",
        "descripcion": "NIVELACION INTERIOR Y APISONADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.1.5",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "51",
        "codigo": "OE.2.1.5.1",
        "descripcion": "Nivelacion interior y apisonado para f.piso,patio y veredas",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.1.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.4 RELLENOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "52",
        "codigo": "OE.2.1.5.2",
        "descripcion": "Nivelación y compactación en área(fondo) de cimentación",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.1.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.4 RELLENOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "53",
        "codigo": "OE.2.1.6",
        "descripcion": "ELIMINACION DE MATERIAL EXCEDENTE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "54",
        "codigo": "OE.2.1.6.1",
        "descripcion": "Acarreo de material excavado a punto de carguio",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.1.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.6 ELIMINACION DE MATERIAL EXCEDENTE"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "55",
        "codigo": "OE.2.1.6.2",
        "descripcion": "Eliminacion de material excedente con maquinaria",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.1.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.1 MOVIMIENTO DE TIERRAS",
            "OE.2.1.6 ELIMINACION DE MATERIAL EXCEDENTE"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "56",
        "codigo": "OE.2.2",
        "descripcion": "OBRAS DE CONCRETO SIMPLE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "57",
        "codigo": "OE.2.2.2",
        "descripcion": "FALSA ZAPATA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "58",
        "codigo": "OE.2.2.2.1",
        "descripcion": "Falsa zapata, concreto=100kg/cm2 + 50% P.G",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE",
            "OE.2.2.2 FALSA ZAPATA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "59",
        "codigo": "OE.2.2.3",
        "descripcion": "SOLADOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "60",
        "codigo": "OE.2.2.3.1",
        "descripcion": "Solado para zapata e=0.10m, f'c=100kg/cm2",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE",
            "OE.2.2.3 SOLADOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "61",
        "codigo": "OE.2.2.4",
        "descripcion": "DADOS DE ANCLAJE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "62",
        "codigo": "OE.2.2.4.1",
        "descripcion": "Dado de anclaje f'c= 210 kg/cm2",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE",
            "OE.2.2.4 DADOS DE ANCLAJE"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "63",
        "codigo": "OE.2.2.4.2",
        "descripcion": "Acero en dado de anclaje para cimientos de columna",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.2 OBRAS DE CONCRETO SIMPLE",
            "OE.2.2.4 DADOS DE ANCLAJE"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "64",
        "codigo": "OE.2.3",
        "descripcion": "OBRAS DE CONCRETO ARMADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "65",
        "codigo": "OE.2.3.2",
        "descripcion": "ZAPATAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.3",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "66",
        "codigo": "OE.2.3.2.1",
        "descripcion": "Zapatas - Concreto f'c=210 kg/cm2",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.3.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.2 ZAPATAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "67",
        "codigo": "OE.2.3.2.3",
        "descripcion": "Zapatas - Acero f'y=4200 kg/cm2",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.3.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.2 ZAPATAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "68",
        "codigo": "OE.2.3.3",
        "descripcion": "VIGAS DE CIMENTACIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.3",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "69",
        "codigo": "OE.2.3.3.1",
        "descripcion": "Vigas de Conexión - Concreto f'c= 210 kg/cm2",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.3.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.3 VIGAS DE CIMENTACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "70",
        "codigo": "OE.2.3.3.2",
        "descripcion": "Vigas de Conexión - Encofrado y desencofrado",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.3.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.3 VIGAS DE CIMENTACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "71",
        "codigo": "OE.2.3.3.3",
        "descripcion": "Vigas de Conexión - Acero f'y=4200 kg/cm2",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.3.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.3 VIGAS DE CIMENTACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "72",
        "codigo": "OE.2.3.7",
        "descripcion": "PEDESTALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.3",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "73",
        "codigo": "OE.2.3.7.1",
        "descripcion": "Pedestales - Concreto f'c=210 kg/cm2",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.3.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.7 PEDESTALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "74",
        "codigo": "OE.2.3.7.2",
        "descripcion": "Pedestales - Encofrado y desencofrado",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.3.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.7 PEDESTALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "75",
        "codigo": "OE.2.3.7.3",
        "descripcion": "Pedestales - Acero f'y=4200 kg/cm2",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.3.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.7 PEDESTALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "76",
        "codigo": "OE.2.3.9",
        "descripcion": "LOSAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.3",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "77",
        "codigo": "OE.2.3.9.7",
        "descripcion": "LOSAS COLABORANTE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.3.9",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "78",
        "codigo": "OE.2.3.9.7.1",
        "descripcion": "Losa Colaborante - Concreto f'c=210 kg/cm2",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.3.9.7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.7 LOSAS COLABORANTE"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "79",
        "codigo": "OE.2.3.9.7.2",
        "descripcion": "Losa colaborante.- PLANCHA AD-900 calibre 22 ó equivalente",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.3.9.7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.7 LOSAS COLABORANTE"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "80",
        "codigo": "OE.2.3.9.7.3",
        "descripcion": "Losa Colaborante - Acero Fy=4,200 kg/cm2",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.3.9.7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.7 LOSAS COLABORANTE"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "81",
        "codigo": "OE.2.3.9.8",
        "descripcion": "LOSAS DE CONCRETO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.3.9",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "82",
        "codigo": "OE.2.3.9.8.1",
        "descripcion": "Concreto f'c=210 kg/cm2 en losa",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.3.9.8",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.8 LOSAS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "83",
        "codigo": "OE.2.3.9.8.2",
        "descripcion": "Encofrado y desencofrado en losa de concreto",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.3.9.8",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.8 LOSAS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "84",
        "codigo": "OE.2.3.9.8.3",
        "descripcion": "Acero f'y=4200 kg/cm2 en losa de concreto",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.3.9.8",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.9 LOSAS",
            "OE.2.3.9.8 LOSAS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "85",
        "codigo": "OE.2.3.12",
        "descripcion": "CISTERNA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.3",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "86",
        "codigo": "OE.2.3.12.1",
        "descripcion": "Cisternas -Concreto f´c=280kg/cm2",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.3.12",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.12 CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "87",
        "codigo": "OE.2.3.12.2",
        "descripcion": "Cisternas -encofrado y desencofrado",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.3.12",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.12 CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "88",
        "codigo": "OE.2.3.12.3",
        "descripcion": "Cisternas -Acero fy=4200 kg/cm2",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.3.12",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.12 CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "89",
        "codigo": "OE.2.3.13",
        "descripcion": "SOBRECIMIENTO ARMADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.3",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "90",
        "codigo": "OE.2.3.13.1",
        "descripcion": "Sobrecimiento concreto 1:8+25%PM",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.3.13",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.13 SOBRECIMIENTO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "91",
        "codigo": "OE.2.3.13.2",
        "descripcion": "Encofrado y desencofrado en sobrecimiento",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.3.13",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.13 SOBRECIMIENTO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "92",
        "codigo": "OE.2.3.13.3",
        "descripcion": "Acero f'y=4200 kg/cm2 en sobrecimiento",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.3.13",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.13 SOBRECIMIENTO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "93",
        "codigo": "OE.2.3.14",
        "descripcion": "CIMIENTO CORRIDO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.3",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "94",
        "codigo": "OE.2.3.14.1",
        "descripcion": "Concreto f'c= 175 kg/cm2 en cimiento",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.2.3.14",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.14 CIMIENTO CORRIDO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "95",
        "codigo": "OE.2.3.14.2",
        "descripcion": "Encofrado y desencofrado en cimiento",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.3.14",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.3 OBRAS DE CONCRETO ARMADO",
            "OE.2.3.14 CIMIENTO CORRIDO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "96",
        "codigo": "OE.2.4",
        "descripcion": "ESTRUCTURAS METÁLICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "97",
        "codigo": "OE.2.4.1",
        "descripcion": "COLUMNAS METALICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.4",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "98",
        "codigo": "OE.2.4.1.1.1",
        "descripcion": "Columnas metalicas",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.4.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "99",
        "codigo": "OE.2.4.1.1.2",
        "descripcion": "Placa Base",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.4.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "100",
        "codigo": "OE.2.4.1.1.3",
        "descripcion": "Pernos 1\" (L=450mm) en placa base columnas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "101",
        "codigo": "OE.2.4.1.1.4",
        "descripcion": "Pernos 3/4\" (L=450mm) en placa base columnas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "102",
        "codigo": "OE.2.4.1.1.5",
        "descripcion": "Pernos 5/8\" (L=450mm) en placa base columnas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "103",
        "codigo": "OE.2.4.1.1.6",
        "descripcion": "Pernos ØM16 A490 (L=400mm) en placa base columnas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "104",
        "codigo": "OE.2.4.1.1.7",
        "descripcion": "Placa Base Inc. Pernos de anclaje",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "105",
        "codigo": "OE.2.4.1.1.8",
        "descripcion": "Armado Columnas metálicas 3mm (L=6m)",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.4.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "106",
        "codigo": "OE.2.4.1.1.9",
        "descripcion": "Montaje Columnas metálicas 3mm (L=6m)",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.4.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.1 COLUMNAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "107",
        "codigo": "OE.2.4.2",
        "descripcion": "VIGAS METALICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.4",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "108",
        "codigo": "OE.2.4.2.1.1",
        "descripcion": "Vigas Metalicas",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.4.2.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "109",
        "codigo": "OE.2.4.2.2.1",
        "descripcion": "Plancha Metalica",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.4.2.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "110",
        "codigo": "OE.2.4.2.2.2",
        "descripcion": "PERNOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.4.2.2",
        "nivel_jerarquia": 6,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "111",
        "codigo": "OE.2.4.2.2.2.1",
        "descripcion": "Pernos 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.2.2.2",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "112",
        "codigo": "OE.2.4.2.2.2.2",
        "descripcion": "Pernos 5/8\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.2.2.2",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "113",
        "codigo": "OE.2.4.2.2.2.3",
        "descripcion": "Pernos 3/4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.2.2.2",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "114",
        "codigo": "OE.2.4.2.2.2.4",
        "descripcion": "Pernos 7/8\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.2.2.2",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "115",
        "codigo": "OE.2.4.2.2.2.5",
        "descripcion": "Plancha Metalica Inc.Pernos de sujeción",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.2.2.2",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "116",
        "codigo": "OE.2.4.2.2.2.6",
        "descripcion": "Armado vigas metálicas 150x100mm e= 3mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.2.4.2.2.2",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "117",
        "codigo": "OE.2.4.2.2.2.7",
        "descripcion": "Montaje vigas metálicas 150x100 mm e=3mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.2.4.2.2.2",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.2 VIGAS METALICAS",
            "OE.2.3.14.2 Encofrado y desencofrado en cimiento",
            "OE.2.4.2.2.2 PERNOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "118",
        "codigo": "OE.2.4.3",
        "descripcion": "TIJERALES METALICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.4",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "119",
        "codigo": "OE.2.4.3.1",
        "descripcion": "Tijeral Metalico - caseta TM-Ca",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.4.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "120",
        "codigo": "OE.2.4.3.1.1",
        "descripcion": "PLANCHAS METALICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.4.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "121",
        "codigo": "OE.2.4.3.1.1.1",
        "descripcion": "Plancha Metalica-Espesor de 6mm",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.1.1",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.1 Tijeral Metalico - caseta TM-Ca",
            "OE.2.4.3.1.1 PLANCHAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "122",
        "codigo": "OE.2.4.3.2",
        "descripcion": "Armado de Tijeral Metalico",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.4.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "123",
        "codigo": "OE.2.4.3.2.1",
        "descripcion": "Armado de Tijeral metalico Tipo 01 L=7.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "124",
        "codigo": "OE.2.4.3.2.2",
        "descripcion": "Armado de Tijeral metalico Tipo 02 L=6.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "125",
        "codigo": "OE.2.4.3.2.3",
        "descripcion": "Armado de Tijeral metalico Tipo 03 L=3.50 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "126",
        "codigo": "OE.2.4.3.2.4",
        "descripcion": "Armado de Tijeral metalico Tipo 04 L=3.10 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "127",
        "codigo": "OE.2.4.3.2.5",
        "descripcion": "Armado de Tijeral metalico Tipo 05 L=3.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "128",
        "codigo": "OE.2.4.3.2.6",
        "descripcion": "Armado de Tijeral metalico Tipo 06 L=2.60 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "129",
        "codigo": "OE.2.4.3.2.7",
        "descripcion": "Armado de Tijeral metalico Tipo 07 L=1.90 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "130",
        "codigo": "OE.2.4.3.2.8",
        "descripcion": "Armado de Tijeral metalico Tipo 08 L=1.30 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "131",
        "codigo": "OE.2.4.3.2.9",
        "descripcion": "Armado de Tijeral metálico Tipo 09 L=3.70 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.2 Armado de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "132",
        "codigo": "OE.2.4.3.3",
        "descripcion": "Montaje de Tijeral Metalico",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.4.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "133",
        "codigo": "OE.2.4.3.3.1",
        "descripcion": "Montaje de Tijeral metalico Tipo 01 L=7.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "134",
        "codigo": "OE.2.4.3.3.2",
        "descripcion": "Montaje de Tijeral metalico Tipo 02 L=6.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "135",
        "codigo": "OE.2.4.3.3.3",
        "descripcion": "Montaje de Tijeral metalico Tipo 03 L=3.50 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "136",
        "codigo": "OE.2.4.3.3.4",
        "descripcion": "Montaje de Tijeral metalico Tipo 04 L=3.10 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "137",
        "codigo": "OE.2.4.3.3.5",
        "descripcion": "Montaje de Tijeral metalico Tipo 05 L=3.00 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "138",
        "codigo": "OE.2.4.3.3.6",
        "descripcion": "Montaje de Tijeral metalico Tipo 06 L=2.60 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "139",
        "codigo": "OE.2.4.3.3.7",
        "descripcion": "Montaje de Tijeral metalico Tipo 07 L=1.90 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "140",
        "codigo": "OE.2.4.3.3.8",
        "descripcion": "Montaje de Tijeral metalico Tipo 08 L=1.30 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "141",
        "codigo": "OE.2.4.3.3.9",
        "descripcion": "Montaje de Tijeral metálico Tipo 09 L=3.70 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.3 TIJERALES METALICO",
            "OE.2.4.3.3 Montaje de Tijeral Metalico"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "142",
        "codigo": "OE.2.4.4",
        "descripcion": "CORREAS METALICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.4",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "143",
        "codigo": "OE.2.4.4.1",
        "descripcion": "Correas metalicas de 75x75x3mm",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.4.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.4 CORREAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "144",
        "codigo": "OE.2.4.4.2",
        "descripcion": "Correas metalicas de 50x50x3mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.2.4.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.4 ESTRUCTURAS METÁLICAS",
            "OE.2.4.4 CORREAS METALICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "145",
        "codigo": "OE.2.6",
        "descripcion": "VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "146",
        "codigo": "OE.2.6.1",
        "descripcion": "ARRIOSTRAMIENTO METALICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "147",
        "codigo": "OE.2.6.1.1",
        "descripcion": "Arriostramiento metalico",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.1 ARRIOSTRAMIENTO METALICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "148",
        "codigo": "OE.2.6.1.2",
        "descripcion": "Plancha estriada de 1.20x2.40, e=1/8\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.1 ARRIOSTRAMIENTO METALICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "149",
        "codigo": "OE.2.6.1.3",
        "descripcion": "Parantes metalicos para contramarcos perfil 50x50x3.00mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.1 ARRIOSTRAMIENTO METALICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "150",
        "codigo": "OE.2.6.2",
        "descripcion": "ESCALERA METALICA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "151",
        "codigo": "OE.2.6.2.1",
        "descripcion": "Perfiles",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.2 ESCALERA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "152",
        "codigo": "OE.2.6.2.2",
        "descripcion": "Placa Base e=16mm",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.2 ESCALERA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "153",
        "codigo": "OE.2.6.2.3",
        "descripcion": "Refuerzo en la base e=6mm",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.2.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.2 ESCALERA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "154",
        "codigo": "OE.2.6.3",
        "descripcion": "ARRIOSTRES DEL TECHO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "155",
        "codigo": "OE.2.6.3.1",
        "descripcion": "Acero Ø 1/2\" LISO",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.2.6.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.3 ARRIOSTRES DEL TECHO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "156",
        "codigo": "OE.2.6.3.2",
        "descripcion": "Conexión de tirantes L64x64x7.9",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.2.6.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.3 ARRIOSTRES DEL TECHO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "157",
        "codigo": "OE.2.6.3.3",
        "descripcion": "Angulo 2.5X2.5X3/16\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.2.6.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.3 ARRIOSTRES DEL TECHO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "158",
        "codigo": "OE.2.6.4",
        "descripcion": "PINTURA DE PROTECCION ANTICORROSIVA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "159",
        "codigo": "OE.2.6.4.1",
        "descripcion": "Pintura a base de resinas epoxi para protección anticorrosión",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.4 PINTURA DE PROTECCION ANTICORROSIVA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "160",
        "codigo": "OE.2.6.5",
        "descripcion": "CONTROL DE CALIDAD",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "161",
        "codigo": "OE.2.6.5.1",
        "descripcion": "Verificación de Capacidad Portante",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.6.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.5 CONTROL DE CALIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "162",
        "codigo": "OE.2.6.5.2",
        "descripcion": "Diseño de Mezclas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.6.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.5 CONTROL DE CALIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "163",
        "codigo": "OE.2.6.5.3",
        "descripcion": "Ensayos de Compactación de Suelos",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.6.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.5 CONTROL DE CALIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "164",
        "codigo": "OE.2.6.5.4",
        "descripcion": "Rotura de Briquetas de concreto",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.6.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.5 CONTROL DE CALIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "165",
        "codigo": "OE.2.6.5.5",
        "descripcion": "Pruebas de soldadura",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.2.6.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.5 CONTROL DE CALIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "166",
        "codigo": "OE.2.6.6",
        "descripcion": "CURADO Y PROTECCION DEL CONCRETO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "167",
        "codigo": "OE.2.6.6.1",
        "descripcion": "Curado y Protección de Concreto en Obra con Plástico",
        "unidad": "mes",
        "es_titulo": false,
        "parent_id": "OE.2.6.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.6 CURADO Y PROTECCION DEL CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "168",
        "codigo": "OE.2.6.6.2",
        "descripcion": "Curado y Proteccion de Concreto",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.2.6.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.6 CURADO Y PROTECCION DEL CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "169",
        "codigo": "OE.2.6.7",
        "descripcion": "CERCO METÁLICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.2.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "170",
        "codigo": "OE.2.6.7.1",
        "descripcion": "Cerco perimetrico de rejas metalicas",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.2.6.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.2 ESTRUCTURAS.",
            "OE.2.6 VARIOS",
            "OE.2.6.7 CERCO METÁLICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "171",
        "codigo": "OE.3",
        "descripcion": "ARQUITECTURA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE",
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "172",
        "codigo": "OE.3.1",
        "descripcion": "MUROS Y TABIQUES DE ALBAÑILERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "173",
        "codigo": "OE.3.1.10",
        "descripcion": "MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "174",
        "codigo": "OE.3.1.10.1",
        "descripcion": "MURO CON EL SISTEMA DRYWALL DOS CARAS",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.1.10",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "175",
        "codigo": "OE.3.1.10.2",
        "descripcion": "CERCO PREFABRICADO DE CONCRETO TIPO PLACA H=3.00M.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.1.10",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "176",
        "codigo": "OE.3.1.10.3",
        "descripcion": "MURO SISTEMA DRYWALL CON LAMINA DE PLOMO e=2mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.1.10",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "177",
        "codigo": "OE.3.1.10.4",
        "descripcion": "TABIQUE DE DOS CARAS CON UNA PLANCHA DE FIBROCEMENTO SUPERBOARD PRO 12.7 mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.1.10",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "178",
        "codigo": "OE.3.1.10.5",
        "descripcion": "Tabique de Fibrocemento de 6 mm(interiores) y Fibrocemento de 12mm (Exterior) perfil 65 mm e=9.04",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.1.10",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "179",
        "codigo": "OE.3.1.10.6",
        "descripcion": "Tabique de Fibrocemento dos caras de 6 mm (interiores)",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.1.10",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "180",
        "codigo": "OE.3.1.10.7",
        "descripcion": "Recubrimiento de elementos estructurales con fibrocemento de 6mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.1.10",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "181",
        "codigo": "OE.3.1.10.8",
        "descripcion": "Muro sistema de fibrocemento con lamina de plomo e=3mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.1.10",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.10 MUROS CON EL SISTEMA DE CONSTRUCCIÓN EN SECO (SISTEMA DRY WALL O SIMILAR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "182",
        "codigo": "OE.3.1.11",
        "descripcion": "MUROS DE PIEDRA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "183",
        "codigo": "OE.3.1.11.1",
        "descripcion": "Mamposteria en piedra",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.3.1.11",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.1 MUROS Y TABIQUES DE ALBAÑILERIA",
            "OE.3.1.11 MUROS DE PIEDRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "184",
        "codigo": "OE.3.3",
        "descripcion": "CIELORRASOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "185",
        "codigo": "OE.3.3.6",
        "descripcion": "FALSO CIELO RASO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.3",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "186",
        "codigo": "OE.3.3.6.1",
        "descripcion": "FALSO CIELORRASO (BALDOSA DE FIBRA MINERAL BIOSOLUBLE 0.61 x 0.61m, E=14mm.)",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.3.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS",
            "OE.3.3.6 FALSO CIELO RASO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "187",
        "codigo": "OE.3.3.6.2",
        "descripcion": "FALSO CIELO RASO CON PLACA DE SUPERBOARD (6mm.)",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.3.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS",
            "OE.3.3.6 FALSO CIELO RASO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "188",
        "codigo": "OE.3.3.6.3",
        "descripcion": "FALSO CIELO RASO CON PLACA DE SUPERBOARD CON LAMINA DE PLOMO e=2mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.3.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS",
            "OE.3.3.6 FALSO CIELO RASO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "189",
        "codigo": "OE.3.3.6.4",
        "descripcion": "Falso Cielorraso (Baldosa Translucida 0.61 x 0.61m)",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.3.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS",
            "OE.3.3.6 FALSO CIELO RASO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD2",
        "apu": null
    },
    {
        "id": "190",
        "codigo": "OE.3.3.6.5",
        "descripcion": "Falso cielo raso con placa superboard 6mm incluye estructuras",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.3.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.3 CIELORRASOS",
            "OE.3.3.6 FALSO CIELO RASO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "191",
        "codigo": "OE.3.4",
        "descripcion": "PISOS Y PAVIMENTOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "192",
        "codigo": "OE.3.4.1",
        "descripcion": "CONTRAPISOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.4",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "193",
        "codigo": "OE.3.4.1.1",
        "descripcion": "Contrapiso de concreto f'c=175 kg/cm2 e =4 cm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.1 CONTRAPISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM1",
        "apu": null
    },
    {
        "id": "194",
        "codigo": "OE.3.4.2",
        "descripcion": "PISOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.4",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "195",
        "codigo": "OE.3.4.2.20",
        "descripcion": "Piso Porcelanato de 60x60 antideslizante de alto transito",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "196",
        "codigo": "OE.3.4.2.21",
        "descripcion": "Piso Ceramico de 45x45 antideslizante de alto transito",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "197",
        "codigo": "OE.3.4.2.23",
        "descripcion": "OTROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.4.2",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "198",
        "codigo": "OE.3.4.2.23.2",
        "descripcion": "EXTERIORES- AGREGADO ESTABILIZADO",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.2.23",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS",
            "OE.3.4.2.23 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "199",
        "codigo": "OE.3.4.2.25",
        "descripcion": "Piso de Cemento Pulido",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "200",
        "codigo": "OE.3.4.2.26",
        "descripcion": "Piso Vinilico Conductivo",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "201",
        "codigo": "OE.3.4.2.27",
        "descripcion": "Piso de terrazo",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "202",
        "codigo": "OE.3.4.2.28",
        "descripcion": "Base de concreto para muebles fijos H=10cm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.2 PISOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "203",
        "codigo": "OE.3.4.3",
        "descripcion": "PISOS DE CONCRETO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.4",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "204",
        "codigo": "OE.3.4.3.1",
        "descripcion": "CIRCULACION INTERIOR",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.4.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "205",
        "codigo": "OE.3.4.3.1.1",
        "descripcion": "Afirmado y Compactado de 4\" con Material Propio",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.1 CIRCULACION INTERIOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "206",
        "codigo": "OE.3.4.3.1.2",
        "descripcion": "Encofrado y desencofrado",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.1 CIRCULACION INTERIOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "207",
        "codigo": "OE.3.4.3.1.3",
        "descripcion": "Concreto f'c=175 kg/cm², e=0.15m",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.1 CIRCULACION INTERIOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "208",
        "codigo": "OE.3.4.3.1.4",
        "descripcion": "Junta Flexible en concreto",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.1 CIRCULACION INTERIOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "209",
        "codigo": "OE.3.4.3.2",
        "descripcion": "VEREDAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.4.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "210",
        "codigo": "OE.3.4.3.2.1",
        "descripcion": "Afirmado y Compactado de 4\" con Material Propio",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.2 VEREDAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "211",
        "codigo": "OE.3.4.3.2.2",
        "descripcion": "Encofrado y desencofrado",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.2 VEREDAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "212",
        "codigo": "OE.3.4.3.2.3",
        "descripcion": "Concreto f'c=175 kg/cm², e=0.15m",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.2 VEREDAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "213",
        "codigo": "OE.3.4.3.2.4",
        "descripcion": "Bruñas en veredas",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.2 VEREDAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "214",
        "codigo": "OE.3.4.3.2.5",
        "descripcion": "Junta Flexible en concreto",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.2 VEREDAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "215",
        "codigo": "OE.3.4.3.3",
        "descripcion": "CIRCULACION EN PATIO DE MANIOBRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.4.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "216",
        "codigo": "OE.3.4.3.3.1",
        "descripcion": "Empedrado e= 10 cm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.3 CIRCULACION EN PATIO DE MANIOBRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "217",
        "codigo": "OE.3.4.3.3.2",
        "descripcion": "Falso Piso - Concreto f'c=175 kg/cm², e=0.07 m",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.3.4.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.4 PISOS Y PAVIMENTOS",
            "OE.3.4.3 PISOS DE CONCRETO",
            "OE.3.4.3.3 CIRCULACION EN PATIO DE MANIOBRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "218",
        "codigo": "OE.3.5",
        "descripcion": "ZOCALOS Y CONTRAZOCALOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "219",
        "codigo": "OE.3.5.1",
        "descripcion": "ZOCALOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.5",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "220",
        "codigo": "OE.3.5.1.11",
        "descripcion": "Zocalo de cerámico de 45 X 45 cm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.1 ZOCALOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "221",
        "codigo": "OE.3.5.1.12",
        "descripcion": "Zocalo de porcelanato de 60X 60 cm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.1 ZOCALOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "222",
        "codigo": "OE.3.5.1.13",
        "descripcion": "Revestimiento Vinilico Conductivo",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.1 ZOCALOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "223",
        "codigo": "OE.3.5.2",
        "descripcion": "CONTRAZOCALOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.5",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "224",
        "codigo": "OE.3.5.2.3",
        "descripcion": "CONTRAZOCALOS DE CERAMICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.5.2",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "225",
        "codigo": "OE.3.5.2.3.2",
        "descripcion": "Contrazocalo de cerámico de 45x10 cm (H=10cm)",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.5.2.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.3 CONTRAZOCALOS DE CERAMICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "226",
        "codigo": "OE.3.5.2.3.3",
        "descripcion": "Contrazocalo de ceramico (H=10cm)",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.5.2.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.3 CONTRAZOCALOS DE CERAMICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "227",
        "codigo": "OE.3.5.2.3.4",
        "descripcion": "Contrazocalo de Terrazo (H=10cm)",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.5.2.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.3 CONTRAZOCALOS DE CERAMICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "228",
        "codigo": "OE.3.5.2.3.5",
        "descripcion": "Contrazocalo de Cemento pulido (H=10cm)",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.5.2.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.3 CONTRAZOCALOS DE CERAMICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN1",
        "apu": null
    },
    {
        "id": "229",
        "codigo": "OE.3.5.2.3.6",
        "descripcion": "Contrazocalo de porcelanato H=10cm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.5.2.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.3 CONTRAZOCALOS DE CERAMICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "230",
        "codigo": "OE.3.5.2.11",
        "descripcion": "OTROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.5.2",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "231",
        "codigo": "OE.3.5.2.11.1",
        "descripcion": "CONTRAZOCALO SANITARIO COVER FORMER H=0.10 M.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.5.2.11",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.5 ZOCALOS Y CONTRAZOCALOS",
            "OE.3.5.2 CONTRAZOCALOS",
            "OE.3.5.2.11 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "232",
        "codigo": "OE.3.6",
        "descripcion": "COBERTURAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "233",
        "codigo": "OE.3.6.7",
        "descripcion": "RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC.",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "234",
        "codigo": "OE.3.6.7.1",
        "descripcion": "COBERTURA. PANEL COMPUESTA POR 5 CAPAS, PREPINTADO ESTANDAR E=2.25 mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.6.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "235",
        "codigo": "OE.3.6.7.2",
        "descripcion": "COBERTURA. TEJA POLICARBONATO E=1.0 mm.",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.6.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "236",
        "codigo": "OE.3.6.7.3",
        "descripcion": "CUMBRERA LISA, E= 0.5mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.6.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "237",
        "codigo": "OE.3.6.7.4",
        "descripcion": "Cobertura con panel termoacústico relleno de poliuretano",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.6.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "238",
        "codigo": "OE.3.6.7.5",
        "descripcion": "Cumbrera para panel termoacústico",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.6.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "239",
        "codigo": "OE.3.6.7.6",
        "descripcion": "Cobertura con policarbonato e=10 mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.6.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "240",
        "codigo": "OE.3.6.7.7",
        "descripcion": "Cobertura con termopaneles acusticos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.6.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.7 RECUBRIMIENTOS SOBRE ESTRUCTURAS DE MADERA, METAL, ETC."
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "241",
        "codigo": "OE.3.6.9",
        "descripcion": "OTROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "242",
        "codigo": "OE.3.6.9.1",
        "descripcion": "CERRAMIENTO CON POLICARBONATO SOLIDO E=6 mm.",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.6.9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.9 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "243",
        "codigo": "OE.3.6.9.2",
        "descripcion": "Cerramiento con policarbonato e=10 mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.6.9",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.6 COBERTURAS",
            "OE.3.6.9 OTROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "244",
        "codigo": "OE.3.7",
        "descripcion": "CARPINTERIA DE MADERA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "245",
        "codigo": "OE.3.7.1",
        "descripcion": "PUERTAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.7",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "246",
        "codigo": "OE.3.7.1.1",
        "descripcion": "PUERTA DE MDF CONTRAPLACADA DE 6 mm. DE 01 HOJA RECUBIERTA CON",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "247",
        "codigo": "OE.3.7.1.2",
        "descripcion": "FORMICA BLANCA, MARCOS CON BARNIZ INCOLORO; PLANCHAS DE METAL Y REJILLA DE VENTILACION EN LA PARTE INFERIOR. TIPO P-7 (1.00 x 2.20) CORREDIZAPUERTA DE MDF CONTRAPLACADA DE 6 mm. DE 01 HOJA RECUBIERTA CON FORMICA BLANCA, MARCOS CON BARNIZ INCOLORO; PLANCHAS DE METAL Y REJILLA DE VENTILACION EN LA PARTE INFERIORA TIPO P-8 (1.05 x 2.20) DOBLE CORREDIZA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "248",
        "codigo": "OE.3.7.1.3",
        "descripcion": "PUERTA DE MDF CONTRAPLACADA DE 6 mm. DE 01 HOJA RECUBIERTA CONFORMICA BLANCA, MARCOS CON BARNIZ INCOLORO. TIPO P-11 (1.05 x 2.20)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "249",
        "codigo": "OE.3.7.1.4",
        "descripcion": "PUERTA DE MDF CONTRAPLACADA DE 6 mm. DE 01 HOJA RECUBIERTA CON FORMICA BLANCA, MARCOS CON BARNIZ INCOLORO. TIPO P-12 (0.85 x 2.20)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "250",
        "codigo": "OE.3.7.1.5",
        "descripcion": "PUERTA DE MADERA CONTRAPLACADA CON PROTECCION DE LAMINAS DE PLOMO DE 01 HOJA RECUBIERTA CON FORMICA BLANCA. TIPO P-14 (1.05 x 2.20)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "251",
        "codigo": "OE.3.7.1.6",
        "descripcion": "PUERTA DE MADERA CONTRAPLACADA CON PROTECCION DE LAMINAS DE PLOMO DE 01 HOJA RECUBIERTA CON FORMICA BLANCA. TIPO P-15 (0.85 x 2.20)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "252",
        "codigo": "OE.3.7.1.7",
        "descripcion": "Puerta de 2 hojas vaiven contraplacada con plancha de acero (P-02) 1.40X2.70 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "253",
        "codigo": "OE.3.7.1.8",
        "descripcion": "Puerta de 2 hojas contraplacada (P-03) 1.80X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "254",
        "codigo": "OE.3.7.1.9",
        "descripcion": "Puerta de 1 hoja contraplacada (P-05) 1.20X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "255",
        "codigo": "OE.3.7.1.10",
        "descripcion": "Puerta de 1 hoja contraplacada (P-06) 1.20X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "256",
        "codigo": "OE.3.7.1.11",
        "descripcion": "Puerta de 2 hojas vaiven contraplacada con plancha de acero (P-07) 1.80X2.70 m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "257",
        "codigo": "OE.3.7.1.12",
        "descripcion": "Puerta de 1 hoja contraplacada (P-08) 0.90X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "258",
        "codigo": "OE.3.7.1.13",
        "descripcion": "Puerta de 1 hoja contraplacada (P-09) 0.90X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "259",
        "codigo": "OE.3.7.1.14",
        "descripcion": "Puerta de 1 hoja contraplacada con plancha de acero (P-10) 1.20X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "260",
        "codigo": "OE.3.7.1.15",
        "descripcion": "Puerta de 1 hoja contraplacada (P-11) 0.80X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "261",
        "codigo": "OE.3.7.1.16",
        "descripcion": "Puerta de 1 hoja contraplacada (P-12) 1.00X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "262",
        "codigo": "OE.3.7.1.17",
        "descripcion": "Puerta de 1 hoja contraplacada (P-13) 1.00X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "263",
        "codigo": "OE.3.7.1.18",
        "descripcion": "Puerta de 1 hoja contraplacada (P-14) 0.90X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "264",
        "codigo": "OE.3.7.1.19",
        "descripcion": "Puerta de 1 hoja contraplacada (P-15) 1.00X2.70 m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "265",
        "codigo": "OE.3.7.1.20",
        "descripcion": "Puerta de melamine (PM-01) 0.70X1.60 m, incluye accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "266",
        "codigo": "OE.3.7.1.21",
        "descripcion": "Puerta de 1 hoja contraplacada con alma de plomo (P-01) 1.20X2.15m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "267",
        "codigo": "OE.3.7.1.22",
        "descripcion": "Puerta de 1 hoja contraplacada con alma de plomo (P-04) 1.00X2.15m, según detalle",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "268",
        "codigo": "OE.3.7.1.23",
        "descripcion": "Acondicionamiento de puertas y cerraduras e instalacion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "269",
        "codigo": "OE.3.7.2",
        "descripcion": "MUEBLES DE LABORATORIO Y SIMILARES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.7",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "270",
        "codigo": "OE.3.7.2.1",
        "descripcion": "MUEBLE TIPO 01 ADMISION - CITAS - INFORMES",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "271",
        "codigo": "OE.3.7.2.2",
        "descripcion": "MUEBLE TIPO 02 ENTREGA Y RECEPCION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "272",
        "codigo": "OE.3.7.2.3",
        "descripcion": "MUEBLE TIPO 03 ESTACION DE ENFERMERAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "273",
        "codigo": "OE.3.7.2.4",
        "descripcion": "MUEBLE TIPO 04 TOMA DE MUESTRAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "274",
        "codigo": "OE.3.7.2.5",
        "descripcion": "MUEBLE TIPO 05 TRABAJOS LIMPIO - SUCIO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "275",
        "codigo": "OE.3.7.2.6",
        "descripcion": "MUEBLE TIPO 06 ESTAR DE PERSONAL",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "276",
        "codigo": "OE.3.7.2.7",
        "descripcion": "MUEBLE TIPO 07 ESTERILIZACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "277",
        "codigo": "OE.3.7.2.8",
        "descripcion": "MUEBLE TIPO 08 LIMPIEZA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "278",
        "codigo": "OE.3.7.2.9",
        "descripcion": "MUEBLE TIPO 09 LABORATORIO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "279",
        "codigo": "OE.3.7.2.10",
        "descripcion": "MUEBLE TIPO 10 CONSULTORIOS Y TOPICO ATENCION RECIEN NACIDO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "280",
        "codigo": "OE.3.7.2.11",
        "descripcion": "MUEBLE TIPO 11 LAVADO DE PERSONAL ASISTENCIAL",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "281",
        "codigo": "OE.3.7.2.12",
        "descripcion": "Muebles Bajos de Melamina de 18mm inc. Accesorios",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "282",
        "codigo": "OE.3.7.2.13",
        "descripcion": "Muebles altos de  Melamina de 18mm inc. Accesorios",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "283",
        "codigo": "OE.3.7.2.14",
        "descripcion": "Repisa de Melamina de 18mm para ventanas de atencion",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "284",
        "codigo": "OE.3.7.2.15",
        "descripcion": "Estante de Melamina de 18mm ( 1.50 X 1.65)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "285",
        "codigo": "OE.3.7.2.16",
        "descripcion": "Estante de Melamina de 18mm ( 0.60 X 1.50)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.7 CARPINTERIA DE MADERA",
            "OE.3.7.2 MUEBLES DE LABORATORIO Y SIMILARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "286",
        "codigo": "OE.3.8",
        "descripcion": "CARPINTERÍA METÁLICA Y HERRERÍA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "287",
        "codigo": "OE.3.8.1",
        "descripcion": "VENTANAS DE FIERRO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "288",
        "codigo": "OE.3.8.1.1",
        "descripcion": "VENTANA ALTA FIJA PERFILES DE Fe 2\" x 1 1/2 y/o MALLA DE ACERO GALVANIZADO. V-2 (2.45 X 1.23)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "289",
        "codigo": "OE.3.8.1.2",
        "descripcion": "VENTANA ALTA FIJA PERFILES DE Fe 2\" x 1 1/2 y/o MALLA DE ACERO GALVANIZADO. V-3 (2.15 X 1.23)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "290",
        "codigo": "OE.3.8.1.3",
        "descripcion": "VENTANA ALTA FIJA PERFILES DE Fe 2\" x 1 1/2 y/o MALLA DE ACERO GALVANIZADO. V-4 (5.40 X 1.23)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "291",
        "codigo": "OE.3.8.1.4",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-1 (2.84 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "292",
        "codigo": "OE.3.8.1.5",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-2 (3.09 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "293",
        "codigo": "OE.3.8.1.6",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-3 (2.50 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "294",
        "codigo": "OE.3.8.1.7",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-4 (2.60 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "295",
        "codigo": "OE.3.8.1.8",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-5 (1.30 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "296",
        "codigo": "OE.3.8.1.9",
        "descripcion": "VENTANA METALICA DE Fe CON MALLA DE ACERO GALVANIZADO. VM-6 (4.40 X 1.50)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.1 VENTANAS DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "297",
        "codigo": "OE.3.8.2",
        "descripcion": "PUERTA DE FIERRO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "298",
        "codigo": "OE.3.8.2.1",
        "descripcion": "PUERTA METALICA TIPO PJ-01 (3.20 X 2.80M) DOBLE HOJA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "299",
        "codigo": "OE.3.8.2.2",
        "descripcion": "PUERTA METALICA TIPO PJ-02 (1.30 X 2.80M) UNA HOJA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "300",
        "codigo": "OE.3.8.2.3",
        "descripcion": "PUERTA METALICA TIPO REJA DE DOBLE HOJA CON TUBO CUADRADO DE 2\" x 2\" e= 1 mm. P-9 ( 2.40 X 2.80)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "301",
        "codigo": "OE.3.8.2.4",
        "descripcion": "PUERTA METALICA TIPO REJA DE DOBLE HOJA CON TUBO CUADRADO DE 2\" x 2\" e= 1 mm. P-10 ( 1.40 X 2.80)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "302",
        "codigo": "OE.3.8.2.5",
        "descripcion": "PUERTA METALICA DE Fe CON PLANCHA METALICA Y MALLA ELECTROSOLDADA PJ-01 ( 1.00 X 2.70)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "303",
        "codigo": "OE.3.8.2.6",
        "descripcion": "PUERTA METALICA DE TUBO CUADRADO DE 2\" CON PLANCHA METALICA PJ-02 ( 1.45 X 2.70)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "304",
        "codigo": "OE.3.8.2.7",
        "descripcion": "PUERTA METALICA CON PLANCHA METALICA PJ-03 ( 2.85 X 2.70)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "305",
        "codigo": "OE.3.8.2.8",
        "descripcion": "PUERTA METALICA CON PLANCHA METALICA PJ-04 ( 3.06 X 2.90)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "306",
        "codigo": "OE.3.8.2.9",
        "descripcion": "PUERTA METALICA CON PLANCHA METALICA PJ-05 ( 4.90 X 3.30)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "307",
        "codigo": "OE.3.8.2.10",
        "descripcion": "PUERTA METALICA CORREDIZA CON MALLA ELECTROSOLDADA PJ-06 ( 1.25 X 2.70)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "308",
        "codigo": "OE.3.8.2.11",
        "descripcion": "PUERTA METALICA CON MALLA ELECTROSOLDADA Y PLANCHA METALICA PJ-07 ( 1.00 X 1.80)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "309",
        "codigo": "OE.3.8.2.12",
        "descripcion": "PUERTA METALICA PJ-08 ( 1.40 X 2.90)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "310",
        "codigo": "OE.3.8.2.13",
        "descripcion": "PUERTA METALICA PJ-09 ( 1.94 X 2.90)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "311",
        "codigo": "OE.3.8.2.14",
        "descripcion": "PUERTA METALICA PJ-10 ( 1.30 X 2.40)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "312",
        "codigo": "OE.3.8.2.15",
        "descripcion": "PUERTA METALICA PJ-11 ( 1.68 X 2.40)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.2 PUERTA DE FIERRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "313",
        "codigo": "OE.3.8.4",
        "descripcion": "VENTANA DE ALUMINIO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "314",
        "codigo": "OE.3.8.4.1",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO TEMPLADO DE 6MM. INCOLORO V-5 (1.00 X 1.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "315",
        "codigo": "OE.3.8.4.2",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA PROYECTANTE CON VIDRIO LAMINADO DE 6MM. V-1 (0.50 X 0.70) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "316",
        "codigo": "OE.3.8.4.3",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA PROYECTANTE CON VIDRIO LAMINADO DE 6MM. V-2 (0.45 X 0.70) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "317",
        "codigo": "OE.3.8.4.4",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA PROYECTANTE CON VIDRIO LAMINADO DE 6MM. V-3 (0.70 X 0.70) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "318",
        "codigo": "OE.3.8.4.5",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA PROYECTANTE CON VIDRIO LAMINADO DE 6MM PAVONADO. V-3b (0.70 X 0.70) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "319",
        "codigo": "OE.3.8.4.6",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM. V-4 (0.60 X 1.80) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "320",
        "codigo": "OE.3.8.4.7",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM. V-5 (1.00 X 1.80) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "321",
        "codigo": "OE.3.8.4.8",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM. V-6 (1.20 X 1.80) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "322",
        "codigo": "OE.3.8.4.9",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM. V-8 (0.70 X 1.80) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "323",
        "codigo": "OE.3.8.4.10",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM. V-9 (1.00 X 1.80) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "324",
        "codigo": "OE.3.8.4.11",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM.  V-10 (2.25 X 0.75) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "325",
        "codigo": "OE.3.8.4.12",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM.  V-11 (2.40 X 0.75) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "326",
        "codigo": "OE.3.8.4.13",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM.  V-12 (3.10 X 0.75) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "327",
        "codigo": "OE.3.8.4.14",
        "descripcion": "VENTANA DE ALUMINIO SISTEMA CORREDERAS CON VIDRIO LAMINADO DE 6MM.  V-13 (2.00 X 0.70) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "328",
        "codigo": "OE.3.8.4.15",
        "descripcion": "VENTANA DE ALUMINIO  CON VIDRIO LAMINADO FIJO DE 6MM.  V-14 (1.90 X 1.50) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "329",
        "codigo": "OE.3.8.4.16",
        "descripcion": "VENTANA DE ALUMINIO  CON VIDRIO LAMINADO FIJO DE 6MM.  V-15 (1.00 X 1.50) SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.4 VENTANA DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "330",
        "codigo": "OE.3.8.5",
        "descripcion": "PUERTAS DE ALUMINIO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "331",
        "codigo": "OE.3.8.5.1",
        "descripcion": "PUERTA DE MELAMINE CON MARCOS DE ALUMINIO DE 01 HOJA,COLOR CLARO.P-6 (0.65 x 2.00)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.5 PUERTAS DE ALUMINIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "332",
        "codigo": "OE.3.8.13",
        "descripcion": "DIVISION DE ALUMINIO PARA SERVICIOS HIGIENICOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "333",
        "codigo": "OE.3.8.13.1",
        "descripcion": "SEPARADOR CON PERFILES DE ALUMINIO Y TABLEROS DE MELAMINA PARABAÑOS",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.8.13",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.13 DIVISION DE ALUMINIO PARA SERVICIOS HIGIENICOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "334",
        "codigo": "OE.3.8.14",
        "descripcion": "BARANDA METALICA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "335",
        "codigo": "OE.3.8.14.1",
        "descripcion": "BARANDAS METALICA EN ESCALERA PRINCIPAL H=1.17 m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.8.14",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.14 BARANDA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD2",
        "apu": null
    },
    {
        "id": "336",
        "codigo": "OE.3.8.14.2",
        "descripcion": "Baranda metalica, H=1.00m. según diseño",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.8.14",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.14 BARANDA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "337",
        "codigo": "OE.3.8.14.3",
        "descripcion": "Colocacion de barandas (incluye pintura), H=1.00m.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.8.14",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.14 BARANDA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "338",
        "codigo": "OE.3.8.14.4",
        "descripcion": "Colocacion de barandas (incluye pintura), H=0.90m.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.8.14",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.14 BARANDA METALICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "339",
        "codigo": "OE.3.8.15",
        "descripcion": "PASAMANOS AISLADOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "340",
        "codigo": "OE.3.8.15.1",
        "descripcion": "AGARRADERA PARA MINUSVALIDOS EN SSHH; Ø 2\" L=0.60M.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.15",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.15 PASAMANOS AISLADOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "341",
        "codigo": "OE.3.8.15.2",
        "descripcion": "AGARRADERA PARA MINUSVALIDOS EN SSHH; Ø 2\" L=0.90M.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.15",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.15 PASAMANOS AISLADOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "342",
        "codigo": "OE.3.8.15.3",
        "descripcion": "Pasamano metalico; Ø 2\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.8.15",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.15 PASAMANOS AISLADOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "343",
        "codigo": "OE.3.8.18",
        "descripcion": "ELEMENTOS METALICOS ESPECIALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "344",
        "codigo": "OE.3.8.18.1",
        "descripcion": "TOPE DE ACERO CROMADO PARA PUERTAS.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.18",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.18 ELEMENTOS METALICOS ESPECIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "345",
        "codigo": "OE.3.8.18.2",
        "descripcion": "Protector de camillas",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.8.18",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.18 ELEMENTOS METALICOS ESPECIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "346",
        "codigo": "OE.3.8.18.3",
        "descripcion": "Burlete adhesivo para puertas",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.8.18",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.18 ELEMENTOS METALICOS ESPECIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "347",
        "codigo": "OE.3.8.18.4",
        "descripcion": "Escalera de gato de fierro, según diseño",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.8.18",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.18 ELEMENTOS METALICOS ESPECIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "348",
        "codigo": "OE.3.8.18.5",
        "descripcion": "Tapajunta de acero galvanizado en pisos y muros",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.8.18",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.8 CARPINTERÍA METÁLICA Y HERRERÍA",
            "OE.3.8.18 ELEMENTOS METALICOS ESPECIALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "349",
        "codigo": "OE.3.9",
        "descripcion": "CERRAJERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "350",
        "codigo": "OE.3.9.1",
        "descripcion": "BISAGRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.9",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "351",
        "codigo": "OE.3.9.1.2",
        "descripcion": "BISAGRA ALUMINIZADA CAPUCHINA PESADA 4\"x4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.1 BISAGRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "352",
        "codigo": "OE.3.9.1.3",
        "descripcion": "Bisagra vaiven de acero grado 2 satinadas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.1 BISAGRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "353",
        "codigo": "OE.3.9.2",
        "descripcion": "CERRADURAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.9",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "354",
        "codigo": "OE.3.9.2.1",
        "descripcion": "CERRADURA TIPO A",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "355",
        "codigo": "OE.3.9.2.2",
        "descripcion": "CERRADURA TIPO G",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "356",
        "codigo": "OE.3.9.2.3",
        "descripcion": "CERRADURA TIPO H",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "357",
        "codigo": "OE.3.9.2.4",
        "descripcion": "CERRADURA TIPO I",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "358",
        "codigo": "OE.3.9.2.5",
        "descripcion": "CERRADURA TIPO J",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "359",
        "codigo": "OE.3.9.2.6",
        "descripcion": "Cerradura embutida tipo palanca",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "360",
        "codigo": "OE.3.9.2.7",
        "descripcion": "Cerradura embutida tipo pomo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "361",
        "codigo": "OE.3.9.2.8",
        "descripcion": "Cerradura de tres golpes",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.2 CERRADURAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "362",
        "codigo": "OE.3.9.4",
        "descripcion": "ACCESORIOS DE CIERRE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.9",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "363",
        "codigo": "OE.3.9.4.1",
        "descripcion": "TIRADOR DE ACERO INOX. PARA PUERTA DE VIDRIO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.9.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.9 CERRAJERIA",
            "OE.3.9.4 ACCESORIOS DE CIERRE"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "364",
        "codigo": "OE.3.10",
        "descripcion": "VIDRIOS, CRISTALES Y SIMILARES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "365",
        "codigo": "OE.3.10.1",
        "descripcion": "ESPEJOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.10",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "366",
        "codigo": "OE.3.10.1.1",
        "descripcion": "ESPEJO INCOLORO e=6mm BISELADO (EMPOTRADO) (0.60 x 0.90) SOBRE LAVATORIO EN TODOS LOS SSHH",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.10.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.10 VIDRIOS, CRISTALES Y SIMILARES",
            "OE.3.10.1 ESPEJOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "367",
        "codigo": "OE.3.7.1",
        "descripcion": "PUERTAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.7",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "368",
        "codigo": "OE.3.10.4.1",
        "descripcion": "(P-13) PUERTA AUTOPORTANTE DE CRISTAL TEMPLADO 10mm, PUERTA BATIENTE CON CINTA DE SEGURIDAD DE 10 cm DE ANCHO A 1.00 m DE ALTURA (1.95 X 2.20)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.10.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.10 VIDRIOS, CRISTALES Y SIMILARES",
            "OE.3.7.1 PUERTAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "369",
        "codigo": "OE.3.7.2",
        "descripcion": "VENTANAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.7",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "370",
        "codigo": "OE.3.7.2.2",
        "descripcion": "VIDRIO EMPLOMADO (0.40 x 0.40)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.10 VIDRIOS, CRISTALES Y SIMILARES",
            "OE.3.7.2 VENTANAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "371",
        "codigo": "OE.3.10.2",
        "descripcion": "VIDRIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.10",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "372",
        "codigo": "OE.3.10.2.1",
        "descripcion": "Vidrio laminado fijo de 6mm en mirillas y sobreluz de puertas",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.3.10.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.10 VIDRIOS, CRISTALES Y SIMILARES",
            "OE.3.10.2 VIDRIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "373",
        "codigo": "OE.3.11",
        "descripcion": "PINTURA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "374",
        "codigo": "OE.3.11.1",
        "descripcion": "PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.11",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "375",
        "codigo": "OE.3.11.1.1",
        "descripcion": "PINTURA CIELORASO C/LATEX SATINADO (2MANOS), C/IMPRIMANTE",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "376",
        "codigo": "OE.3.11.1.2",
        "descripcion": "PINTURA MUROS INTERIORES C/ LATEX (2 MANOS). C/ IMPRIMANTE",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "377",
        "codigo": "OE.3.11.1.3",
        "descripcion": "PINTURA MUROS EXTERIORES C/ LATEX (2 MANOS). C/ IMPRIMANTE",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "378",
        "codigo": "OE.3.11.1.4",
        "descripcion": "Pintura muros interiores c/ latex antibacterial (2 MANOS). C/ IMPRIMANTE",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "379",
        "codigo": "OE.3.11.1.5",
        "descripcion": "Pintura muros exteriores c/ latex satinado (2 manos). c/ imprimante",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "380",
        "codigo": "OE.3.11.1.6",
        "descripcion": "Empastado y lijado de muros interiores",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "381",
        "codigo": "OE.3.11.1.7",
        "descripcion": "Empastado y lijado de muros exteriores",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "382",
        "codigo": "OE.3.11.1.8",
        "descripcion": "Pintura en marcos de madera, 02 manos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "383",
        "codigo": "OE.3.11.1.9",
        "descripcion": "Pintura en puertas de madera, 02 manos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "384",
        "codigo": "OE.3.11.1.10",
        "descripcion": "Pintura en sardineles 02 manos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "385",
        "codigo": "OE.3.11.1.11",
        "descripcion": "Diseño y pintado de murales",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.3.11.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.11 PINTURA",
            "OE.3.11.1 PINTURA DE CIELOS RASOS, VIGAS, COLUMNAS Y PAREDES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "386",
        "codigo": "OE.3.12",
        "descripcion": "VARIOS, LIMPIEZA, JARDINERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "387",
        "codigo": "OE.3.12.1",
        "descripcion": "LIMPIEZA PERMANENTE DE OBRA",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.3.12",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.12 VARIOS, LIMPIEZA, JARDINERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "388",
        "codigo": "OE.3.12.2",
        "descripcion": "LIMPIEZA FINAL DE OBRA",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.3.12",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.12 VARIOS, LIMPIEZA, JARDINERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "389",
        "codigo": "OE.3.12.5",
        "descripcion": "SEMBRIO DE GRASS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.12",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "390",
        "codigo": "OE.3.12.5.1",
        "descripcion": "SEMBRIO DE GRASS",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.12.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.12 VARIOS, LIMPIEZA, JARDINERIA",
            "OE.3.12.5 SEMBRIO DE GRASS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "391",
        "codigo": "OE.3.12.5.2",
        "descripcion": "PLANTACION DE ARBUSTOS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.12.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.12 VARIOS, LIMPIEZA, JARDINERIA",
            "OE.3.12.5 SEMBRIO DE GRASS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "392",
        "codigo": "OE.3.13",
        "descripcion": "OTROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "393",
        "codigo": "OE.3.13.1",
        "descripcion": "MODULO DE CONTINGENCIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.13",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "394",
        "codigo": "OE.3.13.1.1",
        "descripcion": "MODULO TIPO A, B, C",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.13.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.1 MODULO DE CONTINGENCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD1",
        "apu": null
    },
    {
        "id": "395",
        "codigo": "OE.3.13.2",
        "descripcion": "LETREROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.13",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "396",
        "codigo": "OE.3.13.2.1",
        "descripcion": "LOGOTIPO DE \"CENTRO DE SALUD DE BELENPAMPA - CONTINGENCIA 0.40X0.40M. 37 LETRAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.2 LETREROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "397",
        "codigo": "OE.3.13.3",
        "descripcion": "SEÑALETICA DE ORIENTACION",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.13",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "398",
        "codigo": "OE.3.13.3.1",
        "descripcion": "MTB SEÑALES MODULO TIPO BANDERA 0.30 X 0.40M",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "399",
        "codigo": "OE.3.13.3.2",
        "descripcion": "MTP SEÑALES MODULO TIPO PARED 0.30 X 0.40M",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "400",
        "codigo": "OE.3.13.3.3",
        "descripcion": "SEÑALES P/NUMERACION DE AMBIENTES 0.06 X 0.12M. LAMINA ACRILICA 4MM.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "401",
        "codigo": "OE.3.13.3.4",
        "descripcion": "señalizacion de advertencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "402",
        "codigo": "OE.3.13.3.5",
        "descripcion": "señalizacion de evacuacion y emergencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "403",
        "codigo": "OE.3.13.3.6",
        "descripcion": "señales indicativas de servicio tipo colgante de 1.20x30 cm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "404",
        "codigo": "OE.3.13.3.7",
        "descripcion": "señales identificativas de servicio tipo adosado de 30x30 cm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "405",
        "codigo": "OE.3.13.3.8",
        "descripcion": "señales identificativas de servicio tipo bandera de 30x30 cm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "406",
        "codigo": "OE.3.13.3.9",
        "descripcion": "cartel principal tipo directorio",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.3 SEÑALETICA DE ORIENTACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "407",
        "codigo": "OE.3.13.4",
        "descripcion": "SEÑALETICA DE SEGURIDAD",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.13",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "408",
        "codigo": "OE.3.13.4.1",
        "descripcion": "INDICA UBICACIÓN DE PELIGRO ALTO VOLTAJE 0.30 X 0.30 PLASTICO 500 MICRAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.4 SEÑALETICA DE SEGURIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "409",
        "codigo": "OE.3.13.4.2",
        "descripcion": "INDICA UBICACIÓN ACCESO PARA DISCAPACITADOS 0.20 X 0.30 PLASTICO 500 MICRAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.4 SEÑALETICA DE SEGURIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "410",
        "codigo": "OE.3.13.4.3",
        "descripcion": "INDICA UBICACIÓN PUESTA A TIERRA 0.30 X 0.30 PLASTICO 500 MICRAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.4 SEÑALETICA DE SEGURIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "411",
        "codigo": "OE.3.13.4.4",
        "descripcion": "UBICACIÓN DE EXTINTOR 0.20 X 0.20 PVC AUTOADHESIVO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.4 SEÑALETICA DE SEGURIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "412",
        "codigo": "OE.3.13.4.5",
        "descripcion": "ZONA DE EVACUACIÓN CÍRCULO PINTADO EN PISO COLOR BLANCO (LINEA=0.10 M, RADIO= VARIABLE)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.4 SEÑALETICA DE SEGURIDAD"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "413",
        "codigo": "OE.3.13.5",
        "descripcion": "EXTINTORES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.13",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "414",
        "codigo": "OE.3.13.5.1",
        "descripcion": "EXTINTOR DE CO2-ABC X 5 KG",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.5 EXTINTORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "415",
        "codigo": "OE.3.13.5.2",
        "descripcion": "Extintor CO2-ABC X 6 kg",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.5 EXTINTORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "416",
        "codigo": "OE.3.13.5.3",
        "descripcion": "Extintor PQS-ABC x 6 kg",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.5 EXTINTORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "417",
        "codigo": "OE.3.13.6",
        "descripcion": "MESAS DE CONCRETO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.13",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "418",
        "codigo": "OE.3.13.6.1",
        "descripcion": "Mesa de concreto e=0.10",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.13.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.6 MESAS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "419",
        "codigo": "OE.3.13.6.2",
        "descripcion": "Enchape de porcelanato de 60x60 en mesas de concreto",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.13.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.6 MESAS DE CONCRETO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "420",
        "codigo": "OE.3.13.7",
        "descripcion": "MOBILIARIO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3.13",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "421",
        "codigo": "OE.3.13.7.1",
        "descripcion": "BANCA DE ASIENTOS MULTIPLES  2 CUERPOS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.7 MOBILIARIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "422",
        "codigo": "OE.3.13.7.2",
        "descripcion": "BANCA DE ASIENTOS MULTIPLES  3 CUERPOS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.7 MOBILIARIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "423",
        "codigo": "OE.3.13.7.3",
        "descripcion": "BANCA DE ASIENTOS MULTIPLES  4 CUERPOS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.3.13.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.13 OTROS",
            "OE.3.13.7 MOBILIARIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "424",
        "codigo": "OE.3.14",
        "descripcion": "RESERVORIO APOYADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.3",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "425",
        "codigo": "OE.3.14.1",
        "descripcion": "Tarrajeo primario (rayado) con mezcla C:A - 1:5",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.14",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "426",
        "codigo": "OE.3.14.2",
        "descripcion": "Tarrajeo en interiores con impermeabilizante mezcla C:A - 1:5",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.14",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "427",
        "codigo": "OE.3.14.3",
        "descripcion": "Tarrajeo en muros exteriores mezcla C:A - 1:5",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.14",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "428",
        "codigo": "OE.3.14.4",
        "descripcion": "Bruñas en reservorio",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.3.14",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "429",
        "codigo": "OE.3.14.5",
        "descripcion": "Concreto f'c=210 kg/cm², en piso cuarto de bombas",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.3.14",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "430",
        "codigo": "OE.3.14.6",
        "descripcion": "Encofrado y desencofrado en pisos",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.3.14",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.3 ARQUITECTURA",
            "OE.3.14 RESERVORIO APOYADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "431",
        "codigo": "OE.4",
        "descripcion": "INSTALACIONES SANITARIAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE",
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "432",
        "codigo": "OE4.1",
        "descripcion": "APARATOS SANITARIOS Y ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE4",
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "433",
        "codigo": "OE.4.1.1",
        "descripcion": "SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "434",
        "codigo": "OE.4.1.1.1",
        "descripcion": "SUMINISTRO DE URINARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "435",
        "codigo": "OE.4.1.1.1.1",
        "descripcion": "Urinario de loza tipo C-9",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.1 SUMINISTRO DE URINARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "436",
        "codigo": "OE.4.1.1.1.2",
        "descripcion": "URINARIO DE LOZA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.1 SUMINISTRO DE URINARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "437",
        "codigo": "OE.4.1.1.2",
        "descripcion": "SUMINISTRO DE INODOROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "438",
        "codigo": "OE.4.1.1.2.1",
        "descripcion": "Inodoro estandar de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.2 SUMINISTRO DE INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "439",
        "codigo": "OE.4.1.1.2.2",
        "descripcion": "Inodoro tipo C-1",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.2 SUMINISTRO DE INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "440",
        "codigo": "OE.4.1.1.2.3",
        "descripcion": "INODORO TIPO C-1 DE LOZA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.2 SUMINISTRO DE INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "441",
        "codigo": "OE.4.1.1.3",
        "descripcion": "SUMINISTRO DE LAVATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "442",
        "codigo": "OE.4.1.1.3.1",
        "descripcion": "Lavatorio de Loza Tipo Ovalin 60x50",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "443",
        "codigo": "OE.4.1.1.3.2",
        "descripcion": "Lavatorio de Loza Tipo Ovalin 45x40",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "444",
        "codigo": "OE.4.1.1.3.3",
        "descripcion": "Lavadero de acero Inox. de 1 poza de 50x50",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "445",
        "codigo": "OE.4.1.1.3.4",
        "descripcion": "Lavadero de acero Inox. de 80 x 50 CM de una poza con escurridor",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "446",
        "codigo": "OE.4.1.1.3.5",
        "descripcion": "LAVATORIO DE LOZA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "447",
        "codigo": "OE.4.1.1.3.6",
        "descripcion": "LAVATORIO DE LOZA TIPO OVALIN CON PEDESTAL",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.1 SUMINISTRO DE APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.1.1.3 SUMINISTRO DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "448",
        "codigo": "OE.4.1.2",
        "descripcion": "SUMINISTRO DE ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "449",
        "codigo": "OE.4.1.2.1",
        "descripcion": "SUMINISTRO DE ACCESORIOS PARA URINARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.2",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "450",
        "codigo": "OE.4.1.2.1.1",
        "descripcion": "Accesorios para urinario de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.1 SUMINISTRO DE ACCESORIOS PARA URINARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "451",
        "codigo": "OE.4.1.2.2",
        "descripcion": "SUMINISTRO DE ACCESORIOS PARA INODOROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.2",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "452",
        "codigo": "OE.4.1.2.2.1",
        "descripcion": "Accesorios para inodoro estandar de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.2 SUMINISTRO DE ACCESORIOS PARA INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "453",
        "codigo": "OE.4.1.2.2.2",
        "descripcion": "Accesorios para inodoro tipo C -1",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.2 SUMINISTRO DE ACCESORIOS PARA INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "454",
        "codigo": "OE.4.1.2.3",
        "descripcion": "SUMINISTRO DE ACCESORIOS PARA LAVATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.2",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "455",
        "codigo": "OE.4.1.2.3.1",
        "descripcion": "Accesorios para lavatorio de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.3 SUMINISTRO DE ACCESORIOS PARA LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "456",
        "codigo": "OE.4.1.2.3.2",
        "descripcion": "Accesorios para lavadero de acero inoxidable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.3 SUMINISTRO DE ACCESORIOS PARA LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "457",
        "codigo": "OE.4.1.2.4",
        "descripcion": "SUMINISTRO DE GRIFERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.2",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "458",
        "codigo": "OE.4.1.2.4.1",
        "descripcion": "Grifo para lavatorio de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.4 SUMINISTRO DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "459",
        "codigo": "OE.4.1.2.4.2",
        "descripcion": "Grifo cromado tipo cuello de ganso de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.4 SUMINISTRO DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "460",
        "codigo": "OE.4.1.2.4.3",
        "descripcion": "Ducha electrica de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.4 SUMINISTRO DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "461",
        "codigo": "OE.4.1.2.5",
        "descripcion": "SUMINISTRO DE ACCESORIOS COMPLEMENTARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.2",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "462",
        "codigo": "OE.4.1.2.5.1",
        "descripcion": "Porta rollo de loza blanca",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.5 SUMINISTRO DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "463",
        "codigo": "OE.4.1.2.5.2",
        "descripcion": "Toallero de gancho",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.5 SUMINISTRO DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "464",
        "codigo": "OE.4.1.2.5.3",
        "descripcion": "Jabonera de loza blanca",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.2.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.2 SUMINISTRO DE ACCESORIOS",
            "OE.4.1.2.5 SUMINISTRO DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "465",
        "codigo": "OE.4.1.3",
        "descripcion": "INSTALACIÓN DE APARATOS SANITARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "466",
        "codigo": "OE.4.1.3.1",
        "descripcion": "INSTALACIÓN DE URINARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "467",
        "codigo": "OE.4.1.3.1.1",
        "descripcion": "Instalación de Urinario de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.1 INSTALACIÓN DE URINARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "468",
        "codigo": "OE.4.1.3.2",
        "descripcion": "INSTALACIÓN DE INODOROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "469",
        "codigo": "OE.4.1.3.2.1",
        "descripcion": "Instalación de Inodoro estandar de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.2 INSTALACIÓN DE INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "470",
        "codigo": "OE.4.1.3.2.2",
        "descripcion": "Instalacion de Inodoro tipo C-1",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.2 INSTALACIÓN DE INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "471",
        "codigo": "OE.4.1.3.3",
        "descripcion": "INSTALACIÓN DE LAVATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "472",
        "codigo": "OE.4.1.3.3.1",
        "descripcion": "Instalacion de lavatorio de loza tipo ovalin 60x50",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.3 INSTALACIÓN DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "473",
        "codigo": "OE.4.1.3.3.2",
        "descripcion": "Instalacion de lavatorio de loza tipo ovalin 45x40",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.3 INSTALACIÓN DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "474",
        "codigo": "OE.4.1.3.3.3",
        "descripcion": "Instalacion de lavadero de acero inos. de 01 poza de 50x50cm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.3 INSTALACIÓN DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "475",
        "codigo": "OE.4.1.3.3.4",
        "descripcion": "Instalacion de lavadero de acero inos. de 80x50cm de 01 poza con escurridor",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.3.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.3 INSTALACIÓN DE APARATOS SANITARIOS",
            "OE.4.1.3.3 INSTALACIÓN DE LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "476",
        "codigo": "OE.4.1.4",
        "descripcion": "INSTALACIÓN DE ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "477",
        "codigo": "OE.4.1.4.1",
        "descripcion": "INSTALACIÓN DE ACCESORIOS PARA URINARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.4",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "478",
        "codigo": "OE.4.1.4.1.1",
        "descripcion": "Instalacion de accesorios para urinario de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.1 INSTALACIÓN DE ACCESORIOS PARA URINARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "479",
        "codigo": "OE.4.1.4.2",
        "descripcion": "INSTALACIÓN DE ACCESORIOS PARA INODOROS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.4",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "480",
        "codigo": "OE.4.1.4.2.1",
        "descripcion": "Instalacion de accesorios para inodoro",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.2 INSTALACIÓN DE ACCESORIOS PARA INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "481",
        "codigo": "OE.4.1.4.2.2",
        "descripcion": "Instalacion de accesorios para inodoro tipo C-1",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.2 INSTALACIÓN DE ACCESORIOS PARA INODOROS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "482",
        "codigo": "OE.4.1.4.3",
        "descripcion": "INSTALACIÓN DE ACCESORIOS PARA LAVATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.4",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "483",
        "codigo": "OE.4.1.4.3.1",
        "descripcion": "Instalacion de accesorios para lavatorios de loza",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.3 INSTALACIÓN DE ACCESORIOS PARA LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "484",
        "codigo": "OE.4.1.4.3.2",
        "descripcion": "Instalacion de accesorios para lavadero de acero inoxidable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.3 INSTALACIÓN DE ACCESORIOS PARA LAVATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "485",
        "codigo": "OE.4.1.4.4",
        "descripcion": "INSTALACIÓN DE GRIFERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.4",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "486",
        "codigo": "OE.4.1.4.4.1",
        "descripcion": "Instalacion de Grifo para lavatorio de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.4 INSTALACIÓN DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "487",
        "codigo": "OE.4.1.4.4.2",
        "descripcion": "Instalacion de Grifo cromado tipo cuello de ganso de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.4 INSTALACIÓN DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "488",
        "codigo": "OE.4.1.4.4.3",
        "descripcion": "Instalacion de ducha electrica de una llave",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.4 INSTALACIÓN DE GRIFERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "489",
        "codigo": "OE.4.1.4.5",
        "descripcion": "INSTALACIÓN DE ACCESORIOS COMPLEMENTARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.1.4",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "490",
        "codigo": "OE.4.1.4.5.1",
        "descripcion": "Instalacion de Porta rollo de loza blanca",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.5 INSTALACIÓN DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "491",
        "codigo": "OE.4.1.4.5.2",
        "descripcion": "Instalacion de toallero de gancho",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.5 INSTALACIÓN DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "492",
        "codigo": "OE.4.1.4.5.3",
        "descripcion": "Instalacion de jabonera de loza blanca",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.1.4.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.3.14 RESERVORIO APOYADO",
            "OE.4.1.4 INSTALACIÓN DE ACCESORIOS",
            "OE.4.1.4.5 INSTALACIÓN DE ACCESORIOS COMPLEMENTARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "493",
        "codigo": "OE.4.2",
        "descripcion": "SISTEMA DE AGUA FRIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "494",
        "codigo": "OE.4.2.1",
        "descripcion": "SALIDA DE AGUA FRIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "495",
        "codigo": "OE.4.2.1.2",
        "descripcion": "SALIDA DE AGUA FRIA-PVC SAP 1/2\"",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.4.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.1 SALIDA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "496",
        "codigo": "OE.4.2.1.3",
        "descripcion": "EMPALME A RED INTERIOR DE AGUA FRIA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.1 SALIDA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "497",
        "codigo": "OE.4.2.1.4",
        "descripcion": "SALIDA DE AGUA FRIA PVC SAP 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.1 SALIDA DE AGUA FRIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "498",
        "codigo": "OE.4.2.2",
        "descripcion": "REDES DE DISTRIBUCIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "499",
        "codigo": "OE.4.2.2.1",
        "descripcion": "CONEXION DOMICIARIA DE AGUA FRIA DE 3/4\"",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.4.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.2 REDES DE DISTRIBUCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "500",
        "codigo": "OE.4.2.2.2",
        "descripcion": "RED DE DISTRIBUCIÓN TUBERÍA PVC CLASE 10 C/R DE 1\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.2 REDES DE DISTRIBUCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "501",
        "codigo": "OE.4.2.2.3",
        "descripcion": "RED DE DISTRIBUCIÓN TUBERÍA PVC CLASE 10 C/R DE 1 1/2\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.2 REDES DE DISTRIBUCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "502",
        "codigo": "OE.4.2.3",
        "descripcion": "REDES DE ALIMENTACIÓN EXTERIORES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "503",
        "codigo": "OE.4.2.3.1",
        "descripcion": "MOVIMIENTO DE TIERRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "504",
        "codigo": "OE.4.2.3.1.1",
        "descripcion": "TRAZO Y REPLANTEO",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "505",
        "codigo": "OE.4.2.3.1.2",
        "descripcion": "EXCAVACIÓN Y PICADO DE ZANJA PARA TUBERÍA SECCIÓN A",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "506",
        "codigo": "OE.4.2.3.1.3",
        "descripcion": "REFINE Y NIVELACION DE ZANJA PARA TUBERIA SECCIÓN A",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "507",
        "codigo": "OE.4.2.3.1.4",
        "descripcion": "CAMA DE ARENA EN ZANJA P/TUB SECCIÓN A",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "508",
        "codigo": "OE.4.2.3.1.5",
        "descripcion": "RELLENO Y COMPACTACION CON EQUIPO Y MAT. SEGÚN SECCIÓN A",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "509",
        "codigo": "OE.4.2.3.1.6",
        "descripcion": "EXCAVACIÓN Y PICADO DE ZANJA PARA TUBERÍA SECCIÓN C",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "510",
        "codigo": "OE.4.2.3.1.7",
        "descripcion": "REFINE Y NIVELACION DE ZANJA PARA TUBERIA SECCIÓN C",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "511",
        "codigo": "OE.4.2.3.1.8",
        "descripcion": "CAMA DE ARENA EN ZANJA P/TUB SECCIÓN C",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "512",
        "codigo": "OE.4.2.3.1.9",
        "descripcion": "RELLENO Y COMPACTACION CON EQUIPO Y MAT. SEGÚN SECCIÓN C",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "513",
        "codigo": "OE.4.2.3.1.10",
        "descripcion": "EXCAVACIÓN Y PICADO DE ZANJA PARA TUBERÍA SECCIÓN D",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "514",
        "codigo": "OE.4.2.3.1.11",
        "descripcion": "REFINE Y NIVELACION DE ZANJA PARA TUBERIA SECCIÓN D",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "515",
        "codigo": "OE.4.2.3.1.12",
        "descripcion": "CAMA DE ARENA EN ZANJA P/TUB SECCIÓN D",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "516",
        "codigo": "OE.4.2.3.1.13",
        "descripcion": "RELLENO Y COMPACTACION CON EQUIPO Y MAT. SEGÚN SECCIÓN D",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "517",
        "codigo": "OE.4.2.3.1.14",
        "descripcion": "ELIMINACION MATERIAL EXCEDENTE C/MAQUINA SECCIÓN A + C + D",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "518",
        "codigo": "OE.4.2.3.2",
        "descripcion": "REDES DE ALIMENTACIÓN EXTERIORES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "519",
        "codigo": "OE.4.2.3.2.1",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 C/R DE 1/2\" NTP 399.166",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "520",
        "codigo": "OE.4.2.3.2.2",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 C/R DE 1\" NTP 399.166",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "521",
        "codigo": "OE.4.2.3.2.3",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 C/R DE 1 1/2\" NTP 399.166",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "522",
        "codigo": "OE.4.2.3.2.4",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 CON ROSCA DE 2\" NTP 399.166",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "523",
        "codigo": "OE.4.2.3.2.5",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 CON EMBONE DE 2 1/2\" NTP 399.002",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "524",
        "codigo": "OE.4.2.3.2.6",
        "descripcion": "MONTANTE CON TUBERÍA PVC CLASE 10 CON ROSCA DE 1 1/2\" NTP 399.166 INC ABRAZADERAS DE 2\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "525",
        "codigo": "OE.4.2.3.2.7",
        "descripcion": "RED DE ALIMENTACION TUBERIA PVC CLASE 10 CON ROSCA DE 3/4\" NTP 399.166",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.3 REDES DE ALIMENTACIÓN EXTERIORES",
            "OE.4.2.3.2 REDES DE ALIMENTACIÓN EXTERIORES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "526",
        "codigo": "OE.4.2.4",
        "descripcion": "ACCESORIOS DE REDES DE AGUA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "527",
        "codigo": "OE.4.2.4.1",
        "descripcion": "CODO PVC SAP C-10 DE 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "528",
        "codigo": "OE.4.2.4.2",
        "descripcion": "CODO PVC SAP C-10 DE 1 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "529",
        "codigo": "OE.4.2.4.3",
        "descripcion": "CODO PVC SAP C-10 DE 2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "530",
        "codigo": "OE.4.2.4.4",
        "descripcion": "CODO PVC SAP C-10 DE 2 1/2\" CON EMBONE",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "531",
        "codigo": "OE.4.2.4.5",
        "descripcion": "TEE PVC-SAP C-10 DE Ø 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "532",
        "codigo": "OE.4.2.4.6",
        "descripcion": "TEE PVC-SAP C-10 DE Ø 2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "533",
        "codigo": "OE.4.2.4.7",
        "descripcion": "TEE PVC SAP C-10 DE 2\" CON REDUCCIÓN A 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "534",
        "codigo": "OE.4.2.4.8",
        "descripcion": "TEE PVC SAP C-10 DE 2\" CON REDUCCIÓN A 1 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "535",
        "codigo": "OE.4.2.4.9",
        "descripcion": "TEE PVC SAP C-10 DE 2 1/2\" CON REDUCCIÓN A 1/2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "536",
        "codigo": "OE.4.2.4.10",
        "descripcion": "TEE PVC SAP C-10 DE 2 1/2\" CON REDUCCIÓN A 2\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "537",
        "codigo": "OE.4.2.4.11",
        "descripcion": "TAPÓN DE 1/2\" Ø",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "538",
        "codigo": "OE.4.2.4.12",
        "descripcion": "TAPÓN DE 1-1/4\" Ø",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "539",
        "codigo": "OE.4.2.4.13",
        "descripcion": "TAPÓN DE 1-1/2\" Ø",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "540",
        "codigo": "OE.4.2.4.14",
        "descripcion": "TAPÓN DE 2\" Ø",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "541",
        "codigo": "OE.4.2.4.15",
        "descripcion": "COLGADORES TIPO GOTA PARA TUBERIA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "542",
        "codigo": "OE.4.2.4.16",
        "descripcion": "CODO PVC SAP C-10 DE 1\" X 90° CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "543",
        "codigo": "OE.4.2.4.17",
        "descripcion": "CODO CON ROSCA PVC 1/2\" X 90° CON INSERTO METALICO HEMBRA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "544",
        "codigo": "OE.4.2.4.18",
        "descripcion": "CODO PVC SAP C-10 DE 3/4\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "545",
        "codigo": "OE.4.2.4.19",
        "descripcion": "NIPLE DE PVC 1 1/2\" X 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "546",
        "codigo": "OE.4.2.4.20",
        "descripcion": "NIPLE DE PVC 1\" X 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "547",
        "codigo": "OE.4.2.4.21",
        "descripcion": "NIPLE DE PVC 1/2\" X 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "548",
        "codigo": "OE.4.2.4.22",
        "descripcion": "NIPLE DE PVC 2\" X 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "549",
        "codigo": "OE.4.2.4.23",
        "descripcion": "NIPLE DE PVC 3/4\" X 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "550",
        "codigo": "OE.4.2.4.24",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 3/4\" A 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "551",
        "codigo": "OE.4.2.4.25",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 1 1/2\" A 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "552",
        "codigo": "OE.4.2.4.26",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 1 1/2\" A 3/4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "553",
        "codigo": "OE.4.2.4.27",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 1\" A 3/4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "554",
        "codigo": "OE.4.2.4.28",
        "descripcion": "REDUCCION BUSHING F° G° C/R DE 1 1/2\" A 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "555",
        "codigo": "OE.4.2.4.29",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 2\" A 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "556",
        "codigo": "OE.4.2.4.30",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 2\" A 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "557",
        "codigo": "OE.4.2.4.31",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 1 1/2\" A 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "558",
        "codigo": "OE.4.2.4.32",
        "descripcion": "REDUCCION BUSHING PVC C/R DE 1\" A 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "559",
        "codigo": "OE.4.2.4.33",
        "descripcion": "TAPON HEMBRA DE F°G° C/R DE 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "560",
        "codigo": "OE.4.2.4.34",
        "descripcion": "TAPON MACHO DE F°G° C/R DE 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "561",
        "codigo": "OE.4.2.4.35",
        "descripcion": "TAPON MACHO DE F°G° C/R DE 3/4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "562",
        "codigo": "OE.4.2.4.36",
        "descripcion": "TAPON MACHO DE F°G° C/R DE 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "563",
        "codigo": "OE.4.2.4.37",
        "descripcion": "TEE PVC-SAP C-10 DE Ø 1\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "564",
        "codigo": "OE.4.2.4.38",
        "descripcion": "TEE PVC-SAP C-10 DE Ø 3/4\" CON ROSCA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "565",
        "codigo": "OE.4.2.4.39",
        "descripcion": "TEE PVC C/R, INSERTO METALICO DE 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "566",
        "codigo": "OE.4.2.4.40",
        "descripcion": "UNION SIMPLE PVC C/R 1\", C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "567",
        "codigo": "OE.4.2.4.41",
        "descripcion": "UNION UNIVERSAL F°G° C/R, 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "568",
        "codigo": "OE.4.2.4.42",
        "descripcion": "UNION UNIVERSAL F°G° C/R, 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "569",
        "codigo": "OE.4.2.4.43",
        "descripcion": "UNION UNIVERSAL F°G° C/R, 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "570",
        "codigo": "OE.4.2.4.44",
        "descripcion": "UNION UNIVERSAL F°G° C/R, 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "571",
        "codigo": "OE.4.2.4.45",
        "descripcion": "UNION UNIVERSAL F°G° C/R, 3/4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "572",
        "codigo": "OE.4.2.4.46",
        "descripcion": "UNION SIMPLE PVC C/R 1 1/2\", C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "573",
        "codigo": "OE.4.2.4.47",
        "descripcion": "UNION SIMPLE PVC C/R 1/2\", C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "574",
        "codigo": "OE.4.2.4.48",
        "descripcion": "UNION SIMPLE PVC C/R, 3/4\", C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "575",
        "codigo": "OE.4.2.4.49",
        "descripcion": "UNION SIMPLE PVC C/R, 2\", C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "576",
        "codigo": "OE.4.2.4.50",
        "descripcion": "CODO F°G° C/R, 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "577",
        "codigo": "OE.4.2.4.51",
        "descripcion": "TEE PVC-SAP C-10, Ø 1 1/2\", C/R",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.4 ACCESORIOS DE REDES DE AGUA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "578",
        "codigo": "OE.4.2.5",
        "descripcion": "VALVULAS Y LLAVES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "579",
        "codigo": "OE.4.2.5.1",
        "descripcion": "VÁLVULA ESFÉRICA 2\" Ø BRONCE C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "580",
        "codigo": "OE.4.2.5.2",
        "descripcion": "LLAVE D/RIEGO C/GRIFO DE 1/2\" A 0.60m S.N.P. INC. VALVULA 1/2\" Y MURO CONCRETO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "581",
        "codigo": "OE.4.2.5.3",
        "descripcion": "VÁLVULA ESFÉRICA 3/4\" Ø BRONCE C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "582",
        "codigo": "OE.4.2.5.4",
        "descripcion": "VALVULA ESFERICA DE 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "583",
        "codigo": "OE.4.2.5.5",
        "descripcion": "VALVULA ESFERICA DE 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "584",
        "codigo": "OE.4.2.5.6",
        "descripcion": "VALVULA ESFERICA DE 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "585",
        "codigo": "OE.4.2.5.8",
        "descripcion": "NICHO DE VALVULAS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.5 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "586",
        "codigo": "OE.4.2.6",
        "descripcion": "SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "587",
        "codigo": "OE.4.2.6.1",
        "descripcion": "RED DE CISTERNA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2.6",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "588",
        "codigo": "OE.4.2.6.1.1",
        "descripcion": "TUBO DE FIERRO GALVANIZADO DE Ø 1\" ROSCADA INC SOPORTERÍA Y COLGADORES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "589",
        "codigo": "OE.4.2.6.1.2",
        "descripcion": "TUBO DE FIERRO GALVANIZADO DE Ø 1 1/2\" ROSCADA INC SOPORTERÍA Y COLGADORES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "590",
        "codigo": "OE.4.2.6.1.3",
        "descripcion": "TUBO DE FIERRO GALVANIZADO DE Ø 2\" ROSCADA INC SOPORTERÍA Y COLGADORES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "591",
        "codigo": "OE.4.2.6.1.4",
        "descripcion": "TUBO DE FIERRO GALVANIZADO DE Ø 2 1/2\" ROSCADA INC SOPORTERÍA Y COLGADORES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "592",
        "codigo": "OE.4.2.6.1.5",
        "descripcion": "TUBO DE FIERRO GALVANIZADO DE Ø 4\" ROSCADA INC SOPORTERÍA Y COLGADORES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "593",
        "codigo": "OE.4.2.6.1.6",
        "descripcion": "CODO DE FIERRO GALVANIZADO Ø 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "594",
        "codigo": "OE.4.2.6.1.7",
        "descripcion": "CODO DE FIERRO GALVANIZADO Ø 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "595",
        "codigo": "OE.4.2.6.1.8",
        "descripcion": "CODO DE FIERRO GALVANIZADO Ø 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "596",
        "codigo": "OE.4.2.6.1.9",
        "descripcion": "CODO DE FIERRO GALVANIZADO Ø 2 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "597",
        "codigo": "OE.4.2.6.1.10",
        "descripcion": "CODO DE FIERRO GALVANIZADO Ø 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "598",
        "codigo": "OE.4.2.6.1.11",
        "descripcion": "TEE DE FIERRO GALVANIZADO Ø 2 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "599",
        "codigo": "OE.4.2.6.1.12",
        "descripcion": "TRAMPA DE PVC DE Ø 4\" NTP 399.003",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "600",
        "codigo": "OE.4.2.6.1.13",
        "descripcion": "TEE DE FIERRO GALVANIZADO Ø 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.1 RED DE CISTERNA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "601",
        "codigo": "OE.4.2.6.2",
        "descripcion": "VALVULAS Y LLAVES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2.6",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "602",
        "codigo": "OE.4.2.6.2.1",
        "descripcion": "VALVULA CHECK DE BRONCE Ø 1 1/2 C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "603",
        "codigo": "OE.4.2.6.2.2",
        "descripcion": "VALVULA TIPO BOLA Ø 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "604",
        "codigo": "OE.4.2.6.2.3",
        "descripcion": "VALVULA TIPO BOLA Ø 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "605",
        "codigo": "OE.4.2.6.2.4",
        "descripcion": "VALVULA TIPO BOLA Ø 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "606",
        "codigo": "OE.4.2.6.2.5",
        "descripcion": "VALVULA FLOTADORA Ø 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "607",
        "codigo": "OE.4.2.6.2.6",
        "descripcion": "VÁLVULA PIE DE SUCCIÓN Ø 2\" CON REGILLA C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.2 VALVULAS Y LLAVES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "608",
        "codigo": "OE.4.2.6.3",
        "descripcion": "ADITAMENTOS VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2.6",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "609",
        "codigo": "OE.4.2.6.3.1",
        "descripcion": "BRIDA DE ACERO PARA SOLDAR ROMPE AGUA DE 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "610",
        "codigo": "OE.4.2.6.3.2",
        "descripcion": "UNIÓN UNIVERSAL 2\" (FIERRO GALVANIZADO)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "611",
        "codigo": "OE.4.2.6.3.3",
        "descripcion": "UNIÓN UNIVERSAL 1 1/2\" (FIERRO GALVANIZADO)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "612",
        "codigo": "OE.4.2.6.3.4",
        "descripcion": "UNIÓN UNIVERSAL 1\" (FIERRO GALVANIZADO)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "613",
        "codigo": "OE.4.2.6.3.5",
        "descripcion": "TAPÓN DE 1\" C/R C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "614",
        "codigo": "OE.4.2.6.3.6",
        "descripcion": "TAPÓN DE 2 1/2\" EMBONE C-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "615",
        "codigo": "OE.4.2.6.3.7",
        "descripcion": "REJILLA METÁLICA CON PLATINAS DE F° DE 1\" x 1/8\"",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "616",
        "codigo": "OE.4.2.6.3.8",
        "descripcion": "TAPA DE REGISTRO DE CUARTO DE BOMBAS",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "617",
        "codigo": "OE.4.2.6.3.9",
        "descripcion": "ESCALERA METÁLICA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "618",
        "codigo": "OE.4.2.6.3.10",
        "descripcion": "BRIDA DE ACERO ROMPE AGUA DE 1\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "619",
        "codigo": "OE.4.2.6.3.11",
        "descripcion": "BRIDA DE ACERO ROMPE AGUA DE 1 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.3 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "620",
        "codigo": "OE.4.2.6.4",
        "descripcion": "EMPALME Y PRUEBAS HIDRAULICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2.6",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "621",
        "codigo": "OE.4.2.6.4.1",
        "descripcion": "PRUEBA HIDRÁULICA Y DESINFECCIÓN A ZANJA TAPADA PARA CISTERNA",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.6.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.6 SISTEMA DE ALMACENAMIENTO CISTERNA DE AGUA",
            "OE.4.2.6.4 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "622",
        "codigo": "OE.4.2.7",
        "descripcion": "EMPALME Y PRUEBAS HIDRAULICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "623",
        "codigo": "OE.4.2.7.2",
        "descripcion": "PRUEBA HIDRAULICA Y DESINFECCION A ZANJA TAPADA",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.7 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "624",
        "codigo": "OE.4.2.7.3",
        "descripcion": "PRUEBA HIDRAULICA Y DESINFECCION A ZANJA ABIERTA",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.2 SISTEMA DE AGUA FRIA",
            "OE.4.2.7 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "625",
        "codigo": "OE.4.5",
        "descripcion": "SISTEMA DE DRENAJE PLUVIAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "626",
        "codigo": "OE.4.5.1",
        "descripcion": "TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.5",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "627",
        "codigo": "OE.4.5.1.1",
        "descripcion": "MONTANTES Y/O BAJADAS PLUVIALES CON TUB. PVC -SAP DE Ø 4\" INC ACCESORIOS DE PVC, PINTURA Y REJILLAS",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "628",
        "codigo": "OE.4.5.1.2",
        "descripcion": "CANALETA EVAC AGUAS PLUVIALES DE ALUZINC e=1mm, SECCIÓN RECTANGULAR BASE 200mm CON SOPORTERIA CADA 1.50m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "629",
        "codigo": "OE.4.5.1.3",
        "descripcion": "MONTANTES Y/O BAJADAS PLUVIALES CON TUB, PVC SAL PESADA Ø 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "630",
        "codigo": "OE.4.5.1.4",
        "descripcion": "CODO PVC SAL PESADA Ø 4\" X 45°",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "631",
        "codigo": "OE.4.5.1.5",
        "descripcion": "CODO PVC SAL PESADA Ø 4\" X 90°",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "632",
        "codigo": "OE.4.5.1.6",
        "descripcion": "SOPORTE METALICO PARA MONTANTE Ø 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "633",
        "codigo": "OE.4.5.1.7",
        "descripcion": "CANALETA F° G° E=0.85 mm, 0.35X0.20X0.20, CON SOPORTES CADA 1.00 m.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "634",
        "codigo": "OE.4.5.1.8",
        "descripcion": "TUBERIA PVC TIPO U, DESAGUE Ø6\" X 5 MTS, EMPALME SIMPLE.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "635",
        "codigo": "OE.4.5.1.9",
        "descripcion": "COLGADORES TIPO GOTA O SIMILAR PARA TUBERIA DE Ø4\"",
        "unidad": "pza",
        "es_titulo": false,
        "parent_id": "OE.4.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "636",
        "codigo": "OE.4.5.1.10",
        "descripcion": "TABIQUE DE DOS CARAS CON UNA PLANCHA DE FIBROCEMENTO SUPERBOARD PRO 12.7 mm",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.4.5.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.1 TUBERIA DE BAJADA Y DISTRIBUCION DE DESAGUE PLUVIAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "637",
        "codigo": "OE.4.5.2",
        "descripcion": "EMPALME Y PRUEBAS HIDRAULICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.5",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "638",
        "codigo": "OE.4.5.2.1",
        "descripcion": "PRUEBA HIDRÁULICA DE RED PLUVIAL",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.5.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "639",
        "codigo": "OE.4.5.2.2",
        "descripcion": "TRAZO Y REPLANTEO",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.5.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "640",
        "codigo": "OE.4.5.2.3",
        "descripcion": "EXCAVACION EN CANALES",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.4.5.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "641",
        "codigo": "OE.4.5.2.4",
        "descripcion": "REFINE Y NIVELACION DE ZANJAS",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.5.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "642",
        "codigo": "OE.4.5.2.5",
        "descripcion": "ENCOFRADO Y DESENCOFRADO EN CANALES",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.4.5.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "643",
        "codigo": "OE.4.5.2.6",
        "descripcion": "CONCRETO f'c= 175 KG/CM2 EN CANALES",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.4.5.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "644",
        "codigo": "OE.4.5.2.7",
        "descripcion": "EMPEDRADO DE 0.1m A 0.2 m",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.4.5.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "645",
        "codigo": "OE.4.5.2.8",
        "descripcion": "REJILLA METALICA",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.5.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.5 SISTEMA DE DRENAJE PLUVIAL",
            "OE.4.5.2 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "646",
        "codigo": "OE.4.6",
        "descripcion": "DESAGÜE Y VENTILACIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "647",
        "codigo": "OE.4.6.1",
        "descripcion": "SALIDAS DE DESAGÜE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "648",
        "codigo": "OE.4.6.1.1",
        "descripcion": "SALIDA DE DESAGÜE - PVC CP 2\"",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.4.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.1 SALIDAS DE DESAGÜE"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "649",
        "codigo": "OE.4.6.1.2",
        "descripcion": "SALIDA DE DESAGÜE - PVC CP 4\"",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.4.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.1 SALIDAS DE DESAGÜE"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "650",
        "codigo": "OE.4.6.2",
        "descripcion": "REDES DE DERIVACIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "651",
        "codigo": "OE.4.6.2.1",
        "descripcion": "CONEXIÓN A REDES DE DERIVACIÓN DE DESAGÜE",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.4.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.2 REDES DE DERIVACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "652",
        "codigo": "OE.4.6.2.2",
        "descripcion": "RED VENTILACION CON TUBERIA DE PVC SAP Ø DE 2\" NTP 399.033",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.2 REDES DE DERIVACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "653",
        "codigo": "OE.4.6.2.3",
        "descripcion": "SALIDA TUBERIA DE VENTILACION PVC Ø 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.2 REDES DE DERIVACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "654",
        "codigo": "OE.4.6.2.4",
        "descripcion": "SOMBRERO EN SALIDA TUBERIA VENTILACION Ø 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.2 REDES DE DERIVACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "655",
        "codigo": "OE.4.6.2.5",
        "descripcion": "SUMIDERO DE VENTILACION INCLUYE CODO PVC Ø 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.2 REDES DE DERIVACIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "656",
        "codigo": "OE.4.6.3",
        "descripcion": "REDES COLECTORAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "657",
        "codigo": "OE.4.6.3.1",
        "descripcion": "MOVIMIENTO DE TIERRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "658",
        "codigo": "OE.4.6.3.1.1",
        "descripcion": "TRAZO Y REPLANTEO",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "659",
        "codigo": "OE.4.6.3.1.2",
        "descripcion": "EXCAVACION DE ZANJA PARA TUBERIA SECCIÓN B",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "660",
        "codigo": "OE.4.6.3.1.3",
        "descripcion": "REFINE Y NIVELACION DE ZANJA PARA TUBERIA SECCIÓN B",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "661",
        "codigo": "OE.4.6.3.1.4",
        "descripcion": "CAMA DE ARENA EN ZANJA P/TUB SECCIÓN B",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "662",
        "codigo": "OE.4.6.3.1.5",
        "descripcion": "RELLENO Y COMPACTACION CON EQUIPO Y MAT. SEGÚN SECCIÓN B",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "663",
        "codigo": "OE.4.6.3.1.6",
        "descripcion": "ELIMINACION MATERIAL EXCEDENTE C/MAQUINA SECCIÓN B",
        "unidad": "m3",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.1 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "664",
        "codigo": "OE.4.6.3.2",
        "descripcion": "INSTALACION DE TUBERIA COLECTORA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.3",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "665",
        "codigo": "OE.4.6.3.2.1",
        "descripcion": "RED COLECTORA CON TUBERÍA DE PVC SAP Ø DE 3\" NTP 399.003.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.2 INSTALACION DE TUBERIA COLECTORA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "666",
        "codigo": "OE.4.6.3.2.2",
        "descripcion": "RED COLECTORA CON TUBERÍA DE PVC SAP Ø DE 4\" NTP 399.003.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.2 INSTALACION DE TUBERIA COLECTORA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "667",
        "codigo": "OE.4.6.3.2.3",
        "descripcion": "RED COLECTORA CON TUBERÍA DE PVC SAP Ø DE 6\" NTP 399.003.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.2 INSTALACION DE TUBERIA COLECTORA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "668",
        "codigo": "OE.4.6.3.2.4",
        "descripcion": "MONTANTE Y/O VENTILACION CON TUBERIA PVC - SAP Ø DE 4\" NTP 399.003.INC ABRAZADERAS",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.2 INSTALACION DE TUBERIA COLECTORA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "669",
        "codigo": "OE.4.6.3.2.5",
        "descripcion": "RED COLECTORA CON TUBERIA DE PVC SAP Ø DE 2\" NTP 399.003",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.3.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.3 REDES COLECTORAS",
            "OE.4.6.3.2 INSTALACION DE TUBERIA COLECTORA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "670",
        "codigo": "OE.4.6.4",
        "descripcion": "ACCESORIOS DE REDES COLECTORAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "671",
        "codigo": "OE.4.6.4.1",
        "descripcion": "YEE PVC SAP DE 4\" X 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "672",
        "codigo": "OE.4.6.4.2",
        "descripcion": "CODO PVC SAP DE 45° X 2 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "673",
        "codigo": "OE.4.6.4.3",
        "descripcion": "CODO PVC SAP DE 90° X 2 1/2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "674",
        "codigo": "OE.4.6.4.4",
        "descripcion": "ADITAMENTOS VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "675",
        "codigo": "OE.4.6.4.4.1",
        "descripcion": "SUMIDERO DE BRONCE DE 3\" PROVISIÓN Y COLOCACIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS",
            "OE.4.6.4.4 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "676",
        "codigo": "OE.4.6.4.4.2",
        "descripcion": "REGISTRO ROSCADO DE BRONCE DE 4\" PROVISIÓN Y COLOCACIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS",
            "OE.4.6.4.4 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "677",
        "codigo": "OE.4.6.4.4.3",
        "descripcion": "REGISTRO ROSCADO DE BRONCE DE 4\" TIPO DADO, SUMINISTRO E INSTALACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS",
            "OE.4.6.4.4 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "678",
        "codigo": "OE.4.6.4.4.4",
        "descripcion": "SUMIDERO DE BRONCE DE 2\" PROVISION Y COLOCACION",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS",
            "OE.4.6.4.4 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "679",
        "codigo": "OE.4.6.4.4.5",
        "descripcion": "COLGADORES TIPO GOTA PARA TUBERIA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS",
            "OE.4.6.4.4 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "680",
        "codigo": "OE.4.6.4.5",
        "descripcion": "YEE PVC DESAGUE DE 4\" X 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "681",
        "codigo": "OE.4.6.4.6",
        "descripcion": "YEE PVC DESAGUE DE 2\" X 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "682",
        "codigo": "OE.4.6.4.7",
        "descripcion": "CODO PVC DESAGUE DE 45° X 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "683",
        "codigo": "OE.4.6.4.8",
        "descripcion": "CODO PVC DESAGUE DE 45° X 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "684",
        "codigo": "OE.4.6.4.9",
        "descripcion": "CODO PVC DESAGUE DE 90° X 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "685",
        "codigo": "OE.4.6.4.10",
        "descripcion": "CODO PVC DESAGUE DE 90° X 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "686",
        "codigo": "OE.4.6.4.11",
        "descripcion": "TEE DESAGUE PVC 4\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "687",
        "codigo": "OE.4.6.4.12",
        "descripcion": "TEE DESAGUE PVC 2\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.4 ACCESORIOS DE REDES COLECTORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "688",
        "codigo": "OE.4.6.5",
        "descripcion": "CÁMARAS DE INSPECCIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "689",
        "codigo": "OE.4.6.5.1",
        "descripcion": "CAJAS DE REGISTRO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.5",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "690",
        "codigo": "OE.4.6.5.1.1",
        "descripcion": "CAJA DE REG.PREFAB. 0.30x0.60m C/TAPA CONC., Incl R-6\"",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.5.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "691",
        "codigo": "OE.4.6.5.1.2",
        "descripcion": "CAJA DE REG.PREFAB. 0.60x0.60m C/TAPA CONC.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.5.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "692",
        "codigo": "OE.4.6.5.1.3",
        "descripcion": "BUZÓN D=1.20m, PORF. PROM. 1.35m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.5.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "693",
        "codigo": "OE.4.6.5.1.4",
        "descripcion": "CAJUELA DE CONCRETO DE 0.30X0.30m CON REJILLA METÁLICA - IN SITU",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.5.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "694",
        "codigo": "OE.4.6.5.1.5",
        "descripcion": "CONCRETO F'c=175 kg/cm² PARA CAJAS DE REGISTRO",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "OE.4.6.5.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "695",
        "codigo": "OE.4.6.5.1.6",
        "descripcion": "ENCOFRADO Y DESENCOFRADO",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.4.6.5.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "696",
        "codigo": "OE.4.6.5.1.7",
        "descripcion": "ACERO CORRUGADO Fý=4200 Kg/cm2 grado 60",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.4.6.5.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "697",
        "codigo": "OE.4.6.5.1.5",
        "descripcion": "EMPALME Y PRUEBAS HIDRAULICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.5.1",
        "nivel_jerarquia": 6,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "698",
        "codigo": "OE.4.6.5.1.5.2",
        "descripcion": "PRUEBA HIDRÁULICA DE ESCORRENTÍA DE TUB. DESAGÜE",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.5.1.5",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.5 CÁMARAS DE INSPECCIÓN",
            "OE.4.6.5.1 CAJAS DE REGISTRO",
            "OE.4.6.5.1.5 EMPALME Y PRUEBAS HIDRAULICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "699",
        "codigo": "OE.4.6.7",
        "descripcion": "EQUIPAMIENTO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "700",
        "codigo": "OE.4.6.7.1",
        "descripcion": "ELECTROBOMBAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.7",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "701",
        "codigo": "OE.4.6.7.1.1",
        "descripcion": "SUMINISTRO E INSTALACIÓN DE EQUIPO DE BOMBEO DE AGUA FRIA DURA, VELOCIDAD VARIABLE, PRESION CONSTANTE Q= 4 LPS, ADT=38 M, MULTIETAPICA P=2.5 HP, INCL, TABLEROS Y CABLEADO ELECTRICO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.7.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.7 EQUIPAMIENTO",
            "OE.4.6.7.1 ELECTROBOMBAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "702",
        "codigo": "OE.4.6.7.1.2",
        "descripcion": "SUMINISTRO,INSTALACION,PRUEBAS Y PUESTA EN FUNCIONAMIENTO DEL SISTEMA DE PRESION CONSTANTE",
        "unidad": "ser",
        "es_titulo": false,
        "parent_id": "OE.4.6.7.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.7 EQUIPAMIENTO",
            "OE.4.6.7.1 ELECTROBOMBAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "703",
        "codigo": "OE.4.6.8",
        "descripcion": "INSTALACION DE BIODIGESTOR",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "704",
        "codigo": "OE.4.6.8.1",
        "descripcion": "LIMPIEZA DEL TERRENO MANUAL",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.4.6.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "705",
        "codigo": "OE.4.6.8.2",
        "descripcion": "TRAZO, NIVELES Y REPLANTEO",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.4.6.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "706",
        "codigo": "OE.4.6.8.3",
        "descripcion": "NIVELACION DE TERRENO",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.4.6.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "707",
        "codigo": "OE.4.6.8.4",
        "descripcion": "EXCAVACION MANUAL EN TERRENO NATURAL",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "OE.4.6.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "708",
        "codigo": "OE.4.6.8.5",
        "descripcion": "ELIMINACION DE MATERIAL EXCEDENTE MANUAL",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "OE.4.6.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "709",
        "codigo": "OE.4.6.8.6",
        "descripcion": "SUMINISTRO DE BIODIGESTOR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "710",
        "codigo": "OE.4.6.8.7",
        "descripcion": "INSTALACION DE BIODIGESTOR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "711",
        "codigo": "OE.4.6.8.8",
        "descripcion": "TUBERIAS Y ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.8",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "712",
        "codigo": "OE.4.6.8.8.1",
        "descripcion": "LIMPIEZA DEL TERRENO MANUAL",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.4.6.8.8",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR",
            "OE.4.6.8.8 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "713",
        "codigo": "OE.4.6.8.8.2",
        "descripcion": "TRAZO, NIVELES Y REPLANTEO",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.4.6.8.8",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR",
            "OE.4.6.8.8 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "714",
        "codigo": "OE.4.6.8.8.3",
        "descripcion": "EXCAVACION MANUAL EN TERRENO NATURAL",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "OE.4.6.8.8",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR",
            "OE.4.6.8.8 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "715",
        "codigo": "OE.4.6.8.8.4",
        "descripcion": "ELIMINACION DE MATERIAL EXCEDENTE MANUAL",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "OE.4.6.8.8",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR",
            "OE.4.6.8.8 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "716",
        "codigo": "OE.4.6.8.8.5",
        "descripcion": "SUMINISTRO E INSTALACION TUBERIA",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.8.8",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.8 INSTALACION DE BIODIGESTOR",
            "OE.4.6.8.8 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "717",
        "codigo": "OE.4.6.9",
        "descripcion": "POZO PERCOLADOR",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "718",
        "codigo": "OE.4.6.9.1",
        "descripcion": "TRABAJOS PRELIMINARES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.9",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "719",
        "codigo": "OE.4.6.9.1.1",
        "descripcion": "LIMPIEZA DEL TERRENO MANUAL",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.1 TRABAJOS PRELIMINARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "720",
        "codigo": "OE.4.6.9.1.2",
        "descripcion": "TRAZO Y REPLANTEO PRELIMINAR",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.1 TRABAJOS PRELIMINARES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "721",
        "codigo": "OE.4.6.9.2",
        "descripcion": "MOVIMIENTO DE TIERRAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.9",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "722",
        "codigo": "OE.4.6.9.2.1",
        "descripcion": "EXCAVACION MANUAL EN TERRENO NATURAL",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.2 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "723",
        "codigo": "OE.4.6.9.2.2",
        "descripcion": "RELLENO CON MATERIAL GRANULAR",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.2 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "724",
        "codigo": "OE.4.6.9.2.3",
        "descripcion": "ELIMINACION DE MATERIAL EXCEDENTE",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.2 MOVIMIENTO DE TIERRAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "725",
        "codigo": "OE.4.6.9.3",
        "descripcion": "OBRAS DE CONCRETO SIMPLE",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.9",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "726",
        "codigo": "OE.4.6.9.3.1",
        "descripcion": "CONCRETO f'c=175 kg/cm2",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.3 OBRAS DE CONCRETO SIMPLE"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "727",
        "codigo": "OE.4.6.9.4",
        "descripcion": "OBRAS DE CONCRETO ARMADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.9",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "728",
        "codigo": "OE.4.6.9.4.1",
        "descripcion": "CONCRETO f'c = 210 kg/cm2",
        "unidad": "m³",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.4 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "729",
        "codigo": "OE.4.6.9.4.2",
        "descripcion": "ENCOFRADO Y DESENCOFRADO",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.4 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "730",
        "codigo": "OE.4.6.9.4.3",
        "descripcion": "ACERO CORRUGADO FY= 4200 kg/cm2 GRADO 60",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.4 OBRAS DE CONCRETO ARMADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "731",
        "codigo": "OE.4.6.9.5",
        "descripcion": "TUBERIAS Y ACCESORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.9",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "732",
        "codigo": "OE.4.6.9.5.1",
        "descripcion": "SUMINISTRO E INSTALACION TUBERIA PVC SAL 2\"",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.5 TUBERIAS Y ACCESORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "733",
        "codigo": "OE.4.6.9.6",
        "descripcion": "MAMPOSTERIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4.6.9",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "734",
        "codigo": "OE.4.6.9.6.1",
        "descripcion": "MAMPOSTERIA CON LADRILLO KK DE CABEZA (0.24 X 0.13 X 0.09 m.)",
        "unidad": "m²",
        "es_titulo": false,
        "parent_id": "OE.4.6.9.6",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.6 DESAGÜE Y VENTILACIÓN",
            "OE.4.6.9 POZO PERCOLADOR",
            "OE.4.6.9.6 MAMPOSTERIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "735",
        "codigo": "OE.4.7",
        "descripcion": "ADITAMENTOS VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.4",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "736",
        "codigo": "OE.4.7.6",
        "descripcion": "REGISTRO ROSCADO DE BRONCE DE 2\" PROVISIÓN Y COLOCACIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.4.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE4.1 APARATOS SANITARIOS Y ACCESORIOS",
            "OE.4.7 ADITAMENTOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "737",
        "codigo": "OE.5",
        "descripcion": "INSTALACIONES ELÉCTRICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE",
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "738",
        "codigo": "OE.5.1",
        "descripcion": "CONEXIÓN A LA RED EXTERNA DE SUMINISTRO DE ENERGIA ELÉCTRICA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "739",
        "codigo": "OE.5.1.1",
        "descripcion": "Sistema de Utilización en Media Tensión Subestación Tipo Seco Compacto de 150 KVA.",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.1 CONEXIÓN A LA RED EXTERNA DE SUMINISTRO DE ENERGIA ELÉCTRICA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "740",
        "codigo": "OE.5.2",
        "descripcion": "SALIDA PARA INSTALACIONES ELÉCTRICAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "741",
        "codigo": "OE.5.2.1",
        "descripcion": "SALIDA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "742",
        "codigo": "OE.5.2.1.1",
        "descripcion": "SALIDA PARA ALUMBRADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "743",
        "codigo": "OE.5.2.1.1.1",
        "descripcion": "Salida para Alumbrado",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.1 SALIDA PARA ALUMBRADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "744",
        "codigo": "OE.5.2.1.1.2",
        "descripcion": "Salida para alumbrado exterior en poste tipo alumbrado público",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.1 SALIDA PARA ALUMBRADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "745",
        "codigo": "OE.5.2.1.1.3",
        "descripcion": "Salida para Alumbrado de Emergencia",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.1 SALIDA PARA ALUMBRADO"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "746",
        "codigo": "OE.5.2.1.2",
        "descripcion": "SALIDA PARA TOMACORRIENTES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "747",
        "codigo": "OE.5.2.1.2.1",
        "descripcion": "Salida para tomacorriente Bipolar Doble con linea a tierra (F+ N+T), 16 A. 250 V. GRADO HOSPITALARIO DADOS COLOR BLANCO PARA USO GENERAL (SISTEMA NORMAL).",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.2 SALIDA PARA TOMACORRIENTES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "748",
        "codigo": "OE.5.2.1.2.2",
        "descripcion": "Salida para tomacorriente Bipolar Doble Tipo Mixto tres en linea y tipo Schuko (F+N+T), 16 A. 250 V. EN PARA USO GENERAL (NO ESTABILIZADO) (EQUIP. MEDICO). EMPOTRADO EN MURO",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.2 SALIDA PARA TOMACORRIENTES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "749",
        "codigo": "OE.5.2.1.2.3",
        "descripcion": "Salida para tomacorriente Bipolar Doble con linea a tierra tipo Schuko (F+N+T), 16A. 250 V. GRADO HOSPITALARIO DADOS C",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.2 SALIDA PARA TOMACORRIENTES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "750",
        "codigo": "OE.5.2.1.2.4",
        "descripcion": "Tomacorriente doble para empotrar con puesta a tierra 15A/220v/60Hz estabilizado",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.2 SALIDA PARA TOMACORRIENTES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "751",
        "codigo": "OE.5.2.1.3",
        "descripcion": "SALIDA PARA TOMACORRIENTES DE FUERZA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "752",
        "codigo": "OE.5.2.1.3.1",
        "descripcion": "Salida de Fuerza con Caja y tapa Biselada de 100 x 100 x 100 mm( Duchas, equipos biomedicos, etc)",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "753",
        "codigo": "OE.5.2.1.3.2",
        "descripcion": "Salida de Fuerza para electrobomba a prueba de agua",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "754",
        "codigo": "OE.5.2.1.3.3",
        "descripcion": "Salida de fuerza con tomacorriente 25A/220v/60Hz salvo indicacion en plano",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "755",
        "codigo": "OE.5.2.1.3.4",
        "descripcion": "Salida de fuerza para rapiducha electrica, calota o tablero de PVC 4 polos/ ITM 2x25A",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "756",
        "codigo": "OE.5.2.1.3.5",
        "descripcion": "Salida de fuerza para aire acondicionado tipo SPLIT",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "757",
        "codigo": "OE.5.2.1.3.6",
        "descripcion": "Salida de fuerza para compresora de odontologia, calota o tablero de PVC 4 polos/ ITM 2x25A",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "758",
        "codigo": "OE.5.2.1.3.7",
        "descripcion": "Salida de fuerza para sillon odontologico, caja de paso de 100x55x50 mm",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "759",
        "codigo": "OE.5.2.1.3.8",
        "descripcion": "Salida de fueza para comunicaciones",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "760",
        "codigo": "OE.5.2.1.3.9",
        "descripcion": "Instalacion para Salida de Fuerza con Caja y tapa Biselada de 100 x 100 x 100 mm( Duchas, equipos biomedicos, etc)",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.3 SALIDA PARA TOMACORRIENTES DE FUERZA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "761",
        "codigo": "OE.5.2.1.4",
        "descripcion": "SALIDA PARA INTERRUPTOR",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2.1",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "762",
        "codigo": "OE.5.2.1.4.1",
        "descripcion": "Salida para Interruptor Simple con placa de acero inoxidable Tipo Balancin grado Hospitalario",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "763",
        "codigo": "OE.5.2.1.4.2",
        "descripcion": "Salida para Interruptor doble con placa de acero inoxidable Tipo Balancin grado Hospitalario",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "764",
        "codigo": "OE.5.2.1.4.3",
        "descripcion": "Salida para Interruptor triple con placa de acero inoxidable Tipo Balancin grado Hospitalario",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "765",
        "codigo": "OE.5.2.1.4.4",
        "descripcion": "Salida para Interruptor Simple de tres vías con placa de acero (Conmutación) Tipo Balancin grado Hospitalario",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "766",
        "codigo": "OE.5.2.1.4.5",
        "descripcion": "Interruptor Simple suspendido cabecera de cama (colgado) Tipo Balancin grado Hospitalario",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.1 SALIDA",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "767",
        "codigo": "OE5.2.1.5",
        "descripcion": "CAJAS DE PASO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE5.2.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "768",
        "codigo": "OE.5.2.1.5.1",
        "descripcion": "Caja de pase F°G° 400x400x75mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.1.5 CAJAS DE PASO",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "769",
        "codigo": "OE.5.2.1.5.2",
        "descripcion": "Caja de pase F°G° 200x200x75mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.1.5 CAJAS DE PASO",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "770",
        "codigo": "OE.5.2.1.5.3",
        "descripcion": "Caja de pase F°G° 150x150x75mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.1.5 CAJAS DE PASO",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "771",
        "codigo": "OE.5.2.1.5.4",
        "descripcion": "Caja de pase F°G° 100x100x75mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.1.5 CAJAS DE PASO",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "772",
        "codigo": "OE.5.2.1.5.5",
        "descripcion": "Caja de pase F°G° 100x55x55mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.1.5 CAJAS DE PASO",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "773",
        "codigo": "OE.5.2.1.5.6",
        "descripcion": "Caja de pase F°G° 150X150X100mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.1.5 CAJAS DE PASO",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "774",
        "codigo": "OE.5.2.1.5.7",
        "descripcion": "Caja de pase F°G° 300X300X100mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.1.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.1.5 CAJAS DE PASO",
            "OE.5.2.1.4 SALIDA PARA INTERRUPTOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "775",
        "codigo": "OE.5.2.2",
        "descripcion": "CANALIZACIONES, CONDUCTOS O TUBERÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "776",
        "codigo": "OE.5.2.2.1",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 100 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "777",
        "codigo": "OE.5.2.2.2",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 35 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "778",
        "codigo": "OE.5.2.2.3",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 25 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "779",
        "codigo": "OE.5.2.2.4",
        "descripcion": "Tubería alumbrado y tomacorrientes PVC SAP NTP 399.006 DE 20 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "780",
        "codigo": "OE.5.2.2.5",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "781",
        "codigo": "OE.5.2.2.6",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 35 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "782",
        "codigo": "OE.5.2.2.7",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "783",
        "codigo": "OE.5.2.2.8",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "784",
        "codigo": "OE.5.2.2.9",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "785",
        "codigo": "OE.5.2.2.10",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 35mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "786",
        "codigo": "OE.5.2.2.11",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 25mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "787",
        "codigo": "OE.5.2.2.12",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "788",
        "codigo": "OE.5.2.2.13",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 100mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "789",
        "codigo": "OE.5.2.2.14",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 35mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "790",
        "codigo": "OE.5.2.2.15",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "791",
        "codigo": "OE.5.2.2.16",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "792",
        "codigo": "OE.5.2.2.17",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "793",
        "codigo": "OE.5.2.2.18",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 65 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "794",
        "codigo": "OE.5.2.2.19",
        "descripcion": "Tubería para Alimentadores PVC SAP NTP 399.006 DE 80 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "795",
        "codigo": "OE.5.2.2.20",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "796",
        "codigo": "OE.5.2.2.21",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 65 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "797",
        "codigo": "OE.5.2.2.22",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 80 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "798",
        "codigo": "OE.5.2.2.23",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "799",
        "codigo": "OE.5.2.2.24",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 65 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "800",
        "codigo": "OE.5.2.2.25",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 80 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "801",
        "codigo": "OE.5.2.2.26",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "802",
        "codigo": "OE.5.2.2.27",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 65 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "803",
        "codigo": "OE.5.2.2.28",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 80 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "804",
        "codigo": "OE.5.2.2.29",
        "descripcion": "Tubería Conduit EMT de 20 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "805",
        "codigo": "OE.5.2.2.30",
        "descripcion": "Tubería Conduit EMT de 25 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "806",
        "codigo": "OE.5.2.2.31",
        "descripcion": "Union Conduit EMT de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "807",
        "codigo": "OE.5.2.2.32",
        "descripcion": "Union Conduit ETM de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "808",
        "codigo": "OE.5.2.2.33",
        "descripcion": "Curva Conduit EMT de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "809",
        "codigo": "OE.5.2.2.34",
        "descripcion": "Curva Conduit ETM de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "810",
        "codigo": "OE.5.2.2.35",
        "descripcion": "Conector Conduit EMT de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "811",
        "codigo": "OE.5.2.2.36",
        "descripcion": "Conector Conduit EMT de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.2 CANALIZACIONES, CONDUCTOS O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "812",
        "codigo": "OE.5.2.3",
        "descripcion": "CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "813",
        "codigo": "OE.5.2.3.1",
        "descripcion": "Cable NH-80 DE 4 mm2 ALUMBRADO + TOMACORRIENTES",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.3 CONDUCTORES Y CABLES DE ENERGÍA EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "814",
        "codigo": "OE5.2.3.2",
        "descripcion": "Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE5.2.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "815",
        "codigo": "OE.5.2.3.3",
        "descripcion": "Cable N2XOH de 1 x 6 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "816",
        "codigo": "OE.5.2.3.4",
        "descripcion": "Cable N2XOH de 1 x 10 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "817",
        "codigo": "OE.5.2.3.5",
        "descripcion": "Cable N2XOH de 1 x 16 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "818",
        "codigo": "OE.5.2.3.6",
        "descripcion": "Cable N2XOH de 1 x 25 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "819",
        "codigo": "OE.5.2.3.7",
        "descripcion": "Cable N2XOH de 1 x 70 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "820",
        "codigo": "OE.5.2.3.8",
        "descripcion": "Cable N2XOH de 1 x 120 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "821",
        "codigo": "OE.5.2.3.9",
        "descripcion": "Cable Cu Desnudo Cableado 1 x 25 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "822",
        "codigo": "OE.5.2.3.10",
        "descripcion": "Cable Cu Desnudo Cableado 1 x 50 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "823",
        "codigo": "OE.5.2.3.11",
        "descripcion": "Pruebas Eléctricas ( Aislamiento y Continuidad). DE CIRCUITOS DE ALUMBRADO, TOMACORRIENTES Y ALIMENTADORES",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "824",
        "codigo": "OE.5.2.3.12",
        "descripcion": "Cable N2XOH de 1 x 95 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "825",
        "codigo": "OE.5.2.3.13",
        "descripcion": "Cable N2XOH de 1 x 50 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "826",
        "codigo": "OE.5.2.3.14",
        "descripcion": "Cable N2XOH de 1 x 35 mm2 Alimentadores",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE5.2.3.2 Cable Cu NH-80 1 x 6 mm2 Alimentadores Fuerza"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "827",
        "codigo": "OE.5.2.4",
        "descripcion": "SISTEMAS DE CONDUCTOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "828",
        "codigo": "OE.5.2.4.1",
        "descripcion": "Canaleta para conductor enterrado 0.40 x 0.60 m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.4 SISTEMAS DE CONDUCTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "829",
        "codigo": "OE.5.2.4.2",
        "descripcion": "Buzon Electroducto de Concreto Armado con tapa 0.60 x0.60 x 0.60m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.4 SISTEMAS DE CONDUCTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "830",
        "codigo": "OE.5.2.4.3",
        "descripcion": "Canal para tubería enterrada de 0.50X0.60m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.4 SISTEMAS DE CONDUCTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "831",
        "codigo": "OE.5.2.4.4",
        "descripcion": "Buzón electroducto de concreto con tapa 0.80x0.80x1.10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.4 SISTEMAS DE CONDUCTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "832",
        "codigo": "OE.5.2.4.5",
        "descripcion": "Buzón electroducto de concreto con tapa 0.80x0.60x0.80",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.4 SISTEMAS DE CONDUCTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "833",
        "codigo": "OE.5.2.6",
        "descripcion": "TABLEROS PRINCIPALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "834",
        "codigo": "OE.5.2.6.1",
        "descripcion": "TABLERO PRINCIPAL DE F°G° AUTOSOPORTADO TRIFASICO ( 380 / 220 VOLTIOS), PARA 15 PROTECCIONES DE CAJA MOLDEADA TIPO TETRA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.6 TABLEROS PRINCIPALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "835",
        "codigo": "OE.5.2.6.2",
        "descripcion": "TABLERO AUTOSOPORTADO GENERAL TG",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.2.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.6 TABLEROS PRINCIPALES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "836",
        "codigo": "OE.5.2.7",
        "descripcion": "TABLEROS DE DISTRIBUCION",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "837",
        "codigo": "OE.5.2.7.1",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-01 (36 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "838",
        "codigo": "OE.5.2.7.2",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-02 (48 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "839",
        "codigo": "OE.5.2.7.3",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-03 (48 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "840",
        "codigo": "OE.5.2.7.4",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-04 (42 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "841",
        "codigo": "OE.5.2.7.5",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-05 ( 42 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "842",
        "codigo": "OE.5.2.7.6",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-06 (36 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "843",
        "codigo": "OE.5.2.7.7",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-07 ( 8 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "844",
        "codigo": "OE.5.2.7.8",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- AE ( AREAS EXTERNAS) ( 12 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "845",
        "codigo": "OE.5.2.7.9",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- AL ( ALMACENES) ( 12 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "846",
        "codigo": "OE.5.2.7.10",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-AC ( 60 polos) (TD08 AREAS COMUNES)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "847",
        "codigo": "OE.5.2.7.11",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- CA ( CONSULTA ADMISION) ( 8 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "848",
        "codigo": "OE.5.2.7.12",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- CG ( CASETA DE GRUPO Y SED) ( 12 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "849",
        "codigo": "OE.5.2.7.13",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- E ( ESTABILIZADO) ( 18 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "850",
        "codigo": "OE.5.2.7.14",
        "descripcion": "TABLERO DE DISTRIBUCIÓN T- BOM ( 24 polos)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "851",
        "codigo": "OE.5.2.7.15",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-CF1 ( 48 polos)( CARGAS DE FUERZAS 01)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "852",
        "codigo": "OE.5.2.7.16",
        "descripcion": "TABLERO DE DISTRIBUCIÓN TD-CF2 ( 60 polos)( CARGAS DE FUERZAS 02)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "853",
        "codigo": "OE.5.2.7.17",
        "descripcion": "Termimales Para Termomagnéticos Para Conductores De 4, 6 10, 16,25, 35, 50, 70 y 120 mm2",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "854",
        "codigo": "OE.5.2.7.18",
        "descripcion": "Marcadores de Fase Para Conductores",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "855",
        "codigo": "OE.5.2.7.19",
        "descripcion": "Tapas de Reserva para Tableros",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "856",
        "codigo": "OE.5.2.7.20",
        "descripcion": "Prueba de aislamiento de tableros",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "857",
        "codigo": "OE.5.2.7.21",
        "descripcion": "Laminas de señalizacion contra riesgo electrico para tableros",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "858",
        "codigo": "OE.5.2.7.22",
        "descripcion": "Tablero de Distribucion TD-01",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "859",
        "codigo": "OE.5.2.7.23",
        "descripcion": "Tablero de Distribucion TD-02",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "860",
        "codigo": "OE.5.2.7.24",
        "descripcion": "Tablero de Distribucion TD-03",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "861",
        "codigo": "OE.5.2.7.25",
        "descripcion": "Tablero de Distribucion TD-04",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "862",
        "codigo": "OE.5.2.7.26",
        "descripcion": "Tablero de Distribucion TD-05",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "863",
        "codigo": "OE.5.2.7.27",
        "descripcion": "Tablero de Distribucion TD-06",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "864",
        "codigo": "OE.5.2.7.28",
        "descripcion": "Tablero de Distribucion TD-07",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "865",
        "codigo": "OE.5.2.7.29",
        "descripcion": "Tablero de Distribucion TD-08",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "866",
        "codigo": "OE.5.2.7.30",
        "descripcion": "Tablero de Distribucion TD-09",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "867",
        "codigo": "OE.5.2.7.31",
        "descripcion": "Tablero de Distribucion TD-10",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "868",
        "codigo": "OE.5.2.7.32",
        "descripcion": "Tablero de Distribucion TD-11",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "869",
        "codigo": "OE.5.2.7.33",
        "descripcion": "Tablero de Distribucion TD-12",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "870",
        "codigo": "OE.5.2.7.34",
        "descripcion": "Tablero de Distribucion TD-13",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "871",
        "codigo": "OE.5.2.7.35",
        "descripcion": "Tablero de Distribucion TD-14",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "872",
        "codigo": "OE.5.2.7.36",
        "descripcion": "Tablero de Sub Distribucion TD-14-1",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "873",
        "codigo": "OE.5.2.7.37",
        "descripcion": "Tablero de Distribucion Estabilizado TDE-01",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "874",
        "codigo": "OE.5.2.7.38",
        "descripcion": "Tablero de Distribucion Estabilizado TDE-02",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "875",
        "codigo": "OE.5.2.7.39",
        "descripcion": "Tablero Bypass Comunicaciones TDC-01",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "876",
        "codigo": "OE.5.2.7.40",
        "descripcion": "Tablero de Distribucion TD-AA-01",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "877",
        "codigo": "OE.5.2.7.41",
        "descripcion": "Tablero de Distribucion TD-AA-02",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.7 TABLEROS DE DISTRIBUCION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "878",
        "codigo": "OE.5.2.8",
        "descripcion": "DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.2",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "879",
        "codigo": "OE.5.2.8.1",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 350 A, 30 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "880",
        "codigo": "OE.5.2.8.2",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 140 A, 30 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "881",
        "codigo": "OE.5.2.8.3",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 120 A, 30 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "882",
        "codigo": "OE.5.2.8.4",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 80 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "883",
        "codigo": "OE.5.2.8.5",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 70 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "884",
        "codigo": "OE.5.2.8.6",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 60 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "885",
        "codigo": "OE.5.2.8.7",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 50 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "886",
        "codigo": "OE.5.2.8.8",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 40 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "887",
        "codigo": "OE.5.2.8.9",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 30 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "888",
        "codigo": "OE.5.2.8.10",
        "descripcion": "Interruptor Termomagnetico de Caja Moldeada Tetrapolar 4 x 20 A, 20 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "889",
        "codigo": "OE.5.2.8.11",
        "descripcion": "Interruptor Termomagnetico Tipo Riel Bipolar 2 x 30 A, 10 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "890",
        "codigo": "OE.5.2.8.12",
        "descripcion": "Interruptor Termomagnético Tipo Riel Bipolar 2 X 20 A 10 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "891",
        "codigo": "OE.5.2.8.13",
        "descripcion": "Interruptor Termomagnético Tipo Riel Bipolar 2 X 16 A 10 KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "892",
        "codigo": "OE.5.2.8.14",
        "descripcion": "Interruptor diferencial 2 x 25 A - 30 miliamperios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "893",
        "codigo": "OE.5.2.8.15",
        "descripcion": "Contactor monofasico de 20 Amperios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "894",
        "codigo": "OE.5.2.8.16",
        "descripcion": "Reloj Horario",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "895",
        "codigo": "OE.5.2.8.17",
        "descripcion": "Prueba de aislamiento de tableros",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "896",
        "codigo": "OE.5.2.8.18",
        "descripcion": "Prueba de balanceo de carga",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "897",
        "codigo": "OE.5.2.8.19",
        "descripcion": "Interruptor Termomagnético tipo caja moldeada 3X200A / 220V / 60Hz / 25KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "898",
        "codigo": "OE.5.2.8.20",
        "descripcion": "Interruptor Termomagnético tipo caja moldeada 3X160A / 220V / 60Hz / 16KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "899",
        "codigo": "OE.5.2.8.21",
        "descripcion": "Interruptor Termomagnético tipo caja moldeada 3X80A / 220V / 60Hz / 16KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "900",
        "codigo": "OE.5.2.8.22",
        "descripcion": "Interruptor Termomagnético tipo caja moldeada 3X63A / 220V / 60Hz / 16KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "901",
        "codigo": "OE.5.2.8.23",
        "descripcion": "Interruptor Termomagnético tipo caja moldeada 3X40A / 220V / 60Hz / 16KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD6",
        "apu": null
    },
    {
        "id": "902",
        "codigo": "OE.5.2.8.24",
        "descripcion": "Interruptor Termomagnético para riel DIN 3X32A / 220V / 60Hz / 10KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "903",
        "codigo": "OE.5.2.8.25",
        "descripcion": "Interruptor Termomagnético para riel DIN 3X50A / 220V / 60Hz / 10KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "904",
        "codigo": "OE.5.2.8.26",
        "descripcion": "Dispositivo de proteccion contra sobre tension",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "905",
        "codigo": "OE.5.2.8.27",
        "descripcion": "Interrruptor Termomagnetico para riel DIN 3x40A/220V/60Hz/10KA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.2.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.2 SALIDA PARA INSTALACIONES ELÉCTRICAS",
            "OE.5.2.8 DISPOSITIVOS DE MANIOBRA Y PROTECCIÓN"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "906",
        "codigo": "OE.5.3",
        "descripcion": "SUMINISTRO E INSTALACION DE POSTES DE CAC 8m",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "907",
        "codigo": "OE.5.3.1",
        "descripcion": "Suministro e Instalación de Postes de CAC DE 8m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.3 SUMINISTRO E INSTALACION DE POSTES DE CAC 8m"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "908",
        "codigo": "OE.5.4",
        "descripcion": "INSTALACION DE PARARRAYOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "909",
        "codigo": "OE.5.4.1",
        "descripcion": "Pararrayo TIPO PDC 3,3 RADIO 65m, Nivel III, C/Disposit. de Cebado.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.4 INSTALACION DE PARARRAYOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "910",
        "codigo": "OE.5.4.2",
        "descripcion": "Sistema de protección contra descargas eléctricas",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.4 INSTALACION DE PARARRAYOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "911",
        "codigo": "OE.5.5",
        "descripcion": "INSTALACIÓN DEL SISTEMA DE PUESTA A TIERRA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "912",
        "codigo": "OE.5.5.1",
        "descripcion": "Pozo puesta a tierra",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.5 INSTALACIÓN DEL SISTEMA DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "913",
        "codigo": "OE.5.5.2",
        "descripcion": "Pruebas Eléctricas ( Resistencia de Puesta a Tierra)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.5 INSTALACIÓN DEL SISTEMA DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "914",
        "codigo": "OE.5.5.3",
        "descripcion": "Puesta a tierra",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.5 INSTALACIÓN DEL SISTEMA DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "915",
        "codigo": "OE.5.6",
        "descripcion": "ARTEFACTOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "916",
        "codigo": "OE.5.6.1",
        "descripcion": "LUMINARIAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "917",
        "codigo": "OE.5.6.1.1",
        "descripcion": "LUMINARIA TIPO DOWNLIGHT DE 2X18W, CODIGO DE PROTECCION IP 44, ADOSADO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "918",
        "codigo": "OE.5.6.1.2",
        "descripcion": "SPOT LIGHT DECORATIVO DLD 1x35W 220V, PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "919",
        "codigo": "OE.5.6.1.3",
        "descripcion": "BRAQUETE DE ALUMBRADO DE CABECERA DE CAMA 2x20W, PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "920",
        "codigo": "OE.5.6.1.4",
        "descripcion": "BRAQUETE DE ALUMBRADO PARA PASILLOS RSP 2X18W, PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "921",
        "codigo": "OE.5.6.1.5",
        "descripcion": "LUMINARIA HERMETICA CON TUBO LED CON DIFUSOR DE 2x36W (OFICINAS Y ZONAS DE ACCESO DEL PERSONAL) PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "922",
        "codigo": "OE.5.6.1.6",
        "descripcion": "LUMINARIA PARA ADOSAR CON TUBO LED DE 2x36W Y BALASTO ELECTRONICO",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "923",
        "codigo": "OE.5.6.1.7",
        "descripcion": "LÁMPARA GERMICIDA ULTRAVIOLETA 30W, 220V 60HZ CON BALASTRO ELECTRÓNICO PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "924",
        "codigo": "OE.5.6.1.8",
        "descripcion": "LUMINARIA PARA ALUMBRADO DE GUARDIA CON LAMP. AHORRADORAS DE 11W, 220V, 60Hz PARA ADOSAR",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "925",
        "codigo": "OE.5.6.1.9",
        "descripcion": "LAMPARA CIALITICA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "926",
        "codigo": "OE.5.6.1.10",
        "descripcion": "LUMINARIA LED DE ALUMBRADO PUBLICO DE 150W (ZONA EXTERIOR DE AMBULANCIAS)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "927",
        "codigo": "OE.5.6.1.11",
        "descripcion": "LUZ DE EMERGENCIA DE BATERÍA TIPO LED 35 W PARA ADOSAR IP 42, IK 07",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "928",
        "codigo": "OE.5.6.1.12",
        "descripcion": "Prueba de medición del nivel de iluminación en interiores y exteriores",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "929",
        "codigo": "OE.5.6.1.13",
        "descripcion": "Luminaria tipo PANEL LED para empotrar, 60x60cm, 36w, 220v, 60Hz.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "930",
        "codigo": "OE.5.6.1.14",
        "descripcion": "Luminaria tipo PANEL LED DOWNLIGHT para empotrar circular 15w, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "931",
        "codigo": "OE.5.6.1.15",
        "descripcion": "Luminaria tipo ESTANCA LED para adosar 36w, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM6",
        "apu": null
    },
    {
        "id": "932",
        "codigo": "OE.5.6.1.16",
        "descripcion": "Luminaria compacta prismática lineal 33w, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "933",
        "codigo": "OE.5.6.1.17",
        "descripcion": "Luminaria tipo PLAFON de 18w, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "934",
        "codigo": "OE.5.6.1.18",
        "descripcion": "Luminaria tipo CABECERA LED de 18w, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "935",
        "codigo": "OE.5.6.1.19",
        "descripcion": "Equipo de iluminación de emergencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "936",
        "codigo": "OE.5.6.1.20",
        "descripcion": "Luminaria ORNAMENTAL tipo ISLA de 60W, 220v, 60Hz",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "937",
        "codigo": "OE.5.6.1.21",
        "descripcion": "Lampara de examen clinico LED tipo cuello de ganso",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "938",
        "codigo": "OE.5.6.1.22",
        "descripcion": "Lampara Spot Dicroico de 6 W",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "939",
        "codigo": "OE.5.6.1.23",
        "descripcion": "Braquet  Reflector de 13 W",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "940",
        "codigo": "OE.5.6.1.24",
        "descripcion": "Braquet de Pared exterior E27",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "941",
        "codigo": "OE.5.6.1.25",
        "descripcion": "Luminaria Tipo Aplique Led 20 W",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.6 ARTEFACTOS",
            "OE.5.6.1 LUMINARIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "942",
        "codigo": "OE.5.7",
        "descripcion": "EQUIPAMIENTO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "943",
        "codigo": "OE.5.7.1",
        "descripcion": "ELECTROBOMBAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.7",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "944",
        "codigo": "OE.5.7.1.1",
        "descripcion": "SUMINISTRO E INSTALACIÓN DE ELECTROBOMBAS 3.4 H.P.-3Ø-380v.-60cps, incluye tablero de protección IP66 y sistema de automatización",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.1 ELECTROBOMBAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "945",
        "codigo": "OE.5.7.1.2",
        "descripcion": "SUMINISTRO E INSTALACIÓN DE ELECTROBOMBAS SUMERGIBLES 3H.P.-3Ø-220v.-60cps, incluye tablero de protección IP66 y sistema de automatización",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.7.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.1 ELECTROBOMBAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "946",
        "codigo": "OE.5.7.2",
        "descripcion": "EQUIPOS VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.7",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "947",
        "codigo": "OE.5.7.2.1",
        "descripcion": "GRUPO ELECTROGENO de 140KVA prime, salida 380/220V, 1800RPM, 60HZ, incl Accesorios y Tanque de Comb.",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "948",
        "codigo": "OE.5.7.2.2",
        "descripcion": "UPS TRIFASICO 20 KVA, 2 BATERIAS INTERNAS, INCLUYE TRANSFORMADOR DE AISLAMIENTO Y AUTOTRANSFORMADOR TRIFASICO 380/220V.",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "949",
        "codigo": "OE.5.7.2.3",
        "descripcion": "Suministro e instalacion del Grupo electrogeno y tablero de transferencia",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.5.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "950",
        "codigo": "OE.5.7.2.4",
        "descripcion": "Sistemas de alimentación ininterrumpida 20 KVA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "951",
        "codigo": "OE.5.7.2.5",
        "descripcion": "Sistemas de alimentación ininterrumpida 6 KVA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "952",
        "codigo": "OE.5.7.2.6",
        "descripcion": "Transformador de aislamiento de 20 KVA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "953",
        "codigo": "OE.5.7.2.7",
        "descripcion": "Transformador de aislamiento de 6 KVA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "954",
        "codigo": "OE.5.7.2.8",
        "descripcion": "Instalacion del sistema de respaldo de alimentacion ininterrumpida de 20KVA y de 6 KVA",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.7.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.7 EQUIPAMIENTO",
            "OE.5.7.2 EQUIPOS VARIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "955",
        "codigo": "OE.5.8",
        "descripcion": "INSTALACIONES INDUSTRIALES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "956",
        "codigo": "OE.5.8.1",
        "descripcion": "BANDEJAS ELECTRICAS DE 300x100mm",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "957",
        "codigo": "OE.5.8.1.1",
        "descripcion": "Bandeja de rejilla de acero electrosoldada de 300x100 mm/ 3m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.8.1 BANDEJAS ELECTRICAS DE 300x100mm"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "958",
        "codigo": "OE.5.8.1.2",
        "descripcion": "Accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.8.1 BANDEJAS ELECTRICAS DE 300x100mm"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "959",
        "codigo": "OE.5.8.1.3",
        "descripcion": "Soporte INSTA-FIX para suspensión en trapecio DE 370X80mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.8.1 BANDEJAS ELECTRICAS DE 300x100mm"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "960",
        "codigo": "OE.5.8.1.4",
        "descripcion": "Soportes de Distanciador para fijar en pared de 300mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.8.1 BANDEJAS ELECTRICAS DE 300x100mm"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "961",
        "codigo": "OE.5.6.16",
        "descripcion": "SISTEMA DE VENTILACION MECANICA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "962",
        "codigo": "OE.5.6.16.1",
        "descripcion": "SISTEMA DE INYECCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DEECOGRAFÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.16",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "963",
        "codigo": "OE.5.6.16.1.1",
        "descripcion": "VENTILADOR HELICOCENTRIFUGO( 2410 RPM - 30W - 220 V - 1Ø - 60 HZ - 85 CFM - 3.7 MMCA - 55 DB -Paprox. 1.5 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.1 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DEECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "964",
        "codigo": "OE.5.6.16.1.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.1 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DEECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "965",
        "codigo": "OE.5.6.16.1.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE INYECCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.1 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DEECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "966",
        "codigo": "OE.5.6.16.1.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.1 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DEECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "967",
        "codigo": "OE.5.6.16.2",
        "descripcion": "SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DE ECOGRAFÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.16",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "968",
        "codigo": "OE.5.6.16.2.1",
        "descripcion": "EXTRACTOR AXIAL DIRECTO ( 2342 RPM - 38W - 220V - 1Ø-60 HZ - 102 CFM -61 DB -Paprox. 5.4 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.2 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DE ECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "969",
        "codigo": "OE.5.6.16.2.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.2 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DE ECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "970",
        "codigo": "OE.5.6.16.2.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE EXTRACCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.2 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DE ECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "971",
        "codigo": "OE.5.6.16.2.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.2 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE RAYOS X Y SALA DE ECOGRAFÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "972",
        "codigo": "OE.5.6.16.3",
        "descripcion": "SISTEMA DE INYECCIÓN DE AIRE EN LABORATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.16",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "973",
        "codigo": "OE.5.6.16.3.1",
        "descripcion": "VENTILADOR HELICOCENTRIFUGO( 2417 RPM - 30W - 220 V - 1Ø - 60 HZ - 77 CFM - 3.46 MMCA - 55 DB -Paprox. 1.5 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.3 SISTEMA DE INYECCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "974",
        "codigo": "OE.5.6.16.3.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.3 SISTEMA DE INYECCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "975",
        "codigo": "OE.5.6.16.3.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE INYECCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.3 SISTEMA DE INYECCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "976",
        "codigo": "OE.5.6.16.3.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.3 SISTEMA DE INYECCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "977",
        "codigo": "OE.5.6.16.4",
        "descripcion": "SISTEMA DE EXTRACCIÓN DE AIRE EN LABORATORIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.16",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "978",
        "codigo": "OE.5.6.16.4.1",
        "descripcion": "EXTRACTOR AXIAL DIRECTO ( 2342 RPM - 38W - 220V - 1Ø-60 HZ - 92 CFM - 61DB -Paprox. 5.4 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.4 SISTEMA DE EXTRACCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "979",
        "codigo": "OE.5.6.16.4.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.4 SISTEMA DE EXTRACCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "980",
        "codigo": "OE.5.6.16.4.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE EXTRACCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.4 SISTEMA DE EXTRACCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "981",
        "codigo": "OE.5.6.16.4.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.4 SISTEMA DE EXTRACCIÓN DE AIRE EN LABORATORIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "982",
        "codigo": "OE.5.6.16.5",
        "descripcion": "SISTEMA DE INYECCIÓN DE AIRE EN SALA DE PARTOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.16",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "983",
        "codigo": "OE.5.6.16.5.1",
        "descripcion": "VENTILADOR HELICOCENTRIFUGO( 2400 RPM - 30W - 220 V - 1Ø - 60 HZ - 69 CFM - 2.24MMCA - 55 DB -Paprox. 1.5 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.5 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "984",
        "codigo": "OE.5.6.16.5.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.5 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "985",
        "codigo": "OE.5.6.16.5.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE INYECCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.5 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "986",
        "codigo": "OE.5.6.16.5.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.5",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.5 SISTEMA DE INYECCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "987",
        "codigo": "OE.5.6.16.6",
        "descripcion": "SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE PARTOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.16",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "988",
        "codigo": "OE.5.6.16.6.1",
        "descripcion": "VENTILADOR HELICOCENTRIFUGO( 2410 RPM - 30W - 220 V - 1Ø - 60 HZ - 83 CFM - 3.23 MMCA - 55 DB -Paprox. 1.5 Kg)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.6",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.6 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "989",
        "codigo": "OE.5.6.16.6.2",
        "descripcion": "SUMINISTRO E INSTALACION DE DUCTOS DE PLANCHA GALVANIZADA. INC ACCESORIOS, DAMPERS DE REGULACION, ANCLAJES.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.6",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.6 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "990",
        "codigo": "OE.5.6.16.6.3",
        "descripcion": "SUMINISTRO E INSTALACION DE REJILLA DE EXTRACCIÓN",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.6",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.6 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "991",
        "codigo": "OE.5.6.16.6.4",
        "descripcion": "CAJA PORTAFILTROS 154x319x154mm, INC. FILTROS, ACCESORIOS, ANCLAJES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.16.6",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.16 SISTEMA DE VENTILACION MECANICA",
            "OE.5.6.16.6 SISTEMA DE EXTRACCIÓN DE AIRE EN SALA DE PARTOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "992",
        "codigo": "OE.5.6.18",
        "descripcion": "SISTEMA DE AIRE ACONDICIONADO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "993",
        "codigo": "OE.5.6.18.1",
        "descripcion": "SUMINISTRO E INSTALACIONE DE UNIDADES EXTERIORES/ UNIDADES CONDENSADORAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.18",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "994",
        "codigo": "OE.5.6.18.1.1",
        "descripcion": "UNIDAD CONDENSADORA VRV DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 48000 BTU/H-3.6 kW-220 V-1f-60Hz)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.1",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.1 SUMINISTRO E INSTALACIONE DE UNIDADES EXTERIORES/ UNIDADES CONDENSADORAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "995",
        "codigo": "OE.5.6.18.2",
        "descripcion": "SUMINISTRO E INSTALACION DE UNIDADES INTERIORES/ UNIDADES EVAPORADORAS (VRF)",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.18",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "996",
        "codigo": "OE.5.6.18.2.1",
        "descripcion": "UNIDAD EVAPORADORA MONTADO EN PARED DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 7500 BTU/H-0.03 KW-220V-1F-60HZ)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.2 SUMINISTRO E INSTALACION DE UNIDADES INTERIORES/ UNIDADES EVAPORADORAS (VRF)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "997",
        "codigo": "OE.5.6.18.2.2",
        "descripcion": "UNIDAD EVAPORADORA MONTADO EN PARED DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 9600 BTU/H-0.03 KW-220V-1F-60HZ)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.2 SUMINISTRO E INSTALACION DE UNIDADES INTERIORES/ UNIDADES EVAPORADORAS (VRF)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "998",
        "codigo": "OE.5.6.18.2.3",
        "descripcion": "UNIDAD EVAPORADORA MONTADO EN PARED DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 15400 BTU/H-0.03 KW-220V-1F-60HZ)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.2",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.2 SUMINISTRO E INSTALACION DE UNIDADES INTERIORES/ UNIDADES EVAPORADORAS (VRF)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "999",
        "codigo": "OE.5.6.18.3",
        "descripcion": "SUMINISTRO E INSTALACION DE SISTEMA CONVENCIONAL (FRÍO /CALOR)",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.18",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1000",
        "codigo": "OE.5.6.18.3.1",
        "descripcion": "UNIDAD CONDENSADORA DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 18000 BTU/H-2 kW-220 V-1f-60Hz)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.3 SUMINISTRO E INSTALACION DE SISTEMA CONVENCIONAL (FRÍO /CALOR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1001",
        "codigo": "OE.5.6.18.3.2",
        "descripcion": "UNIDAD EVAPORADORA DE REFRIGERANTE R-410A (CAPACIDAD NOMINAL DE 18000 BTU/H-2 Kw-220 V-1f-60Hz)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.3",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.3 SUMINISTRO E INSTALACION DE SISTEMA CONVENCIONAL (FRÍO /CALOR)"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1002",
        "codigo": "OE.5.6.18.4",
        "descripcion": "SUMINISTRO E INSTALACION DE REFNETS (BRANCH).",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.18",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1003",
        "codigo": "OE.5.6.18.4.1",
        "descripcion": "REFNET JOINT TIPO 1 (Branch Kit).",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.4",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.4 SUMINISTRO E INSTALACION DE REFNETS (BRANCH)."
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1004",
        "codigo": "OE.5.6.18.5",
        "descripcion": "SUMINISTRO E INSTALACION DE CONTROLES Y PANEL DECORATIVO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.18",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1005",
        "codigo": "OE.5.6.18.3.5.1",
        "descripcion": "BOMBA DE CONDENSADO (Kit Drenaje).",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.3.5",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.5 SUMINISTRO E INSTALACION DE CONTROLES Y PANEL DECORATIVO",
            "OE.5.6.18.4.1 REFNET JOINT TIPO 1 (Branch Kit)."
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1006",
        "codigo": "OE.5.6.18.3.5.2",
        "descripcion": "CONTROLADOR REMOTO NAVEGACION (CON CABLE), EN PARED.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.3.5",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.5 SUMINISTRO E INSTALACION DE CONTROLES Y PANEL DECORATIVO",
            "OE.5.6.18.4.1 REFNET JOINT TIPO 1 (Branch Kit)."
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1007",
        "codigo": "OE.5.6.18.3.5.3",
        "descripcion": "TUBERIA PVC-SAP ELECTRICA Ø=3/4\", INC. ACCESORIOS. EN AIRE ACONDICIONADO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.3.5",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.5 SUMINISTRO E INSTALACION DE CONTROLES Y PANEL DECORATIVO",
            "OE.5.6.18.4.1 REFNET JOINT TIPO 1 (Branch Kit)."
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1008",
        "codigo": "OE.5.6.18.3.5.4",
        "descripcion": "CABLE DE CONTROL FPLR 2x18 AWG LIBRE DE HALOGENO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.3.5",
        "nivel_jerarquia": 7,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.5 SUMINISTRO E INSTALACION DE CONTROLES Y PANEL DECORATIVO",
            "OE.5.6.18.4.1 REFNET JOINT TIPO 1 (Branch Kit)."
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1009",
        "codigo": "OE.5.6.18.6",
        "descripcion": "SUMINISTRO E INSTALACION DE TUBERIAS DE REFRIGERACION",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.18",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1010",
        "codigo": "OE.5.6.18.6.1",
        "descripcion": "TUBERIA DE COBRE DN 1/4\" - ØE 1/4\" TIPO FLEXIBLE, INC. AISLAMIENTO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.6",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.6 SUMINISTRO E INSTALACION DE TUBERIAS DE REFRIGERACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1011",
        "codigo": "OE.5.6.18.6.2",
        "descripcion": "TUBERIA DE COBRE DN 1/4\" - ØE 3/8\" TIPO L, INC. AISLAMIENTO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.6",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.6 SUMINISTRO E INSTALACION DE TUBERIAS DE REFRIGERACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1012",
        "codigo": "OE.5.6.18.6.3",
        "descripcion": "TUBERIA DE COBRE DN 3/8\" - ØE 1/2\" TIPO L, INC. AISLAMIENTO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.6",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.6 SUMINISTRO E INSTALACION DE TUBERIAS DE REFRIGERACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1013",
        "codigo": "OE.5.6.18.6.4",
        "descripcion": "TUBERIA DE COBRE DN 1/2\" - ØE 5/8\" TIPO L, INC. AISLAMIENTO.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.6",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.6 SUMINISTRO E INSTALACION DE TUBERIAS DE REFRIGERACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1014",
        "codigo": "OE.5.6.18.7",
        "descripcion": "CARGA DE REFRIGERACION",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.18",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1015",
        "codigo": "OE.5.6.18.7.1",
        "descripcion": "CARGA DE GAS REFRIGERANTE R410 ADICIONAL.",
        "unidad": "kg",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.7",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.7 CARGA DE REFRIGERACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1016",
        "codigo": "OE.5.6.18.8",
        "descripcion": "BASES DE APOYO PARA EQUIPOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.18",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1017",
        "codigo": "OE.5.6.18.8.1",
        "descripcion": "PERFIL PARA SOPORTE DE UNIDADES CONDENSADORAS, INC. ANCLAJE QUIMICO, PLANCHA e=1/4\", ACABADOS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.8",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.8 BASES DE APOYO PARA EQUIPOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1018",
        "codigo": "OE.5.6.18.9",
        "descripcion": "COLGADORES Y SOPORTES PARA TUBERIAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.5.6.18",
        "nivel_jerarquia": 5,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1019",
        "codigo": "OE.5.6.18.9.1",
        "descripcion": "SOPORTE DE PISO CON PERNO Ø3/8\", INC. ANCLAJE, ACABADOS.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.9",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.9 COLGADORES Y SOPORTES PARA TUBERIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1020",
        "codigo": "OE.5.6.18.9.2",
        "descripcion": "ANCLAJE PARA TUBERIA DE COBRE (dos abrazaderas), EN MONTANTES.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.5.6.18.9",
        "nivel_jerarquia": 6,
        "jerarquia": [
            "OE.5 INSTALACIONES ELÉCTRICAS",
            "OE.5.8 INSTALACIONES INDUSTRIALES",
            "OE.5.6.18 SISTEMA DE AIRE ACONDICIONADO",
            "OE.5.6.18.9 COLGADORES Y SOPORTES PARA TUBERIAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1021",
        "codigo": "OE.6",
        "descripcion": "INSTALACIONES DE COMUNICACIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE",
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1022",
        "codigo": "OE.6.1",
        "descripcion": "CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1023",
        "codigo": "OE.6.1.1",
        "descripcion": "CABLES EN TUBERÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.1",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1024",
        "codigo": "OE.6.1.1.1",
        "descripcion": "Cable UTP Categoria 6A",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1025",
        "codigo": "OE.6.1.1.2",
        "descripcion": "Cable FPL 2X1 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1026",
        "codigo": "OE.6.1.1.3",
        "descripcion": "Cable de audio polarizado 2x2.5 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1027",
        "codigo": "OE.6.1.1.4",
        "descripcion": "Cable de Cu desnudo de 25 mm2",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1028",
        "codigo": "OE.6.1.1.5",
        "descripcion": "Cable de Fibra Optica OM4 Multimodo de 50um/125um /OM4 10GbE.",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1029",
        "codigo": "OE.6.1.1.6",
        "descripcion": "Cable FPL 2X16 AWG",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1030",
        "codigo": "OE.6.1.1.7",
        "descripcion": "Tendido de Cable UTP Categoria 6A",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1031",
        "codigo": "OE.6.1.1.8",
        "descripcion": "Tendido de Cable FPL 2X1 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1032",
        "codigo": "OE.6.1.1.9",
        "descripcion": "Tendido de Cable de audio polarizado 2x2.5 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1033",
        "codigo": "OE.6.1.1.10",
        "descripcion": "Tendido de Cable de Cu desnudo de 25 mm2",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1034",
        "codigo": "OE.6.1.1.11",
        "descripcion": "Tendido de Cable de Fibra Optica OM4 Multimodo de 50um/125um /OM4 10GbE",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1035",
        "codigo": "OE.6.1.1.12",
        "descripcion": "Tendido de Cable FPL 2X16 AWG",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1036",
        "codigo": "OE.6.1.1.13",
        "descripcion": "Tendido de Cable de Audio 2X14 AWG",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.1.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.1 CABLEADO ESTRUCTURADO EN INTERIORES DE EDIFICIOS",
            "OE.6.1.1 CABLES EN TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1037",
        "codigo": "OE.6.2",
        "descripcion": "CANALETAS, CONDUCTOS Y/O TUBERÍAS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1038",
        "codigo": "OE.6.2.1",
        "descripcion": "Tubería Conduit EMT de 25 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1039",
        "codigo": "OE.6.2.2",
        "descripcion": "Tubería Conduit EMT de 20 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1040",
        "codigo": "OE.6.2.3",
        "descripcion": "Curva Conduit EMT de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1041",
        "codigo": "OE.6.2.4",
        "descripcion": "Curva Conduit ETM de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1042",
        "codigo": "OE.6.2.5",
        "descripcion": "Union Conduit EMT de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1043",
        "codigo": "OE.6.2.6",
        "descripcion": "Union Conduit ETM de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1044",
        "codigo": "OE.6.2.7",
        "descripcion": "Conector Conduit EMT de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1045",
        "codigo": "OE.6.2.8",
        "descripcion": "Conector Conduit EMT de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1046",
        "codigo": "OE.6.2.9",
        "descripcion": "Tuberia Electrica PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1047",
        "codigo": "OE.6.2.10",
        "descripcion": "Curva PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1048",
        "codigo": "OE.6.2.11",
        "descripcion": "Unión PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1049",
        "codigo": "OE.6.2.12",
        "descripcion": "Conector PVC SAP NTP 399.006 DE 50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1050",
        "codigo": "OE.6.2.13",
        "descripcion": "Bandeja tipo malla electrozincado 105X200 X3000 mm con aterramiento incluye accesorios de instalación",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1051",
        "codigo": "OE.6.2.14",
        "descripcion": "Tuberia Electrica PVC SAP NTP 399.006 DE 25 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1052",
        "codigo": "OE.6.2.15",
        "descripcion": "Union PVC SAP NTP 399.006 de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1053",
        "codigo": "OE.6.2.16",
        "descripcion": "Conector PVC SAP NTP 399.006 de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1054",
        "codigo": "OE.6.2.17",
        "descripcion": "Curva PVC SAP NTP 399.006 de 25 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1055",
        "codigo": "OE.6.2.18",
        "descripcion": "Tuberia Conduit Flexible de 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1056",
        "codigo": "OE.6.2.19",
        "descripcion": "Prensaestopa Conduit 20 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1057",
        "codigo": "OE.6.2.20",
        "descripcion": "Instalación de Tubería Conduit EMT de 25 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1058",
        "codigo": "OE.6.2.21",
        "descripcion": "Instalación deTubería Conduit EMT de 20 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1059",
        "codigo": "OE.6.2.22",
        "descripcion": "Instalación de Tuberia Conduit Flexible de 20 mm",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.2 CANALETAS, CONDUCTOS Y/O TUBERÍAS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1060",
        "codigo": "OE.6.3",
        "descripcion": "SALIDA DE COMUNICACIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1061",
        "codigo": "OE.6.3.1",
        "descripcion": "Salida de datos categoria 6A simple",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1062",
        "codigo": "OE.6.3.2",
        "descripcion": "Salida de datos categoria 6A doble",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1063",
        "codigo": "OE.6.3.3",
        "descripcion": "Salida detector de humo",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1064",
        "codigo": "OE.6.3.4",
        "descripcion": "Salida Estación Manual",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1065",
        "codigo": "OE.6.3.5",
        "descripcion": "Salida sirena con luz estrobo",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1066",
        "codigo": "OE.6.3.6",
        "descripcion": "Salida panel de alarma de incendio",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1067",
        "codigo": "OE.6.3.7",
        "descripcion": "Salida Parlantes",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1068",
        "codigo": "OE.6.3.8",
        "descripcion": "Salida microfono/audio",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1069",
        "codigo": "OE.6.3.9",
        "descripcion": "Salida consola amplificador",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1070",
        "codigo": "OE.6.3.10",
        "descripcion": "Salida para módulo de cabecera de llamado de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1071",
        "codigo": "OE.6.3.11",
        "descripcion": "Salida para módulo de anulación",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1072",
        "codigo": "OE.6.3.12",
        "descripcion": "Salida para pulsador de baño",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1073",
        "codigo": "OE.6.3.13",
        "descripcion": "Salida para luz indicador de llamada de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1074",
        "codigo": "OE.6.3.14",
        "descripcion": "Salida para central de llamada de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1075",
        "codigo": "OE.6.3.15",
        "descripcion": "Salida detector de temperatura",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1076",
        "codigo": "OE.6.3.16",
        "descripcion": "Salida de atenuador de altavoz",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1077",
        "codigo": "OE.6.3.17",
        "descripcion": "Salida para datos categoria 6A simple",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1078",
        "codigo": "OE.6.3.18",
        "descripcion": "Salida para datos categoria 6A doble",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1079",
        "codigo": "OE.6.3.19",
        "descripcion": "Salida para detector de humo",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1080",
        "codigo": "OE.6.3.20",
        "descripcion": "Salida para Estación Manual",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1081",
        "codigo": "OE.6.3.21",
        "descripcion": "Salida para sirena con luz estrobo",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1082",
        "codigo": "OE.6.3.22",
        "descripcion": "Salida para panel de alarma de incendio",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1083",
        "codigo": "OE.6.3.23",
        "descripcion": "Salida para Parlantes",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1084",
        "codigo": "OE.6.3.24",
        "descripcion": "Salida para microfono/audio",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1085",
        "codigo": "OE.6.3.25",
        "descripcion": "Salida para consola amplificador",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1086",
        "codigo": "OE.6.3.26",
        "descripcion": "Salida de módulo de cabecera de llamado de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1087",
        "codigo": "OE.6.3.27",
        "descripcion": "Salida de módulo de anulación",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1088",
        "codigo": "OE.6.3.28",
        "descripcion": "Salida de pulsador de baño",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1089",
        "codigo": "OE.6.3.29",
        "descripcion": "Salida de luz indicador de llamada de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1090",
        "codigo": "OE.6.3.30",
        "descripcion": "Salida de central de llamada de enfermera",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1091",
        "codigo": "OE.6.3.31",
        "descripcion": "Salida para detector de temperatura",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1092",
        "codigo": "OE.6.3.32",
        "descripcion": "Salida para atenuador de altavoz",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1093",
        "codigo": "OE.6.3.33",
        "descripcion": "salida para receptor AV",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1094",
        "codigo": "OE.6.3.34",
        "descripcion": "Salida para HDMI",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1095",
        "codigo": "OE.6.3.35",
        "descripcion": "Salida para parlante de techo",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.3 SALIDA DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1096",
        "codigo": "OE.6.4",
        "descripcion": "CONDUCTORES DE COMUNICACIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1097",
        "codigo": "OE.6.4.1",
        "descripcion": "Zanja Electroducto 0.40x0.60m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.4 CONDUCTORES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1098",
        "codigo": "OE.6.4.2",
        "descripcion": "Relleno y compactado con material propio 0.50 x0.60 m",
        "unidad": "m",
        "es_titulo": false,
        "parent_id": "OE.6.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.4 CONDUCTORES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1099",
        "codigo": "OE.6.4.3",
        "descripcion": "Buzon Electroducto de Concreto Armado con tapa 0.60 x0.60 x 0.60m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.4 CONDUCTORES DE COMUNICACIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1100",
        "codigo": "OE.6.5",
        "descripcion": "PATCH PANEL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1101",
        "codigo": "OE.6.5.1",
        "descripcion": "Patch Panel Cat6A de 24 puertos",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1102",
        "codigo": "OE.6.5.2",
        "descripcion": "Patch Cord UTP Cat6A de 3m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1103",
        "codigo": "OE.6.5.3",
        "descripcion": "Patch cord UTP Cat6A de 20cm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1104",
        "codigo": "OE.6.5.4",
        "descripcion": "Etiquetas adhesivas de identificacion, señalizacion y ordenamiento para el area de Trabajo y Gabinete",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1105",
        "codigo": "OE.6.5.5",
        "descripcion": "Patch cord cat 6A x 1m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1106",
        "codigo": "OE.6.5.6",
        "descripcion": "Patch cord cat 6A x 3m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1107",
        "codigo": "OE.6.5.7",
        "descripcion": "Patch Cord de Fibra Optica multimodo OM4 de 2m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1108",
        "codigo": "OE.6.5.8",
        "descripcion": "Bandeja de fibra optica de 1 RU incluye patch panel y acopladores",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1109",
        "codigo": "OE.6.5.9",
        "descripcion": "Bandeja de empalme para bandeja de FO incluye accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1110",
        "codigo": "OE.6.5.10",
        "descripcion": "Patch Panel Cat6A - 24 puertos",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1111",
        "codigo": "OE.6.5.11",
        "descripcion": "Etiquetas adhesivas de identificacion, señalizacion y ordenamiento",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1112",
        "codigo": "OE.6.5.12",
        "descripcion": "Patch cord cat 6A UTP de 1m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1113",
        "codigo": "OE.6.5.13",
        "descripcion": "Patch cord  cat 6A UTP de 3m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1114",
        "codigo": "OE.6.5.14",
        "descripcion": "Patch Cord de Fibra Optica OM4 multimodo de 2m",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1115",
        "codigo": "OE.6.5.15",
        "descripcion": "Bandeja de fibra optica con patch panel y acopladores de 1 RU",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1116",
        "codigo": "OE.6.5.16",
        "descripcion": "Bandeja de empalme para bandeja de Fibra incluye accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.5 PATCH PANEL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1117",
        "codigo": "OE.6.6",
        "descripcion": "RACK DE COMUNICACIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1118",
        "codigo": "OE.6.6.1",
        "descripcion": "SWITCH",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1119",
        "codigo": "OE.6.6.1.1",
        "descripcion": "Switch Gigabit PoE de 48 puertos y 4 puertos SFP",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1120",
        "codigo": "OE.6.6.1.2",
        "descripcion": "Servicio de Instalación, configuración, capacitaciòn y Puesta en funcionamiento del patch panel/Rack de Comunicaciones",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.6.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1121",
        "codigo": "OE.6.6.1.3",
        "descripcion": "Switch Gigabit PoE de 24 puertos y 4 puertos SFP",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1122",
        "codigo": "OE.6.6.1.4",
        "descripcion": "Transceptor SFP, conector LC duplex",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1123",
        "codigo": "OE.6.6.1.5",
        "descripcion": "Switch Gigabit PoE 48 puertos, 4 puertos SFP",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1124",
        "codigo": "OE.6.6.1.6",
        "descripcion": "Switch Gigabit PoE de 24 Port y 4 Port SFP",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1125",
        "codigo": "OE.6.6.1.7",
        "descripcion": "Modulo Transceptor SFP, conector LC duplex",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.1 SWITCH"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1126",
        "codigo": "OE.6.6.2",
        "descripcion": "GABINETE DE COMUNICACION",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.6",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1127",
        "codigo": "OE.6.6.2.1",
        "descripcion": "Gabinete de comunicaciones de piso de 42 RU c/accesorios de instalacion.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1128",
        "codigo": "OE.6.6.2.2",
        "descripcion": "UPS de 3000VA rackeable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1129",
        "codigo": "OE.6.6.2.3",
        "descripcion": "Certificacion de puntos de cableado de datos Categoria 6A",
        "unidad": "pto",
        "es_titulo": false,
        "parent_id": "OE.6.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1130",
        "codigo": "OE.6.6.2.4",
        "descripcion": "Gabinete de comunicación de pared de 12 RU c/accesorios de Instalacion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1131",
        "codigo": "OE.6.6.2.5",
        "descripcion": "Gabinete de piso de 42 RU c/accesorios de instalacion.",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1132",
        "codigo": "OE.6.6.2.6",
        "descripcion": "Certificación de 111 puntos de cableado de datos categoría 6A y 02 puntos de fibra",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1133",
        "codigo": "OE.6.6.2.7",
        "descripcion": "Gabinete de comunicación de pared de 12 RU c/accesorios de Instalacion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.6.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.6 RACK DE COMUNICACIONES",
            "OE.6.6.2 GABINETE DE COMUNICACION"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1134",
        "codigo": "OE.6.7",
        "descripcion": "CAJA DE PASE PARA TRANSFORMADOR",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1135",
        "codigo": "OE.6.7.1",
        "descripcion": "Caja de paso con tapa Biselada de F° G° 200x200x100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1136",
        "codigo": "OE.6.7.2",
        "descripcion": "Caja de paso con tapa Biselada de F° G° 150x150x100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1137",
        "codigo": "OE.6.7.3",
        "descripcion": "Caja de paso pesada octogonal con tapa de 100x50 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1138",
        "codigo": "OE.6.7.4",
        "descripcion": "Caja de Paso con tapa Biselada de Fº Gº 100x100x100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1139",
        "codigo": "OE.6.7.5",
        "descripcion": "Caja de Paso con tapa Biselada de Fº Gº 300x300x100 mm",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1140",
        "codigo": "OE.6.8.",
        "descripcion": "SISTEMAS VARIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1141",
        "codigo": "OE.6.8.1",
        "descripcion": "SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1142",
        "codigo": "OE.6.8.1.1",
        "descripcion": "Detector de Humo direccionable incluye base",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1143",
        "codigo": "OE.6.8.1.2",
        "descripcion": "Estación manual de doble accion direccionable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1144",
        "codigo": "OE.6.8.1.3",
        "descripcion": "Sirena con luz estrobo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1145",
        "codigo": "OE.6.8.1.4",
        "descripcion": "Panel de alarma de Incendios Direccionable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1146",
        "codigo": "OE.6.8.1.5",
        "descripcion": "Servicio de Instalacion, configuracion, capacitación y puesta en funcionamiento del Sistema de deteccion y alarma de incendios",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1147",
        "codigo": "OE.6.8.1.6",
        "descripcion": "Detector de Temperatura direccionable incluye base",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1148",
        "codigo": "OE.6.8.1.7",
        "descripcion": "Instalación de Detector de Humo direccionable con base",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1149",
        "codigo": "OE.6.8.1.8",
        "descripcion": "Instalación de Estación manual doble accion direccionable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1150",
        "codigo": "OE.6.8.1.9",
        "descripcion": "Instalación de Sirena con luz estrobo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1151",
        "codigo": "OE.6.8.1.10",
        "descripcion": "Instalación de Panel de alarma de Incendios Direccionable",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1152",
        "codigo": "OE.6.8.1.11",
        "descripcion": "Instalación de Detector de Temperatura direccionable con base",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.1",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.1 SISTEMA DE DETECCION Y ALARMA CONTRA INCENDIOS"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1153",
        "codigo": "OE.6.8.2",
        "descripcion": "SISTEMA DE VIDEO VIGILANCIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1154",
        "codigo": "OE.6.8.2.1",
        "descripcion": "Camara IP fija PoE para Exterior incluye accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1155",
        "codigo": "OE.6.8.2.2",
        "descripcion": "Grabador de video NVR de 16 canales incluye licencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1156",
        "codigo": "OE.6.8.2.3",
        "descripcion": "Monitor LCD de 24\"para CCTV",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1157",
        "codigo": "OE.6.8.2.4",
        "descripcion": "Estacion de video Vigilancia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1158",
        "codigo": "OE.6.8.2.5",
        "descripcion": "Servicio de Instalacion, configuracion, capacitación y puesta en funcionamiento del Sistema de video vigilancia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1159",
        "codigo": "OE.6.8.2.6",
        "descripcion": "Camara IP PoE tipo Domo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1160",
        "codigo": "OE.6.8.2.7",
        "descripcion": "Camara IP PoE tipo Bullet",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1161",
        "codigo": "OE.6.8.2.8",
        "descripcion": "Grabador de video NVR de 24 canales incluye licencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1162",
        "codigo": "OE.6.8.2.9",
        "descripcion": "Instalación de Camara IP PoE tipo Domo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1163",
        "codigo": "OE.6.8.2.10",
        "descripcion": "Instalación de Camara IP PoE tipo Bullet",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1164",
        "codigo": "OE.6.8.2.11",
        "descripcion": "Instalación de Grabador de video NVR de 24  canales incluye licencia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1165",
        "codigo": "OE.6.8.2.12",
        "descripcion": "Instalación de Unidad Central de Proceso -CPU",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1166",
        "codigo": "OE.6.8.2.13",
        "descripcion": "Instalación de Monitor LED",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1167",
        "codigo": "OE.6.8.2.14",
        "descripcion": "Instalación de Disco Duro Interno",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1168",
        "codigo": "OE.6.8.2.15",
        "descripcion": "Instalación de Acumulador de energía – Equipo UPS",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.2",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.2 SISTEMA DE VIDEO VIGILANCIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1169",
        "codigo": "OE.6.8.3",
        "descripcion": "SISTEMA DE SONIDO AMBIENTAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1170",
        "codigo": "OE.6.8.3.1",
        "descripcion": "Parlantes de 6\" incluye accesosios para montaje en pared",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1171",
        "codigo": "OE.6.8.3.2",
        "descripcion": "Amplificador de 1000 Watts con Salida de 70 y 100 V",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1172",
        "codigo": "OE.6.8.3.3",
        "descripcion": "Consola mezcladora de audio de 8 canales",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1173",
        "codigo": "OE.6.8.3.4",
        "descripcion": "Microfono profesional con accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1174",
        "codigo": "OE.6.8.3.5",
        "descripcion": "Servicio de Instalacion, configuracion, capacitacion y puesta en funcionamiento del sistema de sonido ambiental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1175",
        "codigo": "OE.6.8.3.6",
        "descripcion": "Atenuador de volumen",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN3",
        "apu": null
    },
    {
        "id": "1176",
        "codigo": "OE.6.8.3.7",
        "descripcion": "Instalación de Parlantes de 6\" incluye accesosios  para montaje en pared",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1177",
        "codigo": "OE.6.8.3.8",
        "descripcion": "Instalación de Amplificador de 1000 Watts con Salida de 70 y 100 V",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1178",
        "codigo": "OE.6.8.3.9",
        "descripcion": "Instalación de Consola mezcladora de audio de 8 canales",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1179",
        "codigo": "OE.6.8.3.10",
        "descripcion": "Instalación de Microfono profesional con accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1180",
        "codigo": "OE.6.8.3.11",
        "descripcion": "Instalación de Atenuador de volumen",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.3",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.3 SISTEMA DE SONIDO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1181",
        "codigo": "OE.6.8.4",
        "descripcion": "SISTEMAS DE LLAMADA DE ENFERMERA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1182",
        "codigo": "OE.6.8.4.1",
        "descripcion": "Central de llamada de enfermera con accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1183",
        "codigo": "OE.6.8.4.2",
        "descripcion": "Consola de sobremesa para comunicación",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1184",
        "codigo": "OE.6.8.4.3",
        "descripcion": "UPS 1000 VA con accesorios de instalación",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "DD3",
        "apu": null
    },
    {
        "id": "1185",
        "codigo": "OE.6.8.4.4",
        "descripcion": "Modulo de cabecera de llamado de enfermera",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1186",
        "codigo": "OE.6.8.4.5",
        "descripcion": "Modulo boton de anulacion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1187",
        "codigo": "OE.6.8.4.6",
        "descripcion": "Pulsador de llamado de enfermera",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1188",
        "codigo": "OE.6.8.4.7",
        "descripcion": "Pulsador de baño",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1189",
        "codigo": "OE.6.8.4.8",
        "descripcion": "Luz indicador de llamada de enfermera",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1190",
        "codigo": "OE.6.8.4.9",
        "descripcion": "Servicio de Instalacion, configuración, capacitación y puesta en funcionamiento del sistema de llamada de enfermera",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1191",
        "codigo": "OE.6.8.4.10",
        "descripcion": "Instalación de Central de llamada de enfermera con accesorios",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1192",
        "codigo": "OE.6.8.4.11",
        "descripcion": "Instalación de Consola de sobremesa para comunicaion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1193",
        "codigo": "OE.6.8.4.12",
        "descripcion": "Instalación de Modulo de cabecera de llamado de enfermera",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1194",
        "codigo": "OE.6.8.4.13",
        "descripcion": "Instalación de Modulo boton de anulacion",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1195",
        "codigo": "OE.6.8.4.14",
        "descripcion": "Instalación de Pulsador de llamado a enfermeras",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1196",
        "codigo": "OE.6.8.4.15",
        "descripcion": "Instalación de Pulsador de baño",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1197",
        "codigo": "OE.6.8.4.16",
        "descripcion": "Instalación de Luz indicador de llamada de enfermera",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.4",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.4 SISTEMAS DE LLAMADA DE ENFERMERA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1198",
        "codigo": "OE.6.8.5",
        "descripcion": "SISTEMAS DE TELEFONIA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1199",
        "codigo": "OE.6.8.5.1",
        "descripcion": "Central telefonica IP incluye licenciamiento",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.5 SISTEMAS DE TELEFONIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1200",
        "codigo": "OE.6.8.5.2",
        "descripcion": "Telefono IP POE de mesa de uso general",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.5 SISTEMAS DE TELEFONIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1201",
        "codigo": "OE.6.8.5.3",
        "descripcion": "Servicio de instalación, configuración, capacitación y puesta en funcionamiento del Sistema de telefonia",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.6.8.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.5 SISTEMAS DE TELEFONIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1202",
        "codigo": "OE.6.8.5.4",
        "descripcion": "Instalación de Central telefonica IP incluye licenciamiento",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.5 SISTEMAS DE TELEFONIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1203",
        "codigo": "OE.6.8.5.5",
        "descripcion": "Instalación de Telefono IP POE de mesa de uso general",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.5",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.5 SISTEMAS DE TELEFONIA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1204",
        "codigo": "OE.6.8.6",
        "descripcion": "POZO DE PUESTA A TIERRA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1205",
        "codigo": "OE.6.8.6.1",
        "descripcion": "Pozo puesta a tierra",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.6 POZO DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1206",
        "codigo": "OE.6.8.6.2",
        "descripcion": "Pruebas Eléctricas ( Resistencia de Puesta a Tierra)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.6 POZO DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "MM3",
        "apu": null
    },
    {
        "id": "1207",
        "codigo": "OE.6.8.6.3",
        "descripcion": "Pozo puesta a tierra",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.6 POZO DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1208",
        "codigo": "OE.6.8.6.4",
        "descripcion": "Pruebas electricas (resistencia)",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.6",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.6 POZO DE PUESTA A TIERRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1209",
        "codigo": "OE.6.8.7",
        "descripcion": "SISTEMA DE SONIDO EN SALA DE REUNIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1210",
        "codigo": "OE.6.8.7.1",
        "descripcion": "Receptor A/V",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.7 SISTEMA DE SONIDO EN SALA DE REUNIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1211",
        "codigo": "OE.6.8.7.2",
        "descripcion": "Microfono inalambrico",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.7 SISTEMA DE SONIDO EN SALA DE REUNIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1212",
        "codigo": "OE.6.8.7.3",
        "descripcion": "Parlante de Techo",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.7",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.7 SISTEMA DE SONIDO EN SALA DE REUNIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1213",
        "codigo": "OE.6.8.8",
        "descripcion": "SISTEMA VISUAL EN SALA DE REUNIONES",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.6.8",
        "nivel_jerarquia": 4,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1214",
        "codigo": "OE.6.8.8.1",
        "descripcion": "Ecram Electrico",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.8 SISTEMA VISUAL EN SALA DE REUNIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1215",
        "codigo": "OE.6.8.8.2",
        "descripcion": "Proyector Multimedia",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.6.8.8",
        "nivel_jerarquia": 5,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.6.7 CAJA DE PASE PARA TRANSFORMADOR",
            "OE.6.8.8 SISTEMA VISUAL EN SALA DE REUNIONES"
        ],
        "especialidad": "contingencia",
        "modificacion": "PN6",
        "apu": null
    },
    {
        "id": "1216",
        "codigo": "OE.7.0",
        "descripcion": "PLAN OPERATIVO DE CIERRE TEMPORAL, TRASLADO, REINSTALACION Y PUESTA EN MARCHA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.7",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1217",
        "codigo": "OE.7.1",
        "descripcion": "TRASLADO Y PROTECCION DE EQUIPAMIENTO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.7",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1218",
        "codigo": "OE.7.1.1",
        "descripcion": "Gastos de proteccion de equipos",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.1 TRASLADO Y PROTECCION DE EQUIPAMIENTO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1219",
        "codigo": "OE.7.1.2",
        "descripcion": "Gastos de transporte de equipos",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.1 TRASLADO Y PROTECCION DE EQUIPAMIENTO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1220",
        "codigo": "OE.7.2",
        "descripcion": "TRASLADO EQUIPO BIOMEDICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.7",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1221",
        "codigo": "OE.7.2.1",
        "descripcion": "Contraste y verificacion de equipo biomedico a trasladar",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1222",
        "codigo": "OE.7.2.2",
        "descripcion": "Desinstalado de equipo biomedico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1223",
        "codigo": "OE.7.2.3",
        "descripcion": "Embalaje de equipo biomedico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1224",
        "codigo": "OE.7.2.4",
        "descripcion": "Transporte de equipo biomedico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1225",
        "codigo": "OE.7.2.5",
        "descripcion": "Instalacion de equipo biomedico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1226",
        "codigo": "OE.7.2.6",
        "descripcion": "Pruebas en vacio de equipo biomedico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.2",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.2 TRASLADO EQUIPO BIOMEDICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1227",
        "codigo": "OE.7.3",
        "descripcion": "TRASLADO EQUIPO ELECTROMECANICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.7",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1228",
        "codigo": "OE.7.3.1",
        "descripcion": "Contraste y verificacion de equipo electromecanico a trasladar",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1229",
        "codigo": "OE.7.3.2",
        "descripcion": "Desinstalado de equipo electromecanico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1230",
        "codigo": "OE.7.3.3",
        "descripcion": "Embalaje de equipo electromecanico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1231",
        "codigo": "OE.7.3.4",
        "descripcion": "Transporte de equipo electromecanico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1232",
        "codigo": "OE.7.3.5",
        "descripcion": "Instalacion de equipo electromecanico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1233",
        "codigo": "OE.7.3.6",
        "descripcion": "Pruebas en vacio de equipo electromecanico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.3",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.3 TRASLADO EQUIPO ELECTROMECANICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1234",
        "codigo": "OE.7.4",
        "descripcion": "TRASLADO EQUIPO INFORMATICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.7",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1235",
        "codigo": "OE.7.4.1",
        "descripcion": "Contraste y verificacion de equipo informatico a trasladar",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1236",
        "codigo": "OE.7.4.2",
        "descripcion": "Desinstalado de equipo informaticos",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1237",
        "codigo": "OE.7.4.3",
        "descripcion": "Embalaje de equipo informatico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1238",
        "codigo": "OE.7.4.4",
        "descripcion": "Transporte de equipo informatico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1239",
        "codigo": "OE.7.4.5",
        "descripcion": "Instalacion de equipo informatico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1240",
        "codigo": "OE.7.4.6",
        "descripcion": "Pruebas en vacio de equipo informatico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.4 TRASLADO EQUIPO INFORMATICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1241",
        "codigo": "OE.7.5",
        "descripcion": "TRASLADO INSTRUMENTAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.7",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1242",
        "codigo": "OE.7.5.1",
        "descripcion": "Contraste y verificacion de bienes a trasladar - instrumental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.5 TRASLADO INSTRUMENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1243",
        "codigo": "OE.7.5.2",
        "descripcion": "Embalaje de instrumental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.5 TRASLADO INSTRUMENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1244",
        "codigo": "OE.7.5.3",
        "descripcion": "Transporte instrumental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.5 TRASLADO INSTRUMENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1245",
        "codigo": "OE.7.5.4",
        "descripcion": "Desembalaje, verificacion y organizacion de instrumental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.5",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.5 TRASLADO INSTRUMENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1246",
        "codigo": "OE.7.6",
        "descripcion": "TRASLADO MOBILIARIO ADMINISTRATIVO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.7",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1247",
        "codigo": "OE.7.6.1",
        "descripcion": "Contraste de bienes a trasladar- mobiliario administrativo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.6",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.6 TRASLADO MOBILIARIO ADMINISTRATIVO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1248",
        "codigo": "OE.7.6.2",
        "descripcion": "Desinstalado de mobiliario administrativo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.6",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.6 TRASLADO MOBILIARIO ADMINISTRATIVO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1249",
        "codigo": "OE.7.6.3",
        "descripcion": "Embalaje de mobiliario administrativo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.6",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.6 TRASLADO MOBILIARIO ADMINISTRATIVO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1250",
        "codigo": "OE.7.6.4",
        "descripcion": "Transporte de mobiliario administrativo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.6",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.6 TRASLADO MOBILIARIO ADMINISTRATIVO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1251",
        "codigo": "OE.7.6.5",
        "descripcion": "Instalacion de mobiliario administrativo",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.6",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.6 TRASLADO MOBILIARIO ADMINISTRATIVO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1252",
        "codigo": "OE.7.7",
        "descripcion": "TRASLADO MOBILIARIO CLINICO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.7",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1253",
        "codigo": "OE.7.7.1",
        "descripcion": "Contraste de bienes a trasladar- mobiliario clinico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.7 TRASLADO MOBILIARIO CLINICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1254",
        "codigo": "OE.7.7.2",
        "descripcion": "Desinstalado de mobiliario clinico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.7 TRASLADO MOBILIARIO CLINICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1255",
        "codigo": "OE.7.7.3",
        "descripcion": "Embalaje de mobiliario clinico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.7 TRASLADO MOBILIARIO CLINICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1256",
        "codigo": "OE.7.7.4",
        "descripcion": "Transporte de mobiliario clinico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.7 TRASLADO MOBILIARIO CLINICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1257",
        "codigo": "OE.7.7.5",
        "descripcion": "Instalacion de mobiliario clinico",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.7",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.7 TRASLADO MOBILIARIO CLINICO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1258",
        "codigo": "OE.7.8",
        "descripcion": "TRASLADO PRODUCTOS FARMACEUTICOS Y LABORATORIO",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.7",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1259",
        "codigo": "OE.7.8.1",
        "descripcion": "Contraste de productos farmaceuticos y de laboratorio",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.8",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.8 TRASLADO PRODUCTOS FARMACEUTICOS Y LABORATORIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1260",
        "codigo": "OE.7.8.2",
        "descripcion": "Embalado de productos farmaceuticos y de laboratorio",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.8",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.8 TRASLADO PRODUCTOS FARMACEUTICOS Y LABORATORIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1261",
        "codigo": "OE.7.8.3",
        "descripcion": "Transporte de productos farmaceuticos y laboratorio",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.8",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.8 TRASLADO PRODUCTOS FARMACEUTICOS Y LABORATORIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1262",
        "codigo": "OE.7.8.4",
        "descripcion": "Instalacion de farmacia",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.7.8",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.6 INSTALACIONES DE COMUNICACIONES",
            "OE.7.8 TRASLADO PRODUCTOS FARMACEUTICOS Y LABORATORIO"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1263",
        "codigo": "OE.8",
        "descripcion": "IMPACTO AMBIENTAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE",
        "nivel_jerarquia": 2,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1264",
        "codigo": "OE.8.1",
        "descripcion": "PLAN DE MANEJO AMBIENTAL",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.8",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1265",
        "codigo": "OE.8.1.1",
        "descripcion": "Manejo de Residuos Solidos",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.8.1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.1 PLAN DE MANEJO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1266",
        "codigo": "OE.8.1.2",
        "descripcion": "Charlas de Sensibilización Ambiental",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.8.1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.1 PLAN DE MANEJO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1267",
        "codigo": "OE.8.1.3",
        "descripcion": "Monitoreo Ambiental",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.8.1",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.1 PLAN DE MANEJO AMBIENTAL"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1268",
        "codigo": "OE.8.4",
        "descripcion": "PLAN DE CIERRE DE OBRA",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE.8",
        "nivel_jerarquia": 3,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1269",
        "codigo": "OE.8.4.1",
        "descripcion": "Desmontaje de Instalaciones Provisionales",
        "unidad": "m2",
        "es_titulo": false,
        "parent_id": "OE.8.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.4 PLAN DE CIERRE DE OBRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1270",
        "codigo": "OE.8.4.2",
        "descripcion": "Punto ecologico x 3",
        "unidad": "und",
        "es_titulo": false,
        "parent_id": "OE.8.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.4 PLAN DE CIERRE DE OBRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1271",
        "codigo": "OE.8.4.3",
        "descripcion": "Señalizacion Ambiental",
        "unidad": "glb",
        "es_titulo": false,
        "parent_id": "OE.8.4",
        "nivel_jerarquia": 4,
        "jerarquia": [
            "OE.8 IMPACTO AMBIENTAL",
            "OE.8.4 PLAN DE CIERRE DE OBRA"
        ],
        "especialidad": "contingencia",
        "modificacion": "ET",
        "apu": null
    },
    {
        "id": "1272",
        "codigo": "Modificacion N°2",
        "descripcion": "VARIACION DE PRECIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE",
        "nivel_jerarquia": 1,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1273",
        "codigo": "Modificacion N°3",
        "descripcion": "VARIACION DE PRECIOS",
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE",
        "nivel_jerarquia": 1,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1274",
        "codigo": "Modificacion N°",
        "descripcion": null,
        "unidad": "",
        "es_titulo": true,
        "parent_id": "OE",
        "nivel_jerarquia": 1,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    },
    {
        "id": "1275",
        "codigo": "1",
        "descripcion": "2",
        "unidad": "3",
        "es_titulo": false,
        "parent_id": "OE",
        "nivel_jerarquia": 1,
        "jerarquia": [],
        "especialidad": "contingencia",
        "modificacion": "SM",
        "apu": null
    }
];
