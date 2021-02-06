export const debounce = (callback: Function, ms: number) => {
    const timeout = 0;

    return () => {
        clearTimeout(timeout);
        
        setTimeout(callback, ms);
    }
}