var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';

$.ajax({
     url: url + countryName,
     method: 'GET',
     success: showCountriesList,
     error: function errorURL (resp) {
     countriesList.empty();
     if(resp.status === 404){
     alert('Error - No data found');
     }
     }
});
}

function showCountriesList(resp) {
  countriesList.empty();

resp.forEach(function(item){
    $('<li class="country">').text('Country name: ' + item.name).appendTo(countriesList);
   	$('<li>').text('Capital: ' + item.capital).appendTo(countriesList);
   	$('<li>').text('Area: ' + item.area + "km2").appendTo(countriesList);
   	$('<li>').text('Population: ' + item.population).appendTo(countriesList);
});
}
