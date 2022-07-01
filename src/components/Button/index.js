import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Button({
    href,
    to,
    className,
    leftIcon,
    rightIcon,
    text = true,
    large = false,
    primary = false,
    login = false,
    circle = false,
    hide = false,
    arrow = false,
    children,
    onClick,
    passProps,
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        login,
        circle,
        rightIcon,
        leftIcon,
        hide,
        arrow,
        text,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            <div className={cx('content')}>
                {leftIcon && <span className={cx('icon-left')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {arrow && <FontAwesomeIcon icon={faArrowRightLong} className={cx('icon-arrow')} />}
                {rightIcon && <span className={cx('icon-right')}>{rightIcon}</span>}
            </div>
        </Comp>
    );
}

export default Button;
