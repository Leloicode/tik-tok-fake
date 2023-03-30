import {useState,useEffect} from 'react'

function UseDebounce(value, timeDelay = 100) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handleDebounceTime = setTimeout(() => {
            setDebouncedValue(value);
        }, timeDelay);
        return () => {
            clearTimeout(handleDebounceTime);
        };
    }, [value,timeDelay]);
  return debouncedValue;
}
export default UseDebounce;