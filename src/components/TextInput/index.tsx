import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import {
  KeyboardTypeOptions,
  TextInputProps,
  TouchableHighlight,
  Animated,
  StyleSheet,
} from "react-native";
import {
  IContainer,
  IContainerButton,
  Input,
  SmallTextContainer,
  SmallText,
  Labels,
  InputIcon,
  InputWithMask,
  Button,
} from "./styles";
import { colors } from "~/styles";
import InputErrorMessage from "../InputErrorMessage";
import { hexToRgb } from "~/utils/colorConvert";

interface ITextInput extends TextInputProps {
  value?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  titleColor?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  keyboardType?: KeyboardTypeOptions;
  autoCorrect: boolean;
  mask?: Array<string | RegExp>;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  maxLength?: number;
  showMaxLength?: boolean;
  errorMessage?: string;
  error?: boolean;
  icon?: string;
  textColor?: string;
  iconColor?: string;
  onPressIcon?: () => void;
  disabled?: boolean;
  inputTextAlign?: "left" | "center" | "right" | "auto" | "justify";
  ref?: any;
  selectButton?: boolean;
  onPress?: () => any;
  textArea?: boolean;
}

interface ITextInputHandle {
  getTextInputRef(): any;
}

const TextInput = React.forwardRef<ITextInputHandle, ITextInput>(
  (
    {
      value = undefined,
      placeholder = "",
      placeholderTextColor = colors.grey2,
      titleColor = colors.grey2,
      autoCapitalize = "words",
      keyboardType = "default",
      autoCorrect = true,
      mask,
      onChangeText,
      secureTextEntry,
      maxLength = 30,
      showMaxLength = false,
      errorMessage,
      error,
      icon,
      textColor,
      iconColor,
      onPressIcon,
      disabled,
      inputTextAlign,
      selectButton,
      onPress,
      textArea = false,
      ...rest
    },
    ref
  ) => {
    const textInputRef = useRef<any>(null);

    const placeHolderSliding = useRef(new Animated.Value(0));
    const placeHolderZoom = useRef(new Animated.Value(16));
    const placeHolderAnimatedColor = useRef(new Animated.Value(0));

    const animatePlaceHolderStart = useCallback(() => {
      Animated.timing(placeHolderSliding.current, {
        toValue: textArea ? -75 : -25,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(placeHolderZoom.current, {
        toValue: 14,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(placeHolderAnimatedColor.current, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, [textArea]);

    const animatePlaceHolderBlur = useCallback(() => {
      if (!value) {
        Animated.timing(placeHolderSliding.current, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();

        Animated.timing(placeHolderZoom.current, {
          toValue: 16,
          duration: 300,
          useNativeDriver: false,
        }).start();

        Animated.timing(placeHolderAnimatedColor.current, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    }, [value]);

    const placeHolderColor = useMemo(
      () =>
        placeHolderAnimatedColor.current.interpolate({
          inputRange: [0, 1],
          outputRange: [
            hexToRgb(placeholderTextColor)[0],
            hexToRgb(titleColor)[0],
          ],
        }),
      [placeholderTextColor, titleColor]
    );

    useEffect(() => {
      if (value) {
        animatePlaceHolderStart();
      } else {
        animatePlaceHolderBlur();
      }
    }, [value, animatePlaceHolderStart, animatePlaceHolderBlur]);

    useImperativeHandle(ref, () => ({
      getTextInputRef: () => {
        return textInputRef;
      },
    }));

    const renderInput = () => {
      if (mask) {
        return (
          <InputWithMask
            textAlignVertical="bottom"
            selectTextOnFocus={!selectButton}
            editable={!disabled && !selectButton}
            onChangeText={
              onChangeText
                ? (masked: string) => onChangeText(masked)
                : undefined
            }
            textColor={textColor}
            onFocus={animatePlaceHolderStart}
            onBlur={animatePlaceHolderBlur}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            autoCorrect={autoCorrect}
            mask={mask}
            placeholderTextColor={colors.transparent}
            maxLength={maxLength}
            secureTextEntry={secureTextEntry}
            value={value}
            ref={textInputRef}
            style={{ textAlign: inputTextAlign }}
          />
        );
      }

      return (
        <Input
          textAlignVertical="bottom"
          selectTextOnFocus={!selectButton}
          textColor={textColor}
          editable={!disabled && !selectButton}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          autoCorrect={autoCorrect}
          placeholderTextColor={colors.grey2}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          value={value}
          ref={textInputRef}
          style={{ textAlign: inputTextAlign }}
          onFocus={animatePlaceHolderStart}
          onBlur={animatePlaceHolderBlur}
          multiline={textArea}
          textArea={textArea}
        />
      );
    };

    const renderIcon = () => {
      if (!icon) {
        return <></>;
      }

      if (onPressIcon) {
        return (
          <TouchableHighlight underlayColor="none" onPress={onPressIcon}>
            <InputIcon name={icon} color={iconColor} />
          </TouchableHighlight>
        );
      }

      return <InputIcon name={icon} color={iconColor} />;
    };

    const styles = StyleSheet.create({
      animatedPlaceHolder: {
        position: "absolute",
      },
    });

    return (
      <>
        {selectButton && (
          <IContainerButton
            onPress={onPress}
            borderColor={errorMessage || error ? colors.danger : colors.primary}
            {...rest}
          >
            <Animated.Text
              style={[
                styles.animatedPlaceHolder,
                {
                  fontSize: placeHolderZoom.current,
                  color: placeHolderColor,
                  transform: [
                    {
                      translateY: placeHolderSliding.current,
                    },
                  ],
                },
              ]}
            >
              {placeholder}
            </Animated.Text>
            {renderInput()}
            {renderIcon()}
            <Button underlayColor={colors.whiteTransparent} onPress={onPress}>
              <></>
            </Button>
          </IContainerButton>
        )}
        {!selectButton && (
          <IContainer
            borderColor={errorMessage || error ? colors.danger : colors.primary}
            {...rest}
          >
            <Animated.Text
              style={[
                styles.animatedPlaceHolder,
                {
                  fontSize: placeHolderZoom.current,
                  color: placeHolderColor,
                  transform: [
                    {
                      translateY: placeHolderSliding.current,
                    },
                  ],
                },
              ]}
            >
              {placeholder}
            </Animated.Text>
            {renderInput()}
            {renderIcon()}
          </IContainer>
        )}
        <Labels>
          {errorMessage !== undefined && errorMessage?.length > 0 && (
            <InputErrorMessage message={errorMessage} />
          )}
          {showMaxLength && maxLength && (
            <SmallTextContainer>
              <SmallText>
                {value ? `${value.length}/${maxLength}` : `0/${maxLength}`}
              </SmallText>
            </SmallTextContainer>
          )}
        </Labels>
      </>
    );
  }
);

export default TextInput;
