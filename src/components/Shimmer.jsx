const Shimmer = () => {
    return (
      <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="spinner-grow text-info" role="status">
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
      </>
    );
};
  
export default Shimmer;
  