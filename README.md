# TimeRoller

A React component for selecting a value from a range using a scrollable list. Ideal for time or value selection interfaces.

## Table of Contents

- [Installation](#installation)
- [Props](#props)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the `react-timeroller` package, use npm or yarn:

```bash
npm install react-timeroller
```

## Props

### `range` (required)
- Type: `Array<number | string>`
- Description: An array of values that the roller can select from.

### `unit` (optional)
- Type: `string`
- Description: A string label representing the unit of the values (e.g., "hours", "minutes").

### `selectedValue` (required)
- Type: `number | string`
- Description: The currently selected value.

### `setSelectedValue` (required)
- Type: `function`
- Description: A function to update the selected value.

## Examples

Here is a basic example of how to use the `TimeRoller` component:

```jsx
import React, { useState } from 'react';
import TimeRoller from 'react-timeroller';

function App() {
  const [selectedValue, setSelectedValue] = useState(2);
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <h1>Time Roller Demo</h1>
      <TimeRoller
        range={range}
        unit="hours"
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <p>Selected value: {selectedValue}</p>
    </div>
  );
}

export default App;
```

![Starter code output](https://private-user-images.githubusercontent.com/43109943/332284723-91848685-0348-4993-a46a-e445fcc4daee.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTYyNjY3MDMsIm5iZiI6MTcxNjI2NjQwMywicGF0aCI6Ii80MzEwOTk0My8zMzIyODQ3MjMtOTE4NDg2ODUtMDM0OC00OTkzLWE0NmEtZTQ0NWZjYzRkYWVlLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTIxVDA0NDAwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM0MTg1ODFiYWIxNzU5MzE1OTA3ZTM2NmM1MTY1NjM1NGVhMTgwMzRhZjgxNDI2NGNjZjRmNDhmN2I4MTVlM2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.vsi_7P6QompUp2o72WckbWTJNcTOTktnZkDSlYVqrrM)

Here's an example with the TimeRoller component working with non-time related data, such as a list of US States (and without the 'unit' prop):

```jsx
import { useEffect, useState } from 'react';
import './App.css';
import TimeRoller from 'react-timeroller';
function App() {
  const usStateCodes = [
    "AL - Alabama",
    "AK - Alaska",
    "AZ - Arizona",
    "AR - Arkansas",
    "CA - California",
    "CO - Colorado",
    "CT - Connecticut",
    "DE - Delaware",
    "FL - Florida",
    "GA - Georgia"
  ];
  const [selectedValue, setSelectedValue] = useState(usStateCodes[0]);
    useEffect(() => {
  }, [selectedValue])
  
  return (
    <div className="App">
      <h1>Roller Demo - State Selector</h1>
      <TimeRoller
        range={usStateCodes}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <p>Selected value: {selectedValue}</p>
    </div>
  );
}

export default App;

```

![States Output](https://private-user-images.githubusercontent.com/43109943/332290243-01c2c117-45ec-4433-8575-6981864b7abb.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTYyNjg1MjgsIm5iZiI6MTcxNjI2ODIyOCwicGF0aCI6Ii80MzEwOTk0My8zMzIyOTAyNDMtMDFjMmMxMTctNDVlYy00NDMzLTg1NzUtNjk4MTg2NGI3YWJiLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTIxVDA1MTAyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg5ODBhNDMwMzczZGJlZDMwZjc5YzllODA0NGM4ZTE5ZWY2Njg0YmU5Njk0ZmEyNTNhMTY5NTQyNDJhM2I2ODYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.EwfE9C0I8h3M1ukLy0EJXQbo-cn89JSXY15EKJZmqNI)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or improvements.

## License

This project is licensed under the MIT License.
