import React from "react";
import FooterMenu from "./FooterMenu.jsx";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "./actions.jsx";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="footer-top-container">
            <div className="footer-top-left">
              <Link to="#">
                <div className="footer-logo logo-red">Technomart</div>
              </Link>
              <p>
                г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8<br /> +7 (812)
                555-05-55
              </p>
            </div>
            <div className="footer-top-right">
              <FooterMenu />
            </div>
          </div>
        </div>
        <div className="footer-bot">
          <div className="footer-bot-container">
            <div className="footer-copyright">
              <p>
                © 2010–2017 Компания «Техномарт»<br /> Все права защищены
              </p>
            </div>
            <div className="footer-social">
              <Link
                className="social-vk"
                ref="nofollow"
                target="_blank"
                to="http://vk.com"
              />
              <Link
                className="social-fb"
                ref="nofollow"
                target="_blank"
                to="http://facebook.com"
              />

              <Link
                className="social-inst"
                ref="nofollow"
                target="_blank"
                to="http://instagram.com"
              />
            </div>
            <div className="footer-feedback">
              <p>
                Обратная связь:<br />
                <a href="mailto:mail@htmlacademy.ru">
                  <span className="gold">mail@htmlacademy.ru</span>
                </a>
              </p>
            </div>
            <div className="footer-dev">
              <p>
                Разработано —<br />
                <Link ref="nofollow" target="_blank" to="http://htmlacademy.ru">
                  <span className="gold">htmlacademy.ru</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    footerMenuItems: state
      .getIn(["menus", "footerMenuItems"])
      .sortBy(item => item.get("order"))
      .toJS()
  };
}

module.exports = connect(mapStateToProps, actions)(Footer);
