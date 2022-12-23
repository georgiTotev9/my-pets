const Details = () => {
    return (
    <section id="details-page" className="details">
        <div className="pet-information">
            <h3>Name: </h3>
            <p className="type">Type: </p>
            <p className="img"><img src="" /></p>
            <div className="actions">

            {/* <Link className="button" to={`/edit/${pet._id}`}>Edit</Link> */}
            <a className="button" href="#" onClick="">Delete</a>

                <div className="likes">
                    <img className="hearts" src="/images/heart.png" />
                    <span id="total-likes">Likes: </span>
                </div>
            </div>
        </div>
        <div className="pet-description">
            <h3>Description:</h3>
            <p></p>
        </div>
    </section>
);
};

export default Details;
