/**
 * Created by Administrator on 2017/4/1.
 */
$(document).ready(function () {

    var navWrap  = $('.nav-wrap');//��õ���������

    //��õ�����������ҳԭ���ƫ����
    var navPos = navWrap.offset().top;
    //��õ�������ʵ�ʸ߶�
    var navHeight = navWrap.outerHeight();

    //���topcontrol�ص�����
    $('#topcontrol').click(function () {
        $('html,body').animate({scrollTop:0},1000);
    });

    //��������
    $(window).scroll(function () {

        //��õ�ǰ��������λ��
        var  sTop = $(window).scrollTop();

        //�ж��������������100px,����ʾ�ص�������ť����������
        if(sTop >= 100) {
            $('#topcontrol').fadeIn('slow');
        }else{
            $('#topcontrol').fadeOut('slow');
        }

        //������������������λ�ã�������fixed
        if(sTop >= navPos) {
            if(!navWrap.hasClass('fixed')){
                navWrap.addClass('fixed');
                $('.banner').css('margin-bottom',navHeight);//��margin��������Ŀհף���ռλ
            }
        }else{
            if(navWrap.hasClass('fixed')){
                navWrap.removeClass('fixed');
                $('.banner').css('margin-bottom',0);//ȥ��marginռλ
            }
        }

        //������������������
        var intro = {
            offsetTop:$('#post-intro').offset().top,
            height:$('#post-intro').outerHeight()
        }

        var usage = {
            offsetTop:$('#post-usage').offset().top,
            height:$('#post-usage').outerHeight()
        };

        var choiceness = {
            offsetTop:$('#choiceness').offset().top,
            height:$('#choiceness').outerHeight()
        };

        if(sTop >= intro.offsetTop - navHeight&& sTop < intro.height + intro.offsetTop - navHeight){
            if(!$('.intro').hasClass('active'))
                $('.intro').addClass('active');
        }else{
            $('.intro').removeClass('active');
        };

        if(sTop >= usage.offsetTop - navHeight&& sTop < usage.height + usage.offsetTop - navHeight){
            if(!$('.usage').hasClass('active'))
                $('.usage').addClass('active');
        }else{
            $('.usage').removeClass('active');
        }
        if(sTop >= choiceness.offsetTop - navHeight&& sTop < choiceness.height + choiceness.offsetTop - navHeight){
            if(!$('.choice').hasClass('active'))
                $('.choice').addClass('active');
        }else{
            $('.choice').removeClass('active');
        }
    });

    //ê�����ӹ���
    $('.nav-wrap a').click(function () {

        var offsetTop  =$(this.hash).offset().top - navHeight + 7;//��ö�Ӧ����ƫ����

        $('html,body').animate({scrollTop:offsetTop},1000);

        return false;
    })
});