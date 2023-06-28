import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3a520d85dcc472a86abd7af728a311b3~c5_100x100.jpeg?x-expires=1688040000&x-signature=q%2BOQQzaWo9%2FZo0GRnoKpurmm4Bs%3D"
                    alt=""
                />
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
