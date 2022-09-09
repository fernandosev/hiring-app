import React from "react";
import { IoniconsStyle, MaterialCommunityIconsStyle } from "./styles";
import { colors, metrics } from "~/styles";

const Icon: React.FC<{
  iconClass?: "Ionicons" | "MaterialCommunityIcons" | undefined;
  name?: string;
  color?: string;
  size?: number;
}> = ({
  iconClass = "MaterialCommunityIcons",
  name = "arrow-left",
  color = colors.secondary,
  size = metrics.baseIconsMedium,
}) => {
  IoniconsStyle.loadFont();
  MaterialCommunityIconsStyle.loadFont();

  if (iconClass === "Ionicons") {
    return (
      <IoniconsStyle testID="icon" name={name} size={size} color={color} />
    );
  } else if (iconClass === "MaterialCommunityIcons") {
    return (
      <MaterialCommunityIconsStyle
        testID="icon"
        name={name}
        size={size}
        color={color}
      />
    );
  }

  return <></>;
};

export default Icon;
