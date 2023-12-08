import React from "react";

const NavBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h4>Recipe Box</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <button
                className="btn btn-outline-success navbar-btn"
                type="submit"
                onClick={handleSubmit}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Recipe
              </button>

              {/* Modal */}

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Recipe
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <label>Recipe Name: </label>
                        <input
                          className="mx-2"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <div className="my-2">
                        <label>Ingredients: </label>
                        <input
                          className="mx-2"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>

                      <div className="my-2">
                        <label>Instructions: </label>
                        <input
                          className="mx-2"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>

                      <div className="my-2">
                        <label>
                          Image URL:(<small>Optional</small>){" "}
                        </label>
                        <input
                          className="mx-2"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
