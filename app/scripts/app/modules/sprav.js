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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/altufievskoe_kladbishe/">Перейти на страницу Алтуфьевского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Алтуфьевское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.59418,
            55.907047
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/babushkinskoe_kladbishe/">Перейти на страницу Бабушкинского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Бабушкинское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.706425,
            55.862353
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/bogorodskoe_kladbishe/">Перейти на страницу Богородского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Богородское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.709425,
            55.804132
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/borisovskoe-kladbishe/">Перейти на страницу Борисовского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Борисовское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.734776,
            55.634624
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/businovskoe-kladbishe/">Перейти на страницу Бусиновского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Бусиновское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.496165,
            55.88824
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/butovskoe-kladbishe/">Перейти на страницу Бутовского кладбища  в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Бутовское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.564689,
            55.528202
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/golyanovskoe-kladbishe/">Перейти на страницу Гольяновского кладбища  в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Гольяновское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.813046,
            55.830978
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/danilovskoye-kladbishe/">Перейти на страницу Даниловского кладбища  в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Даниловское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.609029,
            55.704007
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/danilovskoe-kladbishe/">Перейти на страницу Даниловского мусульманского кладбища  в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Даниловское мусульманское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.602677529052144,
            55.704697639239015
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/dolgoprudnenskoe-kladbishe/">Перейти на страницу Долгопрудненского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Долгопрудненское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.51043,
            55.916487
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/domodedovskoe-kladbishe/">Перейти на страницу Домодедовского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Домодедовское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.896023,
            55.459665
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/zaharinskoe-kladbishe/">Перейти на страницу Захарьинского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Захарьинское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.596417,
            55.495384
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/ivanovskoe-kladbishe/">Перейти на страницу Ивановского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Ивановское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.83916,
            55.769312
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/izmailovskoe-kladbishe/">Перейти на страницу Измайловского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Измайловское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.769729,
            55.801703
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/kalitnikovskoe-kladbishe/">Перейти на страницу Калитниковского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Калитниковское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.691046,
            55.732028
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/kapotninskoe-kladbishe/">Перейти на страницу Капотнинского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Капотнинское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.790561,
            55.638221
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/kachalovskoe-kladbishe/">Перейти на страницу Качаловского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Качаловское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.581487,
            55.571164
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/kotlyakovskoe-kladbishe/">Перейти на страницу Котляковского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Котляковское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.638503,
            55.619813
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/kuzminskoe-kladbishe/">Перейти на страницу Кузьминского (мусульманского) кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Кузьминское (мусульманское) кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.806809010619766,
            55.70253919177521
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/kuntsevskoe-kladbishe/">Перейти на страницу Кузьминского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Кузьминское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.801745,
            55.70283
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/kuntsevskoe-kladbishe/">Перейти на страницу Кунцевского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Кунцевское кладбище'
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.417688,
            55.707517
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/leonovskoe-kladbishe/">Перейти на страницу Леоновского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Леоновское кладбище'
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.646426,
            55.844157
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/lianozovskoe-kladbishe/">Перейти на страницу Лианозовского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Лианозовское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.564159,
            55.911996
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/lublinskoe-kladbishe/">Перейти на страницу Люблинского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Люблинское кладбище'
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.78401716400118,
            55.681782824093986
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/medvedkovskoe-kladbishe/">Перейти на страницу Медведковского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Медведковское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.63774,
            55.864823
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/mitinskoe-kladbishe/">Перейти на страницу Митинского кладбища  в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Митинское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.347045,
            55.877162
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/miusskoe-kladbishe/">Перейти на страницу Миусского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Миусское кладбище'
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.598097,
            55.79387
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/nikolo-arhangelskoe/">Перейти на страницу Николо-Архангельского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Николо-Архангельское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.898341,
            55.741034
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/nikolo-hovanskoe-kladbishe/">Перейти на страницу Николо-Хованского кладбища  в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Николо-Хованское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.441885396849955,
            55.60864103350812
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/orehovskoe-kladbishe/">Перейти на страницу Ореховского кладбище  в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Ореховское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.695025,
            55.606934
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/orlovskoe-klabishe/">Перейти на страницу Орловского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Орловское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.378099,
            55.631574
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/ostankinskoe-kladbishe/">Перейти на страницу Останкинского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Останкинское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.612955,
            55.816465
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
          name: '<p><a href="https://ritual.ru/poleznaya-informacia/kladbisha/perepechinskoe-kladbishe/">Перейти на страницу Перепечинского кладбища в Москве  &gt;&gt;&gt;</a></p>',
          iconCaption: 'Перепечинское кладбище '
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.387065,
            56.006462
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


