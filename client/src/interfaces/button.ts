export interface ButtonProps {
  //onClick?(): void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  state?: boolean;
  width: number;
  height: number;
  margin?: string;
  padding?: string;
  radius?: string;
  background?: string;
  disabled?: boolean;
  type?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
}
