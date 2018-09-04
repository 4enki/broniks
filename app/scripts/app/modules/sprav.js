function init() {
  var myMapSrav = new ymaps.Map('spravmap', {
    center: [55.30954, 37.721587],
    zoom: 8,
    controls: []
  });

  // Функция, которая по состоянию чекбоксов в меню
  // показывает или скрывает геообъекты из выборки.
  function checkState () {


    var shownObjects,
      byColor = new ymaps.GeoQueryResult(),
      byShape = new ymaps.GeoQueryResult();

    // Отберем объекты по цвету.
    if ($('#mfc-msk').prop('checked')) {
      // Будем искать по двум параметрам:
      // - для точечных объектов по полю preset;
      // - для контурных объектов по цвету заливки.
      byShape = myObjects.search('options.itemType = "mfc"');
    }
    if ($('#green').prop('checked')) {
      byColor = myObjects.search('options.fillColor = "#00ff00"')
        .add(myObjects.search('options.preset = "islands#greenIcon"'))
        // После того, как мы нашли все зеленые объекты, добавим к ним
        // объекты, найденные на предыдущей итерации.
        .add(byColor);
    }
    if ($('#yellow').prop('checked')) {
      byColor = myObjects.search('options.fillColor = "#ffcc00"')
        .add(myObjects.search('options.preset = "islands#yellowIcon"'))
        .add(byColor);
    }
    // Отберем объекты по форме.
    if ($('#point').prop('checked')) {
      byShape = myObjects.search('geometry.type = "Point"');
    }
    if ($('#polygon').prop('checked')) {
      byShape = myObjects.search('geometry.type = "Polygon"').add(byShape);
    }
    if ($('#circle').prop('checked')) {
      byShape = myObjects.search('geometry.type = "Circle"').add(byShape);
    }

    // Мы отобрали объекты по цвету и по форме. Покажем на карте объекты,
    // которые совмещают нужные признаки.
    shownObjects = byColor.intersect(byShape).addToMap(myMapSrav);
    // Объекты, которые не попали в выборку, нужно убрать с карты.
    myObjects.remove(shownObjects).removeFromMap(myMapSrav);
  }

  $('#mfc-msk').click(checkState);
  $('#green').click(checkState);
  $('#yellow').click(checkState);
  $('#point').click(checkState);
  $('#polygon').click(checkState);
  $('#circle').click(checkState);

  // Создадим объекты из их JSON-описания и добавим их на карту.
  window.myObjects = ymaps.geoQuery({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Многофункциональный центр р-на Сокол",
          description: ""
        },
        geometry: {
          type: "Point",
          coordinates: [55.797083, 37.518228]
        },
        options: {
          itemType: "mfc",
          preset: "islands#blueIcon"
        }
      }, {
        type: "Feature",
        properties: {
          name: "Многофункциональный центр р-на Ново-Переделкино",
          description: ""
        },
        geometry: {
          type: "Point",
          coordinates: [55.641422, 37.366251]
        },
        options: {
          itemType: "mfc",
          preset: "islands#blueIcon"
        }
      }, {
        type: "Feature",
        properties: {
          name: "Многофункциональный центр р-на Академический",
          description: ""
        },
        geometry: {
          type: "Point",
          coordinates: [55.680722, 37.580131]
        },
        options: {
          itemType: "mfc",
          preset: "islands#blueIcon"
        }
      }
    ]
  }).addToMap(myMapSrav);

  myMapSrav.controls.add('zoomControl');
  myMapSrav.controls.remove('typeSelector');
}


