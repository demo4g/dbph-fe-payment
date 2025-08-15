import { createGlobalStyle } from 'styled-components';
import { DatePickerInputOveride } from './DatePickerInput';
import { InputOveride } from './Input';
import { resetCss } from './reset';
import { TabsOveride } from './Tabs';

export const GlobalStyle = createGlobalStyle`
  
  ${resetCss}
  ${InputOveride}
  ${DatePickerInputOveride}
  ${TabsOveride}
  
  .nvt-Textarea-input::placeholder {
   font-weight: 300;
  }

  .nvt-Popover-dropdown {
    box-shadow: ${(props) => props.theme.shadows.SHADOW};
  }
`;
