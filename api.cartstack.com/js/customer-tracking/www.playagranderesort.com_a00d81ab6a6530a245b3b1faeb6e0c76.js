var _cartstack = _cartstack || [];
var cartstack_trackVisitor = 1;
_cartstack.push(['setSiteID', 'k5BXYFVK']); /* required */

var cartstack_cartPageURL = '';
var cartstack_checkoutPageURLs = ['','',''];
var cartstack_successPageURL = '';
var cartstack_isconfirmation = 0;
var cartstack_debug = 0;

var cartstack_pageurl = window.location.href.toLowerCase();

if (cartstack_cartPageURL.length > 0 && cartstack_pageurl.indexOf(cartstack_cartPageURL.toLowerCase()) >= 0)
{
	_cartstack.push(['setAPI', 'tracking']);
	_cartstack.push(['setCartTotal', '']);
	if (cartstack_debug) { console.log('cs: track-cart'); }
}
else if (cartstack_successPageURL.length > 0 && cartstack_pageurl.indexOf(cartstack_successPageURL.toLowerCase()) >= 0)
{
	_cartstack.push(['setAPI', 'confirmation']);
	cartstack_isconfirmation = 1;
	if (cartstack_debug) { console.log('cs: confirmation'); }
}
else
{
	var cartstack_checkoutURLExists = 0;
	for (var i=0; i<cartstack_checkoutPageURLs.length; i++)
	{
		var cartstack_checkoutPageURL = cartstack_checkoutPageURLs[i].toLowerCase();
		if (cartstack_checkoutPageURL.length > 0 && cartstack_pageurl.indexOf(cartstack_checkoutPageURL) >= 0)
		{
			cartstack_checkoutURLExists = 1;
		}
	}

	if (cartstack_checkoutURLExists)
	{
		_cartstack.push(['setAPI', 'tracking']);
		if (cartstack_debug) { console.log('cs: track-checkout'); }
	}
	else
	{
		_cartstack.push(['setAPI', 'capture']);
		if (cartstack_debug) { console.log('cs: capture'); }
	}
}

(function(){function cartstack_load(){var y = document.getElementsByTagName('script');var l=1;for(var i=0; i < y.length; i++){if (y[i].src == 'https://api.cartstack.com/js/cartstack.js'){l=0;}}if(l){var s = document.createElement('script');s.type = 'text/javascript';s.async = true;s.src = 'https://api.cartstack.com/js/cartstack.js';var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);}}if(cartstack_isconfirmation){cartstack_load();}else{var _interval=setInterval(function(){if(document.readyState==='complete'){clearInterval(_interval);cartstack_load();}},1000);}})();