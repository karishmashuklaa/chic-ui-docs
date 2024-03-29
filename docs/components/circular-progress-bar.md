# Circular Progress Bar

Circular Progress bars serve the same purpose as simple progress bars, i.e display an indicator showing the completion/progress of a task.

import { CircularProgressBar } from 'chic-ui';

<CircularProgressBar progress={30} type="primary" showProgress={true} />

```jsx
import React from 'react';
import { CircularProgressBar } from 'chic-ui';

<CircularProgressBar progress={30} type="primary" showProgress={true} />;
```

### Hidden Progress

You can hide the progress using `showProgress` prop.

<>
<CircularProgressBar progress={80} type="success" showProgress={false} />
</>

```jsx
import React from 'react';
import { CircularProgressBar } from 'chic-ui';

<CircularProgressBar progress={80} type="success" showProgress={false} />;
```

### API

```
import { CircularProgressBar } from 'chic-ui';
```

<table>
  <tr>
     <th>Name</th>
     <th>Type</th>
     <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>progress</td>
    <td>number</td>
    <td>70</td>
    <td>Amount of progress</td>
  </tr>
  <tr>
    <td>type</td>
    <td>'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'light'</td>
    <td>'primary'</td>
    <td>Type of Circular Progress Bar</td>
  </tr>
  <tr>
    <td>showProgress</td>
    <td>boolean</td>
    <td>true</td>
    <td>Show progress number</td>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td></td>
    <td>Provide external classnames to the component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>React.CSSProperties</td>
    <td></td>
    <td>Override default styling of the component</td>
  </tr>
</table>
