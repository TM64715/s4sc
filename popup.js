document.addEventListener("DOMContentLoaded", main())

function main(){const btn = document.getElementById("btn");
        const para = document.getElementById("para");
        btn.addEventListener("click", function () {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
                    console.log("page cropped");
                    para.style.visibility = "visible";
                });
                });
        })}