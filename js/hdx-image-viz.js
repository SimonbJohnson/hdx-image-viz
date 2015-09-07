function createVizImage(id,text,textcolor,image,url){
    $(id).html('<div class="hdx-image-viz-text">'+text+'</div>');
    $(id).css('background-image', 'url(' + image + ')');
    $(id).css('background-size','100%');
    $(id).css('color',textcolor);
    $(id).css('color',textcolor);
    $(id).mouseenter(function(){
        $('.hdx-viz-image').animate({backgroundSize:'120%'},500);
    })

    $(id).mouseleave(function(){
        $('.hdx-viz-image').animate({backgroundSize:'100%'},500);
    })

    $(id).on('click',function(){
        console.log('check');
        window.location.href = url;
    });
}

createVizImage('#hdx-viz-image1','Click for Nepal Earthquake</br >Activities Visualisation','#ffffff','images/shelter_cluster.png','http://global-shelter-cluster.github.io/nepal-eq-2015');