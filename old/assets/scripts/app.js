'use strict';

// помогаем ссылкам с якорями плавно скролиться
$('._go-to').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');
  var top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1500);
});
// /помогаем ссылкам с якорями плавно скролиться
$(document).ready(function () {

  $('._modal-link').magnificPopup({
    showCloseBtn: true,
    type: 'inline',

    fixedContentPos: true,
    fixedBgPos: false,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: false,
    removalDelay: 100,
    mainClass: 'my-mfp-zoom-in'
  });

  $('._mfp-close').click(function () {
    $.magnificPopup.close();
  });
});
$(document).ready(function () {
  var topMenu = $('.header--light');
  var topMenuHeight = topMenu.outerHeight();

  $(window).scroll(function () {

    if ($(window).scrollTop() > topMenuHeight) {
      topMenu.addClass('is-fixed');
    } else {
      topMenu.removeClass('is-fixed');
    }

    return false;
  });

  $('._nav-hamburger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.header-nav_actions').toggleClass('is-hide');
    $('.menu').toggleClass('is-active');
    return false;
  });
});
$('.tabs').tabtab({
  tabMenu: '.tabs__menu',
  tabContent: '.tabs__content',
  startSlide: 1,
  easing: 'ease',
  speed: 350,
  slideDelay: 0
});
$('.additional_cards').masonry({
  itemSelector: '.additional_card',
  columnWidth: 270,
  gutter: 29,
  fitWidth: true
});
if ($) $(function () {

  var form = $('._call_agent');
  var allformInput = form.find('.form-control');
  var formInputRequired = form.find('.form-control[required]');
  var formSendBtn = $('._call_agent_btn');

  formInputRequired.keyup(function () {
    if ($(this).val().length !== 0) {
      formSendBtn.attr('disabled', false);
    } else {
      formSendBtn.attr('disabled', true);
    }
  });

  function clear_form() {
    allformInput.val('');
  }

  $('._call_agent').submit(function (e) {
    console.log('form _call_agent');

    e.preventDefault();
    var form = $(this);
    var formInput = form.find('.form-control');
    var formSendBtn = $('._call_agent_btn');

    var call_name = form.find('input[name="call_name"]').val();
    var call_tel = form.find('input[name="call_tel"]').val();

    if (formInput.val().length > 0) {
      $.ajax({
        type: "POST",
        url: "forms.php",
        data: {
          'call_name': call_name,
          'call_tel': call_tel
        },
        success: function success() {

          console.log('success');

          clear_form();
          formInput.closest('.form-group').removeClass('is-error ui-shake');
          formSendBtn.text('Заявка принята');
        },
        error: function error() {

          console.log('error');

          formInput.closest('.form-group').addClass('is-error ui-shake');
        }
      });
    } else {
      formInput.closest('.form-group').addClass('is-error ui-shake');
    }

    return false;
  });
});
if ($) $(function () {

  // Вынос всех привязок к элементам
  var form = $('._check_agent');
  var formInput = form.find('.form-control');

  // Путь аяксы
  var ajaxUrl = '/checks.php';
  form.attr('action', ajaxUrl);

  form.submit(function (event) {
    // console.log('form _check_agent');

    // Привязываемся на отправку формы и отменяем стандартный обработчик
    // Так инпут отправляется по ентеру и кнопке одновременно
    event.preventDefault();
    // Берем значение и обнуляем ввод
    var value = formInput.val();formInput.val('');
    // Отмена если инпут пустой
    if (value === '') {
      formInput.closest('.form-group').addClass('is-error ui-shake');
    }
    // Аякса
    $.ajax({
      method: 'get',
      url: ajaxUrl,
      data: {
        id: value
      },
      complete: function complete(result) {
        if (result.status === 404) {
          // По желанию можно добавить обработок 404 и прочих 4хх-5хх прелестей
          return $.magnificPopup.open({
            items: {
              src: '#check_notagent'
            },
            type: 'inline'
          });
        }
        try {
          // Попытка спарсить полученный объект
          var response = JSON.parse(result.responseText);
          // console.log('response', response);
          // Вставка html в вывод, используются бэктики `, они относительно новые и этот вывод чисто для демонстрации, части ответа распихать куда надо на страницу

          $('._modal-agent_name').html('' + response.name);
          $('._modal-agent_token-number').html('' + response.id);
          $('._modal-agent_photo_img').attr('src', '' + response.picture);
          $('._modal-agent_photo_img').prop('alt', '' + response.name);

          $.magnificPopup.open({
            items: {
              src: '#check_agent'
            },
            type: 'inline'
          });

          // destination.html(`<p>[${response.id}]  <img src="${response.picture}" alt=""/></p>`);
        } catch (err) {
          console.log('error');
          // Если ошибка произошла при попытке разобрать JSON

          $.magnificPopup.open({
            items: {
              src: '#check_notagent'
            },
            type: 'inline'
          });
        }
      }
    });
  });
});
$(document).ready(function () {

  var owl = $('.owl-carousel');
  var owl2 = $('._additional_lists');

  owl.owlCarousel({
    items: 4,
    slideSpeed: 1200,
    lazyLoad: true,
    navigation: false,
    pagination: false
  });
  $(".memory_nav-right").click(function () {
    owl.trigger('next.owl.carousel');
  });
  $(".memory_nav-left").click(function () {
    owl.trigger('prev.owl.carousel');
  });
});
ymaps.ready(init);
var myMap, myPlacemark;
function init() {
  myMap = new ymaps.Map("map", {
    center: [55.614780, 37.527121],
    zoom: 15,
    controls: []
  });
  var myPlacemark = new ymaps.Placemark([55.614780, 37.527121], {
    hintContent: 'Броникс-Сервис',
    balloonContentBody: '<div class="balloon_body">Броникс-Сервис</div>',
    balloonContentFooter: '<div class="balloon_footer"><span class="map-place">Москва, Литовский бульвар, 1А</span><a href="tel:+74956496494" class="map-tel-link"><span class="tel-link_ico">☎</span><span class="tel-link_number">8 (495) 649-64-94</span></a></div>'
  }, {
    iconColor: '#2E2B77'
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.add('zoomControl');
  myMap.controls.remove('typeSelector');
}
function init() {
  var myMapSrav = new ymaps.Map('spravmap', {
    center: [55.30954, 37.721587],
    zoom: 8,
    controls: []
  });

  // Функция, которая по состоянию чекбоксов в меню
  // показывает или скрывает геообъекты из выборки.
  function checkState() {

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
      byColor = myObjects.search('options.fillColor = "#00ff00"').add(myObjects.search('options.preset = "islands#greenIcon"'))
      // После того, как мы нашли все зеленые объекты, добавим к ним
      // объекты, найденные на предыдущей итерации.
      .add(byColor);
    }
    if ($('#yellow').prop('checked')) {
      byColor = myObjects.search('options.fillColor = "#ffcc00"').add(myObjects.search('options.preset = "islands#yellowIcon"')).add(byColor);
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
    features: [{
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
    }]
  }).addToMap(myMapSrav);

  myMapSrav.controls.add('zoomControl');
  myMapSrav.controls.remove('typeSelector');
}