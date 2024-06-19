# TimeRoller

A React component for selecting a value from a range using a scrollable list. Ideal for time or value selection interfaces.

## Table of Contents

- [Release Notes](#release-notes)
- [Installation](#installation)
- [Props](#props)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Release Notes

### Version: 1.1
- Added styling props
- The picker now shows the values directly above and below the selected item
- Removed default border styling
- Removed most default styling, making package more customizable for personal use
- Updated README GIFs to show the new default look of the component!

## Installation

To install the `react-timeroller` package, use npm or yarn:

```bash
npm install react-timeroller
```

## Props

### `range` (required)

- Type: `Array<number | string>`
- Description: An array of values that the roller can select from.

### `selectedValue` (required)

- Type: `number | string`
- Description: The currently selected value.

### `setSelectedValue` (required)

- Type: `function`
- Description: A function to update the selected value.

### `unit` (optional)

- Type: `string`
- Default: `null`
- Description: A string label representing the unit of the values (e.g., "hours", "minutes").

### `selectedItemStyle` (optional)

- Type: `object`
- Default: `{}`
- Description: An object representing the CSS styles to apply to the selected item.

### `unselectedItemsStyle` (optional)

- Type: `object`
- Default: `{}`
- Description: An object representing the CSS styles to apply to the unselected items.

### `rollerContainerStyle` (optional)

- Type: `object`
- Default: `{}`
- Description: An object representing the CSS styles to apply to the roller container.

### `unitStyle` (optional)

- Type: `object`
- Default: `{}`
- Description: An object representing the CSS styles to apply to the unit label.

## Examples

Here is a basic example of how to use the `TimeRoller` component:

```jsx
import { useState } from "react";
import TimeRoller from "react-timeroller";
function App() {
  const range = [1, 2, 3, 4, 5];
  const [selectedValue, setSelectedValue] = useState(range[0]);

  const styles = {
    app: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
  };
  return (
    <div style={styles.app}>
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

![Starter code output](https://imgur.com/2I9dJJR.gif)

Here's an example with the TimeRoller component working with non-time related data, such as a list of US States (and without the 'unit' prop):

```jsx
import { useState } from "react";
import TimeRoller from "react-timeroller";
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
    "GA - Georgia",
  ];
  const [selectedValue, setSelectedValue] = useState(usStateCodes[0]);

  const styles = {
    app: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
  };

  return (
    <div style={styles.app}>
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

![States Output](https://imgur.com/NuzFJ8h.gif)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or improvements.

## License

This project is licensed under the MIT License.
