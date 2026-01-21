export interface IModalProps {
    open: boolean;
    onDismiss?: () => void;
    title: string;
    children?: React.ReactNode;
    onClickSuccess?: () => void;
    successButtonText?: string;
}
