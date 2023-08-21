import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}! What is your gender?',
    trigger: 'gender',
  },
  {
    id: 'gender',
    options: [
      { value: 'male', label: 'Male', trigger: '5' },
      { value: 'female', label: 'Female', trigger: '5' },
    ],
  },
  {
    id: '5',
    message: 'How old are you?',
    trigger: 'age',
  },
  {
    id: 'age',
    user: true,
    trigger: 'end-message',
    validator: (value) => {
      if (isNaN(value)) {
        return 'value must be a number';
      } else if (value < 0) {
        return 'value must be positive';
      } else if (value > 120) {
        return `${value}? Come on!`;
      }

      return true;
    },
  },
  {
    id: 'end-message',
    message: 'Thanks! Your data was submitted successfully!',
    end: true,
  },
]

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot steps={steps} />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
