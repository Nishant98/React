import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

// checks that the values is >0
const required = (val) => val && val.length;
// checks whether the length of value is less than the specified len
const maxLength = (len) => (val) => !(val) || (val.length <= len);
// checks whether the length of value is greater than the specified len
const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component{

        constructor(props){
            super(props);
            
            this.state = {
                isModalOpen: false
            };

            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

        handleSubmit(values){
            this.toggleModal();
            // console.log("Current State is "+JSON.stringify(values));
            //alert("Current State is "+JSON.stringify(values));
            console.log(values);
            console.log(this.props.dishId);
            console.log(values.rating);
            console.log(values.author);
            console.log(values.comment);
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
            // this.props.addComment("2","4","Nishant","Test Comment");
            // console.log(values);
         }

        render(){
            return(
                <div>
                    <Button type="submit" color="light" onClick={this.toggleModal}><i className="fa fa-pencil fa-lg"></i> Submit Comment</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader  toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Col md={{size: 12}}>
                                        <Control.select model=".rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="author" md={12}>Your Name</Label>
                                    <Col md={12}>
                                        <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}} />
                                        <Errors className="text-danger" model=".author" show="touched" messages={{required: 'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less'}}/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" md={12}>Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size:12}}>
                                        <Button type="submit" color="primary">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm> 
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
    }

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

    function RenderComments({comments, addComment, dishId}){
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
                    <CommentForm dishId={dishId} addComment={addComment}/>
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
                    <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
                </div>
            </div>
        );
    }


export default DishDetail;