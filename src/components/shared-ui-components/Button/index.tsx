import React, { FC } from "react";
import { CustomButtonStyle } from "./style";

interface CustomButtonType {
  children: ChildrenType;
  className?: string;
}

const CustomButton: FC<CustomButtonType> = ({ children, className }) => {
  return (
    <CustomButtonStyle className={className}>{children}</CustomButtonStyle>
  );
};

export default CustomButton;
