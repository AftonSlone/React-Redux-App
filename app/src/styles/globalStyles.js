import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
  
  body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #5f65e9;
  color: white;
}
.cardList {
  text-align: center;
  img {
    width: 10%;
    margin: 5px;
  }
    img:hover {
      outline: solid 5px #e383b9;
    }
}

.card-modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30%;
  }
}

.modal-close {
  position: absolute;
  left: 33%;
  top: 5%;
  background: #e383b9;
}


`;

export default GlobalStyle;
