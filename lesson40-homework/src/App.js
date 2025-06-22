import React, { useState } from 'react';
import Input from './components/Input';
import Alert from './components/Alert';

function App() {
  const [defaultValue, setDefaultValue] = useState('');
  const [focusValue, setFocusValue] = useState('');
  const [activeValue, setActiveValue] = useState('Text');
  const [errorValue, setErrorValue] = useState('Text');

  return (
    <div style={{ padding: '40px', backgroundColor: '#fcf9dd' }}>
      <h2>Inputs</h2>

      <div style={{ backgroundColor: '#f3f3f3', padding: '30px' }}>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#999', fontSize: '12px' }}>DEFAULT</p>
          <Input
            label="Title"
            placeholder="Placeholder"
            value={defaultValue}
            onChange={(e) => setDefaultValue(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#999', fontSize: '12px' }}>FOCUS (кликни)</p>
          <Input
            label="Title"
            placeholder="Placeholder"
            value={focusValue}
            onChange={(e) => setFocusValue(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#999', fontSize: '12px' }}>ACTIVE</p>
          <Input
            label="Title"
            placeholder="Text"
            value={activeValue}
            onChange={(e) => setActiveValue(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#999', fontSize: '12px' }}>DISABLED</p>
          <Input
            label="Title"
            placeholder="Text"
            value="Text"
            onChange={() => {}}
            disabled
          />
        </div>

        <div>
          <p style={{ color: '#999', fontSize: '12px' }}>ERROR</p>
          <Input
            label="Title"
            placeholder="Text"
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            error="Error text"
          />
        </div>
      </div>

      <h2 style={{ marginTop: '40px' }}>Alerts</h2>

      <Alert type="warning" text="Lorem ipsum" />
      <Alert type="error" text="Lorem ipsum" />
      <Alert type="success" text="Lorem ipsum" />
      <Alert type="info" text="Lorem ipsum" />
      <Alert type="note" text="Lorem ipsum" />
    </div>
  );
}

export default App;
