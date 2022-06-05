import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
  
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignIn,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.cjs'
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { Message } from "~/components/icons";
import Image from "~/components/images";
import Search from "~/components/search";
const cx = classNames.bind(styles);
const Menu_Item = [
  {
    item: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children:{
        title:'Languages',
        data:[
            {
                type:'language',
                code:'en',
                title:'English'
            },
            {
                type:'tiếng việt',
                code:'vi',
                title:'Tiếng Việt'
            },
            
        ]
    }
  },
  {
    item: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to:'/feedback'
  },
  {
    item: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];
function Header() {
  //handle logic
  const handleMenuChange = (menuItem)=>{
    console.log(menuItem)
  }

  const currentUser = true
  const userMenu = [
    {
      item: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      to:'/@user'
    },
    {
      item: <FontAwesomeIcon icon={faCoins} />,
      title: "Get Coin",
      to:'/coin'
    },
    {
      item: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to:'/setting'
    },
    ...Menu_Item,
    {
      item: <FontAwesomeIcon icon={faSignOut} />,
      title: "Logout",
      to:'/logout',
      separate:true
    },
  ]
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Search />
        <div className={cx("action")}>
        {currentUser ?(
          <>
            <Tippy content="Upload video"
            placement="bottom" delay={[0,200]}>
              <button
              className={cx('action-btn')}>
              <Message />
              </button>
            </Tippy>
          </>
        ):(
        <>
          <Button text>Upload</Button>
          <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Login
          </Button>
        </>)}
        <Menu items={currentUser?userMenu: Menu_Item} onChange={handleMenuChange}>
            {currentUser?(
              <Image src="abdaj" className={cx('user-avatar')} alt="User Avatar" fallback="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"/>
            ):(
              <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
