export interface ToggleUserStatusButtonProps<T> {
  row: T;
  isActive: boolean;
  onActivate: (row: T) => void;
  onDeactivate: (row: T) => void;
  isPending?: boolean;
  activateLabelKey?: string;
  deactivateLabelKey?: string;
}
export interface CellActionButtonProps<T> {
  row: T;
  isActive: boolean;
  onActiveClick: (row: T) => void;
  onInactiveClick: (row: T) => void;
  isPending?: boolean;
  activeLabelKey?: string;
  inactiveLabelKey?: string;
}
