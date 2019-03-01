import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';

class NewsletterGrid extends Component {
    render() {
        return (
            <div className='newsletter-grid'>
                {/* add button */}
                <NewsletterBox date={new Date()}/>
                {/* add archive */}
                {/* add content */}
            </div>
        )
    }
}

export default NewsletterGrid;