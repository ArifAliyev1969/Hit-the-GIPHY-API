

// Adding click event listen listener to all buttons
$("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    var transport = $(this).attr("data-transport");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    transport + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var transportDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var transportImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          transportImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          transportDiv.append(p);
          transportDiv.append(transportImage);

          // Prependng the transportDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(transportDiv);
        }
      });
  });