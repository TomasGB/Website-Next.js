function Photo() {
    return (
        <div>
            <img src="./foto.jpg" alt="photo" className="pic" />
            <style jsx>
                {`
                    .pic {
                        display: flex;
                        margin: auto;
                        width: 225px;
                        height: 225px;
                        border-radius: 50%;
                        margin-top: 5%;
                        box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.8),
                            0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    }
                `}
            </style>
        </div>
    );
}

export default Photo;
