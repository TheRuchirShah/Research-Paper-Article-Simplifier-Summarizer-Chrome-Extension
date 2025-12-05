document.addEventListener("mouseup", async () => {
    const selectedText = window.getSelection().toString().trim();

    if (!selectedText || selectedText.length < 5) return;

    chrome.storage.local.set({ selectedText });

    // Dispatch event to trigger tooltip
    document.dispatchEvent(new CustomEvent("showTooltip", {
        detail: { text: selectedText }
    }));
});
