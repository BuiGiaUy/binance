import classNames from 'classnames/bind';
import styles from './Language.module.scss';
import Wrapper from '../Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
// import LanguageItem from './LanguageItem';

const cx = classNames.bind(styles);

function Language({ closeModal }, items = []) {
    // const renderItems = () => {
    //     return items.map((item, index) => <LanguageItem key={index} data={item} />);
    // };
    return (
        <Wrapper>
            <div className={cx('modal')}>
                <button onClick={() => closeModal(false)} className={cx('close')}>
                    <FontAwesomeIcon icon={faCircleXmark} className={cx('close-svg')} />
                </button>
                <div className={cx('header')}>
                    <div className={cx('header-item-a')}>Ngôn ngữ và vị trí</div>
                    <div className={cx('header-item-b')}>Đồng tiền</div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-header')}>Chọn ngôn ngữ và vị trí</div>
                    {/* <div>{renderItems()}</div> */}
                    <div className={cx('content-lists')}>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                        <Button className={cx('content-item')}>Tiếng Việt</Button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Language;
