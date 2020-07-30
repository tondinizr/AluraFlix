import React, { Component } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import PropTypes from "prop-types";

class FormField extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  handleLabelClick = () => {
    const { isFocused } = this.state;
    const { value } = this.props;

    if (!isFocused && !value) {
      this.setState({ isFocused });
    }
  };

  render() {
    const { label, value, textArea, Color, ...rest } = this.props;
    const Tag = textArea ? "textarea" : "input";

    return (
      <FormFieldWrapper Color={Color}>
        <Label Color={Color}>
          <Input
            as={Tag}
            Color={Color}
            value={value}
            onChange={this.props.onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            innerRef={(node) => {
              this._input = node;
            }}
            {...rest}
          />
          <Label.Text Color={Color}>{label} </Label.Text>
        </Label>
      </FormFieldWrapper>
    );
  }
}

FormField.defaultProps = {
  textArea: false,
  Height: "100%",
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  textArea: PropTypes.bool,
  Color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  Height: PropTypes.string,
};

const defaultColor = "#6969da";

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
  color: ${(props) => props.Color || defaultColor};
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: ${(props) => props.Color || defaultColor};
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: transparent;
  color: ${(props) => props.Color || defaultColor};
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  outline: 0;
  border: 1px solid ${(props) => props.Color || defaultColor};
  &:focus {
    border: 1px solid ${(props) => darken(0.1, props.Color || defaultColor)};
  }
  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus:not([type="color"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      hasValue &&
      css`
        &:not([type="color"]) + ${Label.Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

export default FormField;
