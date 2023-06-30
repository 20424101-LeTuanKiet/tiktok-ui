import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '~/components/Popper';

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
import avatar from '~/avatar.jpeg';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PoperWrapper>
                <AccountPreview />
            </PoperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[800, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={avatar} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>ptgym.online</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Website Gym & Fitness</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
