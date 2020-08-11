let ConfigData = null;
let ImageBaseURL = null;
let PopularMovies = [];
let UpcomingMOvies = [];
let PrevSearchVal = '';

// Register helpers on handlebars
Handlebars.registerHelper('genersStr', function (arr) {
  let str = [];

  arr.map(function (genre) {
    str.push(genre.name);
  });

  return str.join(', ');
});

// Trigger initial call onload.
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

    if (currentType === "popular") {
      PopularMovies = res.results;
    } else {
      UpcomingMOvies = res.results;
    }

    renderMovies(currentType);
  });
}

// Change active class of navigation item
function changeActiveClass(type) {
  $("#nav-popular,#nav-upcoming").removeClass("active");
  $("#nav-" + type).addClass("active")
}

// Get movie list based type passed as argument. [popular or upcoming]
function getMovies(type) {

  let url = type === "popular" ? CONFIG.popularMovies : CONFIG.upcomingMovies;
  $("#movieList").html('<div class="loader"></div>');
  $("#search").val('');

  serverCall(url, function (error, res) {
    if (error) {
      console.log("some error occured");
    }
    changeActiveClass(type);

    if (type === "popular") {
      PopularMovies = res.results;
    } else {
      UpcomingMOvies = res.results;
    }

    renderMovies(type);
  });
}

// Render Posters using templates defined
function renderMovies(type) {

  let movies = (type === "popular") ? PopularMovies : UpcomingMOvies;
  let poster = Handlebars.templates.poster;

  $("#movieList").html(poster({ ImageBaseURL, posters: movies }));
}

// Get movie details based on movie id
function getMovieDetails(id) {

  let url = CONFIG.movieDetails;
  url = url.replace('MOVIE_ID', id);

  serverCall(url, function (error, movie) {
    if (error) {
      return console.log("some error occured", error);
    }

    let popupModal = Handlebars.templates.popupModal;
    $("#popupModal").html(popupModal({ ...movie, ImageBaseURL })).show();
  });
}

// Generic ajax call to get data from server
function serverCall(url, callback) {

  $.ajax({
    url,
    type: "GET",
    success: function (res) {
      callback(null, res);
    },
    error: function (err) {
      callback(err);
    }
  })
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