function addition(){
  var val1 = $('#v1').val();
  var val2 = $('#v2').val();
  var url = "http://localhost:8085/addition?val1=" + val1 + "&val2=" + val2;
  console.log(url);
  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#total1').html( json.resultado );
    }
  );
}

function subtraction(){
  var val1 = $('#v1').val();
  var val2 = $('#v2').val();
  var url = "http://localhost:8085/subtraction?val1=" + val1 + "&val2=" + val2;
  console.log(url);
  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#total1').html( json.resultado );
    }
  );
}

function multiplication(){
  var val1 = $('#v1').val();
  var val2 = $('#v2').val();
  var url = "http://localhost:8085/multiplication?val1=" + val1 + "&val2=" + val2;
  console.log(url);
  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#total1').html( json.resultado );
    }
  );
}

function division(){
  var val1 = $('#v1').val();
  var val2 = $('#v2').val();
  var url = "http://localhost:8085/division?val1=" + val1 + "&val2=" + val2;
  console.log(url);
  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#total1').html( json.resultado );
    }
  );
}

function power(){
  var val1 = $('#v3').val();
  var url = "http://localhost:8085/power?val1=" + val1;
  console.log(url);
  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#total2').html( json.resultado );
    }
  );
}
