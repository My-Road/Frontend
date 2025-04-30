export interface DialogState {
    isOpen: boolean;
    title?: string;
    message?: string;
    onConfirm?: () => void;
  }