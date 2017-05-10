sap.ui.jsview("js_3_sapui5_object.sap_ui5_object", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf js_3_sapui5_object.sap_ui5_object
	*/ 
	getControllerName : function() {
		return "js_3_sapui5_object.sap_ui5_object";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf js_3_sapui5_object.sap_ui5_object
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
// Listbox		
		oListBox = new sap.ui.commons.ListBox("Days",
		{ items : [
		           	new sap.ui.core.ListItem("Mon",
		           			{ text : "Monday"}),
		           	new sap.ui.core.ListItem("Tues",
		           			{ text : "Tuesday"}),
		           	new sap.ui.core.ListItem("Wedn",
		           			{ text : "Wednesday"}),	
		           	new sap.ui.core.ListItem("Thurs",
		           			{ text : "Thursday"}),
		    		new sap.ui.core.ListItem("Fri",
		 		    		{ text : "Friday"})	,
		 		    new sap.ui.core.ListItem("Sat",
				 		    { text : "Saturday"}),
				    new sap.ui.core.ListItem("Sun",
				 		    { text : "Sunday"})	
				           ],
		}) ,
		
//Dropdown Listbox

		oDropBox = new sap.ui.commons.DropdownBox("Dropbox",
		{
					"association:listBox"		: oListBox
		})
			
						]
		});
	}
});