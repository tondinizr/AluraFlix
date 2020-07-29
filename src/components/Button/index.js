import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
}
&:hover,
&:focus {
  opacity: 0.5;
}

@media (max-width: 800px) {
  
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  
}

`;

const defaultColor = "#6969da";

export const DefaultButton = styled.button`
  color: ${(props) => props.Color || defaultColor};
  border: 1px solid ${(props) => props.Color || defaultColor};
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  background-color: transparent;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  margin-top: 12px;
}
&:hover,
&:focus {
  opacity: 0.5;
}

`;

export default Button;
