setInterval(() => {
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    const adOverlayCloseButton = document.querySelector('.ytp-ad-overlay-close-button');
    if (skipButton !== null) {
        console.log('ad detected ');
        skipButton.click();
    }
    if (adOverlayCloseButton !== null) {
        console.log('overlay detected');
        adOverlayCloseButton.click();
    }
}, 300)


