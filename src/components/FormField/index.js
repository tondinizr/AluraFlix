import React, { Component } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

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
    const { isFocused } = this.state;

    return (
      <FormFieldWrapper Color={Color}>
        {label && (
          <Label Color up={isFocused || value} onClick={this.handleLabelClick}>
            {label}
          </Label>
        )}

        {textArea ? (
          <TextArea
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
        ) : (
          <Input
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
        )}
      </FormFieldWrapper>
    );
  }
}

const defaultColor = "#6969da";
const padV = 16;
const padH = 16;
const labelSize = 14;
const view = `${padV}px  ${padH}px`;

const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.Color || defaultColor};
`;

const Label = styled.label`
  color: ${(props) => props.Color || defaultColor};
  font-size: ${labelSize}px;
  will-change: transform;
  transition: transform 0.3s cubic-bezier(0.06, 0.67, 0.32, 0.82);
  transform: translate(${padH}px, ${1.333 * labelSize + padV}px);
  ${(props) =>
    props.up &&
    css`
      transform: scale(0.8) translate(-2px, -2px);
    `}
`;

const Input = styled.input`
  background-color: transparent;
  color: ${(props) => props.Color || defaultColor};
  padding: ${(props) => props.Padding || view};
  outline: none;
  border-radius: 3px;
  font-size: 16px;
  width: 100%;
  border: 1px solid ${(props) => props.Color || defaultColor};
  &:focus {
    border: 1px solid ${(props) => darken(0.1, props.Color || defaultColor)};
  }
  height: ${(props) => props.Height || "auto"};
`;

const TextArea = styled.textarea`
  background-color: transparent;
  color: ${(props) => props.Color || defaultColor};
  resize: vertical;
  outline: none;
  border-radius: 3px;
  font-size: 16px;
  width: 100%;
  padding: ${padV}px ${padH}px;
  border: 1px solid ${(props) => props.Color || defaultColor};
  &:focus {
    border: 1px solid ${(props) => darken(0.1, props.Color || defaultColor)};
  }
`;

export default FormField;
