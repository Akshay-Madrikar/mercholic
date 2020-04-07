import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {

    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'Rappers',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'Youtubers',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'Bloggers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Content-creators',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Influencers',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        };
    }

    render() {
            return (
                <div className="container mt-3 pd-3">
                    {
                    this.state.sections.map( ({ title, id, imageUrl}) => 
                        (   <div className="row">
                                <div className="col-md-4">
                                    <MenuItem key={id} title={title} imageUrl={imageUrl}/> 
                                </div> 
                            </div>
                        ), 1)
                    }
                </div>       
            )
        }
};

export default Directory;