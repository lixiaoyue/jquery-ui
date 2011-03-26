/*
 * tabs_defaults.js
 */

var tabs_defaults = {
	beforeload: null,
	collapsible: false,
	cookie: null,
	disabled: false,
	event: "click",
	fx: null,
	idPrefix: "ui-tabs-",
	load: null,
	panelTemplate: "<div></div>",
	select: null,
	show: null,
	tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
};

// FAIL: falsy values break the cookie option
commonWidgetTests( "tabs", { defaults: tabs_defaults } );
