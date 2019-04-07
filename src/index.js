import { Box, Flex, Text, Heading, Link, Button, Image, Card } from "rebass";
import styled from "styled-components";

const rebassPrimitives = {
  Box,
  Flex,
  Text,
  Heading,
  Link,
  Button,
  Image,
  Card
};

// A map of Rebass' component inheritance.
// When adding a style prop to `Box` use this to calculate which style props should
// also be addded to the components that extend it.
// E.g.: Adding `display` to Box also adds it to `Flex`, `Text`, etc.
const inheritanceMap = {
  Box: ["Flex", "Text", "Heading", "Link", "Button", "Image", "Card"],
  Text: ["Heading"]
};

const mergeInheritedStyleProps = ({ componentName, config }) =>
  Object.keys(inheritanceMap)
    .filter(baseComponentName =>
      inheritanceMap[baseComponentName].includes(componentName)
    )
    .reduce(
      (acc, baseComponentName) => [
        ...acc,
        ...(config[baseComponentName] || [])
      ],
      []
    );

const buildConfig = config =>
  Object.keys(rebassPrimitives).reduce((newConfig, componentName) => {
    const styleProps = mergeInheritedStyleProps({ componentName, config });

    return {
      ...newConfig,
      [componentName]: [...(config[componentName] || []), ...styleProps]
    };
  }, {});

const extendComponent = (component, styleProps) => {
  const newComponent = styled(component)([styleProps]);
  newComponent.propTypes = {
    ...component.propTypes,
    ...styleProps.reduce((acc, prop) => ({ ...acc, ...prop.propTypes }), {})
  };
  return newComponent;
};

export const extend = extensions => {
  const config = buildConfig(extensions);

  return Object.keys(rebassPrimitives).reduce((acc, componentName) => {
    return {
      ...acc,
      [componentName]: extendComponent(
        rebassPrimitives[componentName],
        config[componentName]
      )
    };
  }, {});
};
