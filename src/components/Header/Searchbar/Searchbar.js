import React from 'react';

const Searchbar = () => {
    return ( 
        <div className="row">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Szulaj" />
                <button className="btn btn-primary">Szukaj</button>
            </div>
        </div>
    )
}

export default Searchbar;