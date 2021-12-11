import Image from "next/image";

import styles from "./index.module.scss";

const HeaderBackground = ({ path }) => {
  const SIZES = ["small", "medium", "large", "giant"];

  let photo, photos;
  if (path) {
    try {
      photo = require(`../../public/photos/${path}`);
    } catch {
      photos = SIZES.reduce(
        (photos, size) => ({
          ...photos,
          [size]: require(`../../public/photos/${path}/${size}.png`),
        }),
        {}
      );
    }
  }

  const getFile = (size) =>
    (photos && photos[size]) || photo || require("../../public/photos/2.jpg");

  const imageElement = (size) => (
    <div className={`${styles.image} ${styles[size]}`} key={size}>
      <Image src={getFile(size)} alt="" layout="fill" objectFit="cover" />
    </div>
  );

  return SIZES.map(imageElement);
};

export default HeaderBackground;
