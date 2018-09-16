ymaps.ready(init);

let doc          = document;
let zonespravmap = doc.getElementById('spravmap');
let zonemap      = doc.getElementById('map');

function init(){

  if (zonemap) {
    let myMap = new ymaps.Map("map", {
      center: [55.614780, 37.527121],
      zoom: 15,
      controls: []
    });

    let myPlacemark = new ymaps.Placemark([55.614780, 37.527121], {
      hintContent: 'Броникс-Сервис',
      balloonContentBody: '<div class="balloon_body">Броникс-Сервис</div>',
      balloonContentFooter: '<div class="balloon_footer"><span class="map-place">Москва, Литовский бульвар, 1А</span><a href="tel:+74956496494" class="map-tel-link"><span class="tel-link_ico">☎</span><span class="tel-link_number">8 (495) 649-64-94</span></a></div>',
    }, {
      iconColor: '#2E2B77'
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add('zoomControl');
    myMap.controls.remove('typeSelector');
  }

  // а это для справочника

  if (zonespravmap) {
    let myMapSrav = new ymaps.Map("spravmap", {
      center: [55.753559, 37.609218],
      zoom: 12,
      controls: []
    });


    // Функция, которая по состоянию чекбоксов в меню
    // показывает или скрывает геообъекты из выборки.
    function checkState () {

      let shownObjects;
      let byType = new ymaps.GeoQueryResult();



      if ($('#mfc').prop('checked')) {
        byType = myObjects.search('options.itemType = "mfc"')
          .add(byType);
      }
      if ($('#uszn').prop('checked')) {
        byType = myObjects.search('options.itemType = "uszn"');
      }
      if ($('#cemetery').prop('checked')) {
        byType = myObjects.search('options.itemType = "cemetery"');
      }
      if ($('#crematorium').prop('checked')) {
        byType = myObjects.search('options.itemType = "crematorium"')
          .add(byType);
      }
      if ($('#columbarium').prop('checked')) {
        byType = myObjects.search('options.itemType = "columbarium"')
          .add(byType);
      }
      if ($('#morgue').prop('checked')) {
        byType = myObjects.search('options.itemType = "morgue"')
          .add(byType);
      }

      shownObjects = byType.addToMap(myMapSrav);
      myObjects.remove(shownObjects).removeFromMap(myMapSrav);
    }

    $('#mfc').click(checkState);
    $('#uszn').click(checkState);
    $('#cemetery').click(checkState);
    $('#crematorium').click(checkState);
    $('#columbarium').click(checkState);
    $('#morgue').click(checkState);

    // Создадим объекты из их JSON-описания и добавим их на карту.
    window.myObjects = ymaps.geoQuery({
      type: "FeatureCollection",
      features: [
        /* mfc */
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Красносельский ',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.785979, 37.660521]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Сокол',
            iconCaption: 'Многофункциональный центр р-на Сокол',
            balloonContentHeader: 'Многофункциональный центр р-на Сокол',
            balloonContentBody: 'Чапаевский пер., дом 16',
            balloonContentFooter: 'Телефон: <a href="tel:+74957777777">+7 (495) 777-77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.797083, 37.518228]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ново-Переделкино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.641422, 37.366251]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Академический',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.680722, 37.580131]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Чертаново Южное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.592429, 37.608958]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Перово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.760682, 37.788324]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бабушкинский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.856316, 37.66998]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Лефортово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.752587, 37.702346]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Нижегородский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.752587, 37.702346]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Печатники',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.66766, 37.719558]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бескудниковский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.888998, 37.558436]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Северное Измайлово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.805938, 37.823592]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Даниловский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.712862, 37.612883]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Коньково',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.64476, 37.510287]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Выхино-Жулебино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.689913, 37.852266
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Измайлово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.798586, 37.802949
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Соколиная Гора',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.782567, 37.707449
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Марьино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.674575, 37.760225
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          id: '88485357',
          properties: {
            name: 'Многофункциональный центр р-на Нагатинский Затон',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.678159, 37.655257
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Некрасовка',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.707507, 37.930141
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Южное Бутово (доп. офис)',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.504399, 37.597279
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Тропарёво-Никулино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.667122, 37.490245]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Фили-Давыдково',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.720337, 37.463215]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Филёвский Парк',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.752536, 37.500486]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Новогиреево',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.748903, 37.807647]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Крылатское',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.770046, 37.418605]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бирюлёво Западное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.574655, 37.656721]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Северное Тушино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.838096, 37.401537]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бирюлёво Восточное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.578304, 37.676637]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Чертаново Центральное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.598034, 37.605427]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Капотня',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.638257, 37.800865]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Восточное Измайлово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.789036, 37.809228]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Северное Медведково',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.888952, 37.639779]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Москворечье-Сабурово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.634105, 37.65699]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бутырский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.828632, 37.580418]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Матушкино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [56.003457, 37.208066]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Щукино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.807602, 37.464994]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ростокино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.831479, 37.660377]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Замоскворечье',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.735505, 37.635593]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Басманный',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.780122, 37.68571]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Южнопортовый',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.731262, 37.666036]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Нагорный',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.679133, 37.630122]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Нагатино-Садовники',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.679133, 37.630122]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Царицыно',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.635701, 37.675011]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Орехово-Борисово Южное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.596493, 37.721588]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Тёплый Стан',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.634466, 37.474363]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Можайский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.726015, 37.422692]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Савёлки',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [55.995765, 37.215576]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Гагаринский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.679417, 37.546111]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ивановское',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.883275247000185, 37.81536021679667]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Солнцево',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.665898, 37.426177]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Внуково',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.615136, 37.262181]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Тимирязевский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.570968,
              55.810663
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Новокосино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.871661,
              55.739792
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Дмитровский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.534864,
              55.896544
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Лианозово',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.573052,
              55.894879
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Марфино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.577912,
              55.844212
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Арбат',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.59392,
              55.747819
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Куркино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.401177,
              55.89666
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Восточное Дегунино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.558436,
              55.888998
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Свиблово',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.644899,
              55.857862
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Южное Медведково',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.638719,
              55.871753
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Хорошевский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.512029,
              55.786845
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ярославский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.708958,
              55.866652
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Аэропорт',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.528576,
              55.799497
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Западное Дегунино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.509388,
              55.872663
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Котловка',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.606775,
              55.679798
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Крюково',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.166367,
              55.970766
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Таганский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.682592,
              55.746405
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Восточный',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.866055,
              55.816788
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Рязанский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.784875,
              55.715586
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Северный',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.547683,
              55.913243
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Косино-Ухтомский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.854359,
              55.711113
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Кунцево',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.422692,
              55.726015
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Хорошево-Мнёвники',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.473914,
              55.774968
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Россия, Москва, Волжский Бульвар квартал 95',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.7456,
              55.713258
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Текстильщики',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.747855,
              55.710915
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ломоносовский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.536131,
              55.676154
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Кузьминки',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.75567,
              55.698401
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Коптево',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.524381,
              55.83523
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Очаково-Матвеевское',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.459415,
              55.682884
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Покровское-Стрешнево',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.44479,
              55.82666
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Савёловский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.582826,
              55.79852
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Орехово-Борисово Северное',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.717752,
              55.599611
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Хамовники',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.584712,
              55.743031
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Алтуфьевский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.589311,
              55.880939
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Черёмушки',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.569854,
              55.670767
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Чертаново Северное',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.61212,
              55.623092
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Алексеевский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.66397,
              55.822443
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Братеево',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.752356,
              55.636006
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Южное Тушино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.401537,
              55.838096
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Вешняки',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.833599,
              55.734532
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Люблино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.737048,
              55.689517
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр района Беговой',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.582799,
              55.789755
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Раменки',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.496614,
              55.695357
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Останкинский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.612021,
              55.80916
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Марьина Роща',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.612021,
              55.80916
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Строгино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.404115,
              55.802801
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Зюзино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.593533,
              55.65789
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Проспект Вернадского',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.512263,
              55.676042
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Мещанский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.636958,
              55.784552
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Богородское',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.733446,
              55.811513
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Метрогородок',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.733446,
              55.811513
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Гольяново',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.778883,
              55.810157
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Преображенское',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.718992,
              55.799861
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Донской',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.600486,
              55.707395
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Тверской',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.604924,
              55.767757
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Зябликово',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.7441,
              55.622848
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Южное Бутово',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.531927,
              55.543644
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Левобережный',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.46767,
              55.860514
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Молжаниновский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.46767,
              55.860514
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ховрино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.46767,
              55.860514
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ясенево',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.535403,
              55.608816
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Войковский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.514805,
              55.815413
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бибирево',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.604843,
              55.898578
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Пресненский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.538575,
              55.74903
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Северное Бутово',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.565389,
              55.574055
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр поселения Московский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.347647,
              55.597546
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Лосиноостровский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.682736,
              55.870925
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Митино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.378863,
              55.838991
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Россия, Москва, Якиманский переулок, 6с14',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.610745,
              55.733792
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Якиманка',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.609973,
              55.733493
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Обручевский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.514338,
              55.665274
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Старое Крюково',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.182141,
              55.980659
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Силино',
            iconCaption: 'Многофункциональный центр р-на Силино'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.995206, 37.187558]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        /* end mfc */
        /* begin cemetery */
        {
          type: 'Feature',
          properties: {
            name: 'Алабушевское кладбище',
            iconCaption: 'Алабушевское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [56.015022, 37.138663]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Алексеевское кладбище',
            iconCaption: 'Алексеевское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.817881, 37.645231]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Алтуфьевское кладбище',
            iconCaption: 'Алтуфьевское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.907047, 37.59418]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Бабушкинское кладбище',
            iconCaption: 'Бабушкинское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.862353, 37.706425]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Богородское кладбище',
            iconCaption: 'Богородское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.804132, 37.709425]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Борисовское кладбище',
            iconCaption: 'Борисовское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.634624, 37.734776]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Бусиновское кладбище',
            iconCaption: 'Бусиновское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.88824, 37.496165]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Бутовское кладбище',
            iconCaption: 'Бутовское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.528202, 37.564689]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Владыкинское кладбище',
            iconCaption: 'Владыкинское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.845254, 37.591351]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Востряковское кладбище',
            iconCaption: 'Востряковское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.658769, 37.443946]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Востряковское Южное (Еврейское) кладбище',
            iconCaption: 'Востряковское Южное (Еврейское) кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.658007, 37.454007]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Головинское кладбище',
            iconCaption: 'Головинское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.839719, 37.500728]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Гольяновское кладбище',
            iconCaption: 'Гольяновское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.830978, 37.813046]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Даниловское кладбище',
            iconCaption: 'Даниловское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.704007, 37.609029]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Даниловское мусульманское кладбище',
            iconCaption: 'Даниловское мусульманское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.704697639239015, 37.602677529052144]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Долгопрудненское кладбище',
            iconCaption: 'Долгопрудненское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.916487, 37.51043]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Домодедовское кладбище',
            iconCaption: 'Домодедовское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.459665, 37.896023]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Захарьинское кладбище',
            iconCaption: 'Захарьинское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.495384, 37.596417]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Ивановское кладбище',
            iconCaption: 'Ивановское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.769312, 37.83916]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Измайловское кладбище',
            iconCaption: 'Измайловское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.801703, 37.769729]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Калитниковское кладбище',
            iconCaption: 'Калитниковское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.732028, 37.691046]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Капотнинское кладбище',
            iconCaption: 'Капотнинское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.638221, 37.790561]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Качаловское кладбище',
            iconCaption: 'Качаловское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.571164, 37.581487]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Котляковское кладбище',
            iconCaption: 'Котляковское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.619813, 37.638503]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Кузьминское (мусульманское) кладбище',
            iconCaption: 'Кузьминское (мусульманское) кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.70253919177521, 37.806809010619766]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Кузьминское кладбище',
            iconCaption: 'Кузьминское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.70283, 37.801745]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Кунцевское кладбище',
            iconCaption: 'Кунцевское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.707517, 37.417688]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Леоновское кладбище',
            iconCaption: 'Леоновское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.844157, 37.646426]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Лианозовское кладбище',
            iconCaption: 'Лианозовское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.911996, 37.564159]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Люблинское кладбище',
            iconCaption: 'Люблинское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.681782824093986, 37.78401716400118]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Медведковское кладбище',
            iconCaption: 'Медведковское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.864823, 37.63774]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Митинское кладбище',
            iconCaption: 'Митинское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.877162, 37.347045]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Миусское кладбище',
            iconCaption: 'Миусское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.79387, 37.598097]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Николо-Архангельское кладбище',
            iconCaption: 'Николо-Архангельское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.741034, 37.898341]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Николо-Хованское кладбище',
            iconCaption: 'Николо-Хованское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.60864103350812, 37.441885396849955]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Ореховское кладбище',
            iconCaption: 'Ореховское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.606934, 37.695025]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Орловское кладбище',
            iconCaption: 'Орловское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.631574, 37.378099]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Останкинское кладбище',
            iconCaption: 'Останкинское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.816465, 37.612955]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Перепечинское кладбище',
            iconCaption: 'Перепечинское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [56.006462, 37.387065]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Перловское кладбище',
            iconCaption: 'Перловское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.892451, 37.696157]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Перовское кладбище',
            iconCaption: 'Перовское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.741865, 37.83854]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Покровское кладбище',
            iconCaption: 'Покровское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.595282, 37.63235]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Преображенское кладбище',
            iconCaption: 'Преображенское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.790327, 37.721355]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Пыхтинское кладбище',
            iconCaption: 'Пыхтинское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.626279, 37.292113]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Пятницкое кладбище',
            iconCaption: 'Пятницкое кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.799846, 37.641863]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Раевское кладбище',
            iconCaption: 'Раевское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.87243916128106, 37.66016999999996]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Рогожское кладбище',
            iconCaption: 'Рогожское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.742174, 37.702984]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Рождественское кладбище',
            iconCaption: 'Рождественское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.860494, 37.369161]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Рублевское кладбище',
            iconCaption: 'Рублевское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.77315, 37.348311]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Старо-Марковское кладбище',
            iconCaption: 'Старо-Марковское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.925193, 37.558409]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Старо-Покровское кладбище',
            iconCaption: 'Старо-Покровское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.6133, 37.62448]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Троекуровское кладбище',
            iconCaption: 'Троекуровское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.70812182967349, 37.50222620703084]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Троице-Лыковское кладбище',
            iconCaption: 'Троице-Лыковское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.79179, 37.398931]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Химкинское кладбище',
            iconCaption: 'Химкинское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.915225, 37.378333]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Хованское кладбище',
            iconCaption: 'Хованское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.61580667392309, 37.454545423400646]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Черкизовское кладбище',
            iconCaption: 'Черкизовское кладбище ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.800382, 37.734335]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Щербинское кладбище',
            iconCaption: 'Щербинское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.508473, 37.618632]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Ясеневское кладбище',
            iconCaption: 'Ясеневское кладбище',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.600633, 37.552301]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        /* end cemetery */
        /* begin columbarium */
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Калитниковского кладбища: Россия, Москва, Большой Калитниковский проезд, 11',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.68915,
              55.733371
            ]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787892',
          properties: {
            name: 'Открытый колумбарий Новодевичьего кладбища: Россия, Москва, Лужнецкий проезд, 2',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.556047,
              55.724013
            ]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787900',
          properties: {
            name: 'Открытый колумбарий Бусиновского кладбища: Россия, Москва, Краснополянская улица, 18',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.495671,
              55.887872
            ]
          },
          options: {
            zIndex: 800000002,
            order: 800000002,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787906',
          properties: {
            name: 'Открытый колумбарий Кунцевского кладбища: Россия, Москва, Рябиновая улица, 1',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.425081,
              55.70736
            ]
          },
          options: {
            zIndex: 800000003,
            order: 800000003,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787913',
          properties: {
            name: 'Открытый колумбарий Ваганьковского кладбища: Россия, Москва, улица Сергея Макеева, 15',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.553621,
              55.768461
            ]
          },
          options: {
            zIndex: 800000004,
            order: 800000004,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787919',
          properties: {
            name: 'Открытый колумбарий Митинского кладбища: Россия, Москва, Пятницкое шоссе, Пятницкое шоссе, 6-й километр',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.343442,
              55.865152
            ]
          },
          options: {
            zIndex: 800000005,
            order: 800000005,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787923',
          properties: {
            name: 'Открытый колумбарий Введенского кладбища: Россия, Москва, Наличная улица, вл1',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.707808,
              55.765741
            ]
          },
          options: {
            zIndex: 800000006,
            order: 800000006,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787928',
          properties: {
            name: 'Открытый колумбарий Гольяновского кладбища: Россия, Москва, Курганская улица, 11',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.812228,
              55.830407
            ]
          },
          options: {
            zIndex: 800000007,
            order: 800000007,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787936',
          properties: {
            name: 'Открытый колумбарий Николо-Архангельского кладбища: Россия, Московская область, Балашиха, микрорайон Салтыковка, Носовихинское шоссе, 16',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.888819,
              55.751275
            ]
          },
          options: {
            zIndex: 800000008,
            order: 800000008,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787941',
          properties: {
            name: 'Открытый колумбарий Перовского кладбища: Россия, Москва, Кетчерская улица, 20',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.838639,
              55.742762
            ]
          },
          options: {
            zIndex: 800000009,
            order: 800000009,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787949',
          properties: {
            name: 'Открытый колумбарий Преображенского кладбища: Россия, Москва, улица Преображенский Вал, 17А',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.71972,
              55.792022
            ]
          },
          options: {
            zIndex: 800000010,
            order: 800000010,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787956',
          properties: {
            name: 'Открытый колумбарий Владыкинского кладбища: Россия, Москва, Станционная улица, 8',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.592698,
              55.847048
            ]
          },
          options: {
            zIndex: 800000011,
            order: 800000011,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787963',
          properties: {
            name: 'Открытый колумбарий Останкинского кладбища: Россия, Москва, Прудовая улица, 11',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.418362,
              55.6776
            ]
          },
          options: {
            zIndex: 800000012,
            order: 800000012,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787970',
          properties: {
            name: 'Открытый колумбарий Даниловского кладбища: Россия, Москва, 4-й Рощинский проезд, 30',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.60894,
              55.703697
            ]
          },
          options: {
            zIndex: 800000013,
            order: 800000013,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787977',
          properties: {
            name: 'Открытый колумбарий Нового Донского кладбища: Россия, Москва, Донская площадь, 1',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.600046,
              55.714257
            ]
          },
          options: {
            zIndex: 800000014,
            order: 800000014,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787984',
          properties: {
            name: 'Открытый колумбарий Кузьминского кладбища: Россия, Москва, улица Академика Скрябина, 19',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.797595,
              55.705742
            ]
          },
          options: {
            zIndex: 800000015,
            order: 800000015,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787991',
          properties: {
            name: 'Открытый колумбарий Люблинского кладбища: Россия, Москва, Ставропольская улица, вл74А',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.781829,
              55.681021
            ]
          },
          options: {
            zIndex: 800000016,
            order: 800000016,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88787999',
          properties: {
            name: 'Открытый колумбарий Рогожского кладбища: Россия, Москва, Старообрядческая улица, 31А',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.701412,
              55.740705
            ]
          },
          options: {
            zIndex: 800000017,
            order: 800000017,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88788007',
          properties: {
            name: 'Открытый колумбарий Ясеневского кладбища: Россия, Москва, Новоясеневский проспект, 46',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.554582,
              55.598919
            ]
          },
          options: {
            zIndex: 800000018,
            order: 800000018,
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          id: '88788017',
          properties: {
            name: 'Открытый колумбарий Зеленоградского кладбища: Россия, Москва, Зеленоград, 4921-й проезд, 3с1',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [
              37.259172,
              55.984315
            ]
          },
          options: {
            zIndex: 800000019,
            order: 800000019,
            preset: 'islands#blueIcon'
          }
        }
        /* end columbarium */
      ]
    });

    myObjects.search('options.itemType = "mfc"').addToMap(myMapSrav);;

    myMapSrav.controls.add('zoomControl');
    myMapSrav.controls.remove('typeSelector');
  }

}
