$(document).ready(function () {
  // Men's Wear //
  $("#Denim-Column").hide();
  $("#Dresses-Column").hide();
  $("#T-Shirts-Column").hide();
  $("#Athletic-Wear-Column").hide();
  $("#Sports-Shirts-Column").hide();

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
  $("#Skirts-Column").hide();

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
  $("#Kids-Dresses-Column").hide();

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

  $(document).on("click", "#Kids-Sports-Shirts-Tab", function () {
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

  $(document).on("click", "#Kids-Sweat-Shirts-Tab", function () {
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
  $("#Beach-wear-Swim-Suits-Column").hide();

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
  $("#Formal-wear-T-Shirts-Column").hide();
  $("#Formal-wear-Trousers-Column").hide();
  $("#Formal-wear-Pants-Column").hide();
  $("#Formal-wear-Shirts-Column").hide();
  $("#Formal-wear-Dresses-Column").hide();

  $(document).on("click", "#Formal-wear-Dresses-Tab", function () {
    $("#Formal-wear-Dresses-Tab").addClass("tabactive");
    $("#Formal-wear-T-Shirts-Tab").removeClass("tabactive");
    $("#Formal-wear-Trousers-Tab").removeClass("tabactive");
    $("#Formal-wear-Pants-Tab").removeClass("tabactive");
    $("#Formal-wear-Shirts-Tab").removeClass("tabactive");
    $("#Formal-wear-Dresses-Column").show();
    $("#Formal-wear-T-Shirts-Column").hide();
    $("#Formal-wear-Trousers-Column").hide();
    $("#Formal-wear-Pants-Column").hide();
    $("#Formal-wear-Shirts-Column").hide();
  });

  $(document).on("click", "#Formal-wear-T-Shirts-Tab", function () {
    $("#Formal-wear-Dresses-Tab").removeClass("tabactive");
    $("#Formal-wear-T-Shirts-Tab").addClass("tabactive");
    $("#Formal-wear-Trousers-Tab").removeClass("tabactive");
    $("#Formal-wear-Pants-Tab").removeClass("tabactive");
    $("#Formal-wear-Shirts-Tab").removeClass("tabactive");
    $("#Formal-wear-Dresses-Column").hide();
    $("#Formal-wear-T-Shirts-Column").show();
    $("#Formal-wear-Trousers-Column").hide();
    $("#Formal-wear-Pants-Column").hide();
    $("#Formal-wear-Shirts-Column").hide();
  });

  $(document).on("click", "#Formal-wear-Trousers-Tab", function () {
    $("#Formal-wear-Dresses-Tab").removeClass("tabactive");
    $("#Formal-wear-T-Shirts-Tab").removeClass("tabactive");
    $("#Formal-wear-Trousers-Tab").addClass("tabactive");
    $("#Formal-wear-Pants-Tab").removeClass("tabactive");
    $("#Formal-wear-Shirts-Tab").removeClass("tabactive");
    $("#Formal-wear-Dresses-Column").hide();
    $("#Formal-wear-T-Shirts-Column").hide();
    $("#Formal-wear-Trousers-Column").show();
    $("#Formal-wear-Pants-Column").hide();
    $("#Formal-wear-Shirts-Column").hide();
  });

  $(document).on("click", "#Formal-wear-Pants-Tab", function () {
    $("#Formal-wear-Dresses-Tab").removeClass("tabactive");
    $("#Formal-wear-T-Shirts-Tab").removeClass("tabactive");
    $("#Formal-wear-Trousers-Tab").removeClass("tabactive");
    $("#Formal-wear-Pants-Tab").addClass("tabactive");
    $("#Formal-wear-Shirts-Tab").removeClass("tabactive");
    $("#Formal-wear-Dresses-Column").hide();
    $("#Formal-wear-T-Shirts-Column").hide();
    $("#Formal-wear-Trousers-Column").hide();
    $("#Formal-wear-Pants-Column").show();
    $("#Formal-wear-Shirts-Column").hide();
  });

  $(document).on("click", "#Formal-wear-Shirts-Tab", function () {
    $("#Formal-wear-Dresses-Tab").removeClass("tabactive");
    $("#Formal-wear-T-Shirts-Tab").removeClass("tabactive");
    $("#Formal-wear-Trousers-Tab").removeClass("tabactive");
    $("#Formal-wear-Pants-Tab").removeClass("tabactive");
    $("#Formal-wear-Shirts-Tab").addClass("tabactive");
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
  $("#Sleep-wear-Nighty-Column").hide();

  $(document).on("click", "#Sleep-wear-Nighty-Tab", function () {
    $("#Sleep-wear-Nighty-Tab").addClass("tabactive");
    $("#Sleep-wear-Night-Shirts-Tab").removeClass("tabactive");
    $("#Sleep-wear-Pajamas-Tab").removeClass("tabactive");
    $("#Sleep-wear-Tank-Top-Tab").removeClass("tabactive");
    $("#Sleep-wear-Panties-Tab").removeClass("tabactive");
    $("#Sleep-wear-Nighty-Column").show();
    $("#Sleep-wear-Night-Shirts-Column").hide();
    $("#Sleep-wear-Pajamas-Column").hide();
    $("#Sleep-wear-Tank-Top-Column").hide();
    $("#Sleep-wear-Panties-Column").hide();
  });

  $(document).on("click", "#Sleep-wear-Night-Shirts-Tab", function () {
    $("#Sleep-wear-Nighty-Tab").removeClass("tabactive");
    $("#Sleep-wear-Night-Shirts-Tab").addClass("tabactive");
    $("#Sleep-wear-Pajamas-Tab").removeClass("tabactive");
    $("#Sleep-wear-Tank-Top-Tab").removeClass("tabactive");
    $("#Sleep-wear-Panties-Tab").removeClass("tabactive");
    $("#Sleep-wear-Nighty-Column").hide();
    $("#Sleep-wear-Night-Shirts-Column").show();
    $("#Sleep-wear-Pajamas-Column").hide();
    $("#Sleep-wear-Tank-Top-Column").hide();
    $("#Sleep-wear-Panties-Column").hide();
  });

  $(document).on("click", "#Sleep-wear-Pajamas-Tab", function () {
    $("#Sleep-wear-Nighty-Tab").removeClass("tabactive");
    $("#Sleep-wear-Night-Shirts-Tab").removeClass("tabactive");
    $("#Sleep-wear-Pajamas-Tab").addClass("tabactive");
    $("#Sleep-wear-Tank-Top-Tab").removeClass("tabactive");
    $("#Sleep-wear-Panties-Tab").removeClass("tabactive");
    $("#Sleep-wear-Nighty-Column").hide();
    $("#Sleep-wear-Night-Shirts-Column").hide();
    $("#Sleep-wear-Pajamas-Column").show();
    $("#Sleep-wear-Tank-Top-Column").hide();
    $("#Sleep-wear-Panties-Column").hide();
  });

  $(document).on("click", "#Sleep-wear-Tank-Top-Tab", function () {
    $("#Sleep-wear-Nighty-Tab").removeClass("tabactive");
    $("#Sleep-wear-Night-Shirts-Tab").removeClass("tabactive");
    $("#Sleep-wear-Pajamas-Tab").removeClass("tabactive");
    $("#Sleep-wear-Tank-Top-Tab").addClass("tabactive");
    $("#Sleep-wear-Panties-Tab").removeClass("tabactive");
    $("#Sleep-wear-Nighty-Column").hide();
    $("#Sleep-wear-Night-Shirts-Column").hide();
    $("#Sleep-wear-Pajamas-Column").hide();
    $("#Sleep-wear-Tank-Top-Column").show();
    $("#Sleep-wear-Panties-Column").hide();
  });

  $(document).on("click", "#Sleep-wear-Panties-Tab", function () {
    $("#Sleep-wear-Nighty-Tab").removeClass("tabactive");
    $("#Sleep-wear-Night-Shirts-Tab").removeClass("tabactive");
    $("#Sleep-wear-Pajamas-Tab").removeClass("tabactive");
    $("#Sleep-wear-Tank-Top-Tab").removeClass("tabactive");
    $("#Sleep-wear-Panties-Tab").addClass("tabactive");
    $("#Sleep-wear-Nighty-Column").hide();
    $("#Sleep-wear-Night-Shirts-Column").hide();
    $("#Sleep-wear-Pajamas-Column").hide();
    $("#Sleep-wear-Tank-Top-Column").hide();
    $("#Sleep-wear-Panties-Column").show();
  });
  // Sleep Wear //

  // Sport Wear //
  $("#SportWearPoloT-Shirts-Column").hide();
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
  $("#KnitwearPoloT-Shirts-Column").hide();
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
  $("#HomeFurnishingsBeddingFurnishings-Column").hide();
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

  $(".activeLocalStorage").click(function () {
    var text = $(this).text();
    localStorage.setItem("linkText", text);
  });

  var savedText = localStorage.getItem("linkText");
  var filename = window.location.pathname;

  // Mens Wear //
  if (filename === "/mens-wear.html" && savedText != "Mens Wear") {
    if (savedText === "Denim") {
      $("#Denim-Tab").addClass("tabactive");
      $("#Denim-Column").show();
    } else if (savedText === "Dresses") {
      $("#Dresses-Tab").addClass("tabactive");
      $("#Dresses-Column").show();
    } else if (savedText === "T-Shirts") {
      $("#T-Shirts-Tab").addClass("tabactive");
      $("#T-Shirts-Column").show();
    } else if (savedText === "Athletic Wear") {
      $("#Athletic-Wear-Tab").addClass("tabactive");
      $("#Athletic-Wear-Column").show();
    } else if (savedText === "Sports Shirts") {
      $("#Sports-Shirts-Tab").addClass("tabactive");
      $("#Sports-Shirts-Column").show();
    }
    $("html, body").animate({ scrollTop: 550 }, 100);
  } else if (filename === "/mens-wear.html") {
    $("#Denim-Tab").addClass("tabactive");
    $("#Denim-Column").show();
  }
  // Mens Wear //

  // Ladies Wear //
  if (filename === "/ladies-wear.html" && savedText != "Ladies Wear") {
    if (savedText === "Skirts") {
      $("#Skirts-Tab").addClass("tabactive");
      $("#Skirts-Column").show();
    } else if (savedText === "Blouses") {
      $("#Blouses-Tab").addClass("tabactive");
      $("#Blouses-Column").show();
    } else if (savedText === "Shirts") {
      $("#Shirts-Tab").addClass("tabactive");
      $("#Shirts-Column").show();
    } else if (savedText === "Polo T-Shirts") {
      $("#Polo-T-Shirts-Tab").addClass("tabactive");
      $("#Polo-T-Shirts-Column").show();
    } else if (savedText === "Tank Top") {
      $("#Tank-Top-Tab").addClass("tabactive");
      $("#Tank-Top-Column").show();
    }
    $("html, body").animate({ scrollTop: 550 }, 100);
  } else if (filename === "/ladies-wear.html") {
    $("#Skirts-Tab").addClass("tabactive");
    $("#Skirts-Column").show();
    $("html, body").animate({ scrollTop: 0 }, 100);
  }
  // Ladies Wear //

  // Kids Wear //
  if (filename === "/kids-wear.html" && savedText != "Kids Wear") {
    if (savedText === "Dresses") {
      $("#Kids-Dresses-Tab").addClass("tabactive");
      $("#Kids-Dresses-Column").show();
    } else if (savedText === "T-Shirts") {
      $("#Kids-T-Shirts-Tab").addClass("tabactive");
      $("#Kids-T-Shirts-Column").show();
    } else if (savedText === "Athletic Wear") {
      $("#Kids-Athletic-Wear-Tab").addClass("tabactive");
      $("#Kids-Athletic-Wear-Column").show();
    } else if (savedText === "Sports Shirts") {
      $("#Kids-Sports-Shirts-Tab").addClass("tabactive");
      $("#Kids-Sports-Shirts-Column").show();
    } else if (savedText === "Sweat Shirts") {
      $("#Kids-Sweat-Shirts-Tab").addClass("tabactive");
      $("#Kids-Sweat-Shirts-Column").show();
    }
    $("html, body").animate({ scrollTop: 530 }, 100);
  } else if (filename === "/kids-wear.html") {
    $("#Kids-Dresses-Tab").addClass("tabactive");
    $("#Kids-Dresses-Column").show();
    $("html, body").animate({ scrollTop: 0 }, 100);
  }
  // Kids Wear //
  // Beach Wear //
  if (filename === "/beach-wear.html" && savedText != "Beach Wear") {
    if (savedText === "Swim Suits") {
      $("#Beach-wear-Swim-Suits-Tab").addClass("tabactive");
      $("#Beach-wear-Swim-Suits-Column").show();
    } else if (savedText === "Vests") {
      $("#Beach-wear-Vests-Tab").addClass("tabactive");
      $("#Beach-wear-Vests-Column").show();
    } else if (savedText === "Fashion Tops") {
      $("#Beach-wear-Fashion-Tops-Tab").addClass("tabactive");
      $("#Beach-wear-Fashion-Tops-Column").show();
    } else if (savedText === "Bermuda") {
      $("#Beach-wear-Bermuda-Tab").addClass("tabactive");
      $("#Beach-wear-Bermuda-Column").show();
    } else if (savedText === "Shorts") {
      $("#Beach-wear-Shorts-Tab").addClass("tabactive");
      $("#Beach-wear-Shorts-Column").show();
    }
    $("html, body").animate({ scrollTop: 530 }, 100);
  } else if (filename === "/beach-wear.html") {
    $("#Beach-wear-Swim-Suits-Tab").addClass("tabactive");
    $("#Beach-wear-Swim-Suits-Column").show();
    $("html, body").animate({ scrollTop: 0 }, 100);
  }
  // Beach Wear //

  // Formal Wear //
  if (filename === "/formal-wear.html" && savedText != "Formal Wear") {
    if (savedText === "Dresses") {
      $("#Formal-wear-Dresses-Tab").addClass("tabactive");
      $("#Formal-wear-Dresses-Column").show();
    } else if (savedText === "T-Shirts") {
      $("#Formal-wear-T-Shirts-Tab").addClass("tabactive");
      $("#Formal-wear-T-Shirts-Column").show();
    } else if (savedText === "Trousers") {
      $("#Formal-wear-Trousers-Tab").addClass("tabactive");
      $("#Formal-wear-Trousers-Column").show();
    } else if (savedText === "Pants") {
      $("#Formal-wear-Pants-Tab").addClass("tabactive");
      $("#Formal-wear-Pants-Column").show();
    } else if (savedText === "Shirts") {
      $("#Formal-wear-Shirts-Tab").addClass("tabactive");
      $("#Formal-wear-Shirts-Column").show();
    }

    $("html, body").animate({ scrollTop: 530 }, 100);
  } else if (filename === "/formal-wear.html") {
    $("#Formal-wear-Dresses-Tab").addClass("tabactive");
    $("#Formal-wear-Dresses-Column").show();
    $("html, body").animate({ scrollTop: 0 }, 100);
  }
  // Formal Wear //

  // Sleep Wear / Undergarments //
  if (
    filename === "/sleep-wear-Undergarments.html" &&
    savedText != "Sleep Wear / Undergarments"
  ) {
    if (savedText === "Nighty") {
      $("#Sleep-wear-Nighty-Tab").addClass("tabactive");
      $("#Sleep-wear-Nighty-Column").show();
    } else if (savedText === "Night Shirts") {
      $("#Sleep-wear-Night-Shirts-Tab").addClass("tabactive");
      $("#Sleep-wear-Night-Shirts-Column").show();
    } else if (savedText === "Pajamas") {
      $("#Sleep-wear-Pajamas-Tab").addClass("tabactive");
      $("#Sleep-wear-Pajamas-Column").show();
    } else if (savedText === "Tank Top") {
      $("#Sleep-wear-Tank-Top-Tab").addClass("tabactive");
      $("#Sleep-wear-Tank-Top-Column").show();
    } else if (savedText === "Panties") {
      $("#Sleep-wear-Panties-Tab").addClass("tabactive");
      $("#Sleep-wear-Panties-Column").show();
    }
    $("html, body").animate({ scrollTop: 530 }, 100);
  } else if (filename === "/sleep-wear-Undergarments.html") {
    $("#Sleep-wear-Nighty-Tab").addClass("tabactive");
    $("#Sleep-wear-Nighty-Column").show();
    $("html, body").animate({ scrollTop: 0 }, 100);
  }
  // Sleep Wear / Undergarments //

  // Sport Wear //
  if (filename === "/sport-wear.html" && savedText != "Sport Wear") {
    if (savedText === "Polo T-Shirts") {
      $("#SportWearPoloT-Shirts-Tab").addClass("tabactive");
      $("#SportWearPoloT-Shirts-Column").show();
    } else if (savedText === "Athletic Wear") {
      $("#SportWearAthleticWear-Tab").addClass("tabactive");
      $("#SportWearAthleticWear-Column").show();
    } else if (savedText === "Sports Shirts") {
      $("#SportWearSportsShirts-Tab").addClass("tabactive");
      $("#SportWearSportsShirts-Column").show();
    } else if (savedText === "Track Suit") {
      $("#SportWearTracksuit-Tab").addClass("tabactive");
      $("#SportWearTrackSuit-Column").show();
    } else if (savedText === "Jog Suits") {
      $("#SportWearJogSuits-Tab").addClass("tabactive");
      $("#SportWearJogSuits-Column").show();
    }

    $("html, body").animate({ scrollTop: 530 }, 100);
  } else if (filename === "/sport-wear.html") {
    $("#SportWearPoloT-Shirts-Tab").addClass("tabactive");
    $("#SportWearPoloT-Shirts-Column").show();
    $("html, body").animate({ scrollTop: 0 }, 100);
  }
  // Sport Wear //

  // Knitwear //
  if (filename === "/knitwear.html" && savedText != "Knitwear") {
    if (savedText === "Polo T-Shirts") {
      $("#KnitwearPoloT-Shirts-Tab").addClass("tabactive");
      $("#KnitwearPoloT-Shirts-Column").show();
    } else if (savedText === "T-Shirts") {
      $("#KnitwearKnitwearT-Shirts-Tab").addClass("tabactive");
      $("#KnitwearKnitwearT-Shirts-Column").show();
    // } else if (savedText === "T-Shirts") {
    //   $("#KnitwearKnitwearT-Shirts-Tab").addClass("tabactive");
    //   $("#KnitwearKnitwearT-Shirts-Column").show();
    } else if (savedText === "Pullovers") {
      $("#KnitwearPullovers-Tab").addClass("tabactive");
      $("#KnitwearPullovers-Column").show();
    } else if (savedText === "Sweaters") {
      $("#KnitwearSweaters-Tab").addClass("tabactive");
      $("#KnitwearSweaters-Column").show();
    } else if (savedText === "Sweat Shirts") {
      $("#KnitwearSweatShirts-Tab").addClass("tabactive");
      $("#KnitwearSweatShirts-Column").show();
    }

    $("html, body").animate({ scrollTop: 530 }, 100);
  } else if (filename === "/knitwear.html") {
    $("#KnitwearPoloT-Shirts-Tab").addClass("tabactive");
    $("#KnitwearPoloT-Shirts-Column").show();
    $("html, body").animate({ scrollTop: 0 }, 100);
  }
  // Knitwear //

  // Home Furnishings //
  if (
    filename === "/home-furnishings.html" &&
    savedText != "Home Furnishings"
  ) {
    if (savedText === "Bed & Bedding Furnishings") {
      $("#HomeFurnishingsBeddingFurnishings-Tab").addClass("tabactive");
      $("#HomeFurnishingsBeddingFurnishings-Column").show();
    } else if (savedText === "Bathroom Furnishings") {
      $("#HomeFurnishingsBathroomFurnishings-Tab").addClass("tabactive");
      $("#HomeFurnishingsBathroomFurnishings-Column").show();
    } else if (savedText === "Kitchen Linen") {
      $("#HomeFurnishingsKitchenLinen-Tab").addClass("tabactive");
      $("#HomeFurnishingsKitchenLinen-Column").show();
    }

    $("html, body").animate({ scrollTop: 530 }, 100);
  } else if (filename === "/home-furnishings.html") {
    $("#HomeFurnishingsBeddingFurnishings-Tab").addClass("tabactive");
    $("#HomeFurnishingsBeddingFurnishings-Column").show();
    $("html, body").animate({ scrollTop: 0 }, 100);
  }
  // Home Furnishings //

  // Home LocalStorage //
  $(".homeLocalStorage").click(function () {
    var text = $(this).text();
    localStorage.setItem("linkText", text);
  });

  $(".cmn-btn").click(function () {
    var text = $(this).closest('.foreign-bottom').find('.homeLocalStorage').text();
    localStorage.setItem("linkText", text);
  });

  // Home LocalStorage //
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
