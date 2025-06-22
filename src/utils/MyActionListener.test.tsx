import { describe, it, expect, vi } from "vitest";
import { MyActionListener } from "./MyActionListener";

describe("MyActionListener", () => {
  it("should register and emit a listener", () => {
    const listener = vi.fn();
    const actions = new MyActionListener();

    actions.registerListener("PRINT", listener);
    actions.emit("PRINT", "hello");

    expect(listener).toHaveBeenCalledOnce();
    expect(listener).toHaveBeenCalledWith("hello");
  });

  it("should register multiple listeners and call all", () => {
    const a = vi.fn();
    const b = vi.fn();
    const actions = new MyActionListener();

    actions.registerListener("SAY", a);
    actions.registerListener("SAY", b);
    actions.emit("SAY", "yo");

    expect(a).toHaveBeenCalledWith("yo");
    expect(b).toHaveBeenCalledWith("yo");
  });

  it("should remove listeners", () => {
    const a = vi.fn();
    const actions = new MyActionListener();

    actions.registerListener("REMOVE_ME", a);
    actions.removeListener("REMOVE_ME");

    expect(() => actions.emit("REMOVE_ME", "fail")).toThrowError(
      `Can't emit an event. Event "REMOVE_ME" doesn't exist.`
    );
  });

  it("should throw if emitting non-existent action", () => {
    const actions = new MyActionListener();
    expect(() => actions.emit("FAKE", "fail")).toThrowError(`Can't emit an event. Event "FAKE" doesn't exist.`);
  });
});
