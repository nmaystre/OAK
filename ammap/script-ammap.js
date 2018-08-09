// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// svg path for plane icon
var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";


AmCharts.makeChart("mapdiv", {
  type: "map",
  zoomControl: {
    zoomControlEnabled: false,
    homeButtonEnabled: false,
  },
  dataProvider: {
    map: "worldRussiaSplitLow",
    zoomLevel: 2,
    zoomLongitude: 73,
    zoomLatitude: 43,


    lines: [{
      id: "line1",
      arc: -0.85,
      alpha: 0,
      latitudes: [55.748983, 31.231781],
      longitudes: [37.532811, 121.469645]
    }, {
      id: "line2",
      alpha: 0,
      color: "#000000",
      latitudes: [55.748983, 31.231781],
      longitudes: [37.532811, 121.469645]
    },{
      id: "line3",
      arc: -0.85,
      alpha: 0,
      latitudes: [55.748983, 12.979093],
      longitudes: [37.532811, 77.591363]
    }, {
      id: "line4",
      alpha: 0,
      color: "#000000",
      latitudes: [55.748983, 12.979093],
      longitudes: [37.532811, 77.591363]
    },{
      id: "line5",
      arc: -0.85,
      alpha: 0,
      latitudes: [55.748983, 45.735885],
      longitudes: [37.532811, 12.096471]
    }, {
      id: "line6",
      alpha: 0,
      color: "#000000",
      latitudes: [55.748983, 45.735885],
      longitudes: [37.532811, 12.096471]
    }],
    images: [{
      svgPath: targetSVG,
      title: "Москва",
      latitude: 55.748983,
      longitude: 37.532811
    }, {
      svgPath: targetSVG,
      title: "Шанхай",
      color: "#4c83f7",
      latitude: 31.231781,
      longitude: 121.469645
    }, {
      svgPath: targetSVG,
      title: "Бангалор",
      color: "#4c83f7",
      latitude: 12.979093,
      longitude: 77.591363
    }, {
      svgPath: targetSVG,
      title: "Венеция",
      color: "#4c83f7",
      latitude: 45.735885,
      longitude: 12.096471
    },
      {
        svgPath: targetSVG,
        title: "Казань",
        latitude: 55.796289,
        longitude: 49.108795
      },
      {
        svgPath: targetSVG,
        title: "Ульяновск",
        latitude: 54.316855,
        longitude: 48.402557
      },
      {
        svgPath: targetSVG,
        title: "Воронеж",
        latitude: 51.660820,
        longitude:39.200404
      },
      {
        svgPath: targetSVG,
        title: "Таганрог",
        latitude: 51.660820,
        longitude:39.200404
      },
      {
        svgPath: targetSVG,
        title: "Нижний  Новгород",
        latitude: 56.326887,
        longitude:44.005986
      },
      {
        svgPath: targetSVG,
        title: "Новосибирск",
        latitude: 55.030199,
        longitude:82.920430
      },
      {
        svgPath: targetSVG,
        title: "Иркутск",
        latitude: 52.286387,
        longitude:104.280660
      },
      {
        svgPath: targetSVG,
        title: "Комсомольск-на-Амуре",
        latitude: 50.549923,
        longitude:137.007948
      },
      {
        svgPath: targetSVG,
        title: "Пушкин",
        latitude: 59.722463,
        longitude:30.416947
      },
      {
        svgPath: targetSVG,
        title: "Белогорск ",
        latitude: 45.057123,
        longitude:34.599970
      },

      {
        svgPath: targetSVG,
        title: "Старая Русса",
        latitude: 57.990715,
        longitude: 31.355452
      },
      {
        svgPath: targetSVG,
        title: "Краснодар ",
        latitude: 45.035470,
        longitude: 38.975313
      },
      {
        svgPath: targetSVG,
        title: "Иваново ",
        latitude: 57.000348,
        longitude:40.973921
      },
      {
        svgPath: targetSVG,
        title: "Воздвиженка",
        latitude: 43.892280,
        longitude:131.947343
      },
      {
        svgPath: targetSVG,
        title: "Рославль",
        latitude: 53.947309,
        longitude:32.856780
      },
      {
        svgPath: targetSVG,
        title: "Волгоград",
        latitude: 48.707073,
        longitude:44.516930
      },
      {
        svgPath: targetSVG,
        title: "Новочеркасск",
        latitude: 47.422552,
        longitude:40.093213
      },
      {
        svgPath: targetSVG,
        title: "Рязань ",
        latitude: 54.629216,
        longitude:39.736375
      },
      {
        svgPath: targetSVG,
        title: "Ржев ",
        latitude: 56.262877,
        longitude:34.329065
      },
      {
        svgPath: targetSVG,
        title: "Спасск-Дальний",
        latitude: 44.597641,
        longitude:132.817559
      },

      {
        svgPath: planeSVG,
        positionOnLine: 0,
        color: "#000000",
        alpha: 0.1,
        animateAlongLine: true,
        lineId: "line2",
        flipDirection: true,
        loop: true,
        scale: 0.03,
        positionScale: 1.3
      }, {
        svgPath: planeSVG,
        positionOnLine: 0,
        color: "#ffffff",
        alpha: 0.5,
        animateAlongLine: true,
        lineId: "line1",
        flipDirection: true,
        loop: true,
        scale: 0.03,
        positionScale: 1.5
      }, {
        svgPath: planeSVG,
        positionOnLine: 0,
        color: "#ffffff",
        alpha: 0.5,
        animateAlongLine: true,
        lineId: "line3",
        flipDirection: true,
        loop: true,
        scale: 0.03,
        positionScale: 1.5
      },{
        svgPath: planeSVG,
        positionOnLine: 0,
        color: "#000000",
        alpha: 0.1,
        animateAlongLine: true,
        lineId: "line4",
        flipDirection: true,
        loop: true,
        scale: 0.03,
        positionScale: 1.3
      },
      {
        svgPath: planeSVG,
        positionOnLine: 0,
        color: "#ffffff",
        alpha: 0.5,
        animateAlongLine: true,
        lineId: "line5",
        flipDirection: true,
        loop: true,
        scale: 0.03,
        positionScale: 1.5
      },{
        svgPath: planeSVG,
        positionOnLine: 0,
        color: "#000000",
        alpha: 0.1,
        animateAlongLine: true,
        lineId: "line6",
        flipDirection: true,
        loop: true,
        scale: 0.03,
        positionScale: 1.3
      }
    ]
  },

  areasSettings: {
    unlistedAreasColor: "#3c5099",
    unlistedAreasAlpha: 0.8,
    rollOverOutlineColor: "#ccc",
    alpha: 0.1,
    unlistedAreasOutlineColor: "#fff",
    unlistedAreasOutlineAlpha: 0.1,
  },

  imagesSettings: {
    color: "#d5453e",
    rollOverColor: "#d5453e",
    selectedColor: "#d5453e",
    pauseDuration: 0.2,
    animationDuration: 4,
    adjustAnimationSpeed: true
  },

  linesSettings: {
    color: "#d5453e",
    alpha: 0.1
  }
});
