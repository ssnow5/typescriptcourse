namespace App {
  export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalmethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalmethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
