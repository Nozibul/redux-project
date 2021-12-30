import React from 'react';
import "./MovieCard.scss"
// import { Card, Col, Row } from 'react-bootstrap';

const MovieCard = (props) => {
    const {data} = props;
    return (
    // //    <div  className='card-item'>
    //     <Row xs={1} md={2} className="g-4">
    //         {Array.from({ length: 1 }).map((_, idx) => (
    //             <Col className='col-lg-4'>
    //             <Card >
    //                <div className='card-top'>
    //                   <Card.Img variant="top" src={data.Poster} alt={data.Title}/>
    //                </div>
    //                 <Card.Body className='card-bottom'>
    //                 <div className='card-info'>
    //                   <h4>{data.Title}</h4>
    //                 <p>{data.Year}</p>
    //                   </div>
                      
    //                 </Card.Body>
    //             </Card>
    //             </Col>
    //         ))}
    //    </Row>
    // //  </div> 
        <div className='card-item'>
            <div className='card-inner'>
                 <div className='card-top'>
                     <img src={data.Poster} alt={data.Title } />
                 </div>
                 <div className='card-bottom'>
                     <div className='card-info'>
                         <h4>{data.Title}</h4>
                         <p>{data.Year}</p>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default  MovieCard;