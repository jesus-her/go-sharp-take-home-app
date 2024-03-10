import {
  AlertCircleIcon,
  ChevronDownIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectPortal,
  SelectTrigger,
} from '@gluestack-ui/themed'
import React from 'react'

const FormSelectUi = ({
  value,
  label,
  helperText,
  isInvalid = false,
  invalidMessage,
  onValueChange,
  isRequired,
  options,
}: {
  value?: any
  label?: string
  helperText?: string
  isInvalid?: boolean
  invalidMessage?: string
  onValueChange?: (value: string) => void
  isRequired?: boolean
  options: any
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      <FormControlLabel mb='$1'>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>

      <Select selectedValue={value} onValueChange={onValueChange}>
        <SelectTrigger variant='outline' size='md' pr={12}>
          <SelectInput placeholder='Select option' />
          <SelectIcon>
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {options}
          </SelectContent>
        </SelectPortal>
      </Select>
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
export default FormSelectUi
