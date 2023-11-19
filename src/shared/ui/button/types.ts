import { ButtonHTMLAttributes } from 'react';

type ButtonCommonProps = {

}
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonSize?: 'md' | 'sm';
}

export type ButtonStyledProps = {
    $buttonSize: 'md' | 'sm';
}
