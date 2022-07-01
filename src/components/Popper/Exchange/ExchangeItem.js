import classNames from 'classnames/bind';

import styles from './Exchange.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ExchangeItem({ data }) {
    return (
        <Button className={cx('exchangeItem')} leftIcon={data.leftIcon} arrow hide>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <div className={cx('exchangeItem-title')}>{data.title}</div>
                </div>
                <div className={cx('exchangeItem-content')}>{data.content}</div>
            </div>
        </Button>
    );
}

export default ExchangeItem;
