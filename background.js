chrome.tabs.onCreated.addListener(function (tab) {
	if (tab.openerTabId != null) {
		chrome.tabs.move(tab.id, { "index": 100000 });
	}
});
