import React, { Fragment, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";
import profile from "../../../../images/profile/profile.png";
import PageTitle from "../../../layouts/PageTitle";

const AppProfile = () => {
  const [activeToggle, setActiveToggle] = useState("posts");
  const [sendMessage, setSendMessage] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  const [replayModal, setReplayModal] = useState(false);
  const options = {
    settings: {
      overlayColor: "#000000",
    },
  };
  return (
    <Fragment>
      <PageTitle activeMenu="Profile" motherMenu="App" />

      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              <div className="photo-content ">
                <div className="cover-photo rounded"></div>
              </div>
              <div className="profile-info">
                <div className="profile-photo">
                  <img
                    src={profile}
                    className="img-fluid rounded-circle"
                    alt="profile"
                  />
                </div>
                <div className="profile-details">
                  <div className="profile-name px-3 pt-2">
                    <h4 className="text-primary mb-0">John Doe</h4>
                    <p>Hotel Admin</p>
                  </div>
                  <div className="profile-email px-2 pt-2">
                    <h4 className="text-muted mb-0">hello@email.com</h4>
                    <p>Email</p>
                  </div>
                  <Dropdown className="dropdown ms-auto">
                    <Dropdown.Toggle
                      variant="primary"
                      className="btn btn-primary light sharp i-false"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24"></rect>
                          <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-user-circle text-primary me-2" />
                        View profile
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-users text-primary me-2" />
                        Add to close friends
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-plus text-primary me-2" />
                        Add to group
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-ban text-primary me-2" />
                        Block
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="profile-statistics">
                    <div className="text-center">
                      <div className="row">
                        <div className="col">
                          <h3 className="m-b-0">150</h3>
                          <span>Follower</span>
                        </div>
                        <div className="col">
                          <h3 className="m-b-0">140</h3> <span>Hotels Ran</span>
                        </div>
                        <div className="col">
                          <h3 className="m-b-0">45</h3> <span>Reviews</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link
                          to="/app-profile"
                          className="btn btn-primary mb-1 me-1"
                        >
                          Follow
                        </Link>
                        <Button
                          as="a"
                          href="#"
                          className="btn btn-primary mb-1 ms-1"
                          onClick={() => setSendMessage(true)}
                        >
                          Send Message
                        </Button>
                      </div>
                    </div>
                    {/* send Modal */}
                    <Modal className="modal fade" show={sendMessage}>
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Send Message</h5>
                          <Button
                            variant=""
                            type="button"
                            className="btn-close"
                            data-dismiss="modal"
                            onClick={() => setSendMessage(false)}
                          ></Button>
                        </div>
                        <div className="modal-body">
                          <form
                            className="comment-form"
                            onSubmit={(e) => {
                              e.preventDefault();
                              setSendMessage(false);
                            }}
                          >
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group mb-3">
                                  <label
                                    htmlFor="author"
                                    className="text-black font-w600"
                                  >
                                    {" "}
                                    Name <span className="required">
                                      *
                                    </span>{" "}
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Author"
                                    name="Author"
                                    placeholder="Author"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group mb-3">
                                  <label
                                    htmlFor="email"
                                    className="text-black font-w600"
                                  >
                                    {" "}
                                    Email <span className="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Email"
                                    placeholder="Email"
                                    name="Email"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label
                                    htmlFor="comment"
                                    className="text-black font-w600"
                                  >
                                    Comment
                                  </label>
                                  <textarea
                                    rows={8}
                                    className="form-control"
                                    name="comment"
                                    placeholder="Comment"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <input
                                    type="submit"
                                    value="Post Comment"
                                    className="submit btn btn-primary"
                                    name="submit"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h5 className="text-primary ">Interest</h5>
                </div>
                <div className="card-body pt-3">
                  <div className="profile-interest ">
                    <SRLWrapper options={options}>
                      <div className="row sp4">
                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                          <a href={profile02}>
                            {" "}
                            <img
                              src={profile02}
                              alt="profileImage"
                              className="img-fluid"
                            />{" "}
                          </a>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                          <a href={profile03}>
                            {" "}
                            <img
                              src={profile03}
                              alt="profile"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                          <a href={profile04}>
                            <img
                              src={profile04}
                              alt="profile"
                              className="img-fluid"
                            />{" "}
                          </a>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                          {" "}
                          <a href={profile02}>
                            <img
                              src={profile02}
                              alt="profile"
                              className="img-fluid"
                            />{" "}
                          </a>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                          <a
                            href={profile03}
                            className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col"
                          >
                            <img
                              src={profile03}
                              alt="profile"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                          <a
                            href={profile04}
                            className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col"
                          >
                            <img
                              src={profile04}
                              alt="profile"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </SRLWrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="profile-tab">
                <div className="custom-tab-1">
                  <ul className="nav nav-tabs">
                    <li
                      className="nav-item"
                      onClick={() => setActiveToggle("posts")}
                    >
                      <Link
                        to="#my-posts"
                        data-toggle="tab"
                        className={`nav-link ${
                          activeToggle === "posts" ? "active show" : ""
                        }`}
                      >
                        Posts
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => setActiveToggle("aboutMe")}
                    >
                      <Link
                        to="#about-me"
                        data-toggle="tab"
                        className={`nav-link ${
                          activeToggle === "aboutMe" ? "active show" : ""
                        }`}
                      >
                        About Me
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#profile-settings"
                        data-toggle="tab"
                        onClick={() => setActiveToggle("setting")}
                        className={`nav-link ${
                          activeToggle === "setting" ? "active show" : ""
                        }`}
                      >
                        Setting
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      id="my-posts"
                      className={`tab-pane fade ${
                        activeToggle === "posts" ? "active show" : ""
                      }`}
                    >
                      <div className="my-post-content pt-3">
                        <div className="post-input">
                          <textarea
                            name="textarea"
                            id="textarea"
                            cols={30}
                            rows={5}
                            className="form-control bg-transparent"
                            placeholder="Please type what you want...."
                            defaultValue={""}
                          />
                          <Link
                            to="/app-profile"
                            className="btn btn-primary light px-3 me-1"
                            data-toggle="modal"
                            data-target="#linkModal"
                            onClick={() => setLinkModal(true)}
                          >
                            <i className="fa fa-link m-0" />{" "}
                          </Link>
                          {/* Modal */}
                          <Modal
                            show={linkModal}
                            onHide={() => setLinkModal(false)}
                            className="modal fade post-input"
                            id="linkModal"
                            aria-hidden="true"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Social Links</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-dismiss="modal"
                                  onClick={() => setLinkModal(false)}
                                ></button>
                              </div>
                              <div className="modal-body">
                                <Link
                                  className="btn-social me-1 facebook"
                                  to="/app-profile"
                                >
                                  <i className="fa fa-facebook" />
                                </Link>
                                <Link
                                  className="btn-social me-1 google-plus"
                                  to="/app-profile"
                                >
                                  {" "}
                                  <i className="fa fa-google-plus" />
                                </Link>
                                <Link
                                  className="btn-social me-1 linkedin"
                                  to="/app-profile"
                                >
                                  <i className="fa fa-linkedin" />
                                </Link>
                                <Link
                                  className="btn-social me-1 instagram"
                                  to="/app-profile"
                                >
                                  {" "}
                                  <i className="fa fa-instagram" />
                                </Link>
                                <Link
                                  className="btn-social me-1 twitter"
                                  to="/app-profile"
                                >
                                  <i className="fa fa-twitter" />
                                </Link>
                                <Link
                                  className="btn-social me-1 youtube"
                                  to="/app-profile"
                                >
                                  <i className="fa fa-youtube" />
                                </Link>
                                <Link
                                  className="btn-social whatsapp"
                                  to="/app-profile"
                                >
                                  <i className="fa fa-whatsapp" />
                                </Link>
                              </div>
                            </div>
                          </Modal>
                          <Link
                            to="/app-profile"
                            className="btn btn-primary light px-3 me-1"
                            data-toggle="modal"
                            data-target="#cameraModal"
                            onClick={() => setCameraModal(true)}
                          >
                            <i className="fa fa-camera m-0" />{" "}
                          </Link>
                          {/* Modal */}
                          <Modal
                            show={cameraModal}
                            onHide={() => setCameraModal(false)}
                            className="modal fade"
                            id="cameraModal"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Upload images</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-dismiss="modal"
                                  onClick={() => setCameraModal(false)}
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="input-group mb-3">
                                  <span className="input-group-text">
                                    Upload
                                  </span>
                                  <div className="form-file">
                                    <input
                                      type="file"
                                      className="form-file-input form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal>
                          <Link
                            to="/app-profile"
                            className="btn btn-primary ms-1"
                            data-toggle="modal"
                            data-target="#postModal"
                            onClick={() => setPostModal(true)}
                          >
                            Post
                          </Link>
                          {/* Modal */}
                          <Modal
                            show={postModal}
                            onHide={() => setPostModal(false)}
                            className="modal fade"
                            id="postModal"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Post</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-dismiss="modal"
                                  onClick={() => setPostModal(false)}
                                ></button>
                              </div>
                              <div className="modal-body">
                                <textarea
                                  name="textarea"
                                  id="textarea"
                                  cols={30}
                                  rows={5}
                                  className="form-control mb-2 bg-transparent"
                                  placeholder="Please type what you want...."
                                  defaultValue={""}
                                />
                                <Link
                                  className="btn btn-primary btn-rounded mt-1"
                                  to="/app-profile"
                                >
                                  Post
                                </Link>
                              </div>
                            </div>
                          </Modal>
                        </div>

                        <div className="profile-uoloaded-post border-bottom-1 pb-5">
                          <img
                            src={profile08}
                            alt=""
                            className="img-fluid w-100 rounded"
                          />
                          <Link className="post-title" to="/app-profile">
                            <h3 className="text-black">
                              Use these things to improve residents stays
                            </h3>
                          </Link>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam et pharetra orci. Donec cursus nisl
                            sem, ac maximus libero ultrices in. Aenean sed risus
                            et quam condimentum rutrum. Sed quis faucibus
                            lectus, non placerat erat. Fusce quis neque et orci
                            venenatis tempus eu nec nulla. Nulla eleifend
                            sodales justo, eu aliquam mi vulputate eget. Vivamus
                            dictum condimentum metus.
                          </p>
                          <button className="btn btn-primary me-2">
                            <span className="me-2">
                              {" "}
                              <i className="fa fa-heart" />{" "}
                            </span>
                            Like
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={() => setReplayModal(true)}
                          >
                            <span className="me-2">
                              {" "}
                              <i className="fa fa-reply" />
                            </span>
                            Reply
                          </button>
                        </div>
                        <div className="profile-uoloaded-post border-bottom-1 pb-5">
                          <img
                            src={profile09}
                            alt=""
                            className="img-fluid w-100 rounded"
                          />
                          <Link className="post-title" to="/app-profile">
                            <h3 className="text-black">
                              Everyone we have a huge summer ahead
                            </h3>
                          </Link>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam et pharetra orci. Donec cursus nisl
                            sem, ac maximus libero ultrices in. Aenean sed risus
                            et quam condimentum rutrum. Sed quis faucibus
                            lectus, non placerat erat. Fusce quis neque et orci
                            venenatis tempus eu nec nulla. Nulla eleifend
                            sodales justo, eu aliquam mi vulputate eget. Vivamus
                            dictum condimentum metus.
                          </p>
                          <button className="btn btn-primary me-2">
                            <span className="me-2">
                              {" "}
                              <i className="fa fa-heart" />{" "}
                            </span>
                            Like
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={() => setReplayModal(true)}
                          >
                            <span className="me-2">
                              {" "}
                              <i className="fa fa-reply" />
                            </span>
                            Reply
                          </button>
                        </div>
                        <div className="profile-uoloaded-post pb-3">
                          <img
                            src={profile08}
                            alt=""
                            className="img-fluid  w-100 rounded"
                          />
                          <Link className="post-title" to="/app-profile">
                            <h3 className="text-black">
                              Attention everyone needs to put in a notice for
                              days off
                            </h3>
                          </Link>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam et pharetra orci. Donec cursus nisl
                            sem, ac maximus libero ultrices in. Aenean sed risus
                            et quam condimentum rutrum. Sed quis faucibus
                            lectus, non placerat erat. Fusce quis neque et orci
                            venenatis tempus eu nec nulla. Nulla eleifend
                            sodales justo, eu aliquam mi vulputate eget. Vivamus
                            dictum condimentum metus.
                          </p>
                          <button className="btn btn-primary me-2">
                            <span className="me-2">
                              <i className="fa fa-heart" />
                            </span>
                            Like
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={() => setReplayModal(true)}
                          >
                            <span className="me-2">
                              {" "}
                              <i className="fa fa-reply" />
                            </span>
                            Reply
                          </button>
                        </div>
                        {/* Modal */}
                        <Modal
                          show={replayModal}
                          onHide={() => setReplayModal(false)}
                          className="modal fade"
                          id="replyModal"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Post Reply</h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-dismiss="modal"
                                onClick={() => setReplayModal(false)}
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <textarea className="form-control" rows="4">
                                  Message
                                </textarea>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-danger light"
                                data-dismiss="modal"
                                onClick={() => setReplayModal(false)}
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Reply
                              </button>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                    <div
                      id="about-me"
                      className={`tab-pane fade ${
                        activeToggle === "aboutMe" ? "active show" : ""
                      }`}
                    >
                      <div className="profile-about-me">
                        <div className="pt-4 border-bottom-1 pb-3">
                          <h4 className="text-primary">About Me</h4>
                          <p className="mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam et pharetra orci. Donec cursus nisl
                            sem, ac maximus libero ultrices in. Aenean sed risus
                            et quam condimentum rutrum. Sed quis faucibus
                            lectus, non placerat erat. Fusce quis neque et orci
                            venenatis tempus eu nec nulla. Nulla eleifend
                            sodales justo, eu aliquam mi vulputate eget. Vivamus
                            dictum condimentum metus.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam et pharetra orci. Donec cursus nisl
                            sem, ac maximus libero ultrices in. Aenean sed risus
                            et quam condimentum rutrum. Sed quis faucibus
                            lectus, non placerat erat. Fusce quis neque et orci
                            venenatis tempus eu nec nulla. Nulla eleifend
                            sodales justo, eu aliquam mi vulputate eget. Vivamus
                            dictum condimentum metus.
                          </p>
                        </div>
                      </div>
                      <div className="profile-lang  mb-5">
                        <h4 className="text-primary mb-2">Languages</h4>
                        <Link
                          to="/app-profile"
                          className="text-muted pe-3 f-s-16"
                        >
                          <i className="flag-icon flag-icon-us" />
                          English
                        </Link>
                        <Link
                          to="/app-profile"
                          className="text-muted pe-3 f-s-16"
                        >
                          <i className="flag-icon flag-icon-fr" />
                          French
                        </Link>
                        <Link
                          to="/app-profile"
                          className="text-muted pe-3 f-s-16"
                        >
                          <i className="flag-icon flag-icon-bd" />
                          Spanish
                        </Link>
                      </div>
                      <div className="profile-personal-info">
                        <h4 className="text-primary mb-4">
                          Personal Information
                        </h4>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              {" "}
                              Name<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>John Doe</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Email<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>example@example.com</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              {" "}
                              Availability<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>9am -5pm</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Age<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>27</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              {" "}
                              Location<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>Miami, FL</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="profile-settings"
                      className={`tab-pane fade ${
                        activeToggle === "setting" ? "active show" : ""
                      }`}
                    >
                      <div className="pt-3">
                        <div className="settings-form">
                          <h4 className="text-primary">Account Setting</h4>
                          <form onSubmit={(e) => e.preventDefault()}>
                            <div className="row">
                              <div className="form-group mb-3 col-md-6">
                                <label className="form-label">Email</label>
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group mb-3 col-md-6">
                                <label className="form-label">Password</label>
                                <input
                                  type="password"
                                  placeholder="Password"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <label className="form-label">Address</label>
                              <input
                                type="text"
                                placeholder="1234 Main St"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label className="form-label">Address 2</label>
                              <input
                                type="text"
                                placeholder="Apartment, studio, or floor"
                                className="form-control"
                              />
                            </div>
                            <div className="row">
                              <div className="form-group mb-3 col-md-6">
                                <label className="form-label">City</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group mb-3 col-md-4">
                                <label className="form-label">State</label>
                                <select
                                  className="form-control"
                                  id="inputState"
                                  defaultValue="option-1"
                                >
                                  <option value="option-1">Choose...</option>
                                  <option value="option-2">Option 1</option>
                                  <option value="option-3">Option 2</option>
                                  <option value="option-4">Option 3</option>
                                </select>
                              </div>
                              <div className="form-group mb-3 col-md-2">
                                <label className="form-label">Zip</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="gridCheck"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gridCheck"
                                >
                                  Check me out
                                </label>
                              </div>
                            </div>
                            <button className="btn btn-primary" type="submit">
                              Sign in
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AppProfile;
