// ---------
// funciones
// ---------
export const getBGImage = (optionNumber) => {
  let bgImage;
  switch (optionNumber) {
    case 1:
      bgImage = "bg-cardImage_1";
      break;
    case 2:
      bgImage = "bg-cardImage_2";
      break;
    case 3:
      bgImage = "bg-cardImage_3";
      break;
    case 4:
      bgImage = "bg-cardImage_4";
      break;
    case 5:
      bgImage = "bg-cardImage_5";
      break;
    case 6:
      bgImage = "bg-cardImage_6";
      break;
    case 7:
      bgImage = "bg-cardImage_7";
      break;
    case 8:
      bgImage = "bg-cardImage_8";
      break;
    case 9:
      bgImage = "bg-cardImage_9";
      break;
    case 10:
      bgImage = "bg-cardImage_10";
      break;
  }
  return bgImage;
};

export const getOrienBGImage = (vertical) =>
  vertical ? "bg-contain bg-no-repeat bg-center" : "bg-cover";
