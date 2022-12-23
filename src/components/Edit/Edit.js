const Edit = () => {
    return (
        <section id="edit-page" className="edit">
        <form id="edit-form" method="POST" onSubmit="">
            <fieldset>
                <legend>Edit my Pet</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    {/* <span className="input" style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                        <input type="text" name="name" id="name" defaultValue={pet.name} onChange={nameChangeHandler} />
                    </span>
                    <Alert variant="danger" show={errors.name}>{errors.name}</Alert> */}
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description" id="description" defaultValue={'pet.description'} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" defaultValue={'pet.imageUrl'} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="type">Type</label>
                    <span className="input">
                        {/* <select id="type" name="type" value={pet.type} onChange={(e) => setPet(s => ({...s, type: e.target.value}))}>
                            {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                        </select> */}
                    </span>
                </p>
                <input className="button submit" type="submit" value="Save" />
            </fieldset>
        </form>
    </section>
);
};

export default Edit;
