import {test, expect} from '@jest/globals';
import component_to_jsx from "../src/util/converter";
import {MarkdownComponent} from "../src/util/MarkdownComponent";

test("test", () => {
  // TODO: Not working. Fails to compile. Re-install Jest with TS
  const components: MarkdownComponent[] = []
  expect(component_to_jsx(components)).toBe("")
});