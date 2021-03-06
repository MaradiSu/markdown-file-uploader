/// <reference types="react" />
import './Child.less';
import { IToolbarProps } from './';
export declare type ChildProps = IToolbarProps & {
    children?: JSX.Element;
    groupName?: string;
};
export default function Child(props: ChildProps): JSX.Element;
