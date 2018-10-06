function onYouTubeIframeAPIReady()
{

var o= function(e, t)
{
var a=e?"IDzX9gL.png":"quyUPXN.png";

t.setAttribute("src","https://i.imgur.com/"+a)
};

var counter = 0;
var bigE = document.querySelectorAll(".youtube-audio");

bigE.forEach(function(e)
{
var t=document.createElement("img");

t.setAttribute("id","youtube-icon-"+counter),
t.style.cssText="cursor:pointer;cursor:hand",
e.appendChild(t);

var a=document.createElement("div");

a.setAttribute("id","youtube-player-"+counter),
e.appendChild(a);

t.setAttribute("src","https://i.imgur.com/quyUPXN.png");

e.onclick=function()
{
r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),
o(!1, t)):(r.playVideo(),
o(!0, t))
};

var r= new YT.Player("youtube-player-"+counter,
{

height:"0",
width:"0",
videoId:e.dataset.video,
playerVars:
{
autoplay:e.dataset.autoplay,loop:e.dataset.loop
},
events:
{
onReady:function(e)
{
r.setPlaybackQuality("small"),
o(r.getPlayerState()!==YT.PlayerState.CUED, t)
},
onStateChange:function(e)
{
e.data===YT.PlayerState.ENDED&&o(!1, t)
}
}
})

counter++;
});
}
