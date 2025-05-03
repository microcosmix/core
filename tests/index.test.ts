import { describe, it, expect } from "vitest";
import { hello } from "../src/index";

describe("hello", () => {
  it("should return correct message", () => {
    expect(hello()).toBe("Hello MicroCosmix");
  });
});
