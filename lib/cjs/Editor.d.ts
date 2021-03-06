import React from 'react';
import MarkdownPreview, { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import { IProps } from './utils';
import { ITextAreaProps } from './components/TextArea';
import { ICommand } from './commands';
import { ContextStore, PreviewType } from './Context';
import './index.less';
export interface MDEditorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, IProps {
    /**
     * The Markdown value.
     */
    value?: string;
    /**
     * Event handler for the `onChange` event.
     */
    onChange?: (value?: string) => void;
    /**
     * Can be used to make `Markdown Editor` focus itself on initialization. Defaults to on.
     * it will be set to true when either the source `textarea` is focused,
     * or it has an `autofocus` attribute and no other element is focused.
     */
    autoFocus?: ITextAreaProps['autoFocus'];
    /**
     * The height of the editor.
     */
    height?: number;
    /**
     * Custom toolbar heigth
     * @default 29px
     */
    toolbarHeight?: number;
    /**
     * Show drag and drop tool. Set the height of the editor.
     */
    visiableDragbar?: boolean;
    /**
     * Show markdown preview.
     */
    preview?: PreviewType;
    /**
     * Full screen display editor.
     */
    fullscreen?: boolean;
    /**
     * Maximum drag height. `visiableDragbar=true`
     */
    maxHeight?: number;
    /**
     * Minimum drag height. `visiableDragbar=true`
     */
    minHeight?: number;
    /**
     * This is reset [react-markdown](https://github.com/rexxars/react-markdown) settings.
     */
    previewOptions?: Omit<MarkdownPreviewProps, 'source'>;
    /**
     * Set the `textarea` related props.
     */
    textareaProps?: ITextAreaProps;
    /**
     * Disable editing area code highlighting. The value is `false`, which increases the editing speed.
     * @default true
     */
    highlightEnable?: boolean;
    /**
     * The number of characters to insert when pressing tab key.
     * Default `2` spaces.
     */
    tabSize?: number;
    /**
     * You can create your own commands or reuse existing commands.
     */
    commands?: ICommand[];
    /**
     * Hide the tool bar
     */
    hideToolbar?: boolean;
    /** Whether to enable scrolling */
    enableScroll?: boolean;
}
declare const mdEditor: React.ForwardRefExoticComponent<MDEditorProps & React.RefAttributes<ContextStore>>;
declare type MDEditor = typeof mdEditor & {
    Markdown: typeof MarkdownPreview;
};
declare const _default: MDEditor;
export default _default;
