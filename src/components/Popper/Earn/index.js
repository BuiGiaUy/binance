import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './EarnItem.module.scss';
import EarnItem from './EarnItem';

const cx = classNames.bind(styles);

function Earn({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <EarnItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('lists')} tabIndex="-1" {...attrs}>
                    {renderItems()}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Earn;
