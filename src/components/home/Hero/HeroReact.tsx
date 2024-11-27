import React from "react";


interface SeasonalImagesProps {
  primavera: ImageMetadata[];
  estate: ImageMetadata[];
  autunno: ImageMetadata[];
  inverno: ImageMetadata[];
  children: React.ReactElement;
}

const SeasonalImages = ({ primavera, estate, autunno, inverno, children }: SeasonalImagesProps) => {
  const getSeason = () => {
    const now = new Date();
    const month = now.getMonth();
    if (month >= 2 && month <= 4) return "spring";
    if (month >= 5 && month <= 7) return "summer";
    if (month >= 8 && month <= 10) return "autumn";
    return "winter";
  };

  const currentSeason = getSeason();
  const images = {
    spring: primavera,
    summer: estate,
    autumn: autunno,
    winter: inverno,
  }[currentSeason];

  return images.map((image, index) =>
    React.cloneElement(children, { key: index, src: image })
  );
};

export default SeasonalImages;
