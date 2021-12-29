import styled from 'styled-components';

const subServicesScreenStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.subServices{
    padding-bottom: 2.5rem;
    font-family: 'Roboto', sans-serif;
    .headerStage{
        width: 100%;
        margin-bottom:3%;
        .content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            margin-top: 1%;
            .left{
                font-size: 1.3rem;
                color: #1c1c1c;
                font-weight: bold;
                margin-left: 2%;
            }
            .right{
                display: flex;
                color: #4b4b4b;
                margin-right: 2%;
                .firstLink{
                    a{
                        color: #4b4b4b;
                        text-decoration: none;
                    }
                    a:hover{
                        text-decoration: underline;
                    }
                }
                .secondLink{
                    text-decoration: underline;
                }
            }
        }
    }
    .contentStage{
        display:flex;
        .left{
            flex:30%;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            flex-direction:column;
            a{
                width:85%;
                text-decoration:none;
                .contentCard{
                    width:90%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border: 0.2px solid #d1ccc0;
                    height:10vh;
                    margin-bottom:3%;
                    .svg{
                        flex:30%;
                        font-size:2rem;
                        color:#4b4b4b;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .text{
                        flex:70%;
                        font-size:1.2rem;
                        color:#4b4b4b;
                        display:flex;
                        justify-content:flex-start;
                        align-items:flex-start;
                    }
                }
            }
            .contentCard:hover{
                background-color:#3d3d3d;
                .svg{
                    color:white;
                }
                .text{
                    color:#ff3838;
                }
            }
        }
        .right{
            flex:70%;
            .mainHeader{
                font-size:2.4rem;
                font-weight:bold;
                margin-top:-2%;
                margin-bottom:2%;
            }
            .text{
                font-size:1.2rem;
                margin-bottom:2%;
                color:#4b4b4b;
            }
            .imageStage{
                display:flex;
                justify-content:flex-start;
                align-items:flex-start;
                margin-right:2%;
                img{
                    width:100%;
                    height:75vh;
                    object-fit:cover;
                }
            }
            .subHeader{
                font-size:1.7rem;
                font-weight:bold;
                margin-bottom:2%;
                margin-top:2%;
            }
            .subServicesCarousel{
                margin-right:2%;
                .carousel{
                    width:100%;
                    height:70vh;
                    img{
                        width:100%;
                    }
                }
                .leftarrow{
                    position: absolute;
                    z-index: 2;
                    top: 45%;
                    width: 30;
                    height: 30;
                    cursor: pointer;
                    left: 15px;
                    border: none;
                    background: #1c1c1c;
                    font-size: 2rem;
                    color: white;
                }
                .leftarrow:hover{
                    opacity: 0.8;
                }
                .rightarrow{
                    position: absolute;
                    z-index: 2;
                    top: 45%;
                    width: 30;
                    height: 30;
                    cursor: pointer;
                    right: 15px;
                    border: none;
                    background: #1c1c1c;
                    font-size: 2rem;
                    color: white;
                }
                .rightarrow:hover{
                    opacity: 0.8;
                }
            }
            .processStage{
                display:flex;
                justify-content:center;
                align-items:center;
                flex-wrap:wrap;
                margin-right:4%;
                .processCard{
                    width:45%;
                    margin:1%;
                    display:flex;
                    align-items:center;
                    .left{
                        flex:30%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        .circle{
                            width:60px;
                            height:60px;
                            background:#ff3838;
                            clip-path: circle(50% at 50% 50%);
                            position:relative;
                        }
                        .svg{
                            color:white;
                            position:absolute;
                            font-size:1.5rem;
                        }
                    }
                    .right{
                        flex:70%;
                        display:flex;
                        justify-content:flex-start;
                        align-items:flex-start;
                        flex-direction:column;
                        .header{
                            font-size:1.1rem;
                            color:#1c1c1c;
                        }
                        .text{
                            font-size:0.7rem;
                            color:#4b4b4b;
                        }
                    }
                }
            }
            .accordionStage{
                display:flex;
                justify-content:center;
                align-items:center;
                margin-right:3%;
                font-family: 'Roboto', sans-serif;
                .accordion-wrapper .accordion-item h3.accordion-title {
                    font-size: 1.75rem;
                    margin: 0;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button {
                    position: relative;
                    display: flex;
                    align-items: center;
                    background: #1c1c1c;
                    border-radius: 1rem;
                    border: none;
                    font-size: 1.2rem;
                    width: 100%;
                    text-align: left;
                    color: white;
                    font-weight: bold;
                    margin-top: 0.5rem;
                    padding: 1rem;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button.active {
                    background-color: #ff3838;
                    color: white;
                    border: #ff3838 solid 1px;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button:hover {
                    background-color: #ff3838;
                    color: white;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button span.title-wrapper {
                    display: block;
                    position: relative;
                    width: 100%;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button span.icon-wrapper {
                    width: 10%;
                    display: flex;
                    justify-content: center;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button span.icon-wrapper span.minus {
                    width: 24px;
                    height: 24px;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button span.icon-wrapper span.plus {
                    width: 24px;
                    height: 24px;
                    transform: rotate(90deg);
                    transition-timing-function: ease-in;
                    transition: all 1s;
                }
                .accordion-wrapper .accordion-item .accordion-panel .panel-close { 
                    background: #e0e0e0;
                    box-sizing: border-box;
                    padding: 0.5rem 1rem 0 1rem;
                    opacity:0;
                    width:100%;
                    height:0;
                    overflow: hidden;
                    transition-timing-function: ease-out;
                    transition: all 1s;
                }
                .accordion-wrapper .accordion-item .accordion-panel .panel-open {
                    overflow: hidden;
                    background: #e0e0e0;
                    padding: 1rem;
                    margin-bottom: 1rem;
                    box-sizing: border-box;
                    border-radius: 1rem;
                    opacity:1;
                    width:100%;
                    height: auto;
                    transition-timing-function: ease-in;
                    transition: all 1s;
                }
                .accordion-wrapper .accordion-item .accordion-panel p {
                    margin: 0;
                }
                .accordion-wrapper{
                    margin-bottom: 10%;
                }
            }
        }
    }
}
@media screen and (min-width: 1024px){
    .subServices{
        .contentStage{
            .right{
                .subServicesCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 40%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 40%;
                        right: 15px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:768px){
    .subServices{
        .contentStage{
            flex-direction:column;
            .left{
                flex:100%;
                margin-bottom:5%;
                a{
                    .contentCard{
                        width:100%;
                    }
                }
            }
            .right{
                .subServicesCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 45%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 45%;
                        right: 15px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:600px){
    .subServices{
        .contentStage{
            flex-direction:column;
            .left{
                flex:100%;
                margin-bottom:5%;
                a{
                    .contentCard{
                        width:100%;
                    }
                }
            }
            .right{
                .subServicesCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 45%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 45%;
                        right: 15px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:414px){
    .subServices{
        .headerStage{
            width: 100%;
            margin-bottom:3%;
            .content{
                justify-content: center;
                align-items: center;
                flex-wrap:wrap;
                .left{
                    margin-left: 0%;
                }
                .right{
                    font-size:0.8rem;
                }
            }
        }
        .contentStage{
            flex-direction:column;
            .left{
                flex:100%;
                margin-bottom:5%;
                a{
                    .contentCard{
                        width:100%;
                    }
                }
            }
            .right{
                .mainHeader{
                    font-size:1.6rem;
                }
                .subHeader{
                    font-size:1.4rem;
                }
                .text{
                    font-size:0.9rem;
                }
                .subServicesCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 45%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 45%;
                        right: 15px;
                    }
                }
                .processStage{
                    .processCard{
                        width:90%;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:375px){
    .subServices{
        .headerStage{
            width: 100%;
            margin-bottom:3%;
            .content{
                justify-content: center;
                align-items: center;
                flex-wrap:wrap;
                .left{
                    margin-left: 0%;
                }
            }
        }
        .contentStage{
            flex-direction:column;
            .left{
                flex:100%;
                margin-bottom:5%;
                a{
                    .contentCard{
                        width:100%;
                    }
                }
            }
            .right{
                .subServicesCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 45%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 45%;
                        right: 15px;
                    }
                }
                .processStage{
                    .processCard{
                        width:90%;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:320px){
    .subServices{
        .headerStage{
            width: 100%;
            margin-bottom:3%;
            .content{
                justify-content: center;
                align-items: center;
                flex-wrap:wrap;
                .left{
                    margin-left: 0%;
                }
            }
        }
        .contentStage{
            flex-direction:column;
            .left{
                flex:100%;
                margin-bottom:5%;
                a{
                    .contentCard{
                        width:100%;
                    }
                }
            }
            .right{
                .subServicesCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 45%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 45%;
                        right: 15px;
                    }
                }
                .processStage{
                    .processCard{
                        width:90%;
                    }
                }
            }
        }
    }
}
`;

export default subServicesScreenStyled;