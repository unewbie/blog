  //<![CDATA[

$(".ticker .widget-content").each(function(){var e=$(this).text();if(e.match("recent")){$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=6",type:"get",dataType:"jsonp",success:function(e){var t="";var n="<ul>";for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].category[0].term;n+='<li><a href="/search/label/'+o+'" class="post-tag">'+o+'</a><h3 class="recent-title"><a href="'+t+'">'+s+"</a></h3></li>"}n+="</ul>";$(".ticker .widget-content").each(function(){$(this).html(n);$(this).prev("h2").prepend('<i class="fa fa-thumb-tack"></i>');$(this).removeClass("widget-content").addClass("layout-content");$(this).find("ul").webTicker();$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})})}})}else{$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results=6",type:"get",dataType:"jsonp",success:function(e){var t="";var n="<ul>";for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].category[0].term;n+='<li><a href="/search/label/'+o+'" class="post-tag">'+o+'</a><h3 class="recent-title"><a href="'+t+'">'+s+"</a></h3></li>"}n+="</ul>";$(".ticker .widget-content").each(function(){$(this).html(n);$(this).prev("h2").prepend('<i class="fa fa-thumb-tack"></i>');$(this).removeClass("widget-content").addClass("layout-content");$(this).find("ul").webTicker();$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})})}})}});

  //]]>