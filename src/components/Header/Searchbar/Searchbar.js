import React, { useState } from 'react';

const Searchbar = () => {
    const [term, setTerm] = useState('');
    const search = () => {
        console.log('szukaj', term)
    }
    const updateTerm = (e) => {
        setTerm(e.target.value);
        console.log(e.target.value)
    }
    return (
        <div className="row">
            <div className="input-group">
                <input
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Szulaj" />
                <button
                    onClick={search}
                    className="btn btn-primary">
                    Szukaj
                </button>
            </div>
        </div>
    )
}

export default Searchbar;