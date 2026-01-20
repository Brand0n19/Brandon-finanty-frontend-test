export interface ISelectOption {
    label: string;
    id: string;
}

export interface IComboBox {
    options: ISelectOption[];
    label: string;
    placeholder?: string;
    width?: string | number;
    size?: 'small' | 'medium';
    fullWidth?: boolean;
    disable?: boolean;
    onValueChange: (value: string) => void;
}

