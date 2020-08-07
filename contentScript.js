window.addEventListener("DOMContentLoaded", main())
function main() {
    function deleting() {
        var bod = document.querySelector(".vw-page-content")
        var auth = document.querySelector("a.author-name");
        auth.style.color = "black";
        var time = document.querySelector("time");
        time.style.color = "black";
        bod.style.width = "100%";
        bod.style.color = "black";
        bod.style.lineHeight = "26px";
        bod.style.fontSize = "17px";
        var topSocial = document.querySelector(".vw-top-bar").remove();
        var header = document.getElementsByTagName("header")[0].remove();
        var icon = document.querySelector(".vw-post-meta-icons").remove();
        var allDots = document.querySelectorAll(".vw-post-meta-separator") //remove at index 1 and 2
        allDots[1].remove();
        allDots[2].remove();
        var views = document.querySelector(".vw-post-view-count").remove();
        var coments = document.querySelector(".vw-post-comment-count").remove();
        var tags = document.querySelector(".vw-tag-links").remove();
        var bottomNav = document.querySelector(".vw-post-navigation").remove();
        var abtAuthor = document.querySelector(".vw-about-author").remove();
        var otherArticle = document.getElementById("disqus_thread").remove();
        var foot = document.querySelector(".vw-footer-bar").remove();
        var copyRight = document.querySelector(".vw-site-footer").remove();
        var scrollTop = document.querySelector(".vw-scroll-to-top").remove();
        var readMorePop = document.querySelector(".vw-more-articles").remove();
        var disclaimer = document.querySelector(".vw-after-post-content").remove();
        var newStyle = document.createElement("style");
        document.head.appendChild(newStyle);
        newStyle.setAttribute("media", "print");
        newStyle.innerHTML = 
        ` 

        .vw-page-title-section__title{
            color: white !important;
        }

        .vw-page-content {
            color: black !important;
            width: 80% !important;
            line-height: 26px !important;
            font-size: 17px !important;
            margin: auto 1in !important;
        }

        .author-name {
            color: !black;
        }
        `

        
    }
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          console.log(sender.tab ?
                      "from a content script:" + sender.tab.url :
                      "from the extension");
            deleting()
        });
}