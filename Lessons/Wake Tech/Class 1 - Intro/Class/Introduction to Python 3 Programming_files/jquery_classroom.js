function loadIframe(iframe, textareaId) {
    if (!iframe || null == iframe)
        return;
    var iframeDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
    if (!textareaId || null == textareaId)
        textareaId = iframe.id.replace("frm", "txt");
    var textarea = $('#' + textareaId);

    iframeDoc.open;
    iframeDoc.write(textarea.val());
    iframeDoc.close();

    $(iframe).contents().find('body').css({ borderWidth: "0", margin: "0", padding: "0", overflow: "auto", "background-color": "#FFFFFF" }).addClass($(iframe).attr('class'));
    var pageLinks = $('link[rel=stylesheet]').each(function() {
        var cssLink = iframeDoc.createElement("link")
        cssLink.href = $(this).attr('href');
        cssLink.rel = "stylesheet";
        cssLink.type = "text/css";
        iframeDoc.getElementsByTagName("head")[0].appendChild(cssLink);
    });
}

function resizeIframe(iframe) {
    if (iframe) {
        var iframeBody = (iframe.contentDocument) ? iframe.contentDocument.body : iframe.contentWindow.document.body;
        var height = iframeBody.scrollHeight == 0 || (iframeBody.offsetHeight > 0 && iframeBody.offsetHeight > iframeBody.scrollHeight)
                ? iframeBody.offsetHeight
                : iframeBody.scrollHeight;
        var altheight = $(iframe).contents().find('html').height();
        height = height > altheight ? height : altheight;
        var isHorizontalScrollbar = iframeBody.scrollWidth > iframeBody.offsetWidth;
        if (isHorizontalScrollbar) {
            height = height + 20;
        }
        $(iframe).height(height);
    }
}