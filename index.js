const resizeHandler = () => {
    console.debug('onresize called')
    const topListContainer = document.getElementsByClassName('top-list-container').item(0)
    const overflowHandlerClassName = 'overflow-auto'
    if (topListContainer.scrollHeight > topListContainer.clientHeight) {
        topListContainer.classList.add(overflowHandlerClassName)
    } else {
        topListContainer.classList.remove(overflowHandlerClassName)
    }
}

document.getElementsByTagName('body').item(0)
    .onresize = resizeHandler

resizeHandler()