import "react-native-gesture-handler";
import React, { useEffect, useMemo } from "react";
import { StyleSheet, StatusBar, LogBox } from "react-native";

// Libs
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { setCustomText } from "react-native-global-props";

// Routes
import Routes from "./routes";

// Store
import { useAppDispatch } from "./store/hooks";

// Images

// Styles
import { colors, metrics } from "~/styles";

const App: React.FC = () => {
  const customTextProps = useMemo(
    () => ({
      style: {
        color: colors.primaryText,
        fontSize: metrics.fontSizeMedium,
      },
    }),
    []
  );

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
    setCustomText(customTextProps);

    LogBox.ignoreLogs(["Require cycle: node_modules/victory"]);
  }, [customTextProps]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Routes />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default App;
