    
    var rnd = Math.floor(Math.random()*1000000000);

    function getCookie(name){
	    var re = new RegExp(name + "=([^;]+)");
	    var value = re.exec(document.cookie);
	    return (value == null) ? false : true;
    }

    if(typeof ic_wa_url !== 'undefined' && ic_wa_url != null && navigator.cookieEnabled){

        //adding querystring to detect pagetype=wa from UAT
        if (ic_wa_url.indexOf('?') != -1)
            ic_wa_url += "&ic_welcome=1";
        else
            ic_wa_url += "?ic_welcome=1";

	    if (!getCookie('ic_welcomeAd')) {

            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
            (function() {
            var gads = document.createElement("script");
            gads.async = true;
            gads.type = "text/javascript";
            var useSSL = "https:" == document.location.protocol;
            gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
            var node =document.getElementsByTagName("script")[0];
            node.parentNode.insertBefore(gads, node);
            })();

            document.write('<div id="ic_welcomead_div"></div');


googletag.cmd.push(function() {
      googletag.defineSlot('/5206/'+ic_wa_siteKeyName+'/welcomead', [2, 2], 'ic_welcomead_div').addService(googletag.pubads())
      //.setTargeting("pc", "bc").setTargeting("bt", "bt_gutestpixel2").setTargeting("pos", a);
      //googletag.pubads().enableSyncRendering();
      googletag.enableServices();
      googletag.display('ic_welcomead_div');
  });

            //var wcm = document.createElement('div');
            //wcm.innerHTML = '######';
            //document.body.appendChild(wcm);
//console.log(document.body)

            //document.write('<script type="text/javascript" src="http://ad.doubleclick.net/N5206/adj/'+ic_wa_siteKeyName+'/welcomead;sz=2x2;tile=1;ord='+rnd+'?"></script>');
	    }
    }
