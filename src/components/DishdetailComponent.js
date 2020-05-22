import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component{

    constructor(props){
        
        super(props);

        this.state = {
        };
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
            <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish!=null){
            const comments = dish.comments;
            if(comments!=null){
                console.log(comments);
                const comment = comments.map((singleComment) => {
                    return(
                        <div key={singleComment.id}>
                            <ul className="list-unstyled">
                                <li>{singleComment.comment}</li>
                                <li>-- {singleComment.author},&nbsp;
                                        {new Intl.DateTimeFormat('us', {
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric'
                                        }).format(new Date(singleComment.date))}
                                </li>
                            </ul>
                        </div>
                    );
                });
                return(
                    <div>
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
        else{
            return(
                <div></div>
            ); 
        }
    }

    render(){

        const dish = this.props.selectedDish;
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;