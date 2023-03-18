
import AcountItem from "../../../../AcountItem";
import React from "react";
import Styles from "./AccountRecommended.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);
function AcountRecommended({ datas,className,tippy }) {
    return ( 
        <AcountItem className={className} data={datas} tippy={tippy} ></AcountItem>
     ); 
}

export default AcountRecommended;