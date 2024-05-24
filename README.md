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

![Starter code output](https://imgur.com/14ext8M.gif)

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

![States Output](https://i.imgur.com/TzhPJTh.gif)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or improvements.

## License

This project is licensed under the MIT License.
