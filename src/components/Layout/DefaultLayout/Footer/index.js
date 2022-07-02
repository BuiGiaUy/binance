import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Button, Slider } from 'antd';

const cx = classNames.bind(styles);

const onChange = (value) => {
    console.log('onChange: ', value);
};

const onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
};

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <Button size="large" className={cx('primary')}>
                gia uy
            </Button>

            <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
            <Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
        </footer>
    );
}

export default Footer;
