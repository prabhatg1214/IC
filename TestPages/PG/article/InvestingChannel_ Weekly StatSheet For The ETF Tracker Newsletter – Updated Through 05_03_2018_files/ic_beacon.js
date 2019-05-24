function icIsSiteFound(site, list) {
	for(var i in list)
		if(list[i] == site)
			return true;

	return false;
}

function ic_async_beacon(site, paid) {
	paid == null ? paid = false : paid = paid;

	/*
	if (paid == 'sm') {
		document.write('<img hidden src="http://cdn.investingchannel.com/ic_badge_160x60.gif"/>');
	} else if (paid == 'lg') {
		document.write('<img hidden src="http://cdn.investingchannel.com/ic_badge_300x100.gif"/>');
	} else if (paid == 'lg_wt') {
		document.write('<img hidden src="http://cdn.investingchannel.com/ic_badge_300x100_w_tag.gif"/>');
	}

	*/

	/*
    // SURVEY GIZMO
    var activeSurvey = [
            'nakedcap'
            ];
    if (!paid && icIsSiteFound(site, activeSurvey)) {
    document.write("<" + "script src='http://cdn.investingchannel.com/sgizmo.js'><" + "/script>");
    }
	*/

	/*
	// OUTBRAIN or Taboola
	if (window.location.pathname != '/' && site != 'benzinga') {

		//document.write('<div class="OUTBRAIN" data-src="'+document.location.href+'" data-widget-id="TR_1" data-ob-template="investing" ></div><script type="text/javascript" src="http://widgets.outbrain.com/outbrain.js"></scr'+'ipt>');

		document.write('<script type="text/javascript"> \
						window._taboola = window._taboola || []; \
						_taboola.push({article:\'auto\'}); \
						!function (e, f, u) { e.async = 1; e.src = u; f.parentNode.insertBefore(e, f); }(document.createElement(\'script\'), \
						document.getElementsByTagName(\'script\')[0], \
						\'http://cdn.taboola.com/libtrc/investingchannel-network/loader.js\'); \
						</scr'+'ipt>');
	}
    */
	// GOOGLE ANALYTICS
	var currentPg = location.href.split('/');
	currentPg.shift();
	currentPg.shift();
	currentPg.shift();
	document.write('<'+'iframe src="http://cdn.investingchannel.com/ga_track.html?s='+site+'" name="ic_ga_track" width="1" height="1" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" style="display:none;" ></iframe>');

	/*
	// Quantcast Tag //
	(function() {
	var elem = document.createElement('script');
	elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
	elem.async = true;
	elem.type = "text/javascript";
	var scpt = document.getElementsByTagName('script')[0];
	scpt.parentNode.insertBefore(elem, scpt);
	})();

	document.write('<scr'+'ipt type="text/javascript">var _qevents = _qevents || []; _qevents.push({qacct:"p-ed9LRhNGf2zt2"});</scr'+'ipt>');
	//End Quantcast tag//
	*/

	/*
	//TubeMogul - RON
	document.write('<img hidden src="http://rtd.tubemogul.com/upi/?sid=f9PmjT6vSXDi4xcZg1oC" />');
	
	//Videology - RON
	//document.write('<img hidden src="http://set.tidaltv.com/Ping.aspx?tids=85613|2160" />');

	//Btrll - RON
	document.write('<img hidden src="http://segs.btrll.com/v1/tpix/-/-/-/-/-/sid.6586082" />');

	//TubeMogul - PF
	var icTubeMogul_PF = ['biblemoneymatters',
			'everythingfinanceblog',
			'FaithAndFinance',
			'investfaq',
			'investmentmoats',
			'moneyhelpforchristians',
			'ratenerd',
			'retireby40',
			'retirementcalculators',
			'saveup',
			'smartonmoney',
			'thefinancebuff',
			'thefinancials',
			'thesunsfinancialdiary',
			'wealthinformatics',
			'youngmoney'
	]

	if (icIsSiteFound(site, icTubeMogul_PF)) {
		document.write('<img hidden src="http://rtd.tubemogul.com/upi/?sid=tPNfR76YGsEOa0u9lc39" />');
		//Btrll
		document.write('<img hidden src="http://segs.btrll.com/v1/tpix/-/-/-/-/-/sid.6586081" />');
	}

	//ETF & FA & Mutual Fund
	var icTubeMogul_ETF = ['alletf',
			'etfdailynews',
			'etfdigest',
			'etfguide',
			'etfscreen',
			'ispyetf',
			'marketdailynews',
			'marketforum',
			'marketnewsvideo',
			'theetfbully'
	]

	if (icIsSiteFound(site, icTubeMogul_ETF)) {
		document.write('<img hidden src="http://rtd.tubemogul.com/upi/?sid=PvQLiKQ9E5TBgyeaemXC" />');
		//Btrll
		document.write('<img hidden src="http://segs.btrll.com/v1/tpix/-/-/-/-/-/sid.6586080" />');
	}

	//TubeMogul -  Elite Trader
	var icTubeMogul_Elite = [
			'abnormalreturns',
			'alletf',
			'allstarcharts',
			'bclund',
			'benzinga',
			'crossingwallstreet',
			'davidstockman',
			'dynamichedge',
			'etfdailynews',
			'finviz',
			'freerealtime',
			'howthemarketworks',
			'insidermonkey',
			'investing.com',
			'investorshangout',
			'istockanalyst',
			'ivolatility',
			'joefahmy',
			'kimblechartingsolutions',
			'macroaxis',
			'peterlbrandt',
			'philstockworld',
			'realclearmarkets',
			'sixfigureinvesting',
			'stockconsultant',
			'stockspinoffs',
			'stocktwits',
			'streetinsider',
			'surlytrader',
			'thearmotrader',
			'thereformedbroker',
			'thisisbigger',
			'topforeignstocks',
			'tradershuddle',
			'valueplays',
			'wallstreetpit',
			'wallstreetsurvivor',
			'zortrades'
	]

	if (icIsSiteFound(site, icTubeMogul_Elite)) {
		//Tube Mogul
		document.write('<img hidden src="https://rtd.tubemogul.com/upi/?sid=OTJDIpI5Kx5LeR9E3Ljh" />');

		//Btrll
		document.write('<img hidden src="http://segs.btrll.com/v1/tpix/-/-/-/-/-/sid.6586084" />');
	}
	*/

	/*
	//Custom tags
	if(site == 'learnbonds')
	{
		document.write("<scr" + "ipt src='http://ads.investingchannel.com/adtags/learnbonds/bonds/1x1.js' type='text/javascript' charset='utf-8'><\/scr" + "ipt>");
	}
	*/

	/*
	//Mojn & Keywee tracker
	if(site == 'investingchannel'){
		document.write("<scr" + "ipt src='http://dc8xl0ndzn2cb.cloudfront.net/js/investingchannel/v1/keywee.js' type='text/javascript' charset='utf-8'><\/scr" + "ipt>");
		ic_mojn();
	}

	if (site == 'stocktwits') {
		//CoReg script for Distro
		document.write("<scr" + "ipt src='http://s3.amazonaws.com/cdn.investingchannel.com/coreg/ICScript.js' type='text/javascript' charset='utf-8'><\/scr" + "ipt>");
	}
	*/

	//Markit
	//document.write("<scr" + "ipt src='https://ad.wsod.com/pub/37693cfc748049e45d87b8c7d8b9aacd/0.0.async/' type='text/javascript' async ><\/scr" + "ipt>");

	/*
	//iCumulus Tag - served via our cloudFront Only for Aus inventory
	document.write("<scr" + "ipt src='http://d2ofilbd98jvxs.cloudfront.net/pixel/icumulus/pixel.js' type='text/javascript'><\/scr" + "ipt>");
	*/
	
	/*
	// Magnetic //
	if(site != 'investorshangout'){*/
		/* Version: 0.7 */
		/* <![CDATA[ */
		/*
		try {
		var _mag = _mag || {};
		_mag.kw = '';
		_mag.kw_encoded = 0;
		_mag.shortName = 'investingchannel';
		_mag.default_protocol = ('https:' == document.location.protocol ? 'https:' : 'http:');
		_mag.startTime = (new Date()).getTime();
		(function(d,t) {
		var mag = d.createElement('script'); mag.type = 'text/javascript'; mag.async = true; mag.src = t;
		var head = d.getElementsByTagName('head')[0] || d.documentElement; head.insertBefore(mag, head.firstChild);
		})(document,  _mag.default_protocol + '//d3ezl4ajpp2zy8.cloudfront.net/investingchannel_tag.js');
		} catch (e) {}
		*//* ]]> */
		/*
	}
	//End Magnetic //
	*/
	
	/*
	// Big Willow //
	document.write("<scr" + "ipt src='http://acquireinsight.net/pixel/scripts/tp.js' type='text/javascript' charset='utf-8'><\/scr" + "ipt>");
	document.write("<scr" + "ipt type='text/javascript' charset='utf-8'>document.write(unescape('%3Cimg hidden src=\"') + acquireinsigh.url(\'3c944d02-7364-4eae-8cb2-c2b745803764\') + unescape('\"/%3E'));<\/scr" + "ipt>");
 	// End Big Willow //
 	*/

}

function icBeacon(site, paid){
paid == null ? paid = false : paid = paid;
  //addEvent(window, "load", function(){
	ic_async_beacon(site,paid);
  //});
}

function ic_mojn(){
	window._mojnTrack = window._mojnTrack || [] 
	_mojnTrack.push({ cid:"HVHLX", u:window.location.toString() });
	var s=document.createElement("script"),e=document.getElementsByTagName("script")[0],w=window;
	s.type="text/javascript";s.id="ag:trackscript.1";s.src="//track.idtargeting.com/HVHLX/track.js"; e.parentNode.insertBefore(s,e);	
}
