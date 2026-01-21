export interface ICard {
    name: string;
    image: string;
    code?: string;
    onClick?: () => void;
    onDelete?: () => void;
    onEdit?: () => void;
}