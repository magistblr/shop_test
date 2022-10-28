export type ButtonType = {
  children: React.ReactNode;
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
