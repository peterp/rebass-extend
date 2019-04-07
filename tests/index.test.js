import React from "react";
import TestRenderer from "react-test-renderer";
import { textAlign, display } from "styled-system";

import { extend } from "../src";

const renderJSON = el => TestRenderer.create(el).toJSON();

test("style props are added to components", () => {
  const { Box } = extend({
    Box: [textAlign]
  });
  const json = renderJSON(<Box textAlign="right" />);
  expect(json).toHaveStyleRule("text-align", "right");
});

test("prop types are added to components", () => {
  const { Box } = extend({
    Box: [textAlign]
  });
  expect(Box.propTypes.textAlign).toBeInstanceOf(Function);
});

describe("inheritance", () => {
  test("`Box` style props are added to extended components", () => {
    const { Text } = extend({
      Box: [textAlign]
    });
    const json = renderJSON(<Text textAlign="right" />);
    expect(json).toHaveStyleRule("text-align", "right");
  });

  test("inherited style props are compounded", () => {
    const { Heading } = extend({
      Box: [display],
      Text: [textAlign]
    });
    const json = renderJSON(<Heading textAlign="right" display="flex" />);
    expect(json).toHaveStyleRule("text-align", "right");
    expect(json).toHaveStyleRule("display", "flex");
  });
});
