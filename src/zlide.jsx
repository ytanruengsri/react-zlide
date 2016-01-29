import React, {Component, PropTypes} from 'react';

export default class Zlide extends Component {
    handleClick(index) {
        this.props.onClick(index);
    }

    render() {
        const {
            visibleSlides,
            currentSlide,
            centerMode,
            className
        } = this.props;

        const offset = centerMode ? Math.floor(visibleSlides / 2) : 0;

        const style = {
            transform: `translate3d(calc((100% / ${visibleSlides}) * -1 * ${currentSlide - offset}), 0, 0)`,
            position: 'relative',
            display: 'flex'
        };

        const slideStyle = {
            flex: `0 0 calc(100% / ${visibleSlides})`,
            display: 'block'
        };

        const slides = this.props.children.map((slide, index) => {
            let slideClass = 'zlide_slide';

            slideClass += index === currentSlide ? ' zlide_slide-current' : '';

            return(
                <li className={slideClass}
                    key={'zlide-slide-' + index}
                    onClick={() => this.handleClick(index)}
                    style={slideStyle}>
                    {slide}
                </li>
            );
        });

        return (
            <ul className={className}
                style={style}>
                {slides}
            </ul>
        );
    }
}

Zlide.propTypes = {
    visibleSlides: PropTypes.number,
    currentSlide: PropTypes.number,
    centerMode: PropTypes.bool,
    className: PropTypes.string
};

Zlide.defaultProps = {
    visibleSlides: 3,
    currentSlide: 0,
    centerMode: true,
    className: 'zlide'
};
