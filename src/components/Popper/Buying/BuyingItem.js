import classNames from 'classnames/bind';

import styles from './BuyingItem.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function BuyingItem({ data }) {
    return (
        <Button className={cx('buyingItem')} leftIcon={data.leftIcon} hide arrow>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <div className={cx('buyingItem-title')}>{data.title}</div>
                </div>
                <div className={cx('buyingItem-content')}>{data.content}</div>
            </div>
        </Button>
    );
}

export default BuyingItem;
