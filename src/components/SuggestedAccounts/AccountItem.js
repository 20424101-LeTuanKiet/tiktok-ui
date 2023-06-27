import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3a520d85dcc472a86abd7af728a311b3~c5_100x100.jpeg?x-expires=1688040000&x-signature=q%2BOQQzaWo9%2FZo0GRnoKpurmm4Bs%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nick-name')}>
                    <strong>ptgym.online</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Website Gym & Fitness</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
