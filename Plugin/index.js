// TODO : 로고 눌러서 메인페이지로 가도 리다이렉트 되게 하기 

chrome.webNavigation.onBeforeNavigate.addListener(details => {
    const url = new URL(details.url);
    if (url.hostname === "www.youtube.com" && url.pathname === "/") {
        const newUrl = "https://backgwa.github.io/Safetube/";
        chrome.tabs.update(details.tabId, { url: newUrl });
    }
});
