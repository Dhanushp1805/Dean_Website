$(document).ready(function () {

    // Men's Wear //
    $("#Dresses-Column").hide();
    $("#T-Shirts-Column").hide();
    $("#Athletic-Wear-Column").hide();
    $("#Sports-Shirts-Column").hide();
    $("#Denim-Tab").addClass('tabactive');

    $(document).on('click', '#Denim-Tab', function () {
        $("#Denim-Tab").addClass('tabactive');
        $("#Dresses-Tab").removeClass('tabactive');
        $("#T-Shirts-Tab").removeClass('tabactive');
        $("#Athletic-Wear-Tab").removeClass('tabactive');
        $("#Sports-Shirts-Tab").removeClass('tabactive');
        $("#Denim-Column").show();
        $("#Dresses-Column").hide();
        $("#T-Shirts-Column").hide();
        $("#Athletic-Wear-Column").hide();
        $("#Sports-Shirts-Column").hide();
    });

    $(document).on('click', '#Dresses-Tab', function () {
        $("#Dresses-Tab").addClass('tabactive');
        $("#Denim-Tab").removeClass('tabactive');
        $("#T-Shirts-Tab").removeClass('tabactive');
        $("#Athletic-Wear-Tab").removeClass('tabactive');
        $("#Sports-Shirts-Tab").removeClass('tabactive');
        $("#Dresses-Column").show();
        $("#Denim-Column").hide();
        $("#T-Shirts-Column").hide();
        $("#Athletic-Wear-Column").hide();
        $("#Sports-Shirts-Column").hide();
    });

    $(document).on('click', '#T-Shirts-Tab', function () {
        $("#T-Shirts-Tab").addClass('tabactive');
        $("#Denim-Tab").removeClass('tabactive');
        $("#Dresses-Tab").removeClass('tabactive');
        $("#Athletic-Wear-Tab").removeClass('tabactive');
        $("#Sports-Shirts-Tab").removeClass('tabactive');
        $("#T-Shirts-Column").show();
        $("#Dresses-Column").hide();
        $("#Denim-Column").hide();
        $("#Athletic-Wear-Column").hide();
        $("#Sports-Shirts-Column").hide();
    });

    $(document).on('click', '#Athletic-Wear-Tab', function () {
        $("#Athletic-Wear-Tab").addClass('tabactive');
        $("#Denim-Tab").removeClass('tabactive');
        $("#Dresses-Tab").removeClass('tabactive');
        $("#T-Shirts-Tab").removeClass('tabactive');
        $("#Sports-Shirts-Tab").removeClass('tabactive');
        $("#Athletic-Wear-Column").show();
        $("#T-Shirts-Column").hide();
        $("#Dresses-Column").hide();
        $("#Denim-Column").hide();
        $("#Sports-Shirts-Column").hide();
    });

    $(document).on('click', '#Sports-Shirts-Tab', function () {
        $("#Sports-Shirts-Tab").addClass('tabactive');
        $("#Denim-Tab").removeClass('tabactive');
        $("#Dresses-Tab").removeClass('tabactive');
        $("#T-Shirts-Tab").removeClass('tabactive');
        $("#Athletic-Wear-Tab").removeClass('tabactive');
        $("#Sports-Shirts-Column").show();
        $("#Athletic-Wear-Column").hide();
        $("#T-Shirts-Column").hide();
        $("#Dresses-Column").hide();
        $("#Denim-Column").hide();
    });
    // Men's Wear //

    // Ladies Wear //
    $("#Blouses-Column").hide();
    $("#Shirts-Column").hide();
    $("#Polo-T-Shirts-Column").hide();
    $("#Tank-Top-Column").hide();
    $("#Skirts-Tab").addClass('tabactive');

    $(document).on('click', '#Skirts-Tab', function () {
        $("#Skirts-Tab").addClass('tabactive');
        $("#Blouses-Tab").removeClass('tabactive');
        $("#Shirts-Tab").removeClass('tabactive');
        $("#Polo-T-Shirts-Tab").removeClass('tabactive');
        $("#Tank-Top-Tab").removeClass('tabactive');
        $("#Skirts-Column").show();
        $("#Blouses-Column").hide();
        $("#Shirts-Column").hide();
        $("#Polo-T-Shirts-Column").hide();
        $("#Tank-Top-Column").hide();
    });

    $(document).on('click', '#Blouses-Tab', function () {
        $("#Blouses-Tab").addClass('tabactive');
        $("#Skirts-Tab").removeClass('tabactive');
        $("#Shirts-Tab").removeClass('tabactive');
        $("#Polo-T-Shirts-Tab").removeClass('tabactive');
        $("#Tank-Top-Tab").removeClass('tabactive');
        $("#Skirts-Column").hide();
        $("#Blouses-Column").show();
        $("#Shirts-Column").hide();
        $("#Polo-T-Shirts-Column").hide();
        $("#Tank-Top-Column").hide();
    });

    $(document).on('click', '#Shirts-Tab', function () {
        $("#Shirts-Tab").addClass('tabactive');
        $("#Skirts-Tab").removeClass('tabactive');
        $("#Blouses-Tab").removeClass('tabactive');
        $("#Polo-T-Shirts-Tab").removeClass('tabactive');
        $("#Tank-Top-Tab").removeClass('tabactive');
        $("#Skirts-Column").hide();
        $("#Blouses-Column").hide();
        $("#Shirts-Column").show();
        $("#Polo-T-Shirts-Column").hide();
        $("#Tank-Top-Column").hide();
    });

    $(document).on('click', '#Polo-T-Shirts-Tab', function () {
        $("#Shirts-Tab").removeClass('tabactive');
        $("#Skirts-Tab").removeClass('tabactive');
        $("#Blouses-Tab").removeClass('tabactive');
        $("#Polo-T-Shirts-Tab").addClass('tabactive');
        $("#Tank-Top-Tab").removeClass('tabactive');
        $("#Skirts-Column").hide();
        $("#Blouses-Column").hide();
        $("#Shirts-Column").hide();
        $("#Polo-T-Shirts-Column").show();
        $("#Tank-Top-Column").hide();
    });

    $(document).on('click', '#Tank-Top-Tab', function () {
        $("#Shirts-Tab").removeClass('tabactive');
        $("#Skirts-Tab").removeClass('tabactive');
        $("#Blouses-Tab").removeClass('tabactive');
        $("#Polo-T-Shirts-Tab").removeClass('tabactive');
        $("#Tank-Top-Tab").addClass('tabactive');
        $("#Skirts-Column").hide();
        $("#Blouses-Column").hide();
        $("#Shirts-Column").hide();
        $("#Polo-T-Shirts-Column").hide();
        $("#Tank-Top-Column").show();
    });
    // Ladies Wear //



});


// popup function //
function showPopup(imageSrc) {
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    popupImage.src = imageSrc;
    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('imagePopup').style.display = 'none';
}
