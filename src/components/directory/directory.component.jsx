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
                  linkUrl: 'shop/rapper'
                },
                {
                  title: 'Youtubers',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/youtuber'
                },
                {
                  title: 'Bloggers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/blogger'
                },
                {
                  title: 'Content-creators',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/content-creator'
                },
                {
                  title: 'Influencers',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/influencer'
                },
                {
                  title: 'Pop Artists',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 6,
                  linkUrl: 'shop/pop-artist'
                }
              ]
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