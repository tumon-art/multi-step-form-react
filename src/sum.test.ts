import sum from "./sum";
import { describe, expect, it } from "vitest";

describe("#sum", () => {
  it("returns 0 with no number", () => {
    expect(sum()).toBe(0);
  });
});
