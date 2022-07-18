const usNumberFormat = new Intl.NumberFormat('en-US'); 
console.log(usNumberFormat);
const esNumberFormat = new Intl.NumberFormat('es-ES');
console.log(esNumberFormat);
const usNumber = usNumberFormat.format(99999999.99);
console.log(usNumber);
const esNumber = esNumberFormat.format(99999999.99);
console.log(esNumber);

// Date and time formatting
const usDateTimeFormatting = new Intl.DateTimeFormat('en-US');
const usDate = usDateTimeFormatting.format(new Date('2022-03-2'));
console.log(usDate);

const esDateTimeFormatting = new Intl.DateTimeFormat('es-ES');
const esDate = esDateTimeFormatting.format(new Date('2022-03-2'));
console.log(esDate);

if (navigator.geolocation) { 
    // navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure);
    console.log("?yes")
} 
else {
    console.log("Geolocation is not supported by this browser.");
}