import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import SECTIONS from './directory.data';

class Directory extends React.Component {

    constructor(){
        super();

        this.state = {
            sections: SECTIONS
        };
    }

    render() {
            return (
                <div className="container mt-3 pd-3">
                    <div className="row">
                        {
                        this.state.sections.map( ({ id, ...otherSectionProps }) => 
                            (   
                              <div key={id} className="col-md-4">
                                <MenuItem  {...otherSectionProps} />
                              </div>
                              
                            ))
                        }
                       </div> 
                </div>       
            )
        }
};

export default Directory;