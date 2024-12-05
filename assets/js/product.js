$(document).ready(function () {
  // Men's Wear //
  $("#Dresses-Column").hide();
  $("#T-Shirts-Column").hide();
  $("#Athletic-Wear-Column").hide();
  $("#Sports-Shirts-Column").hide();
  $("#Denim-Tab").addClass("tabactive");

  $(document).on("click", "#Denim-Tab", function () {
    $("#Denim-Tab").addClass("tabactive");
    $("#Dresses-Tab").removeClass("tabactive");
    $("#T-Shirts-Tab").removeClass("tabactive");
    $("#Athletic-Wear-Tab").removeClass("tabactive");
    $("#Sports-Shirts-Tab").removeClass("tabactive");
    $("#Denim-Column").show();
    $("#Dresses-Column").hide();
    $("#T-Shirts-Column").hide();
    $("#Athletic-Wear-Column").hide();
    $("#Sports-Shirts-Column").hide();
  });

  $(document).on("click", "#Dresses-Tab", function () {
    $("#Dresses-Tab").addClass("tabactive");
    $("#Denim-Tab").removeClass("tabactive");
    $("#T-Shirts-Tab").removeClass("tabactive");
    $("#Athletic-Wear-Tab").removeClass("tabactive");
    $("#Sports-Shirts-Tab").removeClass("tabactive");
    $("#Dresses-Column").show();
    $("#Denim-Column").hide();
    $("#T-Shirts-Column").hide();
    $("#Athletic-Wear-Column").hide();
    $("#Sports-Shirts-Column").hide();
  });

  $(document).on("click", "#T-Shirts-Tab", function () {
    $("#T-Shirts-Tab").addClass("tabactive");
    $("#Denim-Tab").removeClass("tabactive");
    $("#Dresses-Tab").removeClass("tabactive");
    $("#Athletic-Wear-Tab").removeClass("tabactive");
    $("#Sports-Shirts-Tab").removeClass("tabactive");
    $("#T-Shirts-Column").show();
    $("#Dresses-Column").hide();
    $("#Denim-Column").hide();
    $("#Athletic-Wear-Column").hide();
    $("#Sports-Shirts-Column").hide();
  });

  $(document).on("click", "#Athletic-Wear-Tab", function () {
    $("#Athletic-Wear-Tab").addClass("tabactive");
    $("#Denim-Tab").removeClass("tabactive");
    $("#Dresses-Tab").removeClass("tabactive");
    $("#T-Shirts-Tab").removeClass("tabactive");
    $("#Sports-Shirts-Tab").removeClass("tabactive");
    $("#Athletic-Wear-Column").show();
    $("#T-Shirts-Column").hide();
    $("#Dresses-Column").hide();
    $("#Denim-Column").hide();
    $("#Sports-Shirts-Column").hide();
  });

  $(document).on("click", "#Sports-Shirts-Tab", function () {
    $("#Sports-Shirts-Tab").addClass("tabactive");
    $("#Denim-Tab").removeClass("tabactive");
    $("#Dresses-Tab").removeClass("tabactive");
    $("#T-Shirts-Tab").removeClass("tabactive");
    $("#Athletic-Wear-Tab").removeClass("tabactive");
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
  $("#Skirts-Tab").addClass("tabactive");

  $(document).on("click", "#Skirts-Tab", function () {
    $("#Skirts-Tab").addClass("tabactive");
    $("#Blouses-Tab").removeClass("tabactive");
    $("#Shirts-Tab").removeClass("tabactive");
    $("#Polo-T-Shirts-Tab").removeClass("tabactive");
    $("#Tank-Top-Tab").removeClass("tabactive");
    $("#Skirts-Column").show();
    $("#Blouses-Column").hide();
    $("#Shirts-Column").hide();
    $("#Polo-T-Shirts-Column").hide();
    $("#Tank-Top-Column").hide();
  });

  $(document).on("click", "#Blouses-Tab", function () {
    $("#Blouses-Tab").addClass("tabactive");
    $("#Skirts-Tab").removeClass("tabactive");
    $("#Shirts-Tab").removeClass("tabactive");
    $("#Polo-T-Shirts-Tab").removeClass("tabactive");
    $("#Tank-Top-Tab").removeClass("tabactive");
    $("#Skirts-Column").hide();
    $("#Blouses-Column").show();
    $("#Shirts-Column").hide();
    $("#Polo-T-Shirts-Column").hide();
    $("#Tank-Top-Column").hide();
  });

  $(document).on("click", "#Shirts-Tab", function () {
    $("#Shirts-Tab").addClass("tabactive");
    $("#Skirts-Tab").removeClass("tabactive");
    $("#Blouses-Tab").removeClass("tabactive");
    $("#Polo-T-Shirts-Tab").removeClass("tabactive");
    $("#Tank-Top-Tab").removeClass("tabactive");
    $("#Skirts-Column").hide();
    $("#Blouses-Column").hide();
    $("#Shirts-Column").show();
    $("#Polo-T-Shirts-Column").hide();
    $("#Tank-Top-Column").hide();
  });

  $(document).on("click", "#Polo-T-Shirts-Tab", function () {
    $("#Shirts-Tab").removeClass("tabactive");
    $("#Skirts-Tab").removeClass("tabactive");
    $("#Blouses-Tab").removeClass("tabactive");
    $("#Polo-T-Shirts-Tab").addClass("tabactive");
    $("#Tank-Top-Tab").removeClass("tabactive");
    $("#Skirts-Column").hide();
    $("#Blouses-Column").hide();
    $("#Shirts-Column").hide();
    $("#Polo-T-Shirts-Column").show();
    $("#Tank-Top-Column").hide();
  });

  $(document).on("click", "#Tank-Top-Tab", function () {
    $("#Shirts-Tab").removeClass("tabactive");
    $("#Skirts-Tab").removeClass("tabactive");
    $("#Blouses-Tab").removeClass("tabactive");
    $("#Polo-T-Shirts-Tab").removeClass("tabactive");
    $("#Tank-Top-Tab").addClass("tabactive");
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
  $("#Kids-Dresses-Tab").addClass("tabactive");

  $(document).on("click", "#Kids-Dresses-Tab", function () {
    $("#Kids-Dresses-Tab").addClass("tabactive");
    $("#Kids-T-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Athletic-Wear-Tab").removeClass("tabactive");
    $("#Kids-Sports-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Sweat-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Dresses-Column").show();
    $("#Kids-T-Shirts-Column").hide();
    $("#Kids-Athletic-Wear-Column").hide();
    $("#Kids-Sports-Shirts-Column").hide();
    $("#Kids-Sweat-Shirts-Column").hide();
  });

  $(document).on("click", "#Kids-T-Shirts-Tab", function () {
    $("#Kids-Dresses-Tab").removeClass("tabactive");
    $("#Kids-T-Shirts-Tab").addClass("tabactive");
    $("#Kids-Athletic-Wear-Tab").removeClass("tabactive");
    $("#Kids-Sports-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Sweat-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Dresses-Column").hide();
    $("#Kids-T-Shirts-Column").show();
    $("#Kids-Athletic-Wear-Column").hide();
    $("#Kids-Sports-Shirts-Column").hide();
    $("#Kids-Sweat-Shirts-Column").hide();
  });

  $(document).on("click", "#Kids-Athletic-Wear-Tab", function () {
    $("#Kids-Dresses-Tab").removeClass("tabactive");
    $("#Kids-T-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Athletic-Wear-Tab").addClass("tabactive");
    $("#Kids-Sports-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Sweat-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Dresses-Column").hide();
    $("#Kids-T-Shirts-Column").hide();
    $("#Kids-Athletic-Wear-Column").show();
    $("#Kids-Sports-Shirts-Column").hide();
    $("#Kids-Sweat-Shirts-Column").hide();
  });

  $(document).on("click", "#Kids-Sweat-Shirts-Tab", function () {
    $("#Kids-Dresses-Tab").removeClass("tabactive");
    $("#Kids-T-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Athletic-Wear-Tab").removeClass("tabactive");
    $("#Kids-Sports-Shirts-Tab").addClass("tabactive");
    $("#Kids-Sweat-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Dresses-Column").hide();
    $("#Kids-T-Shirts-Column").hide();
    $("#Kids-Athletic-Wear-Column").hide();
    $("#Kids-Sports-Shirts-Column").show();
    $("#Kids-Sweat-Shirts-Column").hide();
  });

  $(document).on("click", "#Kids-Sports-Shirts-Tab", function () {
    $("#Kids-Dresses-Tab").removeClass("tabactive");
    $("#Kids-T-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Athletic-Wear-Tab").removeClass("tabactive");
    $("#Kids-Sports-Shirts-Tab").removeClass("tabactive");
    $("#Kids-Sweat-Shirts-Tab").addClass("tabactive");
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
  $("#Beach-wear-Swim-Suits-Tab").addClass("tabactive");

  $(document).on("click", "#Beach-wear-Swim-Suits-Tab", function () {
    $("#Beach-wear-Swim-Suits-Tab").addClass("tabactive");
    $("#Beach-wear-Vests-Tab").removeClass("tabactive");
    $("#Beach-wear-Fashion-Tops-Tab").removeClass("tabactive");
    $("#Beach-wear-Bermuda-Tab").removeClass("tabactive");
    $("#Beach-wear-Shorts-Tab").removeClass("tabactive");
    $("#Beach-wear-Swim-Suits-Column").show();
    $("#Beach-wear-Vests-Column").hide();
    $("#Beach-wear-Fashion-Tops-Column").hide();
    $("#Beach-wear-Bermuda-Column").hide();
    $("#Beach-wear-Shorts-Column").hide();
  });

  $(document).on("click", "#Beach-wear-Vests-Tab", function () {
    $("#Beach-wear-Swim-Suits-Tab").removeClass("tabactive");
    $("#Beach-wear-Vests-Tab").addClass("tabactive");
    $("#Beach-wear-Fashion-Tops-Tab").removeClass("tabactive");
    $("#Beach-wear-Bermuda-Tab").removeClass("tabactive");
    $("#Beach-wear-Shorts-Tab").removeClass("tabactive");
    $("#Beach-wear-Swim-Suits-Column").hide();
    $("#Beach-wear-Vests-Column").show();
    $("#Beach-wear-Fashion-Tops-Column").hide();
    $("#Beach-wear-Bermuda-Column").hide();
    $("#Beach-wear-Shorts-Column").hide();
  });

  $(document).on("click", "#Beach-wear-Fashion-Tops-Tab", function () {
    $("#Beach-wear-Swim-Suits-Tab").removeClass("tabactive");
    $("#Beach-wear-Vests-Tab").removeClass("tabactive");
    $("#Beach-wear-Fashion-Tops-Tab").addClass("tabactive");
    $("#Beach-wear-Bermuda-Tab").removeClass("tabactive");
    $("#Beach-wear-Shorts-Tab").removeClass("tabactive");
    $("#Beach-wear-Swim-Suits-Column").hide();
    $("#Beach-wear-Vests-Column").hide();
    $("#Beach-wear-Fashion-Tops-Column").show();
    $("#Beach-wear-Bermuda-Column").hide();
    $("#Beach-wear-Shorts-Column").hide();
  });

  $(document).on("click", "#Beach-wear-Bermuda-Tab", function () {
    $("#Beach-wear-Swim-Suits-Tab").removeClass("tabactive");
    $("#Beach-wear-Vests-Tab").removeClass("tabactive");
    $("#Beach-wear-Fashion-Tops-Tab").removeClass("tabactive");
    $("#Beach-wear-Bermuda-Tab").addClass("tabactive");
    $("#Beach-wear-Shorts-Tab").removeClass("tabactive");
    $("#Beach-wear-Swim-Suits-Column").hide();
    $("#Beach-wear-Vests-Column").hide();
    $("#Beach-wear-Fashion-Tops-Column").hide();
    $("#Beach-wear-Bermuda-Column").show();
    $("#Beach-wear-Shorts-Column").hide();
  });

  $(document).on("click", "#Beach-wear-Shorts-Tab", function () {
    $("#Beach-wear-Swim-Suits-Tab").removeClass("tabactive");
    $("#Beach-wear-Vests-Tab").removeClass("tabactive");
    $("#Beach-wear-Fashion-Tops-Tab").removeClass("tabactive");
    $("#Beach-wear-Bermuda-Tab").removeClass("tabactive");
    $("#Beach-wear-Shorts-Tab").addClass("tabactive");
    $("#Beach-wear-Swim-Suits-Column").hide();
    $("#Beach-wear-Vests-Column").hide();
    $("#Beach-wear-Fashion-Tops-Column").hide();
    $("#Beach-wear-Bermuda-Column").hide();
    $("#Beach-wear-Shorts-Column").show();
  });
  // Beach Wear //

  // Formal Wear //

  // Formal Wear //

  // Sport Wear //
  $("#SportWearPoloT-Shirts-Tab").addClass("tabactive");
  $("#SportWearPoloT-Shirts-Column").show();
  $("#SportWearAthleticWear-Column").hide();
  $("#SportWearSportsShirts-Column").hide();
  $("#SportWearTrackSuit-Column").hide();
  $("#SportWearJogSuits-Column").hide();

  $(document).on("click", "#SportWearPoloT-Shirts-Tab", function () {
    $("#SportWearPoloT-Shirts-Tab").addClass("tabactive");
    $("#SportWearAthleticWear-Tab").removeClass("tabactive");
    $("#SportWearSportsShirts-Tab").removeClass("tabactive");
    $("#SportWearTracksuit-Tab").removeClass("tabactive");
    $("#SportWearJogSuits-Tab").removeClass("tabactive");

    $("#SportWearPoloT-Shirts-Column").show();
    $("#SportWearAthleticWear-Column").hide();
    $("#SportWearSportsShirts-Column").hide();
    $("#SportWearTrackSuit-Column").hide();
    $("#SportWearJogSuits-Column").hide();
  });

  $(document).on("click", "#SportWearAthleticWear-Tab", function () {
    $("#SportWearAthleticWear-Tab").addClass("tabactive");
    $("#SportWearSportsShirts-Tab").removeClass("tabactive");
    $("#SportWearTracksuit-Tab").removeClass("tabactive");
    $("#SportWearJogSuits-Tab").removeClass("tabactive");
    $("#SportWearPoloT-Shirts-Tab").removeClass("tabactive");

    $("#SportWearAthleticWear-Column").show();
    $("#SportWearSportsShirts-Column").hide();
    $("#SportWearTrackSuit-Column").hide();
    $("#SportWearJogSuits-Column").hide();
    $("#SportWearPoloT-Shirts-Column").hide();
  });

  $(document).on("click", "#SportWearSportsShirts-Tab", function () {
    $("#SportWearSportsShirts-Tab").addClass("tabactive");
    $("#SportWearTracksuit-Tab").removeClass("tabactive");
    $("#SportWearJogSuits-Tab").removeClass("tabactive");
    $("#SportWearPoloT-Shirts-Tab").removeClass("tabactive");
    $("#SportWearAthleticWear-Tab").removeClass("tabactive");

    $("#SportWearSportsShirts-Column").show();
    $("#SportWearTrackSuit-Column").hide();
    $("#SportWearJogSuits-Column").hide();
    $("#SportWearPoloT-Shirts-Column").hide();
    $("#SportWearAthleticWear-Column").hide();
  });

  $(document).on("click", "#SportWearTracksuit-Tab", function () {
    $("#SportWearTracksuit-Tab").addClass("tabactive");
    $("#SportWearJogSuits-Tab").removeClass("tabactive");
    $("#SportWearPoloT-Shirts-Tab").removeClass("tabactive");
    $("#SportWearAthleticWear-Tab").removeClass("tabactive");
    $("#SportWearSportsShirts-Tab").removeClass("tabactive");

    $("#SportWearTrackSuit-Column").show();
    $("#SportWearJogSuits-Column").hide();
    $("#SportWearPoloT-Shirts-Column").hide();
    $("#SportWearAthleticWear-Column").hide();
    $("#SportWearSportsShirts-Column").hide();
  });

  $(document).on("click", "#SportWearJogSuits-Tab", function () {
    $("#SportWearJogSuits-Tab").addClass("tabactive");
    $("#SportWearPoloT-Shirts-Tab").removeClass("tabactive");
    $("#SportWearAthleticWear-Tab").removeClass("tabactive");
    $("#SportWearSportsShirts-Tab").removeClass("tabactive");
    $("#SportWearTracksuit-Tab").removeClass("tabactive");

    $("#SportWearJogSuits-Column").show();
    $("#SportWearPoloT-Shirts-Column").hide();
    $("#SportWearAthleticWear-Column").hide();
    $("#SportWearSportsShirts-Column").hide();
    $("#SportWearTrackSuit-Column").hide();
  });

  // Sport Wear //

  // Kintewear //
  $("#KnitwearPoloT-Shirts-Tab").addClass("tabactive");
  $("#KnitwearPoloT-Shirts-Column").show();
  $("#KnitwearT-Shirts-Column").hide();
  $("#KnitwearPullovers-Column").hide();
  $("#KnitwearSweaters-Column").hide();
  $("#KnitwearSweatShirts-Column").hide();

  $(document).on("click", "#KnitwearPoloT-Shirts-Tab", function () {
    $("#KnitwearPoloT-Shirts-Tab").addClass("tabactive");
    $("#KnitwearKnitwearT-Shirts-Tab").removeClass("tabactive");
    $("#KnitwearPullovers-Tab").removeClass("tabactive");
    $("#KnitwearSweaters-Tab").removeClass("tabactive");
    $("#KnitwearSweatShirts-Tab").removeClass("tabactive");

    $("#KnitwearPoloT-Shirts-Column").show();
    $("#KnitwearKnitwearT-Shirts-Column").hide();
    $("#KnitwearPullovers-Column").hide();
    $("#KnitwearSweaters-Column").hide();
    $("#KnitwearSweatShirts-Column").hide();
  });

  $(document).on("click", "#KnitwearT-Shirts-Tab", function () {
    $("#KnitwearT-Shirts-Tab").addClass("tabactive");
    $("#KnitwearPullovers-Tab").removeClass("tabactive");
    $("#KnitwearSweaters-Tab").removeClass("tabactive");
    $("#KnitwearSweatShirts-Tab").removeClass("tabactive");
    $("#KnitwearPoloT-Shirts-Tab").removeClass("tabactive");

    $("#KnitwearT-Shirts-Column").show();
    $("#KnitwearPullovers-Column").hide();
    $("#KnitwearSweaters-Column").hide();
    $("#KnitwearSweatShirts-Column").hide();
    $("#KnitwearPoloT-Shirts-Column").hide();
  });

  $(document).on("click", "#KnitwearPullovers-Tab", function () {
    $("#KnitwearPullovers-Tab").addClass("tabactive");
    $("#KnitwearSweaters-Tab").removeClass("tabactive");
    $("#KnitwearSweatShirts-Tab").removeClass("tabactive");
    $("#KnitwearPoloT-Shirts-Tab").removeClass("tabactive");
    $("#KnitwearT-Shirts-Tab").removeClass("tabactive");

    $("#KnitwearPullovers-Column").show();
    $("#KnitwearSweaters-Column").hide();
    $("#KnitwearSweatShirts-Column").hide();
    $("#KnitwearPoloT-Shirts-Column").hide();
    $("#KnitwearT-Shirts-Column").hide();
  });

  $(document).on("click", "#KnitwearSweaters-Tab", function () {
    $("#KnitwearSweaters-Tab").addClass("tabactive");
    $("#KnitwearSweatShirts-Tab").removeClass("tabactive");
    $("#KnitwearPoloT-Shirts-Tab").removeClass("tabactive");
    $("#KnitwearT-Shirts-Tab").removeClass("tabactive");
    $("#KnitwearPullovers-Tab").removeClass("tabactive");

    $("#KnitwearSweaters-Column").show();
    $("#KnitwearSweatShirts-Column").hide();
    $("#KnitwearPoloT-Shirts-Column").hide();
    $("#KnitwearT-Shirts-Column").hide();
    $("#KnitwearPullovers-Column").hide();
  });

  $(document).on("click", "#KnitwearSweatShirts-Tab", function () {
    $("#KnitwearSweatShirts-Tab").addClass("tabactive");
    $("#KnitwearPoloT-Shirts-Tab").removeClass("tabactive");
    $("#KnitwearT-Shirts-Tab").removeClass("tabactive");
    $("#KnitwearPullovers-Tab").removeClass("tabactive");
    $("#KnitwearSweaters-Tab").removeClass("tabactive");

    $("#KnitwearSweatShirts-Column").show();
    $("#KnitwearPoloT-Shirts-Column").hide();
    $("#KnitwearT-Shirts-Column").hide();
    $("#KnitwearPullovers-Column").hide();
    $("#KnitwearSweaters-Column").hide();
  });
  // Kintewear //

  // Home Furnishings //
  $("#HomeFurnishingsBeddingFurnishings-Tab").addClass("tabactive");
  $("#HomeFurnishingsBeddingFurnishings-Column").show();
  $("#HomeFurnishingsBathroomFurnishings-Column").hide();
  $("#HomeFurnishingsKitchenLinen-Column").hide();

  $(document).on(
    "click",
    "#HomeFurnishingsBeddingFurnishings-Tab",
    function () {
      $("#HomeFurnishingsBeddingFurnishings-Tab").addClass("tabactive");
      $("#HomeFurnishingsBathroomFurnishings-Tab").removeClass("tabactive");
      $("#HomeFurnishingsKitchenLinen-Tab").removeClass("tabactive");

      $("#HomeFurnishingsBeddingFurnishings-Column").show();
      $("#HomeFurnishingsBathroomFurnishings-Column").hide();
      $("#HomeFurnishingsKitchenLinen-Column").hide();
    }
  );

  $(document).on(
    "click",
    "#HomeFurnishingsBathroomFurnishings-Tab",
    function () {
      $("#HomeFurnishingsBathroomFurnishings-Tab").addClass("tabactive");
      $("#HomeFurnishingsKitchenLinen-Tab").removeClass("tabactive");
      $("#HomeFurnishingsBeddingFurnishings-Tab").removeClass("tabactive");

      $("#HomeFurnishingsBathroomFurnishings-Column").show();
      $("#HomeFurnishingsKitchenLinen-Column").hide();
      $("#HomeFurnishingsBeddingFurnishings-Column").hide();
    }
  );

  $(document).on("click", "#HomeFurnishingsKitchenLinen-Tab", function () {
    $("#HomeFurnishingsKitchenLinen-Tab").addClass("tabactive");
    $("#HomeFurnishingsBeddingFurnishings-Tab").removeClass("tabactive");
    $("#HomeFurnishingsBathroomFurnishings-Tab").removeClass("tabactive");

    $("#HomeFurnishingsKitchenLinen-Column").show();
    $("#HomeFurnishingsBeddingFurnishings-Column").hide();
    $("#HomeFurnishingsBathroomFurnishings-Column").hide();
  });
  // Home Furnishings //
});

// popup function //
function showPopup(imageSrc) {
  const popup = document.getElementById("imagePopup");
  const popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("imagePopup").style.display = "none";
}
