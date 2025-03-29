import React from "react";
import ButtonContainer from "./ButtonContainer";
import ButtonIcon from "./ButtonIcon";
import ButtonText from "./ButtonText";
interface AddNewButtonProps {
  onClick?: () => void;
}

const AddNewButton: React.FC<AddNewButtonProps> = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonIcon
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c83f992996c45474be724673a274358a5d51ec4"
        alt="Add icon"
      />
      <ButtonText text= "ADD NEW" />
    </ButtonContainer>
  );
};

export default AddNewButton;