import classNames from 'classnames/bind';

import styles from './Language.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function LanguageItem({ data }) {
    return (
        <Button className={cx('languageItem')} hide>
            <div className={cx('content')}>{data.content}</div>
        </Button>
    );
}

export default LanguageItem;
