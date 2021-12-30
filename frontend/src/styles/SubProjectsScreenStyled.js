import styled from "styled-components";

const subProjectsScreenStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.subProjects{
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
    .descriptionSplitStage{
        display:flex;
        margin-left:3%;
        margin-right:3%;
        .left{
            flex:70%;
            display:flex;
            flex-direction:column;
            margin-right:3%;
            .content{
                display:flex;
                justify-content:flex-start;
                align-items:flex-start;
                flex-direction:column;
                .header{
                    font-size:1.2rem;
                    font-weight:bold;
                    color:#1c1c1c;
                }
                .line{
                    width:5%;
                    border-bottom: 3px solid #ff3838;
                    margin-top:1%;
                    margin-bottom:1%;
                }
                .text{
                    font-size:0.8rem;
                    color:#4b4b4b;
                    margin-bottom:1%;
                    text-align:justify;
                }
            }
        }
        .right{
            flex:30%;
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            align-items:flex-start;
            .header{
                font-size:1.2rem;
                font-weight:bold;
                color:#1c1c1c;
            }
            .line{
                width:15%;
                border-bottom: 3px solid #ff3838;
                margin-top:2%;
                margin-bottom:2%;
            }
            .content{
                display:flex;
                margin-bottom:1%;
                font-size:1rem;
                text-align:justify;
                .subHeader{
                    color:#1c1c1c;
                    font-style: italic;
                    font-weight:bold;
                }
                .subText{
                    color:#4b4b4b;
                    text-indent: 3px;
                }
            }
        }
    }
    .imageGalleryHeaderStage{
        display:flex;
        justify-content:flex-start;
        align-items:flex-start;
        flex-direction:column;
        margin-top:3%;
        margin-bottom:3%;
        margin-left:3%;
        .header{
            font-size:1.2rem;
            font-weight:bold;
            color:#1c1c1c;
        }
        .line{
            width:5%;
            border-bottom: 3px solid #ff3838;
            margin-top:1%;
        }
    }
    .imageGallery{
        margin-bottom:3%;
        margin-left:3%;
        margin-right:3%;
    }
}
@media screen and (max-width:768px){
    .subProjects{
        padding-bottom: 2.5rem;
        .descriptionSplitStage{
            flex-direction:column;
            .left{
                flex:100%;
            }
            .right{
                flex:100%;
                .header{
                    margin-top:2%;
                }
                .line{
                    margin-top:1%;
                }
            }
        }
    }
}
@media screen and (max-width:600px){
    .subProjects{
        padding-bottom: 2.5rem;
        .descriptionSplitStage{
            flex-direction:column;
            .left{
                .imageGalleryStage{

                }
            }
            .right{
                flex:100%;
                .header{
                    margin-top:2%;
                }
                .line{
                    margin-top:1%;
                }
            }
        }
}
@media screen and (max-width:414px){
    .subProjects{
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
        .descriptionSplitStage{
            .left{
                .imageGalleryStage{

                }
            }
        }
    }
}
`;

export default subProjectsScreenStyled;