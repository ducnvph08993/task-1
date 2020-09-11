import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CourseJS = props => {
    const courseName = props.match.params.coursename;
    const [courses, setCourses] = useState([]);
    const [vid, setVid] = useState("");
    const [title, setTit] = useState("");
    const [counter, setCounter] = useState("");
    let playlistId = "";
    if (courseName === "reactjs") {
        playlistId = "PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF"
    }
    else {
        playlistId = "PLB97yPrFwo5gh4WP-VtwsVJbebyHbxNk6"
    }
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&maxResults=10&playlistId=${playlistId}&key=AIzaSyCg67FTfV0XNZImDZRJEPgJdm3OcePFcYM`)
            .then(res => res.json())
            .then(data => {
                const result = data.items.map((item) => {
                    return { title: item.snippet.title, vid: item.contentDetails.videoId }
                })
                setCourses(result);
                setVid(result[0].vid);
                setTit(result[0].title);
            })
    }, [playlistId])

    const renderBVideo = () => {
        return (
            <div>
                <div className="embed-responsive embed-responsive-16by9 ">
                    <iframe title="video" className="embed-responsive-item" src={"https://www.youtube.com/embed/" + vid + "?rel=0"} width={800} height={400} allowFullScreen></iframe>
                </div>
                <h4 className="text-justify pb-5">{title}</h4>
            </div>
        )
    }
    const renderSVideo = () => {
        return (
            <div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="video" className="embed-responsive-item" src={"https://www.youtube.com/embed/" + vid + "?rel=0"} width={400} height={200} ></iframe>
                </div>
                <h6 className="text-justify">{title}</h6>
            </div>
        )
    }
    return (
        <div>
            <div className="container">
                <h1>{courseName}</h1>
                {renderBVideo()}
                <div className="row">
                    <div className="col-6">
                        {renderSVideo()}
                    </div>
                    <div className="col-6">
                        {renderSVideo()}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        {renderSVideo()}
                    </div>
                    <div className="col-6">
                        {renderSVideo()}
                    </div>
                </div>
                <ul className="list-group w-75 m-auto">
                    {courses.map((item, index) => (
                        <Link key={item.vid} className={counter === index ? "list-group-item active" : "list-group-item"} to="#" onClick={() => {
                            setVid(item.vid)
                            setTit(item.title)
                            setCounter(index)
                        }}>{item.title}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

CourseJS.propTypes = {

}

export default CourseJS
