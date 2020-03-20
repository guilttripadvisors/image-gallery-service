/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class DisplayFocusedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicPhotoIndex: 0,
    };
  }

  componentDidMount() {
    const { photoIndex } = this.props;
    this.setState({
      dynamicPhotoIndex: photoIndex,
    });
  }

  render() {
    const { photos } = this.props;
    const { dynamicPhotoIndex } = this.state;
    const image = photos[0].photo[dynamicPhotoIndex];
    return (
      <div className="image_position_container">
        <div className="image_viewer_container">
          <img
            src={image.url}
            alt={image.caption}
            className="image_display"
          />
        </div>
        <div className="image_carousel">
          Carousel
        </div>
        <div className="image_gallery">
          Gallery
        </div>
        <div className="image_helpful">
          Helpful?
        </div>
        <div className="image_report">
          Report
        </div>

      </div>
    );
  }
}

export default DisplayFocusedImage;
