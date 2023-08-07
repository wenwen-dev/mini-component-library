import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
        
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{'--size': 24 + 'px'}}>
          <Icon id='chevron-down' size='24'></Icon>
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* border: 3px solid gold; */
  width: max-content;
`
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Without setting appearance: none, height is 100% of Wrapper - why? */
  /* border: 1px solid red; */
  opacity: 0;
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: none;
  /* border: 5px solid purple; */
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
  font-size: 1rem;
  color: ${COLORS.gray700};
  /* width: max-content; 
  Note how setting max-content on wrapper has the same effects on this component too - it's not taking up the entire line, almost like being passed with the same setting! */

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }


  /* appearance: none; */

  &:focus {
    /* border: 2px solid hsla(218, 57%, 53%, 1); */
    outline: 2px solid hsla(218, 57%, 53%, 1);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
  /* the icon becomes transparent in terms of clicks */
`;

export default Select;
