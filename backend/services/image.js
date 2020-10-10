const im = require('imagemagick')
const path = require('path')
const fs = require('fs')

function getOptimizedDirectory() {
    return `${path.dirname(require.main.filename)}/files/images/optimized/`
}

function getOriginalDirectory() {
    return `${path.dirname(require.main.filename)}/files/images/original/`
}

function getOptimizedPath(imageName) {
    return getOptimizedDirectory() + imageName
}

function getOriginalPath(imageName) {
    return getOriginalDirectory() + imageName
}

function getOptions(imageName) {

    const originalPath = getOriginalPath(imageName)
    const optimizedPath = getOptimizedPath(imageName)
    

    return [
        originalPath, 
        '-strip',
        '-interlace',
        'Plane',
        '-gaussian-blur',
        '0.05',
        '-quality',
        '80%',
        optimizedPath
    ]    
}

function optimize(imageName) {
    return new Promise((resolve, reject) => {
        im.convert(getOptions(imageName), function(err){
            if (err) reject({ err })
            resolve({
                error: false,
                message: "Success",
                originalPath: getOriginalPath(imageName),
                optimizedPath: getOptimizedPath(imageName)
            })
        });
    })
}

module.exports = {
    optimize
}




//convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85% source.jpg result.jpg
