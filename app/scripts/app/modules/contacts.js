ymaps.ready(init);
var myMap,
  myPlacemark;
function init(){
  myMap = new ymaps.Map ("map", {
    center: [55.614780, 37.527121],
    zoom: 15,
    controls: []
  });
  var myPlacemark = new ymaps.Placemark([55.614780, 37.527121], {
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
