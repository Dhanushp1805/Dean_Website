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

    // Kids Wear //
    $("#Kids-T-Shirts-Column").hide();
    $("#Kids-Athletic-Wear-Column").hide();
    $("#Kids-Sports-Shirts-Column").hide();
    $("#Kids-Sweat-Shirts-Column").hide();
    $("#Kids-Dresses-Tab").addClass('tabactive');

    $(document).on('click', '#Kids-Dresses-Tab', function () {
        $("#Kids-Dresses-Tab").addClass('tabactive');
        $("#Kids-T-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Athletic-Wear-Tab").removeClass('tabactive');
        $("#Kids-Sports-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Sweat-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Dresses-Column").show();
        $("#Kids-T-Shirts-Column").hide();
        $("#Kids-Athletic-Wear-Column").hide();
        $("#Kids-Sports-Shirts-Column").hide();
        $("#Kids-Sweat-Shirts-Column").hide();
    });

    $(document).on('click', '#Kids-T-Shirts-Tab', function () {
        $("#Kids-Dresses-Tab").removeClass('tabactive');
        $("#Kids-T-Shirts-Tab").addClass('tabactive');
        $("#Kids-Athletic-Wear-Tab").removeClass('tabactive');
        $("#Kids-Sports-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Sweat-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Dresses-Column").hide();
        $("#Kids-T-Shirts-Column").show();
        $("#Kids-Athletic-Wear-Column").hide();
        $("#Kids-Sports-Shirts-Column").hide();
        $("#Kids-Sweat-Shirts-Column").hide();
    });

    $(document).on('click', '#Kids-Athletic-Wear-Tab', function () {
        $("#Kids-Dresses-Tab").removeClass('tabactive');
        $("#Kids-T-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Athletic-Wear-Tab").addClass('tabactive');
        $("#Kids-Sports-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Sweat-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Dresses-Column").hide();
        $("#Kids-T-Shirts-Column").hide();
        $("#Kids-Athletic-Wear-Column").show();
        $("#Kids-Sports-Shirts-Column").hide();
        $("#Kids-Sweat-Shirts-Column").hide();
    });

    $(document).on('click', '#Kids-Sports-Shirts-Tab', function () {
        $("#Kids-Dresses-Tab").removeClass('tabactive');
        $("#Kids-T-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Athletic-Wear-Tab").removeClass('tabactive');
        $("#Kids-Sports-Shirts-Tab").addClass('tabactive');
        $("#Kids-Sweat-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Dresses-Column").hide();
        $("#Kids-T-Shirts-Column").hide();
        $("#Kids-Athletic-Wear-Column").hide();
        $("#Kids-Sports-Shirts-Column").show();
        $("#Kids-Sweat-Shirts-Column").hide();
    });

    $(document).on('click', '#Kids-Sweat-Shirts-Tab', function () {
        $("#Kids-Dresses-Tab").removeClass('tabactive');
        $("#Kids-T-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Athletic-Wear-Tab").removeClass('tabactive');
        $("#Kids-Sports-Shirts-Tab").removeClass('tabactive');
        $("#Kids-Sweat-Shirts-Tab").addClass('tabactive');
        $("#Kids-Dresses-Column").hide();
        $("#Kids-T-Shirts-Column").hide();
        $("#Kids-Athletic-Wear-Column").hide();
        $("#Kids-Sports-Shirts-Column").hide();
        $("#Kids-Sweat-Shirts-Column").show();
    });
    // Kids Wear //

    // Beach Wear //
    $("#Beach-wear-Vests-Column").hide();
    $("#Beach-wear-Fashion-Tops-Column").hide();
    $("#Beach-wear-Bermuda-Column").hide();
    $("#Beach-wear-Shorts-Column").hide();
    $("#Beach-wear-Swim-Suits-Tab").addClass('tabactive');

    $(document).on('click', '#Beach-wear-Swim-Suits-Tab', function () {
        $("#Beach-wear-Swim-Suits-Tab").addClass('tabactive');
        $("#Beach-wear-Vests-Tab").removeClass('tabactive');
        $("#Beach-wear-Fashion-Tops-Tab").removeClass('tabactive');
        $("#Beach-wear-Bermuda-Tab").removeClass('tabactive');
        $("#Beach-wear-Shorts-Tab").removeClass('tabactive');
        $("#Beach-wear-Swim-Suits-Column").show();
        $("#Beach-wear-Vests-Column").hide();
        $("#Beach-wear-Fashion-Tops-Column").hide();
        $("#Beach-wear-Bermuda-Column").hide();
        $("#Beach-wear-Shorts-Column").hide();
    });

    $(document).on('click', '#Beach-wear-Vests-Tab', function () {
        $("#Beach-wear-Swim-Suits-Tab").removeClass('tabactive');
        $("#Beach-wear-Vests-Tab").addClass('tabactive');
        $("#Beach-wear-Fashion-Tops-Tab").removeClass('tabactive');
        $("#Beach-wear-Bermuda-Tab").removeClass('tabactive');
        $("#Beach-wear-Shorts-Tab").removeClass('tabactive');
        $("#Beach-wear-Swim-Suits-Column").hide();
        $("#Beach-wear-Vests-Column").show();
        $("#Beach-wear-Fashion-Tops-Column").hide();
        $("#Beach-wear-Bermuda-Column").hide();
        $("#Beach-wear-Shorts-Column").hide();
    });

    $(document).on('click', '#Beach-wear-Fashion-Tops-Tab', function () {
        $("#Beach-wear-Swim-Suits-Tab").removeClass('tabactive');
        $("#Beach-wear-Vests-Tab").removeClass('tabactive');
        $("#Beach-wear-Fashion-Tops-Tab").addClass('tabactive');
        $("#Beach-wear-Bermuda-Tab").removeClass('tabactive');
        $("#Beach-wear-Shorts-Tab").removeClass('tabactive');
        $("#Beach-wear-Swim-Suits-Column").hide();
        $("#Beach-wear-Vests-Column").hide();
        $("#Beach-wear-Fashion-Tops-Column").show();
        $("#Beach-wear-Bermuda-Column").hide();
        $("#Beach-wear-Shorts-Column").hide();
    });

    $(document).on('click', '#Beach-wear-Bermuda-Tab', function () {
        $("#Beach-wear-Swim-Suits-Tab").removeClass('tabactive');
        $("#Beach-wear-Vests-Tab").removeClass('tabactive');
        $("#Beach-wear-Fashion-Tops-Tab").removeClass('tabactive');
        $("#Beach-wear-Bermuda-Tab").addClass('tabactive');
        $("#Beach-wear-Shorts-Tab").removeClass('tabactive');
        $("#Beach-wear-Swim-Suits-Column").hide();
        $("#Beach-wear-Vests-Column").hide();
        $("#Beach-wear-Fashion-Tops-Column").hide();
        $("#Beach-wear-Bermuda-Column").show();
        $("#Beach-wear-Shorts-Column").hide();
    });

    $(document).on('click', '#Beach-wear-Shorts-Tab', function () {
        $("#Beach-wear-Swim-Suits-Tab").removeClass('tabactive');
        $("#Beach-wear-Vests-Tab").removeClass('tabactive');
        $("#Beach-wear-Fashion-Tops-Tab").removeClass('tabactive');
        $("#Beach-wear-Bermuda-Tab").removeClass('tabactive');
        $("#Beach-wear-Shorts-Tab").addClass('tabactive');
        $("#Beach-wear-Swim-Suits-Column").hide();
        $("#Beach-wear-Vests-Column").hide();
        $("#Beach-wear-Fashion-Tops-Column").hide();
        $("#Beach-wear-Bermuda-Column").hide();
        $("#Beach-wear-Shorts-Column").show();
    });
    // Beach Wear //

    // Formal Wear //
    $("#Formal-wear-T-Shirts-Column").hide();
    $("#Formal-wear-Trousers-Column").hide();
    $("#Formal-wear-Pants-Column").hide();
    $("#Formal-wear-Shirts-Column").hide();
    $("#Formal-wear-Dresses-Tab").addClass('tabactive');

    $(document).on('click', '#Formal-wear-Dresses-Tab', function () {
        $("#Formal-wear-Dresses-Tab").addClass('tabactive');
        $("#Formal-wear-T-Shirts-Tab").removeClass('tabactive');
        $("#Formal-wear-Trousers-Tab").removeClass('tabactive');
        $("#Formal-wear-Pants-Tab").removeClass('tabactive');
        $("#Formal-wear-Shirts-Tab").removeClass('tabactive');
        $("#Formal-wear-Dresses-Column").show();
        $("#Formal-wear-T-Shirts-Column").hide();
        $("#Formal-wear-Trousers-Column").hide();
        $("#Formal-wear-Pants-Column").hide();
        $("#Formal-wear-Shirts-Column").hide();
    });

    $(document).on('click', '#Formal-wear-T-Shirts-Tab', function () {
        $("#Formal-wear-Dresses-Tab").removeClass('tabactive');
        $("#Formal-wear-T-Shirts-Tab").addClass('tabactive');
        $("#Formal-wear-Trousers-Tab").removeClass('tabactive');
        $("#Formal-wear-Pants-Tab").removeClass('tabactive');
        $("#Formal-wear-Shirts-Tab").removeClass('tabactive');
        $("#Formal-wear-Dresses-Column").hide();
        $("#Formal-wear-T-Shirts-Column").show();
        $("#Formal-wear-Trousers-Column").hide();
        $("#Formal-wear-Pants-Column").hide();
        $("#Formal-wear-Shirts-Column").hide();
    });

    $(document).on('click', '#Formal-wear-Trousers-Tab', function () {
        $("#Formal-wear-Dresses-Tab").removeClass('tabactive');
        $("#Formal-wear-T-Shirts-Tab").removeClass('tabactive');
        $("#Formal-wear-Trousers-Tab").addClass('tabactive');
        $("#Formal-wear-Pants-Tab").removeClass('tabactive');
        $("#Formal-wear-Shirts-Tab").removeClass('tabactive');
        $("#Formal-wear-Dresses-Column").hide();
        $("#Formal-wear-T-Shirts-Column").hide();
        $("#Formal-wear-Trousers-Column").show();
        $("#Formal-wear-Pants-Column").hide();
        $("#Formal-wear-Shirts-Column").hide();
    });

    $(document).on('click', '#Formal-wear-Pants-Tab', function () {
        $("#Formal-wear-Dresses-Tab").removeClass('tabactive');
        $("#Formal-wear-T-Shirts-Tab").removeClass('tabactive');
        $("#Formal-wear-Trousers-Tab").removeClass('tabactive');
        $("#Formal-wear-Pants-Tab").addClass('tabactive');
        $("#Formal-wear-Shirts-Tab").removeClass('tabactive');
        $("#Formal-wear-Dresses-Column").hide();
        $("#Formal-wear-T-Shirts-Column").hide();
        $("#Formal-wear-Trousers-Column").hide();
        $("#Formal-wear-Pants-Column").show();
        $("#Formal-wear-Shirts-Column").hide();
    });

    $(document).on('click', '#Formal-wear-Shirts-Tab', function () {
        $("#Formal-wear-Dresses-Tab").removeClass('tabactive');
        $("#Formal-wear-T-Shirts-Tab").removeClass('tabactive');
        $("#Formal-wear-Trousers-Tab").removeClass('tabactive');
        $("#Formal-wear-Pants-Tab").removeClass('tabactive');
        $("#Formal-wear-Shirts-Tab").addClass('tabactive');
        $("#Formal-wear-Dresses-Column").hide();
        $("#Formal-wear-T-Shirts-Column").hide();
        $("#Formal-wear-Trousers-Column").hide();
        $("#Formal-wear-Pants-Column").hide();
        $("#Formal-wear-Shirts-Column").show();
    });
    // Formal Wear //

    // Sleep Wear //
    $("#Sleep-wear-Night-Shirts-Column").hide();
    $("#Sleep-wear-Pajamas-Column").hide();
    $("#Sleep-wear-Tank-Top-Column").hide();
    $("#Sleep-wear-Panties-Column").hide();
    $("#Sleep-wear-Nighty-Tab").addClass('tabactive');

    $(document).on('click', '#Sleep-wear-Nighty-Tab', function () {
        $("#Sleep-wear-Nighty-Tab").addClass('tabactive');
        $("#Sleep-wear-Night-Shirts-Tab").removeClass('tabactive');
        $("#Sleep-wear-Pajamas-Tab").removeClass('tabactive');
        $("#Sleep-wear-Tank-Top-Tab").removeClass('tabactive');
        $("#Sleep-wear-Panties-Tab").removeClass('tabactive');
        $("#Sleep-wear-Nighty-Column").show();
        $("#Sleep-wear-Night-Shirts-Column").hide();
        $("#Sleep-wear-Pajamas-Column").hide();
        $("#Sleep-wear-Tank-Top-Column").hide();
        $("#Sleep-wear-Panties-Column").hide();
    });

    $(document).on('click', '#Sleep-wear-Night-Shirts-Tab', function () {
        $("#Sleep-wear-Nighty-Tab").removeClass('tabactive');
        $("#Sleep-wear-Night-Shirts-Tab").addClass('tabactive');
        $("#Sleep-wear-Pajamas-Tab").removeClass('tabactive');
        $("#Sleep-wear-Tank-Top-Tab").removeClass('tabactive');
        $("#Sleep-wear-Panties-Tab").removeClass('tabactive');
        $("#Sleep-wear-Nighty-Column").hide();
        $("#Sleep-wear-Night-Shirts-Column").show();
        $("#Sleep-wear-Pajamas-Column").hide();
        $("#Sleep-wear-Tank-Top-Column").hide();
        $("#Sleep-wear-Panties-Column").hide();
    });

    $(document).on('click', '#Sleep-wear-Pajamas-Tab', function () {
        $("#Sleep-wear-Nighty-Tab").removeClass('tabactive');
        $("#Sleep-wear-Night-Shirts-Tab").removeClass('tabactive');
        $("#Sleep-wear-Pajamas-Tab").addClass('tabactive');
        $("#Sleep-wear-Tank-Top-Tab").removeClass('tabactive');
        $("#Sleep-wear-Panties-Tab").removeClass('tabactive');
        $("#Sleep-wear-Nighty-Column").hide();
        $("#Sleep-wear-Night-Shirts-Column").hide();
        $("#Sleep-wear-Pajamas-Column").show();
        $("#Sleep-wear-Tank-Top-Column").hide();
        $("#Sleep-wear-Panties-Column").hide();
    });

    $(document).on('click', '#Sleep-wear-Tank-Top-Tab', function () {
        $("#Sleep-wear-Nighty-Tab").removeClass('tabactive');
        $("#Sleep-wear-Night-Shirts-Tab").removeClass('tabactive');
        $("#Sleep-wear-Pajamas-Tab").removeClass('tabactive');
        $("#Sleep-wear-Tank-Top-Tab").addClass('tabactive');
        $("#Sleep-wear-Panties-Tab").removeClass('tabactive');
        $("#Sleep-wear-Nighty-Column").hide();
        $("#Sleep-wear-Night-Shirts-Column").hide();
        $("#Sleep-wear-Pajamas-Column").hide();
        $("#Sleep-wear-Tank-Top-Column").show();
        $("#Sleep-wear-Panties-Column").hide();
    });

    $(document).on('click', '#Sleep-wear-Panties-Tab', function () {
        $("#Sleep-wear-Nighty-Tab").removeClass('tabactive');
        $("#Sleep-wear-Night-Shirts-Tab").removeClass('tabactive');
        $("#Sleep-wear-Pajamas-Tab").removeClass('tabactive');
        $("#Sleep-wear-Tank-Top-Tab").removeClass('tabactive');
        $("#Sleep-wear-Panties-Tab").addClass('tabactive');
        $("#Sleep-wear-Nighty-Column").hide();
        $("#Sleep-wear-Night-Shirts-Column").hide();
        $("#Sleep-wear-Pajamas-Column").hide();
        $("#Sleep-wear-Tank-Top-Column").hide();
        $("#Sleep-wear-Panties-Column").show();
    });
    // Sleep Wear //

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
