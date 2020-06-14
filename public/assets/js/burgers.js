// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".eat").on("click", function (event) {
      event.preventDefault()
      var id = $(this).data("id");
  console.log("eat clicked ", id)
  
      var update = { 
        devoured: 1 //target text field, new value of update
      };
  
      // Send the PUT request. 
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: update
      }).then(
        function () {
         // console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#add").on("click", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function (event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  