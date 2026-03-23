"use client";

import { CldImage as CldImageDefault, CldImageProps } from "next-cloudinary";

// const CldImage = (props: CldImageProps) => {
//   return <CldImageDefault format="auto" quality="auto" {...props} />;
// };

const CldImage = ({ width, height, alt, fill, ...props }: CldImageProps) => {
  return (
    <CldImageDefault
      format="auto"
      quality="auto"
      alt={alt || "image"}
      {...(fill
        ? { fill: true } // ✅ only fill
        : {
            width: width || 500, // ✅ only width/height
            height: height || 300,
          })}
      {...props}
    />
  );
};

export default CldImage;
