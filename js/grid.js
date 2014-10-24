/*!
 * Webpage alignment grid
 * Version: 0.5
 
 * https://github.com/nickrichter/webpage-alignment-grid
 *
 * Copyright 2012 Nick Richter
 * Released under the MIT license
 *
 * Date: 2014-04-12
 */

var myHtml = document.getElementsByTagName('html')[0];
var myBody = document.getElementsByTagName('body')[0];
var myCon = document.getElementById('_grid_controls_mrb');
var myDiv = document.getElementById('_grid_div_mrb');

var myGridForm = '<form style="padding: 10px 20px;"><input id="_grid_10" type="radio" name="grid" value="10" onClick="addGridOverlay(10)"><label for="_grid_10">10 px</label><br><input id="_grid_20" type="radio" name="grid" value="20" onClick="addGridOverlay(20)"><label for="_grid_20">20 px</label><br><input id="_grid_cols" type="radio" name="grid" value="cols" onClick="addGridOverlay(4)"><label for="_grid_cols">4 column</label></form>';

function addControlDiv() {
	
	myCss = document.createElement("link");
	myCss.setAttribute("id", "_grid_css_mrb");
	myCss.setAttribute("rel", "stylesheet");
	myCss.setAttribute("type", "text/css");
	myCss.setAttribute("href", "https://raw.githubusercontent.com/nickrichter/webpage-alignment-grid/master/css/grid.css");
	
	// Make the div to hold the controls
	controlDiv = document.createElement('div');
	controlDiv.id = '_grid_controls_mrb';
	controlDiv.style.background = '#ccc';
	controlDiv.style.border = '1px solid #666';
	controlDiv.style.position = 'fixed';
	controlDiv.style.zIndex = '999999';
	controlDiv.style.top = '0';
	controlDiv.style.left = '0';
	
	controlDiv.innerHTML = myGridForm;
	myBody.appendChild(controlDiv);
}

function addGridOverlay(px) {
	if( myDiv != null ) {
		if( px != 4 ) {
			myDiv.style.background = 'url(https://raw.githubusercontent.com/nickrichter/webpage-alignment-grid/master/img/grid' + px + '.png) 50% 50% repeat';
		}else{
			myDiv.style.background = 'url(https://raw.githubusercontent.com/nickrichter/webpage-alignment-grid/master/img/column_overlay_4.png) 50% 0 repeat-y';
		}
	}else{
		myDiv = document.createElement('div');
		myDiv.id = '_grid_div_mrb';
		if( px != 4 ) {
			myDiv.style.background = 'url(https://raw.githubusercontent.com/nickrichter/webpage-alignment-grid/master/img/grid' + px + '.png) 50% 50% repeat';
		}else{
			myDiv.style.background = 'url(https://raw.githubusercontent.com/nickrichter/webpage-alignment-grid/master/img/column_overlay_4.png) 50% 0 repeat-y';
		}
		myDiv.style.position = 'fixed';
		myDiv.style.zIndex = '99999';
		//myDiv.style.width = myHtml.scrollWidth + 'px';
		//myDiv.style.height = myHtml.scrollHeight + 'px';
		myDiv.style.top = '0';
		myDiv.style.left = '0';
		myDiv.style.bottom = '0';
		myDiv.style.right = '0';
		myBody.appendChild(myDiv);
	}
}

if( myCon != null ) {
	myBody.removeChild(myCon);
	
	if( myDiv != null ) {
		myBody.removeChild(myDiv);
	}
}else{
	addControlDiv();
}