import { createGlobalStyle } from "styled-components";

export const FollowStyle = createGlobalStyle`
    .follow-backdrop {
        position: absolute;
        top: 0; 
        bottom: 0; 
        left: 0; 
        right: 0;
        background: rgba(0,0,0,0.8);
        height: 980px;
    }

    .follow-container {
        position: absolute;
        padding: 10px 45px; 
        min-height: 80vh;
        min-width: 55vh;
        left: 30vw; 
        right: 30vw; 
        margin-left: auto; 
        margin-right: auto; 
        background: #f5f5f5;
        border-radius: 5px;

        .heading {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 5px;
            border-bottom: 2px solid #ccc;
            
            & > * {
                margin: 0 2px;
            }

            span {
                background-color: #ccc;
                padding: 2px 10px;
                border-radius: 50%;
            }

            .cancel-btn {
                color: #000;
                position: absolute;
                z-index: 99999;
                right: 0;
                margin: 10px 15px;
                cursor: pointer;
                transition: .4s ease-in-out;
    
                svg {
                    background-color: #181818;
                    color: #fff;
                    border-radius: 50%;
                    padding: 5px;
                }
    
                &:hover {
                    transform: scale(1.1)
                }
            }
        }

        .users {
            margin-top: 10px;

            .user {
                margin-bottom: 5px;
                display: flex;
                text-decoration: none;
                color: #000;
                transition: all 0.2s ease-in-out;

                &:hover {
                    opacity: 0.75;
                }

                .username {
                    margin-top: 7px;
                }
            }
        }
    }

    .user_img {
        width: 40px;
        margin-right: 10px;
        
        img {
            width: 100%;
            border-radius: 50%;
        }
    }
`;
