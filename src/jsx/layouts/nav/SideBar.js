/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const { iconHover, sidebarposition, headerposition, sidebarLayout } =
    useContext(ThemeContext);

  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");

    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }, []);

  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let dashBoard = [
      "",
      "guest-list",
      "guest-detail",
      "concierge",
      "room-list",
      "reviews",
      "task",
    ],
    app = [
      "app-profile",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
    ],
    email = ["email-compose", "email-inbox", "email-read", "todo"];

  return (
    <div
      className={`deznav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? scrollPosition > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="deznav-scroll">
        <MM className="metismenu" id="menu">
          <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
              <i className="flaticon-025-dashboard"></i>
              <span className="nav-text">Admin</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "guest-list" ? "mm-active" : ""}`}
                  to="/guest-list"
                >
                  Guest
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "guest-detail" ? "mm-active" : ""}`}
                  to="/guest-detail"
                >
                  Guest Detail
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "concierge" ? "mm-active" : ""}`}
                  to="/concierge"
                >
                  Concierge
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "room-list" ? "mm-active" : ""}`}
                  to="/room-list"
                >
                  Room
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "reviews" ? "mm-active" : ""}`}
                  to="/reviews"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "task" ? "mm-active" : ""}`}
                  to="/task"
                >
                  Task
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${app.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
              <i className="flaticon-050-info"></i>
              <span className="nav-text">Tools</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "app-profile" ? "mm-active" : ""}`}
                  to="/app-profile"
                >
                  Profile
                </Link>
              </li>
              <li className={`${email.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#">
                  Email
                </Link>
                <ul className={`${email.includes(path) ? "mm-show" : ""}`}>
                  <li>
                    <Link
                      className={`${
                        path === "email-compose" ? "mm-active" : ""
                      }`}
                      to="/email-compose"
                    >
                      Compose
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "email-inbox" ? "mm-active" : ""}`}
                      to="/email-inbox"
                    >
                      Inbox
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "email-read" ? "mm-active" : ""}`}
                      to="/email-read"
                    >
                      Read
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${path === "app-calender" ? "mm-active" : ""}`}
                  to="/app-calender"
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "todo" ? "mm-active" : ""}`}
                  to="/todo"
                >
                  Todo
                </Link>
              </li>
            </ul>
          </li>
         
        </MM>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
