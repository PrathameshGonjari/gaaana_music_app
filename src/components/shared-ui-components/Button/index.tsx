import Colors from "@src/constants/Colors";
import { FC, useCallback } from "react";
import { BUTTON_TYPE } from "./helper";
import { CustomButtonStyle } from "./style";

interface CustomButtonType {
  children: ChildrenType;
  handleClick: () => void;
  type?: string;
  className?: string;
}

const CustomButton: FC<CustomButtonType> = ({
  children,
  className,
  handleClick,
  type,
}) => {

  const getBackgroundColor = useCallback((buttonType?: string) => {
    if (buttonType === BUTTON_TYPE.PRIMARY) {
      return Colors.terra_cotta;
    }
    if (buttonType === BUTTON_TYPE.SECONDARY) {
      return Colors.bride_made;
    }
    return Colors.terra_cotta;
  }, [type])

  const getTextColor = useCallback((buttonType?: string) => {
    if (buttonType === BUTTON_TYPE.PRIMARY) {
      return Colors.white;
    }
    if (buttonType === BUTTON_TYPE.SECONDARY) {
      return Colors.black;
    }
    return Colors.white;
  }, [type])

  return (
    <CustomButtonStyle
      backgroundcolor={getBackgroundColor(type)}
      textcolor={getTextColor(type)}
      onClick={handleClick}
      className={className}
    >
      {children}
    </CustomButtonStyle>
  );
};

export default CustomButton;
