$(document).ready(function () {
    let selectedRating = 0;

    $(".star").on("mouseover", function () {
        let value = $(this).data("value");
        highlightStars(value);
    });

    $(".star").on("mouseout", function () {
        highlightStars(selectedRating);
    });

    $(".star").on("click", function () {
        selectedRating = $(this).data("value");
        $("#ratingValue").text(selectedRating);
    });

    function highlightStars(rating) {
        $(".star").each(function () {
            $(this).toggleClass("selected", $(this).data("value") <= rating);
        });
    }

    $("form").on("submit", function (event) {
        if (selectedRating <= 0) {
            event.preventDefault();
            alert("Please provide a rating before submitting the form.");
        }
    });
});
