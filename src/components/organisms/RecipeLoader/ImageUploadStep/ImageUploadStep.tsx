import React, { useMemo, useState } from "react";
import placeholderImage from "../../../../assets/images/placeholderImage.png";
import * as S from "./ImageUploadStep.style";
import Input from "../../../atoms/Input/Input";

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
    <S.ImageUploadStepContainer>
      <Input value={value?.name} type="file" onChange={onImageSelected} />
      {memoizedImage ? (
        <S.UploadedImage
          height={"100%"}
          width={"100%"}
          src={memoizedImage}
          alt="Uploaded Image"
        />
      ) : (
        <S.UploadedImage
          height={"100%"}
          width={"100%"}
          src={placeholderImage}
          alt="Placeholder Image"
        />
      )}
    </S.ImageUploadStepContainer>
  );
};

export default ImageUploadStep;
