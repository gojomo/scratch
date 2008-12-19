alert('probe1');

$('#scrapedname').ajaxError(function(ev,req,set,err){alert(err)});

alert('probe2');

$.get("http://github.com"), {}, function(data) {$('#target').text(data)});

alert('probe3');