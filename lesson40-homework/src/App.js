import React, { useState } from 'react';
import Input from './components/Input';
import Alert from './components/Alert';

function App() {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '40px', backgroundColor: '#fcf9dd' }}>
      <h2>Inputs</h2>

      <Input
        label="Title"
        placeholder="Placeholder"
        value=""
        onChange={() => {}}
      />

      <Input
        label="Title"
        placeholder="Placeholder"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Input
        label="Title"
        placeholder="Text"
        value="Text"
        onChange={() => {}}
      />

      <Input
        label="Title"
        placeholder="Text"
        value="Text"
        onChange={() => {}}
        disabled
      />

      <Input
        label="Title"
        placeholder="Text"
        value="Text"
        onChange={() => {}}
        error="Error text"
      />

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
