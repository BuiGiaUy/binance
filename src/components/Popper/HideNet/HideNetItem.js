import classNames from 'classnames/bind';

import styles from './HideNet.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function HideNetItem({ data }) {
    return (
        <Button className={cx('hideNetItem')} leftIcon={data.leftIcon} arrow hide to={data.href}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <div className={cx('hideNetItem-title')}>{data.title}</div>
                </div>
                <div className={cx('hideNetItem-content')}>{data.content}</div>
            </div>
        </Button>
    );
}

export default HideNetItem;
