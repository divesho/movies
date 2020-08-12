// Register helpers on handlebars

// To convert array to comma seperated string
Handlebars.registerHelper('arrToStr', function(arr) {
  let str = [];

  arr.map(function (genre) {
    str.push(genre.name);
  });

  return str.join(', ');
});

// To calculate time in hour and minutes from int value [in minutes]
Handlebars.registerHelper('duration', function(runtime) {
  runtime = parseInt(runtime);
  let hh = Math.floor(parseInt(runtime) / 60);
  let mm = runtime - (hh * 60);

  return `${hh}h ${mm}m`;
});

// To fetch image from array of objects and return image element 
Handlebars.registerHelper('loadImageBackdrop', function(images, type) {
  
  let image = '';
  let size = '';

  if(type === 'poster') {
    size = 'w342';
    image = './public/images/no-poster-image.jpg';
  } else {
    size = 'w500';
    image = './public/images/no-image.jpg';
  }

  let arr = (!images) ? [] : ((type === 'poster') ? images.posters : images.backdrops);

  if(arr) {
    for(let i=0; i<arr.length; i++) {
      if(arr[i].file_path) {
        image = `${ImageBaseURL}${size}${arr[i].file_path}`;
        break;
      }
    }
  }

  return new Handlebars.SafeString("<img src='" + image + "'/>");
});