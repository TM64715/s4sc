window.addEventListener("DOMContentLoaded", main())
function main() {
    function deleting() {
      try {
        var bod = document.querySelector(".vw-page-content")
      } catch(err) {}
      try {
        var auth = document.querySelector("a.author-name");
      } catch(err) {}
      try {
        auth.style.color = "black";
      } catch(err) {}
      try {
        var time = document.querySelector("time");
      } catch(err) {}
      try {
        time.style.color = "black";
      } catch(err) {}
      try {
        bod.style.width = "100%";
      } catch(err) {}
      try {
        bod.style.color = "black";
      } catch(err) {}
      try {
        bod.style.lineHeight = "26px";
      } catch(err) {}
      try {
        bod.style.fontSize = "17px";
      } catch(err) {}
      try {
        var topSocial = document.querySelector(".vw-top-bar").remove();
      } catch(err) {}
      try {
        var header = document.getElementsByTagName("header")[0].remove();
      } catch(err) {}
      try {
        var icon = document.querySelector(".vw-post-meta-icons").remove();
      } catch(err) {}
      try {
        var allDots = document.querySelectorAll(".vw-post-meta-separator"); //remove at index 1 and 2
      } catch(err) {}
      try {
        allDots[1].remove();
      } catch(err) {}
      try {
        allDots[2].remove();
      } catch(err) {}
      try {
        var views = document.querySelector(".vw-post-view-count").remove();
      } catch(err) {}
      try {
        var coments = document.querySelector(".vw-post-comment-count").remove();
      } catch(err) {}
      try {
        try {
      } catch(err) {}
      try {
        var tags = document.querySelector(".vw-tag-links").remove();
      } catch(err) {}
      try {
        } catch(err) {};
      } catch(err) {}
      try {
        var bottomNav = document.querySelector(".vw-post-navigation").remove();
      } catch(err) {}
      try {
        var abtAuthor = document.querySelector(".vw-about-author").remove();
      } catch(err) {}
      try {
        var otherArticle = document.getElementById("disqus_thread").remove();
      } catch(err) {}
      try {
        var foot = document.querySelector(".vw-footer-bar").remove();
      } catch(err) {}
      try {
        var copyRight = document.querySelector(".vw-site-footer").remove();
      } catch(err) {}
      try {
        var scrollTop = document.querySelector(".vw-scroll-to-top").remove();
      } catch(err) {}
      try {
        var readMorePop = document.querySelector(".vw-more-articles").remove();
      } catch(err) {}
      try {
        var disclaimer = document.querySelector(".vw-after-post-content").remove();
      } catch(err) {}
      try {
        var newStyle = document.createElement("style");
      } catch(err) {}
      try {
        document.head.appendChild(newStyle);
      } catch(err) {}
      try {
        newStyle.setAttribute("media", "print");
      } catch(err) {}
      try {
        var fixedTop = document.querySelectorAll(".addthis_bar");
        fixedTop.forEach( element => {
          element.remove();
        });

      } catch(err) {}
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
