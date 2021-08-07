
export interface HoverEventType {
    action: 'show_text' | 'show_item' | 'show_entity' | 'show_achievement';
    value: string;
}

export class HoverEvent {
    public static showText(text: string): HoverEventType {
        return {
            action: 'show_text',
            value: text,
        }
    }
    public static showItem(item: string): HoverEventType {
        return {
            action: 'show_item',
            value: item,
        }
    }
    public static showEntity(entityId: string): HoverEventType {
        return {
            action: 'show_entity',
            value: entityId,
        }
    }
    public static showAchievement(achievement: string): HoverEventType {
        return {
            action: 'show_achievement',
            value: achievement,
        }
    }
}