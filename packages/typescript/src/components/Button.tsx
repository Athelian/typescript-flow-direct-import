import "./Button.css";

type Props = {
  text: string;
}

export const Button = ({ text }: Props) => {
  return <button className="Button-typescript">{text}</button>;
};

export default Button;
