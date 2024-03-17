function changeBackground(imageName) {
    document.body.style.transition = 'background 0.5s ease';
    document.body.style.backgroundImage = `url('${imageName}')`;
}
