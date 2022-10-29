// @flow

import React from "react";

import "./Button.css"

type Props = {
  text: string;
}

const Button = ({ text }: Props): React$Element<"button"> => {
  return <button className="Button-flow">{text}</button>;
};

export default Button;
