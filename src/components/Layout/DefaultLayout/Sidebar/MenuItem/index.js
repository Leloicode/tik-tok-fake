import Button from "../../../../Buttons";
function MenuItem({ title , to, leftIcon, ...props}) {
    return (
            <Button  leftIcon={leftIcon} {...props} >{title}</Button>
        
    );
}

export default MenuItem;