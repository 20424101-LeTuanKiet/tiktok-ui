import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
