import { MyActionListener } from "../utils/MyActionListener";

let globalActionListener: MyActionListener | null = null;

export function useActionListener(): MyActionListener {
  if (!globalActionListener) {
    globalActionListener = new MyActionListener();
  }

  return globalActionListener;
}

export function resetActionListener(): void {
  globalActionListener = null;
}
