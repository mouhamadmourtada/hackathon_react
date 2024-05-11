
function Image({ width, height, rounded, src, className = {} }) {
    return (
        <div className={`avatar ${className}`}>
            <div className={`w-${width}  h-${height}  ${rounded ? 'rounded-xl' : ''}`}>
                <img src={src} alt="image" />
            </div>
        </div>
    );
}


export default Image;
