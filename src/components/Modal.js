import React from "react";
import "./Modal.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { HiOutlineShare } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="background">
          <div className="modal-wrapper" showModal={showModal}>
            <img className="modal-img" src="/images/picture.png" alt="" />
            <div className="button-close">
              <button
                className="close-button-mobile"
                onClick={() => setShowModal((prev) => !prev)}
              >
                <RiCloseCircleLine size={28} />
              </button>
            </div>

            <div className="modal-text">
              <div className="profile">
                <div className="profile-pic">
                  <img src="/images/picture.png" alt="" />
                </div>
                <div className="profile-namestar">
                  <p className="profile-name">Rendy Tomaluweng</p>
                  <p>⭐️⭐️⭐️⭐️</p>
                </div>
              </div>
              <div className="detail-wrapper">
                <div className="detail">
                  <p className="detail-title">Lorem ipsum dolor sit amet </p>
                  <p className="detail-description">
                  consectetur adipiscing elit maecenas varius 
sit amet tempor nibh finibus et… 
                  </p>
                </div>
                <div className="detail-button">
                  <a href="#">
                    <FaRegComment size={30} color="black" />
                  </a>
                  <a href="#">
                    <HiOutlineShare size={30} color="black" />
                  </a>
                </div>
              </div>

              <div className="modal-button">
                <button className="button-buy">Beli Kelas</button>
              </div>
            </div>
            <div className="modal-content">
              <div className="profile">
                <div className="profile-pic">
                  <img src="/images/picture.png" alt="" />
                </div>
                <div className="profile-namestar">
                  <p className="profile-name">Rendy Tomaluweng</p>
                  <p>⭐️⭐️⭐️⭐️</p>
                </div>

                <button
                  className="close-button"
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  <RiCloseCircleLine size={28} />
                </button>
              </div>
              <div className="detail">
                <p className="detail-title">Lorem ipsum dolor sit amet </p>
                <p className="detail-description">
                  consectetur adipiscing elit maecenas varius tortor nibh sit
                  amet tempor nibh finibus et. Aenean eu enim justo vestibulum
                  aliquam hendrerit molestie. Mauris malesu ada nisi sit amet
                  augue accumsan tincidunt.{" "}
                </p>
              </div>
              <div className="modal-button">
                <button className="button-buy">Beli Kelas</button>
                <a className="button-share" href="/tes">
                  <HiOutlineShare size={24} color="black" />
                </a>
              </div>
              <div className="comment">
                <div className="comment-profile">
                  <img src="/images/profile-comment.png" alt="" />
                </div>
                <div className="comment-contents">
                  <p className="comment-name">
                    Johnes Oscar
                    <span>
                      orem ipsum dolor sit amet ipsum consectetur adip
                    </span>
                  </p>
                  <p className="reply">View Reply (2)</p>
                </div>

                <p className="comment-day">5 hari yangg lalu</p>
              </div>
              <div className="comment">
                <div className="comment-profile">
                  <img src="/images/profile-comment.png" alt="" />
                </div>
                <div className="comment-contents">
                  <p className="comment-name">
                    Siska
                    <span>
                      orem ipsum dolor sit amet ipsum consectetur adip
                    </span>
                  </p>
                  <p className="reply">View Reply (2)</p>
                </div>

                <p className="comment-day">Kemarin</p>
              </div>
              <div className="comment-section">
                <input
                  className="input-comment"
                  type="text"
                  placeholder="Ada Pertanyaan?"
                />
                <button className="button-kirim">Kirim</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
