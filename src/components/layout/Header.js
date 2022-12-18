import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useHistory } from 'react-router-dom';
import Logo from './partials/Logo';
import { Context } from '../../store/appContext';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const { store, actions } = useContext(Context)
  const history = useHistory()
  const [isActive, setIsactive] = useState(false);
  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">

                  {store.user?.user_id == null && (
                    <ul className={
                      classNames(
                        'list-reset text-xs',
                        navPosition && `header-nav-${navPosition}`
                      )}>
                      <li>
                        <Link to="/login" className="button button-primary button-wide-mobile button-sm">Log in</Link>
                      </li>
                    </ul>
                  )
                  }
                  {store.user?.user_id && (
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="/dataformsend" className="button button-primary button-wide-mobile button-sm">Send Data</Link>
                      </li>
                    </ul>
                  )
                  }
                  {store.user?.user_id && (
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="/dataform_modify" className="button button-primary button-wide-mobile button-sm">Modify Your Data</Link>
                      </li>
                    </ul>
                  )
                  }
                  {store.user?.user_id && (
                    <ul
                      className="list-reset header-nav-right">
                      <li>
                        <Link to="/logout" className="button button-primary button-wide-mobile button-sm" onClick={(e) => {
                          e.preventDefault()
                          actions.logout(history)
                        }}>Logout</Link>
                      </li>
                    </ul>
                  )
                  }
                  {store.user?.user_id == null && (
                    <ul
                      className="list-reset header-nav-right">
                      <li>
                        <Link to="/registrationform" className="button button-primary button-wide-mobile button-sm">Sign up</Link>
                      </li>
                    </ul>

                  )
                  }
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
