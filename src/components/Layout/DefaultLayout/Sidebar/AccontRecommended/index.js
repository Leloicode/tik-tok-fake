
import AcountItem from "../../../../AcountItem";
import React from "react";
function AcountRecommended({ datas,className,tippy }) {
    return ( 
        <AcountItem className={className} data={datas} tippy={tippy} ></AcountItem>
     ); 
}

export default AcountRecommended;