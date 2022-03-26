import React from "react";
import "./Modal.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { HiOutlineShare } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
       <div className="modal fade modal-coach-detail" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
       <div className="modal-dialog">
         <div className="modal-content">
           <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="icon-line-circle-cross"></i></button>
           <div className="modal-body">
             <div className="row no-gutters">
               <div className="col-md-6">
                 <div className="single-coach-image">
                   <img src="images/single-coach-image.png" className="img-responsive"/>
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="single-coach-detail">
                   <div className="user-account-wrap">
                     <img src="images/user.jpg" className="user-image"/>
                     <div className="user-name-stars">
                       <div className="user-name">Rendy Tomaluweng</div>
                       <div className="user-star-rating">
                         <span className="rating-item"><i className="icon-star3"></i></span>
                         <span className="rating-item"><i className="icon-star3"></i></span>
                         <span className="rating-item"><i className="icon-star3"></i></span>
                         <span className="rating-item"><i className="icon-star3"></i></span>
                         <span className="rating-item empty"><i className="icon-star3"></i></span>
                       </div>
                     </div>
                   </div>
                   <h3 className="coach-title">Lorem ipsum dolor sit amet</h3>
                   <div className="coach-description">
                     <p>consectetur adipiscing elit maecenas varius tortor nibh sit amet tempor nibh finibus et. Aenean eu enim justo vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt.</p>
                   </div>
                   <div className="coach-actions">
                     <a href="#" className="button">Beli Kelas</a>
                     <a href="#" className="share-btn"><i className="icon-line-share"></i></a>
                   </div>
                   <div className="coach-comments">
                     <div className="comment-item">
                       <img src="images/user.jpg" className="user-image"/>
                       <div className="comment-details">
                         <div className="main-comment">
                           <p>Johnes Oscar Lorem ipsum dolor sit amet ipsum consectetur adip</p>
                         </div>
                         <a href="#" className="view-reply">View Reply (2)</a>
                       </div>
                       <div className="comment-time">5 hari yang lalu</div>
                     </div>
                     <div className="comment-item">
                       <img src="images/user.jpg" className="user-image"/>
                       <div className="comment-details">
                         <div className="main-comment">
                           <p>Johnes Oscar Lorem ipsum dolor sit amet ipsum consectetur adip</p>
                         </div>
                         <a href="#" className="view-reply">View Reply (2)</a>
                       </div>
                       <div className="comment-time">5 hari yang lalu</div>
                     </div>
                     <div className="comment-item">
                       <img src="images/user.jpg" className="user-image"/>
                       <div className="comment-details">
                         <div className="main-comment">
                           <p>Johnes Oscar Lorem ipsum dolor sit amet ipsum consectetur adip</p>
                         </div>
                         <a href="#" className="view-reply">View Reply (2)</a>
                       </div>
                       <div className="comment-time">5 hari yang lalu</div>
                     </div>
                   </div>
                   <div className="comment-message-form">
                     <form className="form-inline">
                       <input type="text" className="form-control" placeholder="Ada Pertanyaan?" name=""/>
                       <button type="submit" className="button button-secondary">Kirim</button>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   
       ) : null}
    </>
  );
};