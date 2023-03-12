import {React,useState,useEffect} from 'react'

function UseDebounce(value, timeDelay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handleDebounceTime = setTimeout(() => {
            setDebouncedValue(value);
        }, timeDelay);
        return () => {
            clearTimeout(handleDebounceTime);
        };
    }, [value]);
  return debouncedValue;
}
export default UseDebounce;