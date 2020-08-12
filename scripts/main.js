let ConfigData = null;
let ImageBaseURL = null;
let RenderedMovies = {};
let PrevSearchVal = '';

// Trigger initial call onload
$(function () {
  getConfigurations();
});

// Get configuration details of image from server
function getConfigurations() {

  serverCall(CONFIG.configUrl, function (error, res) {
    if (error) {
      return console.log("Some error occured");
    }

    ConfigData = res;
    ImageBaseURL = ConfigData.images.base_url;

    getMovies('popular');
  });
}

// Search movies by movie name
function searchMovies() {

  let value = $("#search").val();
  let currentType = $("nav ul li.active").attr('data-type');

  if (value === PrevSearchVal) {
    return;
  }

  PrevSearchVal = value;

  if (value === '') {
    return getMovies(currentType);
  }

  $("#movieList").html('<div class="loader"></div>');

  serverCall(CONFIG.searchUrl + '&query=' + value, function (error, res) {
    if (error) {
      return console.log("Some error occured");
    }

    getAllData(res.results)
    .then(function(movies) {

      RenderedMovies = movies;
      renderMovies();
    });
  });
}

// Change active class of navigation item
function changeActiveClass(type) {
  $("#nav-popular,#nav-upcoming").removeClass("active");
  $("#nav-" + type).addClass("active")
}

// Parse results into object of objects. 
// This function can be used to include only required elements into global object to reduce size
function parseFullResult(arr) {

  let obj = {};

  arr.map(function(movie) {
    if(movie.status === "fulfilled") {
      obj[movie.value.id] = movie.value;
    }
  });

  return obj;
}

// To get complete details of movies recieved 
// either from popular, upcoming or search list
function getAllData(arr) {
  return new Promise(function(resolve, reject) {
    
    let promises = [];

    promises = arr.map(function(movie) {
      let url = CONFIG.movieDetails;
      url = url.replace('MOVIE_ID', movie.id);

      return serverCall(url);
    });

    Promise.allSettled(promises)
    .then(function(res) {
      
      resolve(parseFullResult(res));
    })
    .catch(function(error) {

      reject('error');
    });
  });
}

// Get movie list based on type passed as argument. [popular or upcoming]
function getMovies(type) {

  let url = type === "popular" ? CONFIG.popularMovies : CONFIG.upcomingMovies;
  $("#movieList").html('<div class="loader"></div>');
  $("#search").val('');

  serverCall(url, function (error, res) {
    if (error) {
      console.log("some error occured");
    }

    changeActiveClass(type);
    getAllData(res.results)
    .then(function(movies) {

      RenderedMovies = movies;
      renderMovies();
    });
  });
}

// Render Posters using templates defined
function renderMovies() {

  let poster = Handlebars.templates.poster;

  $("#movieList").html(poster({ ImageBaseURL, posters: RenderedMovies }));
}

// Get movie details based on movie id
function getMovieDetails(id) {

  let movie = RenderedMovies[id];
  let popupModal = Handlebars.templates.popupModal;
  $("#popupModal").html(popupModal({ ...movie, ImageBaseURL })).show();
}

// Generic ajax call to get data from server
function serverCall(url, callback) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url,
      type: "GET",
      success: function (res) {
        if(callback) {
          callback(null, res);
        }
        resolve(res);
      },
      error: function (err) {
        if(callback) {
          callback(err);
        }
        reject(err);
      }
    })
  });
}

// Close popup modal
function closeModal() {
  $("#popupModal").hide();
}

// Register Popup modal callback to handle clicks
var popupModal = document.getElementById("popupModal");
popupModal.onclick = function (event) {
  if (event.target == popupModal) {
    closeModal();
  }
}