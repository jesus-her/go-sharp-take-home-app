import {
  AlertCircleIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed'
import React from 'react'
import {KeyboardTypeOptions} from 'react-native'

const FormInputUi = ({
  value,
  label,
  placeholder,
  type = 'text',
  helperText,
  isInvalid = false,
  invalidMessage,
  keyboardType = 'default',
  onChangeText,
  endContent,
  isDisabled,
  maxLength,
  isRequired,
}: {
  value?: any
  label?: string
  placeholder?: string
  helperText?: string
  isInvalid?: boolean
  invalidMessage?: string
  keyboardType?: KeyboardTypeOptions | undefined
  onChangeText?: (value: string) => void
  type: 'text' | 'password' | undefined
  endContent?: any
  isDisabled?: boolean
  maxLength?: number
  isRequired?: boolean
}) => {
  return (
    <FormControl
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={isInvalid}>
      <FormControlLabel mb='$1'>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputField
          maxLength={maxLength}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          type={type}
          placeholder={placeholder}
        />
        {endContent}
      </Input>
      <FormControlHelper>
        <FormControlHelperText>{helperText}</FormControlHelperText>
      </FormControlHelper>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{invalidMessage}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}
export default FormInputUi
