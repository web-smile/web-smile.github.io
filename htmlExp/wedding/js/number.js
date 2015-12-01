/* 
* @Author: anchen
* @Date:   2015-07-29 08:00:29
* @Last Modified by:   anchen
* @Last Modified time: 2015-07-29 10:36:11
*/

'use strict';

    $(function(){
        $('.sl').mouseover(function(){
            $('.sl').removeClass('active');
            $(this).addClass('active');
            $('.banner_item').hide();
            $('.banner_item').eq($(this).index()).show();
    });

    $('.protect li').hover(
        function(){
            $('.protect_pos').eq($(this).index()).show();

        },function(){
            $('.protect_pos').eq($(this).index()).hide();
        });

        $('.up').click(function(){
            $('.bottom_left_item').hide();
            $('.bottom_left_item').eq($(this).index()).show();
        });
        $('.down').click(function(){
            $('.bottom_left_item').hide();
            $('.bottom_left_item').eq($(this).index()).show();
        });
    


});
