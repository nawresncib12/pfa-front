import React, { useMemo, useState } from "react";
import placeholderImage from "../../../../assets/images/placeholderImage.png";

const ImageUploadStep = () => {
  const [value, setValue] = useState<File | null>(null);

  const onImageSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setValue(file);
  };

  const memoizedImage = useMemo(() => {
    return value ? URL.createObjectURL(value) : null;
  }, [value]);

  return (
    <div>
      <input type="file" onChange={onImageSelected} />
      {memoizedImage ? (
        <img src={memoizedImage} alt="Uploaded Image" />
      ) : (
        <img src={placeholderImage} alt="Placeholder Image" />
      )}
    </div>
  );
};

export default ImageUploadStep;
