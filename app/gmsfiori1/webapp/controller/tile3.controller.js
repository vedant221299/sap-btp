sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("gmsfiori.controller.tile3", {
            onInit: function () {

            },
            onpress: function(){
                const contracts = this.getOwnerComponent().getRouter();
                contracts.navTo("RouteView16");
            },
            
        });
    });
