import React, { Fragment } from "react";

import { useParams } from "react-router-dom";

const Result = () => {
  const { score } = useParams();
  console.log(score);

  return (
    <Fragment>
      <div id="myModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Subscribe our Newsletter</h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>
                Subscribe to our mailing list to get the latest updates straight
                in your inbox.
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Result;
