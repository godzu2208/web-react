import React from "react";

class Face extends React.Component {
    render() {
        return (
            <>
                <div className="face">
                    <h2>Hoi Dan IT</h2>
                    {/* <a href="https://www.youtube.com/watch?v=ONnlXF4mpIg&list=PLncHg6Kn2JT4C0enPGQPK7ZIlEoZ1ZvRy">HoiDanIT</a> */}
                    <iframe
                        width={"920px"} height={"500px"}
                        src="https://www.youtube.com/embed/watch?v=ONnlXF4mpIg&list=PLncHg6Kn2JT4C0enPGQPK7ZIlEoZ1ZvRy"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="ReactJS Basic">

                    </iframe>

                </div>
            </>
        )
    }
}
export default Face;