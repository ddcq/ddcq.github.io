$(function () {
    initRadar();

    function initImage($image){
        $image.mouseover(function(){
            var $this = $(this);
            $this.attr('src', 'img/video-button-hover.png');
        });

        $image.mouseout(function(){
            var $this = $(this);
            $this.attr('src', 'img/video-button.png');
        });

        $image.click(function(){
            var $image = $(this);
            var $wrapper = $image.parent();

            $image.remove();

            $wrapper.append('<iframe ' +
                'src="https://www.youtube.com/embed/'+ $wrapper.attr('data-video')+'?color=white&theme=light&showinfo=0&rel=0&modestbranding=1&autoplay=1" ' +
                'frameborder="0" ' +
                'allowfullscreen="true">' +
                '</iframe>');

            $wrapper.fitVids();
        });
    }

    $('.portfolio-modal .youtube-video img').each(function(){
        initImage($(this));
    });

    $('.portfolio-modal').on('hide.bs.modal', function (e) {
        var $wrapper = $(this).find('.youtube-video');
        if($wrapper.length != 0){
            $wrapper.html('<img src="img/video-button.png"/>');
            var $image = $wrapper.children('img');
            initImage($image);
        }

        $wrapper.parents('.portfolio-modal').off('scroll', '**');
    });

    $('#loading').remove();
    $('body').removeClass('loading');
});
