import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';


const Directory = ({ sections }) => (
    <div className="container mt-3 pd-3">
        <div className="row">
            {
            sections.map( ({ id, ...otherSectionProps }) => 
                (   
                <div key={id} className="col-md-4">
                    <MenuItem  {...otherSectionProps} />
                </div>
                
                ))
            }
        </div> 
    </div> 
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);