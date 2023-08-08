import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24 / 16,
    size: 16,
    fontSize: 10 / 16,
    paddingLeft: 24,
  },
  large: {
    height: 36 / 16,
    size: 24,
    fontSize: 18 / 16,
    paddingLeft: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper style={{'--width': width + 'px'}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.size + 'px'}}>
        <Icon id={icon} size={styles.size} />
      </IconWrapper>
      
 
        <TextInput 
          id='search-input' 
          type='text' 
          placeholder={placeholder} 
          style={{
            '--width': width + 'px',
            '--padding-left': styles.paddingLeft + 'px',
            '--height': styles.height + 'rem', '--font-size': styles.fontSize + 'rem'}}>
        </TextInput>

    </Wrapper>
  );
};


const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  /* border: 1px solid lightblue; */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--size);
  height: var(--size);
`;

const TextInput = styled.input`
  display: block;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  width: var(--width);
  padding-left: var(--padding-left);
  /* border: 1px solid purple; */
  height: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;


  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
`;


export default IconInput;
