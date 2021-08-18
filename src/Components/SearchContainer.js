import React from "react";
import axios from "axios";

import {
  ContainerDiv,
  StyledInput,
  StyledSongli,
  StyledSongDetailsDiv,
  StyledDetailsDiv,
  StyledUl,
  StyledLabel,
  StyledErrorLabel,
  StyledImage
} from "./SearchContainerCom";

export class SearchContainer extends React.Component {
  state = {
    data: [],
    error: false
  };

  loadData = (event) => {
    const term = event.target.value
      .replace(/[^a-zA-Z0-9.-_* ]+/g, "")
      .replace(" ", "+");

    return axios
      .get("https://itunes.apple.com/search", {
        params: {
          term: term,
          entity: "album",
          country: "au"
        }
      })
      .then((result) => {
        this.setState({
          data: result.data.results,
          error: false
        });
      })
      .catch((error) => {
        this.setState({
          error: true
        });
      });
  };

  handleAlbumClick = (url, album) => {
    if (url) window.open(url, album);
  };

  render() {
    const { data, error } = this.state;

    return (
      <ContainerDiv>
        <h1> Search iTunes </h1>
        <StyledInput onChange={this.loadData} />
        {error && (
          <StyledErrorLabel>
            Cannot Find Songs. Please Try Later
          </StyledErrorLabel>
        )}
        <StyledUl>
          {data.map((song, index) => (
            <StyledSongli
              key={index}
              tabIndex={"0"}
              onClick={() =>
                this.handleAlbumClick(
                  song.collectionViewUrl,
                  song.collectionName
                )
              }
            >
              <StyledImage src={song.artworkUrl100} alt={song.collectionName} />
              <StyledSongDetailsDiv>
                <StyledDetailsDiv>
                  <StyledLabel>Artist Name: </StyledLabel> {song.artistName}
                </StyledDetailsDiv>
                <StyledDetailsDiv>
                  <StyledLabel>Album Name: </StyledLabel>
                  {song.collectionName}
                </StyledDetailsDiv>
                <StyledDetailsDiv>
                  <StyledLabel>Release Date: </StyledLabel>
                  {new Date(song.releaseDate).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  })}
                </StyledDetailsDiv>
                <StyledDetailsDiv>
                  <StyledLabel>Genre: </StyledLabel>
                  {song.primaryGenreName}
                </StyledDetailsDiv>
              </StyledSongDetailsDiv>
            </StyledSongli>
          ))}
        </StyledUl>
      </ContainerDiv>
    );
  }
}
