ymaps.ready(initsprav);
function initsprav() {
  let myMapSrav = new ymaps.Map('spravmap', {
    center: [55.753559, 37.609218],
    zoom: 12,
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
        type: 'Feature',
        id: '88485242',
        properties: {
          name: 'Многофункциональный центр р-на Красносельский  ',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.660521,
            55.785979
          ]
        },
        options: {
          zIndex: 800000000,
          order: 800000000,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485248',
        properties: {
          name: 'Многофункциональный центр р-на Сокол',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.518228,
            55.797083
          ]
        },
        options: {
          zIndex: 800000001,
          order: 800000001,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485253',
        properties: {
          name: 'Многофункциональный центр р-на Ново-Переделкино',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.366251,
            55.641422
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
        id: '88485259',
        properties: {
          name: 'Многофункциональный центр р-на Академический',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.580131,
            55.680722
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
        id: '88485263',
        properties: {
          name: 'Многофункциональный центр р-на Чертаново Южное',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.608958,
            55.592429
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
        id: '88485269',
        properties: {
          name: 'Многофункциональный центр р-на Перово',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.788324,
            55.760682
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
        id: '88485274',
        properties: {
          name: 'Многофункциональный центр р-на Бабушкинский',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.66998,
            55.856316
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
        id: '88485280',
        properties: {
          name: 'Многофункциональный центр р-на Лефортово',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.702346,
            55.752587
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
        id: '88485285',
        properties: {
          name: 'Многофункциональный центр р-на Нижегородский',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.702346,
            55.752587
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
        id: '88485293',
        properties: {
          name: 'Многофункциональный центр р-на Печатники',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.719558,
            55.66766
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
        id: '88485299',
        properties: {
          name: 'Многофункциональный центр р-на Бескудниковский',
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
          zIndex: 800000010,
          order: 800000010,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485307',
        properties: {
          name: 'Многофункциональный центр р-на Северное Измайлово',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.823592,
            55.805938
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
        id: '88485317',
        properties: {
          name: 'Многофункциональный центр р-на Даниловский',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.612883,
            55.712862
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
        id: '88485325',
        properties: {
          name: 'Многофункциональный центр р-на Коньково',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.510287,
            55.64476
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
        id: '88485331',
        properties: {
          name: 'Многофункциональный центр р-на Выхино-Жулебино',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.852266,
            55.689913
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
        id: '88485338',
        properties: {
          name: 'Многофункциональный центр р-на Измайлово',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.802949,
            55.798586
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
        id: '88485342',
        properties: {
          name: 'Многофункциональный центр р-на Соколиная Гора',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.707449,
            55.782567
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
        id: '88485350',
        properties: {
          name: 'Многофункциональный центр р-на Марьино',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.760225,
            55.674575
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
        id: '88485357',
        properties: {
          name: 'Многофункциональный центр р-на Нагатинский Затон',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.655257,
            55.678159
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
        id: '88485364',
        properties: {
          name: 'Многофункциональный центр р-на Некрасовка',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.930141,
            55.707507
          ]
        },
        options: {
          zIndex: 800000019,
          order: 800000019,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485373',
        properties: {
          name: 'Многофункциональный центр р-на Южное Бутово (доп. офис)',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.597279,
            55.504399
          ]
        },
        options: {
          zIndex: 800000020,
          order: 800000020,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485380',
        properties: {
          name: 'Многофункциональный центр р-на Тропарёво-Никулино',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.490245,
            55.667122
          ]
        },
        options: {
          zIndex: 800000021,
          order: 800000021,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485388',
        properties: {
          name: 'Многофункциональный центр р-на Фили-Давыдково',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.463215,
            55.720337
          ]
        },
        options: {
          zIndex: 800000022,
          order: 800000022,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485395',
        properties: {
          name: 'Многофункциональный центр р-на Филёвский Парк',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.500486,
            55.752536
          ]
        },
        options: {
          zIndex: 800000023,
          order: 800000023,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485407',
        properties: {
          name: 'Многофункциональный центр р-на Новогиреево',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.807647,
            55.748903
          ]
        },
        options: {
          zIndex: 800000024,
          order: 800000024,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485415',
        properties: {
          name: 'Многофункциональный центр р-на Крылатское',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.418605,
            55.770046
          ]
        },
        options: {
          zIndex: 800000025,
          order: 800000025,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485426',
        properties: {
          name: 'Многофункциональный центр р-на Бирюлёво Западное',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.656721,
            55.574655
          ]
        },
        options: {
          zIndex: 800000026,
          order: 800000026,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485430',
        properties: {
          name: 'Многофункциональный центр р-на Северное Тушино',
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
          zIndex: 800000027,
          order: 800000027,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485435',
        properties: {
          name: 'Многофункциональный центр р-на Бирюлёво Восточное',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.676637,
            55.578304
          ]
        },
        options: {
          zIndex: 800000028,
          order: 800000028,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485440',
        properties: {
          name: 'Многофункциональный центр р-на Чертаново Центральное',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.605427,
            55.598034
          ]
        },
        options: {
          zIndex: 800000029,
          order: 800000029,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485448',
        properties: {
          name: 'Россия, Москва, 2-й квартал Капотни, 22',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.800865,
            55.638257
          ]
        },
        options: {
          zIndex: 800000030,
          order: 800000030,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485455',
        properties: {
          name: 'Многофункциональный центр р-на Капотня',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.800865,
            55.638257
          ]
        },
        options: {
          zIndex: 800000031,
          order: 800000031,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485462',
        properties: {
          name: 'Многофункциональный центр р-на Восточное Измайлово',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.809228,
            55.789036
          ]
        },
        options: {
          zIndex: 800000032,
          order: 800000032,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485471',
        properties: {
          name: 'Многофункциональный центр р-на Северное Медведково',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.639779,
            55.888952
          ]
        },
        options: {
          zIndex: 800000033,
          order: 800000033,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485477',
        properties: {
          name: 'Многофункциональный центр р-на Москворечье-Сабурово',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.65699,
            55.634105
          ]
        },
        options: {
          zIndex: 800000034,
          order: 800000034,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485485',
        properties: {
          name: 'Многофункциональный центр р-на Бутырский',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.580418,
            55.828632
          ]
        },
        options: {
          zIndex: 800000035,
          order: 800000035,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485492',
        properties: {
          name: 'Многофункциональный центр р-на Матушкино',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.208066,
            56.003457
          ]
        },
        options: {
          zIndex: 800000036,
          order: 800000036,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485500',
        properties: {
          name: 'Многофункциональный центр р-на Щукино',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.464994,
            55.807602
          ]
        },
        options: {
          zIndex: 800000037,
          order: 800000037,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485508',
        properties: {
          name: 'Многофункциональный центр р-на Ростокино',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.660377,
            55.831479
          ]
        },
        options: {
          zIndex: 800000038,
          order: 800000038,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485515',
        properties: {
          name: 'Многофункциональный центр р-на Замоскворечье',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.635593,
            55.735505
          ]
        },
        options: {
          zIndex: 800000039,
          order: 800000039,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485524',
        properties: {
          name: 'Многофункциональный центр р-на Басманный',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.68571,
            55.780122
          ]
        },
        options: {
          zIndex: 800000040,
          order: 800000040,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485532',
        properties: {
          name: 'Многофункциональный центр р-на Южнопортовый',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.666036,
            55.731262
          ]
        },
        options: {
          zIndex: 800000041,
          order: 800000041,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485542',
        properties: {
          name: 'Многофункциональный центр р-на Нагорный',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.630122,
            55.679133
          ]
        },
        options: {
          zIndex: 800000042,
          order: 800000042,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485553',
        properties: {
          name: 'Многофункциональный центр р-на Нагатино-Садовники',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.630122,
            55.679133
          ]
        },
        options: {
          zIndex: 800000043,
          order: 800000043,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485562',
        properties: {
          name: 'Многофункциональный центр р-на Царицыно',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.675011,
            55.635701
          ]
        },
        options: {
          zIndex: 800000044,
          order: 800000044,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485569',
        properties: {
          name: 'Многофункциональный центр р-на Орехово-Борисово Южное',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.721588,
            55.596493
          ]
        },
        options: {
          zIndex: 800000045,
          order: 800000045,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485573',
        properties: {
          name: 'Многофункциональный центр р-на Тёплый Стан',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.474363,
            55.634466
          ]
        },
        options: {
          zIndex: 800000046,
          order: 800000046,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485580',
        properties: {
          name: 'Многофункциональный центр р-на Можайский',
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
          zIndex: 800000047,
          order: 800000047,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485584',
        properties: {
          name: 'Многофункциональный центр р-на Савёлки',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.215576,
            55.995765
          ]
        },
        options: {
          zIndex: 800000048,
          order: 800000048,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485601',
        properties: {
          name: 'Многофункциональный центр р-на Гагаринский',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.546111,
            55.679417
          ]
        },
        options: {
          zIndex: 800000049,
          order: 800000049,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485603',
        properties: {
          name: 'Многофункциональный центр р-на Ивановское',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.81536021679667,
            55.883275247000185
          ]
        },
        options: {
          zIndex: 800000050,
          order: 800000050,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485606',
        properties: {
          name: 'Многофункциональный центр р-на Солнцево',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.426177,
            55.665898
          ]
        },
        options: {
          zIndex: 800000051,
          order: 800000051,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485609',
        properties: {
          name: 'Многофункциональный центр р-на Внуково',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.262181,
            55.615136
          ]
        },
        options: {
          zIndex: 800000052,
          order: 800000052,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485612',
        properties: {
          name: 'Многофункциональный центр р-на Тимирязевский',
          description: ''
        },
        geometry: {
          type: 'Point',
          coordinates: [
            37.570968,
            55.810663
          ]
        },
        options: {
          zIndex: 800000053,
          order: 800000053,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485616',
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
          zIndex: 800000054,
          order: 800000054,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485619',
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
          zIndex: 800000055,
          order: 800000055,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485624',
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
          zIndex: 800000056,
          order: 800000056,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485629',
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
          zIndex: 800000057,
          order: 800000057,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485634',
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
          zIndex: 800000058,
          order: 800000058,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485643',
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
          zIndex: 800000059,
          order: 800000059,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485647',
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
          zIndex: 800000060,
          order: 800000060,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485654',
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
          zIndex: 800000061,
          order: 800000061,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485659',
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
          zIndex: 800000062,
          order: 800000062,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485664',
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
          zIndex: 800000063,
          order: 800000063,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485669',
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
          zIndex: 800000064,
          order: 800000064,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485674',
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
          zIndex: 800000065,
          order: 800000065,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485682',
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
          zIndex: 800000066,
          order: 800000066,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485695',
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
          zIndex: 800000067,
          order: 800000067,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485709',
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
          zIndex: 800000068,
          order: 800000068,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485718',
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
          zIndex: 800000069,
          order: 800000069,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485730',
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
          zIndex: 800000070,
          order: 800000070,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485736',
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
          zIndex: 800000071,
          order: 800000071,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485746',
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
          zIndex: 800000072,
          order: 800000072,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485753',
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
          zIndex: 800000073,
          order: 800000073,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485762',
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
          zIndex: 800000074,
          order: 800000074,
          preset: 'islands#blueIcon'
        }
      },
      {
        type: 'Feature',
        id: '88485770',
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
        id: '88485779',
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
        id: '88485788',
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
        id: '88485796',
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
        id: '88485805',
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
        id: '88485812',
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
        id: '88485820',
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
        id: '88485828',
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
        id: '88485835',
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
        id: '88485843',
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
        id: '88485850',
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
        id: '88485858',
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
        id: '88485866',
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
        id: '88485873',
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
        id: '88485881',
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
        id: '88485890',
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
        id: '88485898',
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
        id: '88485911',
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
        id: '88485925',
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
        id: '88485940',
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
        id: '88485948',
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
        id: '88485964',
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
        id: '88485981',
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
        id: '88486001',
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
        id: '88486013',
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
        id: '88486023',
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
        id: '88486035',
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
        id: '88486043',
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
        id: '88486057',
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
        id: '88486066',
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
        id: '88486073',
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
        id: '88486080',
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
        id: '88486090',
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
        id: '88486100',
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
        id: '88486108',
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
        id: '88486118',
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
        id: '88486127',
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
        id: '88486137',
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
        id: '88486145',
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
        id: '88486154',
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
        id: '88486163',
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
        id: '88486175',
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
        id: '88486187',
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
        id: '88486198',
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
        id: '88486209',
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
        id: '88486218',
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
        id: '88486228',
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
        id: '88486238',
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
        id: '88486246',
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
        id: '88486255',
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
          name: 'Владыкинское кладбище',
          iconCaption: 'Владыкинское кладбище '
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
          iconCaption: 'Востряковское кладбище'
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
          iconCaption: 'Востряковское Южное (Еврейское) кладбище'
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
          iconCaption: 'Головинское кладбище'
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


