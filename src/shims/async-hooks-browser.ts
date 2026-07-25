export class AsyncLocalStorage<T = unknown> {
  private store: T | undefined;

  run(store: T, fn: () => unknown) {
    const previousStore = this.store;
    this.store = store;
    try {
      return fn();
    } finally {
      this.store = previousStore;
    }
  }

  getStore() {
    return this.store;
  }

  enterWith(store: T) {
    this.store = store;
  }
}
