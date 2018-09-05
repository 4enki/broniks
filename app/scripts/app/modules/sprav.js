ymaps.ready(initsprav);
function initsprav() {
  let myMapSrav = new ymaps.Map('spravmap', {
    center: [55.30954, 37.721587],
    zoom: 8,
    controls: []
  });

  // Функция, которая по состоянию чекбоксов в меню
  // показывает или скрывает геообъекты из выборки.
  function checkState () {

    let shownObjects;
    let byType = new ymaps.GeoQueryResult();


    if ($('#cemetery').prop('checked')) {
      byType = myObjects.search('options.itemType = "cemetery"');
    }
    if ($('#mfc').prop('checked')) {
      byType = myObjects.search('options.itemType = "mfc"')
        .add(byType);
    }

    shownObjects = byType.addToMap(myMapSrav);
    myObjects.remove(shownObjects).removeFromMap(myMapSrav);
  }

  $('#mfc').click(checkState);
  $('#cemetery').click(checkState);

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
      },
      /* cemetery */
      {
        type: 'Feature',
        properties: {
          name: 'Алабушевское кладбище',
          iconCaption: 'Алабушевское кладбище '
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
          iconCaption: 'Алексеевское кладбище'
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
          iconCaption: 'Алтуфьевское кладбище'
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
          iconCaption: 'Бабушкинское кладбище'
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
          iconCaption: 'Богородское кладбище'
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
          iconCaption: 'Борисовское кладбище'
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
          iconCaption: 'Бусиновское кладбище'
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
          iconCaption: 'Бутовское кладбище'
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/vladikinskoe-kladbishe/">Перейти на страницу Владыкинского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Владыкинское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.591351,
            55.845254
          ]
        },
        options: {
          itemType: 'cemetery',
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/vostryakovskoe_kladbishe/">Перейти на страницу Востряковского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Востряковское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.443946,
            55.658769
          ]
        },
        options: {
          itemType: 'cemetery',
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/vostryakovskoe-evreiskoe/">Перейти на страницу Востряковского Южного (Еврейского) кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Востряковское Южное (Еврейское) кладбище'
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.454007,
            55.658007
          ]
        },
        options: {
          itemType: 'cemetery',
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/golovlinskoe-kladbishe/">Перейти на страницу Головинского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Головинское кладбище'
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.500728,
            55.839719
          ]
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
          iconCaption: 'Гольяновское кладбище '
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
          iconCaption: 'Даниловское кладбище'
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
          iconCaption: 'Даниловское мусульманское кладбище'
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
          iconCaption: 'Долгопрудненское кладбище '
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
          iconCaption: 'Домодедовское кладбище'
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
          iconCaption: 'Захарьинское кладбище'
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
          iconCaption: 'Ивановское кладбище'
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
          iconCaption: 'Измайловское кладбище'
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
          iconCaption: 'Калитниковское кладбище '
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
          iconCaption: 'Капотнинское кладбище'
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
          iconCaption: 'Качаловское кладбище'
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
          iconCaption: 'Котляковское кладбище'
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
          iconCaption: 'Кузьминское (мусульманское) кладбище'
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
          iconCaption: 'Кузьминское кладбище '
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
          iconCaption: 'Кунцевское кладбище'
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
          iconCaption: 'Леоновское кладбище'
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
          iconCaption: 'Лианозовское кладбище'
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
          iconCaption: 'Люблинское кладбище'
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
          iconCaption: 'Медведковское кладбище'
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
          iconCaption: 'Митинское кладбище'
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
          iconCaption: 'Миусское кладбище'
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
          iconCaption: 'Николо-Архангельское кладбище '
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
          iconCaption: 'Николо-Хованское кладбище'
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
          iconCaption: 'Ореховское кладбище'
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
          iconCaption: 'Орловское кладбище'
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
          iconCaption: 'Останкинское кладбище'
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
          iconCaption: 'Перепечинское кладбище'
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
          iconCaption: 'Перловское кладбище'
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
          iconCaption: 'Перовское кладбище'
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
          iconCaption: 'Покровское кладбище'
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
          iconCaption: 'Преображенское кладбище '
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
          iconCaption: 'Пыхтинское кладбище'
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
          iconCaption: 'Пятницкое кладбище'
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
          iconCaption: 'Раевское кладбище'
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
          iconCaption: 'Рогожское кладбище'
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
          iconCaption: 'Рождественское кладбище '
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
          iconCaption: 'Рублевское кладбище'
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
          iconCaption: 'Старо-Марковское кладбище'
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
          iconCaption: 'Старо-Покровское кладбище'
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
          iconCaption: 'Троекуровское кладбище '
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
          iconCaption: 'Троице-Лыковское кладбище '
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
          iconCaption: 'Химкинское кладбище '
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
          iconCaption: 'Хованское кладбище'
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
          iconCaption: 'Черкизовское кладбище '
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
          iconCaption: 'Щербинское кладбище'
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
          iconCaption: 'Ясеневское кладбище'
        },
        geometry: {
          type: 'Point',
          coordinates: [55.600633, 37.552301]
        },
        options: {
          itemType: 'cemetery',
          preset: 'islands#blueIcon'
        }
      }
    ]
  }).addToMap(myMapSrav);

  myMapSrav.controls.add('zoomControl');
  myMapSrav.controls.remove('typeSelector');
}


