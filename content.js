setInterval(()=>{
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if(skipButton !== null) {
        console.log('ad detected ')
        skipButton.click()
    }
},200)
