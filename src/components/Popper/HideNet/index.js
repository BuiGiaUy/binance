import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as WrapperPopper } from '~/components/Popper';
import styles from './HideNet.module.scss';
import HideNetItem from './HideNetItem';

const cx = classNames.bind(styles);

function HideNet({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <HideNetItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('lists')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>{renderItems()}</WrapperPopper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default HideNet;
