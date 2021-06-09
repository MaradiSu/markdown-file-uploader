import React from 'react';
import { IProps } from '../../utils';
import './index.less';
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>, IProps {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function Textarea(props: TextAreaProps): JSX.Element;
