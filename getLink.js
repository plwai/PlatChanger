function blockRequest(details) {
  alert(details.url);
  return {cancel: true};
}

function updateFilters(urls) {
   if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
   
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://d.pcs.baidu.com/file*"]}, ['blocking']);
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://www.baidupcs.com/rest/2.0/pcs/file*"]}, ['blocking']);
}

updateFilters();
