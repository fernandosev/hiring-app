import React from 'react';
import {ViewProps} from 'react-native';
import Icon from '~/components/Icon';
import {colors} from '~/styles';

import {Container, Text} from './styles';

const InputErrorMessage: React.FC<
  {
    message?: string;
  } & ViewProps
> = ({message = '', ...rest}) => {
  return (
    <Container {...rest}>
      {!!message && (
        <>
          <Icon name="close-circle-outline" size={20} color={colors.danger} />
          <Text>{message}</Text>
        </>
      )}
    </Container>
  );
};

export default InputErrorMessage;
