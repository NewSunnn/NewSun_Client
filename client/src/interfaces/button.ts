export interface ButtonProps {
  //onClick?(): void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  width: number;
  height: number;
  margin?: string;
  padding?: string;
  radious?: string;
  background?: string;
  disabled?: boolean;
  type?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
}
