import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderComments({comments}) {
        if (comments != null) {
            const commentsDisplay = comments.map( (comment) => {
                return (
                    <div key={comment.id}> {/* className="col-12 col-md-5 m-1 DE XREIAZETAI */}
                        <ul className = "list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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

    const DishDetail = (props) => { 
        if (props.selectedDish != null)
            return (
                <div className="container">

                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.selectedDish.name}</h3>
                            <hr />
                        </div>                
                    </div>

                    <div className="row">
                        <div  className="col-12 col-md-5 m-1"> {/* details of the dish in a Card */}
                            <Card>
                                <CardImg top src={props.selectedDish.image} alt={props.selectedDish.name} />
                                <CardBody>
                                    <CardTitle>{props.selectedDish.name}</CardTitle>
                                    <CardText>{props.selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1"> {/*list of comments*/}
                            <h4>Comments</h4>
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>

                </div>
            );
        else
        return(
            <div></div>
        );
    }



export default DishDetail;