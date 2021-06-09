/// <reference types="react" />
import { ICommand, TextAreaCommandOrchestrator } from '../../commands';
export default function shortcutsHandle(e: React.KeyboardEvent<HTMLTextAreaElement>, commands?: ICommand[], commandOrchestrator?: TextAreaCommandOrchestrator): void;
