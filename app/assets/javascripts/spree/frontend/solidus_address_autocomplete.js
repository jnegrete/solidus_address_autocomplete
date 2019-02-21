function initAddressAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('address_autocomplete')),
      {types: ['geocode'], language: 'es'});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInShipAddress);
}

function fillInShipAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
  document.getElementById('order_bill_address_attributes_raw_address').value = place.formatted_address;

  var address1 = document.getElementById('order_bill_address_attributes_address1');
  var address2 = document.getElementById('order_bill_address_attributes_address2');
  var address3 = document.getElementById('order_bill_address_attributes_address3');
  var states = document.getElementById('order_bill_address_attributes_state_id');
  var city = document.getElementById('order_bill_address_attributes_city');
  var zipCode = document.getElementById('order_bill_address_attributes_zipcode');
  var streetName = null;
  var streetNumber = null;
  var shortName = null;
  var longName = null;
  var addressData = null;
  var addressType = null;

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    addressData = place.address_components[i];
    addressType = addressData.types[0];
    shortName = addressData['short_name'];
    longName = addressData['long_name'];
    switch(addressType) {
      case 'route':
        streetName = longName;
        break;
      case 'street_number':
        streetNumber = shortName;
        break;
      case 'neighborhood':
        address2.value = shortName;
        break;
      case 'sublocality_level_1':
        address2.value = shortName;
        address3.value = shortName;
        break;
      case 'locality':
        city.value = shortName;
        break;
      case 'administrative_area_level_1':
        for(var j = 0; j < states.options.length ; j++) {
          if(longName === states[j].text) {
            states.selectedIndex = j;
            var changeEvent = new CompatibleCustomEvent('changeEvent');
            states.dispatchEvent(changeEvent);
          }
        }
        break;
      case 'postal_code':
        zipCode.value = shortName;
        break;
    }
    address1.value = streetName + ' ' + streetNumber;
  }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
