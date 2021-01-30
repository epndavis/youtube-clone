window.imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return
        }

        const lazyImage = entry.target
        lazyImage.src = lazyImage.dataset.src
        imgObserver.unobserve(lazyImage)
    })
})
