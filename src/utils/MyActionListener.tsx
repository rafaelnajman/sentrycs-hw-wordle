export class MyActionListener {
  private listeners: Record<string, Array<(data: unknown) => void>> = {};

  constructor() {}

  registerListener<T = unknown>(action: string, listener: (data: T) => void) {
    if (!this.listeners[action]) {
      this.listeners[action] = [];
    }
    this.listeners[action].push(listener as (data: unknown) => void);
  }

  removeListener(action: string) {
    if (this.listeners[action]) {
      delete this.listeners[action];
    }
  }

  emit<T = unknown>(action: string, data: T) {
    const actionListeners = this.listeners[action];
    if (!actionListeners || actionListeners.length === 0) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
    }
    actionListeners.forEach((listener) => listener(data));
  }
}
