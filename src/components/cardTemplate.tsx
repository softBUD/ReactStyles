import styled from 'styled-components'
import Colors from 'theme/Colors'
import React from 'react'
import Size from 'theme/Size'
import Weight from 'theme/Weight'

export interface InputLabelProps {
  labelFor: string
}

export interface FormCardStyle
  inputContentWidth: number
}

export interface FormCardProps {
  title: string
  children: React.ReactNode
  theme: FormCardStyles
}

const StyledFormHeader = styled.div`
  display: flex;
  width: 100%;
  min-height: 65px;
  background: ${Colors.common.grays.g_09};
  border-radius: 4px;
  border-bottom: 1px solid #e4e7eb;
  margin-bottom: ${Size.margin.list.margin_top}px;
  padding-left: ${Size.margin.header.title_margin_left}px;
  align-items: center;
  font-weight: ${Weight.bolder};
  font-size: ${Size.font.regular}px;
`
const FormWrapper = styled.div`
  border: 1px solid #e4e7eb;
  border-radius: 4px;
  min-height: 370px;
`

const InputWrapper = styled.div<FormCardStyles>`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: ${(props) => props.inputContentWidth}px;
  padding-left: ${Size.margin.header.title_margin_left}px;
`

export const InputTitle = styled.label<InputLabelProps>`
  width: 51px;
  white-space: nowrap;
  font-weight: ${Weight.bolder};
  font-size: ${Size.font.regular}px;
  padding-right: 100px;
  cursor: pointer;
`

export const LabelWithInputWrapper = styled.div`
  display: flex;
  min-width: 550px;
  align-items: baseline;
`

export const LabelWithTextAreaWrapper = styled.div`
  display: flex;
  min-width: 500px;

  & > label {
    padding-top: 10px;
  }
`

function FormCard(props: FormCardProps) {
  const {title, children, theme} = props

  return (
    <FormWrapper>
      <StyledFormHeader>{title}</StyledFormHeader>
      <InputWrapper inputContentWidth={theme.inputContentWidth}>
        {children}
      </InputWrapper>
    </FormWrapper>
  )
}
export default FormCard