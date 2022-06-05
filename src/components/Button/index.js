import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  disable,
  rounded,
  primary,
  text = false,
  className,
  outline,
  onClick,
  leftIcon,
  rightIcon,
  children,
  passProps,
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (disable) {
    Object.keys(props).forEach((propKey) => {
      if (propKey.startsWith("on") && typeof props[propKey] === "function") {
        delete props[propKey];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", {
    [className]: className,//cách custom class riêng
    primary,
    text,
    disable,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
