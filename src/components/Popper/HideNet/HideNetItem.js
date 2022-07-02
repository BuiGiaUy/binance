import styles from './HideNet.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HideNetItem({ data }) {
    return (
        <Link className={cx('hideNetItem')} to={data.href}>
            <div className={cx('leftIcon')}>{data.leftIcon}</div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <div className={cx('hideNetItem-title')}>{data.title}</div>
                </div>
                <div className={cx('hideNetItem-content')}>{data.content}</div>
            </div>
            <FontAwesomeIcon icon={faArrowRightLong} className={cx('icon-arrow')} />
        </Link>
    );
}

export default HideNetItem;
