alert('probe:'+document.domain+' '+document.location.href);

document.domain="github.com";

document.write("<scr"+"ipt>alert('second:'+document.domain+' '+document.location.href);</script>");

