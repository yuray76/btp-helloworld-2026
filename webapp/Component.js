sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/btp/helloworldui5/model/models",
    "sap/base/Log"
], (UIComponent, models, Log) => {
    "use strict";

    return UIComponent.extend("sap.btp.helloworldui5.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            Log.info("Hello-World Information Log");
            Log.debug("Hello-World Debug Log");
            Log.warning("Hello-World Warning Log");
            Log.error("Hello-World Error Log");
            Log.fatal("Hello-World Fatal Log");

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});