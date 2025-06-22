import { MyActionListener } from "./MyActionListener";

// Single global instance
let globalActionListener: MyActionListener | null = null;

export function useActionListener(): MyActionListener {
  // Create instance only once, globally
  if (!globalActionListener) {
    globalActionListener = new MyActionListener();
  }

  return globalActionListener;
}

// Optional: Reset function for testing
export function resetActionListener(): void {
  globalActionListener = null;
}
