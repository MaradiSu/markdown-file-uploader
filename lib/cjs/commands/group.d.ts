import { ICommand, ICommandChildCommands, ICommandChildHandle } from './';
export declare type GroupOptions = Omit<ICommand<string>, 'children'> & {
    children?: ICommandChildHandle['children'];
};
export declare const group: (arr: ICommandChildCommands['children'], options?: GroupOptions | undefined) => ICommand<string>;
