import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "./IdCard.scss";
import { useNavigate } from "react-router-dom";

export default function IdCard({ content, id }) {
  const navigate = useNavigate();
  const navigateToCharacter = () => {
    navigate("/character-page", { state: { characterId: id } });
  };

  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="lg"
      >
        <div
          id={id}
          className="col s12 m6 l4 xl3"
          onClick={navigateToCharacter}
        >
          <div class="card hoverable">
          {(() => {
            if (content.status === "Dead") {
              return (
                <div
                  className={'infoStatus position-absolute badge bg-danger'}
                >
                  {content.status}
                </div>
              );
            } else if (content.status === "Alive") {
              return (
                <div
                  className={'infoStatus position-absolute badge bg-success'}
                >
                  {content.status}
                </div>
              );
            } else {
              return (
                <div
                  className={'infoStatus position-absolute badge bg-secondary'}
                >
                  {content.status}
                </div>
              );
            }
          })()}
            <div class="card-image">
              
              <Image src={content.image} className="idImage" />
            </div>
            <div class="card-content s12 m6 l3 xl3">
              <span class="card-title">{content.name}</span>
              <p>Last Location</p>
              <p>{content.location.name}</p>
            </div>
          </div>

        </div>

      </ThemeProvider>
    </>
  );
}
