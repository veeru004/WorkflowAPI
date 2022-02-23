
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("operations.controller.Operations", {
            onInit: function () {
            },

            startWorkflow: function () {
                var token = this._fetchToken();
                this.startInstance(token);
            },

            _fetchToken: function () {
                var token;
                $.ajax({
                    url: "/operations/bpmworkflowruntime/v1/xsrf-token",
                    method: "GET",
                    async: false,
                    headers: {
                        "X-CSRF-Token": "Fetch"
                    },
                    success: function (result, xhr, data) {
                        token = data.getResponseHeader("X-CSRF-Token");
                    }
                });
                console.log(token);
                return token;
            },
            startInstance: function (token) {
                var url = this.getView().byId("url").getValue();
                var Method = this.getView().byId("method").getValue();
                var data_body = this.getView().byId("data_body").getValue();
                var contextJson = {data_body};
                $.ajax({
                    url: "/operations/bpmworkflowruntime/v1/" + url,
                    method: Method,
                    async: false,
                    contentType: "application/json",
                    headers: {
                        "X-CSRF-Token": token
                    },
                    // data: JSON.stringify({
                    //     definitionId: "wf.tb.techbyte_worfklow",
                    //     context: contextJson
                    // }),
                    success: function () {
                        MessageBox.show("workflow started successfully");

                    },
                    error: function () {
                        MessageBox.show("screwed")
                    }
                });

            }
        })
    });
