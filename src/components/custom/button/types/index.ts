export type ButtonType = {
  disabled?: boolean;
  type?: 'danger' | 'success' | 'warning' | 'primary';
  callback?: () => void;
  loading?: boolean;
  min?: boolean;
  large?: boolean;
  block?: boolean;
  outlined?: boolean;
  text?: boolean;
};
