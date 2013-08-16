fixFlairs();

function fixFlairs()
{
    $("span[class *= \"flair-sc\"][title != \"\"]").on("mouseenter mouseleave", function(evt) {
        var e = evt.target,
            t = e.title.replace(/^http[s]?:\/\/[w]*[\.]*|[w]*[\.]*/, ""),
            $n = $("<a/>", {
                html: t,
                href: "http://" + t,
                target: "_blank",
                class: $(e).attr("class")
            });
        if(t.indexOf("soundcloud.com") > -1) {
            $(e).replaceWith($n);
        }
    });
    setTimeout(fixFlairs, 100);
}