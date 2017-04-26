$(function(){
    function resize(){
        $('.resize').css({
            height:$(window).height()
        });
    }
    $(window).resize(function(){
        resize();
    });
    resize();

    //var value = $().scrollTop();
    var pos_index = $('#content-index').offset().top;
    var pos_work = $('#content-work').offset().top;
    var pos_about = $('#content-about').offset().top;
    $(window).scroll(function(){
        var value = $(this).scrollTop();
        //console.log(value, pos_portfolio, pos_contact)
        if(value >= pos_index && value < pos_work){
            $('#menu li:nth-child(1)').addClass('active').siblings().removeClass('active');
            $('#header').removeClass('active');
        } else if(value >= pos_work && value < pos_about - 1){
            $('#menu li:nth-child(2)').addClass('active').siblings().removeClass('active');
            $('#header').addClass('active');
        } else{
            $('#menu li:nth-child(3)').addClass('active').siblings().removeClass('active');
            $('#header').addClass('active');
        }
        console.log(value, pos_about)

        var $window = $(window);
        var $self = $('#content-index');
        var offsetCoords = $self.offset();
        // If this section is in view
        if(($window.scrollTop() + $window.height()) > offsetCoords.top && ((offsetCoords.top + $self.height()) > $window.scrollTop())){
            var yPos = $window.scrollTop() / 2;
            var opacity = $window.scrollTop() / 1000;
            var coords = '50%' + yPos + '%';
            $self.css('backgroundPosition', coords);
            $(this).children('.bg').css('opacity', opacity);
        }
    })

    //menu
    $('.btn_menu').on('click', function(){
        $('#menu').toggleClass('on');
    });
    $('h1 a, a.btn_view, #menu li a').click(function(){
        if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
            var $target = $(this.hash);
            $target = $target.length && $target;
			if($target.length){
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 600, 'easeOutQuint');
                return false;
            }
        }
    });

    $('.btn_menu').click(function(){
        if($(this).hasClass('rotate')){
            $(this).removeClass('rotate').addClass('rotate2')
        }else{
            $(this).removeClass('rotate2').addClass('rotate')
        }
    });

    //guide info
    $('.info span').mouseenter(function(){
        var guide = $(this).text();
        console.log(guide)
        $(this).append($('.'+guide))
        $(this).children('span').show();
    });
    $('.info span').mouseleave(function(){
        $(this).children('span').hide();
    });

	$('.info a.link').mouseenter(function(){
        $(this).parent().append($('.site-link'))
        $(this).siblings('span').show();
    });
    $('.info a.link').mouseleave(function(){
        $(this).siblings('span').hide();
    });
	$('.info a.code').mouseenter(function(){
        $(this).parent().append($('.sample'))
        $(this).siblings('span').show();
    });
    $('.info a.code').mouseleave(function(){
        $(this).siblings('span').hide();
    });

});