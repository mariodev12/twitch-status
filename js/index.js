var channels = ['riotgames2','vman7','riotgames','voyboy','imaqtpie'];
    function parseTwitch(){
        $.each(channels, function(i){
            $.getJSON('https://api.twitch.tv/kraken/streams/'+channels[i]+'?callback?', function(data){
                var user, state;
                if(data.stream === null){
                    user = channels[i];
                    state = "offline";
                } else {
                    user = data.stream.channel.name;
                    state = "online";
                }
                html = "<div class='list text-center "+state+"'><div class='list-inside'><div class='col-xs-6'>"+user+"</div> <div class='col-xs-4'><span id='"+state+"'>"+state+"</span></div><div class='col-xs-2'><div class=''><a data-ajax='false' target='_blank' href='https://player.twitch.tv/?channel="+user+"'><i class='fa fa-play'></i></a></div></div></div></div>";
                state === "online" ? $('.content .row').prepend(html) : $('.content .row').append(html);
            });
        });
    };
$(document).ready(function(){
    parseTwitch();
    $('#all i').css({"color":"skyblue"});
    $('#on').on('click', function(){
      $('.online').removeClass('hide');
      $('.offline').addClass('hide');
      $('#off i').css({"color":"#ccc"});
      $('#all i').css({"color":"#ccc"});
      $('#on i').css({"color":"green"});
    });
  $('#off').on('click', function(){
    $('.offline').removeClass('hide');
    $('.online').addClass('hide');
    $('#off i').css({"color":"red"});
    $('#all i').css({"color":"#ccc"});
    $('#on i').css({"color":"#ccc"});
  });
  $('#all').on('click', function(){
    $('.offline').removeClass('hide');
    $('.online').removeClass('hide');
    $('#off i').css({"color":"#ccc"});
    $('#all i').css({"color":"skyblue"});
    $('#on i').css({"color":"#ccc"});
  });
});
