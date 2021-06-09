import React from 'react';
import { IProps } from '../../utils';
import './index.less';
export interface ITextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'onScroll'>, IProps {
    onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
    value?: string;
}
export declare type TextAreaRef = {
    text?: HTMLTextAreaElement;
    warp?: HTMLDivElement;
};
export default function TextArea(props: ITextAreaProps): JSX.Element;
