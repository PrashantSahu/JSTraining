// var confirnRedirect = window.confirm('this website has changed its url');
// if(confirnRedirect){
// window.location = "https://www.google.co.in";
// }else{
//  prompt('no redirect');
// }
function check(){
   // alert("checked  "+ document.getElementById('fname').value.length);
    //add condition
    if((document.getElementById('fname').value).length >3 ){
      alert("warning");
    }
alert("check is called");
    var calltest = new MYAPPLICATION.MODEL.PRODUCTVALUE.product("test"); 
}
//fname.onclick = ()=> alert("hello");
fname.addEventListener("click",check);

 function log(text) { /* output the time and message */ }
     log('initial readyState:' + document.readyState); 
     document.addEventListener('readystatechange', () => log('readyState:' + document.readyState));
      document.addEventListener('DOMContentLoaded', () => log('DOMContentLoaded'));
    //    window.onload = () => log('window onload'); 
    //     <iframe src="iframe.html" onload="log('iframe onload')"></iframe>
    //     <img src="http://en.js.cx/clipart/train.gif" id="img">
    //      img.onload = () => log('img onload');

    var MYAPPLICATION = MYAPPLICATION || {};
 
// create a general purpose namespace method
// this will allow us to create namespace a bit easier
MYAPPLICATION.createNS = function (namespace) {
    var nsparts = namespace.split(".");
    var parent = MYAPPLICATION;
 
    // we want to be able to include or exclude the root namespace 
    // So we strip it if it's in the namespace
    if (nsparts[0] === "MYAPPLICATION") {
        nsparts = nsparts.slice(1);
    }
 
    // loop through the parts and create 
    // a nested namespace if necessary
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];
        // check if the current parent already has 
        // the namespace declared, if not create it
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        // get a reference to the deepest element 
        // in the hierarchy so far
        parent = parent[partname];
    }
    // the parent is now completely constructed 
    // with empty namespaces and can be used.
    return parent;
};
 
// Create the namespace for products
MYAPPLICATION.createNS("MYAPPLICATION.MODEL.PRODUCTS");
 
MYAPPLICATION.MODEL.PRODUCTS.product = function(width, height){
    // private variables
    var dimensions = {
        width: width,
        height: height
    };
    // private methods
    // creating getWidth and getHeight
    // to prevent access by reference to dimensions
    var getWidth = function(){
        return dimensions.width;
    };
    var getHeight = function(){
        return dimensions.height;
    };
    // public API
    return {
        getWidth: getWidth,
        getHeight: getHeight
    };
};
 
// Create the namespace for the logic
MYAPPLICATION.createNS("MYAPPLICATION.LOGIC.BUSINESS");
 
 
MYAPPLICATION.LOGIC.BUSINESS.createAndAlertProduct = function () {
    var model = MYAPPLICATION.MODEL.PRODUCTS;
    var p = new model.product(50,100);
    alert(p.getWidth() + " " + p.getHeight());
};

// Create the namespace for the product value
MYAPPLICATION.createNS("MYAPPLICATION.MODEL.PRODUCTVALUE");

MYAPPLICATION.MODEL.PRODUCTVALUE.calcVat = function (price) {
    alert("Vat is called");
    return price*1.2;
};
MYAPPLICATION.MODEL.PRODUCTVALUE.product = function (price) {
    alert("product is called");
    this.price= price;
	this.getprice= function(){
		return this.price;
	};
		
};


