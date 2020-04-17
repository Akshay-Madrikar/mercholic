const INTIAL_STATE = {
    sections:[
        {
          title: 'Rapper',
          imageUrl: 'https://i.ibb.co/0CcTYFY/Rapper.jpg',
          id: 1,
          linkUrl: 'explore/rapper'
        },
        {
          title: 'Youtuber',
          imageUrl: 'https://i.ibb.co/qWWq3K1/Youtube.png',
          id: 2,
          linkUrl: 'explore/youtuber'
        },
        {
          title: 'Blogger',
          imageUrl: 'https://i.ibb.co/0jHGHrF/Blogger.jpg',
          id: 3,
          linkUrl: 'explore/blogger'
        },
        {
          title: 'Creator',
          imageUrl: 'https://i.ibb.co/Xxp8K0f/Content-Creator.png',
          size: 'large',
          id: 4,
          linkUrl: 'explore/content-creator'
        },
        {
          title: 'Influencer',
          imageUrl: 'https://i.ibb.co/nM41wxf/Influencer.png',
          size: 'large',
          id: 5,
          linkUrl: 'explore/influencer'
        },
        {
          title: 'Pop Artist',
          imageUrl: 'https://i.ibb.co/2MTzqh7/Pop-Artist.jpg',
          size: 'large',
          id: 6,
          linkUrl: 'explore/pop-artist'
        }
    
    ]
};

const directoryReducer = (state = INTIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
