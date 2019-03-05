import React, { Component } from 'react';
import Button from '../button';

class NewsletterLatest extends Component {
    
    handleEdit = () => {
        console.log('trying to handle edit');
    }
    
    render() {
        const { title, imageURL, body } = this.props;
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>{title}</h1>
                <img className='newsletter-latest__image' src={imageURL}/>
                <Button className='newsletter-latest__button' callback={() => this.handleEdit()} icon='fas fa-pencil-alt'/>
                <div className='newsletter-latest__body'>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;