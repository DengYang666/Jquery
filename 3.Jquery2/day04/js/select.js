$.fn.extend({
    quanxuan:function(){
        $(this).prop("checked", true );
    },
    quanbuxuan:function(){
        $(this).prop("checked", false );
    },
    fanxuan:function(){
        $(this).each(function( index, domElement ){
            $(domElement).prop( "checked" ,  !$(domElement).prop( "checked" )  );
        })
    }
});