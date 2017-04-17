import React from 'react'

const ProductScreenshots = ({currentImage, images, onThumbClick}) => (
    <section className="productScreenshotSection padTop-32">
        <div className="mainImage">
            <img src={currentImage}/>
        </div>
        <div className="imageGutter">
            <ul>
                {images.map(image => (
                    <li>
                        <img onClick={onThumbClick} name="duh" src={image}/>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);


const BASE_IMAGE_DIR = 'images/';
class ScreenShotSelector extends React.Component {
    state = {
        images: [
            'docker-thumb-1.png',
            'docker-thumb-2.png',
            'docker-thumb-3.png'
        ],

        currentImage: 'docker-thumb.png'

    };

    thumbClicked = (thumb) => {
        const thumbSrc = thumb.target.src;
        const loadableThumb = thumbSrc.slice(thumbSrc.lastIndexOf(BASE_IMAGE_DIR) + BASE_IMAGE_DIR.length);
        const currentIndex = this.state.images.findIndex(imageSource => imageSource === loadableThumb);

        this.setState({
            images: [
                ...this.state.images.slice(0, currentIndex),
                this.state.currentImage,
                ...this.state.images.slice(currentIndex+1)
            ],
            currentImage: loadableThumb
        })

    };

    render() {
        return <ProductScreenshots currentImage={BASE_IMAGE_DIR + this.state.currentImage}
                    images={this.state.images.map(image => BASE_IMAGE_DIR + image)}
                    onThumbClick={this.thumbClicked}/>
    }
}


export {ScreenShotSelector}