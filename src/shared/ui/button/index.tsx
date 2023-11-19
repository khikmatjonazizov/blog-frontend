import React from 'react';

import {
    ButtonStyled,
} from './button.styled';
import { ButtonProps } from './types';


export const Button: React.FC<ButtonProps> = (props) => {
    const {
        buttonSize = 'md',
        ...nativeProps
    } = props;
    return (
        <ButtonStyled
            $buttonSize={buttonSize}
            {...nativeProps}
        />
    );
};
