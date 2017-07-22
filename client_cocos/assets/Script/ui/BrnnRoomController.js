require("../pomelo/pomelo-client");
var GateConnector = require("../protocol/GateConnector");
var BrnnProto = require("../protocol/BrnnProto");

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        buttonExit: {
            default: null,
            type: cc.Button
        },
    },

    // use this for initialization
    onLoad: function () {
        this.buttonExit.node.on('click', this.buttonExitTap, this);

        this.initBrnnEvent();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    buttonExitTap: function(){
        GateConnector.connectorExit(function() {
            cc.director.loadScene('Home');
        });
    },

    initBrnnEvent: function () {
        BrnnProto.onAdd(function(data){
            console.log(data);
        });

        BrnnProto.onLeave(function(data){
            console.log(data);
        });

        BrnnProto.onWillStart(function(data){
            console.log(data);
        });

        BrnnProto.onDealPoker(function(data){
            console.log(data);
        });

        BrnnProto.onGoldResult(function(data){
            console.log(data);
        });
    },
});
