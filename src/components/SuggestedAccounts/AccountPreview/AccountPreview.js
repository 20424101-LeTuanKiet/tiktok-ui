import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import avatar from '~/avatar.jpeg';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={avatar} alt="" />
                <div>
                    <Button className={cx('follow-btn')} primary small>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>ptgym.online</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Website Gym & Fitness</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>6.9M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>69.9M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
