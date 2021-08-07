import { int } from 'mdk-nbt'

export interface ClickEventType {
    action: 'open_url' | 'run_command' | 'suggest' | 'change_page';
    value: string | number;
}

export class ClickEvent {
    public static openUrl(url: string): ClickEventType {
        return {
            action: 'open_url',
            value: url,
        }
    }
    public static runCommand(text: string): ClickEventType {
        return {
            action: 'run_command',
            value: text,
        }
    }
    public static suggest(text: string): ClickEventType {
        return {
            action: 'suggest',
            value: text,
        }
    }
    public static changePage(pageNum: int): ClickEventType {
        return {
            action: 'change_page',
            value: pageNum,
        }
    }
}