
// MovieList
var movie= movieslist;
   		function createMovieImage() {
   			for (i=0 ; i < movie.length; i++){
   		
			   var movieimage = `<div class="movieimage col-lg-6 row p-3">
									<div class="imgcontainer col-lg-6"><img width="100%" height="100%" src="${movie[i].img}" alt="${movie[i].title}"></div>
									<div class="text-white col-lg-6">
										<div class="title h4">${movie[i].title}</div>
										<div><small>${movie[i].description}</small></div>										
										<div class="d-flex justify-content-end"><div class="up m-2"> <span class="text-success"> Like </span> <i id="pointer" class="fas fa-thumbs-up text-success"> 0</i></div></div>
									</div>
								</div><!--movieimage-->`;
				$("#mp").append(movieimage);
			}
		};
	createMovieImage();




	//add footer
	var footer = "<div id='footer' class='text-center h2'><p>Movie Factory</p></div>";
	$("#mp").after(footer);


	//Like increment

	$('.up').on('click', function () {
	    var up = $(this).children('i');
	    up.text(parseInt(up.text()) +1);
	    console.log();
	  
	    return false;
	});		

// filter Likes 
$('.select').on('click',function() {
	var select = $(this).text();

	
	$("#mp").fadeOut(3000);
	for (i=0 ; i < movie.length; i++){
		if (movie[i].like>0) {
		
			var b = `<div class="movieimage col-lg-6 row p-3">
						<div class="imgcontainer col-lg-6"><img width="100%" height="100%" src="${movie[i].img}" alt="${movie[i].title}"></div>
						<div class="text-white col-lg-6">
							<div>${movie[i].titel}</div>
							<div><small>${movie[i].description}</small></div>										
							<div class="d-flex justify-content-end"><div class="up m-2"> <span class="text-success"> Like </span> <i id="pointer" class="fas fa-thumbs-up text-success"> 0</i></div></div>

						</div>
					</div><!--movieimage-->`;
			$("#mp").append(b);
		}
	}
});	

