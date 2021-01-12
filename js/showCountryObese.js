$(document).ready(function () {

    $("#idCountry").change(function () {
        var id = $("#idCountry").val();
        $.ajax({
            type: "GET",
            url: "http://localhost/c273/P09/getCountryDetails.php",
            data: "id=" + id,
            cache: false,
            dataType: "JSON",
            success: function (response) {
                console.log(id);
                console.log(response);
                var message = ""
                message = "<tbody>";
                message += "<tr><td>" + response.population + "</td>" + "<td>" + response.obese + "</td></tr>";
                message += "</tbody>";
                $("#obeseTable").html(message);
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});
