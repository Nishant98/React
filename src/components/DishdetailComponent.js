import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

    function RenderDish({dish}){
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

    function RenderComments({comments}){
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

    const DishDetail = (props) =>{

        const dish = props.dish;
        if (dish == null) {
            return (<div></div>)
        }
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }


export default DishDetail;