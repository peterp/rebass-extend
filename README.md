# 🏭 Rebass Extend

[Rebass][rebass] is an unopinionated and extensible set of React primitives.

This library allows you to easily add your own [style functions][styled-system-table]
to the Rebass UI primitives.

[![CircleCI][circle-ci-badge]][circle-ci]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]
[![MIT License][license-badge]](LICENSE.md)

[rebass]: https://rebassjs.org
[styled-system-table]: https://styled-system.com/table
[circle-ci-badge]: https://flat.badgen.net/circleci/github/peterp/rebass-extend
[circle-ci]: https://flat.badgen.net/circleci/github/peterp/rebass-extend
[downloads-badge]: https://flat.badgen.net/npm/dw/rebass-extend
[version-badge]: https://flat.badgen.net/npm/v/rebass-extend
[license-badge]: https://flat.badgen.net/badge/license/MIT/blue
[npm]: https://npmjs.com/package/rebass-extend

```sh
yarn add rebass rebass-extend
```

## Getting Started

```jsx
// src/lib/primitives.js

import { extend } from "rebass-extend";
import { display, minHeight, textAlign, fontStyle } from "styled-system";

const {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Link,
  Image,
  Card
} = extend({
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

The `display` style function is added to `Box`, and all the components that extend it,
like `Card`!

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
