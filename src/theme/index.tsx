import { createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import * as BREAKPOINTS from './breakpoints';
import * as COLORS from './colors';
import { MantineButton } from './components/Button';
import { MantineCheckbox } from './components/Checkbox';
import { MantineDatePickerInput } from './components/DatePickerInput';
import { MantineGroup } from './components/Group';
import { MantineImage } from './components/Image';
import { MantineInput } from './components/Input';
import { MantineLoader } from './components/Loader';
import { MantineModal } from './components/Modal';
import { MantineNumberInput } from './components/NumberInput';
import { MantineSelect } from './components/Select';
import { MantineSwitch } from './components/Switch';
import { MantineTextarea } from './components/Textarea';
import { MantineTextInput } from './components/TextInput';
import { MantineTooltip } from './components/Tooltip';
import * as SHADOWS from './shadows';
import * as SIZES from './sizes';

export { BREAKPOINTS, COLORS, SHADOWS, SIZES };

export const mantineTheme = createTheme({
  defaultRadius: 12,
  primaryColor: 'primary',
  cursorType: 'pointer',
  breakpoints: {
    xs: BREAKPOINTS.XS,
    sm: BREAKPOINTS.SM,
    md: BREAKPOINTS.MD,
    lg: BREAKPOINTS.LG,
    XL: BREAKPOINTS.XL,
    XXL: BREAKPOINTS.XXL,
  },
  colors: {
    primary: [
      '#ffebed',
      '#fad7d9',
      '#eeadb0',
      '#e38085',
      '#da5a60',
      '#d54249',
      '#d3353d',
      '#bb272f',
      '#a82029',
      '#941521',
    ],
  },
  components: {
    Image: MantineImage,
    Button: MantineButton,
    Input: MantineInput,
    TextInput: MantineTextInput,
    Select: MantineSelect,
    DatePickerInput: MantineDatePickerInput,
    Group: MantineGroup,
    Modal: MantineModal,
    Textarea: MantineTextarea,
    Switch: MantineSwitch,
    Tooltip: MantineTooltip,
    Checkbox: MantineCheckbox,
    NumberInput: MantineNumberInput,
    Loader: MantineLoader,
  },
});
