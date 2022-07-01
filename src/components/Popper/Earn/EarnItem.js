import classNames from 'classnames/bind';

import styles from './EarnItem.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function EarnItem({ data }) {
    return (
        <Button className={cx('earnItem')} leftIcon={data.leftIcon} hide arrow>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <div className={cx('earnItem-title')}>{data.title}</div>
                </div>
                <div className={cx('earnItem-content')}>{data.content}</div>
            </div>
        </Button>
    );
}

export default EarnItem;
