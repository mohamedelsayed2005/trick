var Y=alert("THIS PAGE DESIGNED BY ENG :MOHAMMED ELSAYED ")
var Z=alert("ادخل برجلك اليمين ")

var x=alert("اتفرج على العظمة ✅")

const camerafeed = document.getElementById('camerafeed');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    camerafeed.srcObject = stream;  
  })
  .catch(error => {
    console.error('Error accessing camera:', error);
  });
  setTimeout(() => {
    document.getElementById('alert1').style.display = 'block';
}, 2500);

setTimeout(() => {
    document.getElementById('alert2').style.display = 'block';
}, 2500);
setTimeout(() => {
    document.getElementById('alert3').style.display = 'block';
}, 2500);
setTimeout(() => {
    document.getElementById('alert4').style.display = 'block';
}, 2500);
setTimeout(() => {
    document.getElementById('alert5').style.display = 'block';
}, 2500);