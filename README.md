# Rebass Extend 🏭

This utility function builds on two of [![Rebass][rebass]]' core principles of been _unopinionated,_ and _extensible_ by letting you easily define your own style props on [![Rebass][rebass]]' UI primitives.

[rebass]: https://rebassjs.org

```sh
yarn add rebass rebass-extend
```

## Getting Started

```js
// src/lib/primitives.js

import { extend } from "rebass-extend";
import { display, minHeight, textAlign, fontStyle } from "styled-system";

const { Box, Flex, Text, Heading, Button, Link, Image, Card } = extend({
  Box: [display, minHeight, textAlign],
  Text: [fontStyle]
});

export Box;
export Flex;
export Text;
export Heading;
export Button;
export Link;
export Image;
export Card;
```

The `display` style prop is added to `Box` so all the components that extend it,
like `Card`.

```jsx
// src/components/Badge.js
import { Card } from "src/lib/primitives";

const Badge = props => (
  <Card
    color="white"
    bg="blue"
    px={3}
    py={1}
    borderRadius={9999}
    display="inline-block"
    {...props}
  />
);

export default Badge;
```
