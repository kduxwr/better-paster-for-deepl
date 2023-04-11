const removeLineBreaks = text => text.replace(/[\r\n]+/g, ' ');

const pasteText = async () => {
    const clipboardData = await navigator.clipboard.readText();

    const selection = window.getSelection();
    if (selection && selection.anchorNode) {
        const deepLTextArea = selection.anchorNode.closest('d-textarea[data-testid="translator-source-input"] > div[contenteditable="true"]');
        if (deepLTextArea) {
            const range = selection.getRangeAt(0);
            range.deleteContents();

            const textNode = document.createTextNode(removeLineBreaks(clipboardData));
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            range.setEndAfter(textNode);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
};

document.addEventListener('keydown', async event => {
    if (event.ctrlKey && event.code === 'KeyV' || event.metaKey && event.code === 'KeyV') {
        event.preventDefault();
        await pasteText();
    }
});

window.onload = async () => {
    const clipboardData = await navigator.clipboard.readText();
}