$(function() {
  CreateTableFromJSON(excelData)
});
$(document).ready(function() {
$('[data-toggle="modal"]').click(function(e) {
var $modalText = document.getElementById('body-text')
var test = JSON.stringify(excelData)
$modalText.innerText(test)
});
});