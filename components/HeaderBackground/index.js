import Image from "next/image";

import styles from "./index.module.scss";

const HeaderBackground = ({ image, image_folder }) => {
  const SIZES = ["small", "medium", "large", "giant"];

  const getFile = (size) => {
    if (image_folder) {
      return require(`../../public/photos/${image_folder}/${size}.png`);
    }
    if (image) {
      return require(`../../public/photos/${image}`);
    }
    return require("../../public/photos/2.jpg");
  };

  const imageElement = (size) => (
    <div className={`${styles.image} ${styles[size]}`} key={size}>
      <Image src={getFile(size)} alt="" layout="fill" objectFit="cover" />
    </div>
  );

  return SIZES.map(imageElement);
};

export default HeaderBackground;
