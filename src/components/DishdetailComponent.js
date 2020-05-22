import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component{

    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else{
            return(
            <div></div>
            );
        }
    }

    renderComments(comments){
        if(comments!=null){
            const comment = comments.map((singleComment) => {
                return(
                    <div key={singleComment.id}>
                        <ul className="list-unstyled">
                            <li>
                                <p>{singleComment.comment}</p>
                                <p>-- {singleComment.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric'
                                }).format(new Date(Date.parse(singleComment.date)))}
                                </p>
                            </li>
                        </ul>
                    </div>
                );
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comment}
                </div>            
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){

        const dish = this.props.dish;
        if (dish == null) {
            return (<div></div>)
        }
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;