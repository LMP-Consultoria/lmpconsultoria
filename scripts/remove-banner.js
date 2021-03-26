try {
    let imgProp = null;
    let imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        let img = imgs[i];
        if (img.alt.includes('000webhost')) {
            imgProp = img;
        }
    }
    let content = imgProp.parentElement.parentElement;
    content.remove();
} catch (ex) {

}