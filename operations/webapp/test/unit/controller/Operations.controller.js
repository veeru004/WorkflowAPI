/*global QUnit*/

sap.ui.define([
	"operations/controller/Operations.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Operations Controller");

	QUnit.test("I should test the Operations controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
