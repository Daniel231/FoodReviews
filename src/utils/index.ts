export const debounce = () => {
    let timeout = 0;

    return (callback: Function, ms: number) => {
        clearTimeout(timeout);
        
        timeout = setTimeout(callback, ms);
    }
}