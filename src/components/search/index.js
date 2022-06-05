import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import HeadlessTippy from "@tippyjs/react/headless";
import styles from "./Search.module.scss";
import 'tippy.js/dist/tippy.cjs'
import { useEffect, useRef, useState } from "react";
import * as request from '~/utils/request'
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import {UseDebounce} from '~/hooks'
import { search } from "../services/ApiSearch";
const cx = classNames.bind(styles);
function Search() {
    const [searchValue,setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const inputRef = useRef()
    const [showResult,setShowResult] = useState(true)
    const [loading,setLoading] = useState(false)
    //1:''
    //2:'h'->search->h
    const debounced = UseDebounce(searchValue,500)
  useEffect(() => {
      if(!debounced.trim()) {
        setSearchResult([])
        return
      }
      setLoading(true)
      const fetchApi = async ()=>{
        setLoading(true)
        const result = await search(debounced)
        setSearchResult(result)
        setLoading(false)
      }
      fetchApi()
  }, [debounced]);
  const handleHideResult=()=>{
      setShowResult(false)
  }
    return ( 
        <HeadlessTippy
          interactive
          visible={showResult && searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                {searchResult.map(result=>(
                   <AccountItem key={result.id} data={result} />
                ))}
              </PopperWrapper>
            </div>
          )}
          onClickOutside={handleHideResult}
        >
          <div className={cx("search")}>
            <input
            value={searchValue}
            ref={inputRef}
              type="text"
              placeholder="Search accounts and video"
              spellCheck={false}
              onChange={(e)=>setSearchValue(e.target.value)}
                onFocus={()=>setShowResult(true)}
            />
            {!!searchValue && !loading &&(

            <button className={cx("clear")} onClick={()=>{
                setSearchValue('');
                inputRef.current.focus()
            }}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            )}
            {loading &&<FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
     );
}

export default Search;