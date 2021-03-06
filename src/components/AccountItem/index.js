
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../images';
import styles from './AccountItem.module.scss' 
const cx = classNames.bind(styles)
function AccountItem({data}) {
    return (
    <Link to={`/@${data.nickname}`}>
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name}  />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </p>
                <span className={cx('username')}>
                    {data.nickname}
                </span>
            </div>
        </div>
    </Link>
    );
}


export default AccountItem;