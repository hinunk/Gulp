"use strict";$(function(){!function(){var n,data;(n=new XMLHttpRequest).open("GET","./songs.json"),n.onload=function(){data=JSON.parse(n.responseText),data.forEach(function(n){var t=$("\n            <li>\n                <div>"+n.id+"</div>\n                <div>\n                    <h4>"+n.name+"</h4>\n                    <p>"+n.album+'</p>\n                    <svg class="icon" aria-hidden="true">\n\t\t\t\t\t\t\t\t<use xlink:href="#icon-play"></use>\n\t\t\t\t\t</svg>\n                </div>\n            </li>\n        ');$(".musicList>ol").append(t)})},n.send(null),$(".musicList>ol").on("click","li",function(){var n=$(this).children("div").eq(0).text();$.get("./song.html").then(function(){window.location="./song.html?id="+n})})}()});