require.config({
    paths:{
        jcx: '../src/jcx'
    },
});
require(["app"], function(init){
    init();
});
