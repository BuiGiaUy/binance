import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as WrapperPopper } from '~/components/Popper';
import styles from './BuyingItem.module.scss';
import BuyingItem from './BuyingItem';

const cx = classNames.bind(styles);

function Buying({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <BuyingItem key={index} data={item} />);
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

export default Buying;
