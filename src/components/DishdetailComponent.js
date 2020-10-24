import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component { //will display the details of a selected dish
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderComments(comments) {
        if (comments != null) {
            const commentsDisplay = comments.map( (comment) => {
                return (
                    <div key={comment.id}> {/* className="col-12 col-md-5 m-1 DE XREIAZETAI */}
                        <ul class = "list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author} , {comment.date}</li>
                        </ul>
                    </div>
                );
            });

            return (
                <div className="container">
                    <div className="row">
                        {commentsDisplay} 
                    </div>
            </div>
            );
        }
        else
        return(
            <div></div>
        );
        
    }

    render() { 
        if (this.props.selectedDish != null)
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1"> {/* details of the dish in a Card */}
                        <Card>
                            <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1"> {/*list of comments*/}
                        <h4>Comments</h4>
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        else
        return(
            <div></div>
        );
    }
}


export default DishDetail;