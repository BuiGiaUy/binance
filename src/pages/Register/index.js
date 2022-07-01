import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('main')}>
            <form action="" method="POST" className={cx('form')} id="form-1">
                <h3 className={cx('heading')}>Tạo tài khoản của bạn</h3>
                <p className={cx('desc')}>Nhập thông tin tài khoản và mật khẩu mạnh để bảo mật tài khoản của bạn.</p>

                <div className={cx('spacer')}></div>

                <div className={cx('form-group')}>
                    <label for="fullname" className={cx('form-label')}>
                        Tên đầy đủ
                    </label>
                    <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        placeholder="VD: Sơn Đặng"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('form-group')}>
                    <label for="email" className={cx('form-label')}>
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="VD: email@domain.com"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('form-group')}>
                    <label for="password" className={cx('form-label')}>
                        Mật khẩu
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('form-group')}>
                    <label for="password_confirmation" className={cx('form-label')}>
                        Nhập lại mật khẩu
                    </label>
                    <input
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Nhập lại mật khẩu"
                        type="password"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('form-group')}>
                    <label for="avatar" className={cx('form-label')}>
                        Ảnh đại diện
                    </label>
                    <input id="avatar" name="avatar" type="file" className={cx('form-control')} />
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('form-group')}>
                    <label for="province" className={cx('form-label')}>
                        Tỉnh/TP
                    </label>
                    <select id="province" name="province" className={cx('form-control')}>
                        <option value="">-- Chọn Tỉnh/TP --</option>
                        <option value="hcm">Hồ Chí Minh</option>
                        <option value="bn">Bình Thuận</option>
                    </select>
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('form-group gender')}>
                    <label for="password_confirmation" className={cx('form-label')}>
                        Giới Tính
                    </label>
                    <div className={cx('form-radio-wrapper')}>
                        <div className={cx('form-radio')}>
                            <input name={'gender'} type={'radio'} value="male" className={cx('form-control')} />
                            <p className={cx('form-radio-p')}>Nam</p>
                        </div>
                        <div className={cx('form-radio')}>
                            <input name={'gender'} type={'radio'} value="female" className={cx('form-control')} />
                            <p className={cx('form-radio-p')}>Nữ</p>
                        </div>
                        <div className={cx('form-radio')}>
                            <input name={'gender'} type={'radio'} value="other" className={cx('form-control')} />
                            <p className={cx('form-radio-p')}>Khác</p>
                        </div>
                    </div>
                    <span className={cx('form-message')}></span>
                </div>

                <Button primary large className={cx('form-submit')}>
                    Đăng ký
                </Button>
            </form>
        </div>
    );
}

export default Register;
