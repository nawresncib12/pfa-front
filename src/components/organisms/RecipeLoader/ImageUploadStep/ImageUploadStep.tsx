import React, { useMemo } from "react";
import placeholderImage from "../../../../assets/images/placeholderImage.png";
import * as S from "./ImageUploadStep.style";
import Input from "../../../atoms/Input/Input";
import { useSearch } from "../../../../hooks/useSearch";

const ImageUploadStep = () => {
  const { imageFile, setImageFile } = useSearch();

  const onImageSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setImageFile(file);
  };

  const memoizedImage = useMemo(() => {
    return imageFile ? URL.createObjectURL(imageFile) : null;
  }, [imageFile]);

  return (
    <S.ImageUploadStepContainer>
      <Input value={imageFile?.name} type="file" onChange={onImageSelected} />
      {memoizedImage ? (
        <S.UploadedImage height={"100%"} width={"100%"} src={memoizedImage} alt="Uploaded Image" />
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
