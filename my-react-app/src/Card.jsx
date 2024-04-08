import profilePic from './assets/1983.jpg'

function Card () {
  return (
    <div className="card">
        <img className="card-image" src={profilePic} alt="Profile Picture"></img>
        <h2 className='card-title'>Mohamed</h2>
        <p className='card-text'>i am currently studying web developement</p>
    </div>
  )
}

export default Card