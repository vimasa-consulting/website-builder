export default function debounce(func: Function, wait?: number, immediate?: boolean) {
    let timeout: ReturnType<typeof setTimeout>  | null;
    let args: IArguments | null;
    let context: any;
    let timestamp: number;
    let result: any;
    const waitNum = undefined === wait ? 100 : wait;

    function later() {
      var last = Date.now() - timestamp;

      if (last < waitNum && last >= 0) {
        timeout = setTimeout(later, waitNum - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    const debounced = function() {
      // @ts-ignore
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, waitNum);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };

    debounced.clear = function() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };

    debounced.flush = function() {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;

        clearTimeout(timeout);
        timeout = null;
      }
    };

    return debounced;
};
