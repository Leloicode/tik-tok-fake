import { React, useState, useRef, useEffect } from "react";
import HandleTippy from "@tippyjs/react/headless";
import Proper from "../../../../Proper";
import AcountItem from "../../../../AcountItem";
import UseDebounce from "../../../../Hook/useDebounce.js";

import {
  faSpinner,
  faMagnifyingGlass,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Styles from "./Search.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);
export default function SearchHeader() {
  const [searchValue, setSearchValue] = useState("");
  const inputElement = useRef();
  const [searchResults, setSearchResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showLoadding, setShowLoadding] = useState(false);
  const useDebounce = UseDebounce(searchValue, 500);
  //sự kiện click vào user account item
  const handleClickAcount = () => {
    setShowResult(false);
  };
  const handleOnchangeInput = (e) => {
    const value = e.target.value;
    // kiểm tra xem kí tự đầu tiên nhập vào có khoảng trống ở đầu hay không
    if (value.startsWith(" ")) {
      // xem input có nhập giá trị nào chưa
      if (searchValue !== "") {
        //đưa vị trí con trỏ đến cuối
        e.selectionStart = e.selectionEnd = value.length;
        return;
      }
      setSearchValue("");
    } else {
      if (value === "") {
        setSearchResults([]);
      }
      setSearchValue(value);
    }
  };
  const handleClearInput = () => {
      setSearchValue("");
      setSearchResults([]);
      inputElement.current.focus();
  }
  useEffect(() => {
    if (!useDebounce.trim()) {
      setSearchResults([]);
      return;
    }
    setShowLoadding(true);
    // fetch(``)
    axios
      .get("https://tiktok.fullstack.edu.vn/api/users/search", {
        params: {
          q: useDebounce,
          type: "more",
        },
      })
      .then((res) => {
        setSearchResults(res.data.data);
        setShowLoadding(false);
      })
      .catch(() => {
        setShowLoadding(false);
      });
  }, [useDebounce]);
  return (
    <div>
      <HandleTippy
        visible={showResult && searchResults.length > 0}
        // flipBehavior={["top"]}
        onClickOutside={() => {
          setShowResult(false);
        }}
        interactive
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <Proper>
              <div className={cx("account-item")}>
                <h4 className={cx("account-title")}>Tài khoản</h4>
                {searchResults.map((result) => (
                  <AcountItem
                    handleClickAcount={() => {
                      handleClickAcount();
                    }}
                    data={result}
                    key={result.id}
                  ></AcountItem>
                ))}
              </div>
            </Proper>
          </div>
        )}
      >
        <div className={cx("search")}>
          <input
            onFocus={() => {
              setShowResult(true);
            }}
            ref={inputElement}
            value={searchValue}
            onChange={(e) => {
              handleOnchangeInput(e);
            }}
            placeholder="Tìm kiếm tài khoản và video"
          ></input>
          {searchValue !== "" && !showLoadding && (
            <button className={cx("clear-btn")}>
              <FontAwesomeIcon
                onClick={handleClearInput}
                icon={faCircleXmark}
              ></FontAwesomeIcon>
            </button>
          )}
          {showLoadding && (
            <button className={cx("loadding")}>
              <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
            </button>
          )}
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </div>
      </HandleTippy>
    </div>
  );
}
