import React from 'react'
import {
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/core';

function InputContainer({ type = "text", leftIcon, value, onChange, placeholder, showTopBorder = false }) {
  return (
    <InputGroup backgroundColor="#f7f7f7" border="1px solid #c8c8c8;" borderTop={ showTopBorder ? null : 'none'}>
      <InputLeftAddon
        paddingLeft="10px"
        paddingRight="10px"
        padding
        border="none"
        backgroundColor="#f7f7f7"
        pointerEvents="none"
        color="gray.400"
        children={leftIcon}
      />
      <Input
        isRequired={true}
        paddingLeft="2px"
        backgroundColor="#f7f7f7"
        focusBorderColor="red.0"
        border="none"
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputGroup>
  )
}

export default InputContainer;