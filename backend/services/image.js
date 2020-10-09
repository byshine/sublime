const im = require('imagemagick')
im.convert([
    '../test.jpg', 
    '-strip',
    '-interlace',
    'Plane',
    '-gaussian-blur',
    '0.05',
    '-quality',
    '80%',
    'test-opt.jpg'
], 
function(err, stdout){
  if (err) throw err;
  console.log('stdout:', stdout);
});

//convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85% source.jpg result.jpg
