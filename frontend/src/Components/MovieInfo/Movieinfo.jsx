import React from 'react'
import './MovieInfo.css'
import movie1 from '../Assets/movie1.jpg'

function Movieinfo() {
  return (
    <div className='movieInfo'>
        <div className="mi-left">
            <h1>SYNOPSIS</h1>
            <hr />
            <div className="mi-left-container">
            <div className="mi-left-image">
                <img src={movie1} alt="" />
            </div>
            <div className="mi-left-plot">
                <p className="plot-title">The Plot</p>
                <p className="plot">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Nemo quod rerum est inventore labore! Beatae exercitationem harum corrupti aut, quod facere, 
                    ullam fugiat quis provident nisi animi. Consequuntur, fugiat beatae est ex aspernatur rem nihil libero eveniet
                    voluptatibus! Non facere maxime dicta, nisi ad nostrum perferendis quidem illo amet ipsam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Nemo quod rerum est inventore labore! Beatae exercitationem harum corrupti aut, quod facere, 
                    ullam fugiat quis provident nisi animi. Consequuntur, fugiat beatae est ex aspernatur rem nihil libero eveniet
                    voluptatibus! Non facere maxime dicta, nisi ad nostrum perferendis quidem illo amet ipsam.
                </p>
                <div className="plot-info">
                    <div className="plot-info-left">
                        <p>DIRECTOR</p>
                        <p>STARRING</p>
                        <p>RELEASED</p>
                        <p>RUNNING TIME</p>
                    </div>
                    <div className="plot-info-right">
                        <p>John Doe</p>
                        <p>James Hewitt, Jess Richards</p>
                        <p>15 Nov, 2017</p>
                        <p>90 mins</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
            
        <div className="mi-right">
            <h1>VIEWING TIMES</h1>
            <hr />
            <div className="viewingTimes">
                <table>
                    <tbody>
                    <tr>
                        <td>MONDAY</td>
                    </tr>
                    <tr>
                        <td>TUESDAY</td>
                    </tr>
                    <tr>
                        <td>WEDNESDAY</td>
                    </tr>
                    <tr>
                        <td>THURSDAY</td>
                    </tr>
                    <tr>
                        <td>FRIDAY</td>
                    </tr>
                    <tr>
                        <td>SATURDAY</td>
                    </tr>
                    <tr>
                        <td>SUNDAY</td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <tbody className='mi-time'>
                    <tr className='mon'>
                        <td>5:15pm</td>
                    </tr>
                    <tr className='tue'>
                        <td>5:15pm</td>
                        <td>5:15pm</td>
                    </tr>
                    <tr className='wed'>
                        <td>5:15pm</td>
                    </tr>
                    <tr className='thur'>
                        <td>5:15pm</td>
                    </tr>
                    <tr className='fri'>
                        <td>5:15pm</td>
                        <td>5:15pm</td>
                    </tr>
                    <tr className='sat'>
                        <td>5:15pm</td>
                    </tr>
                    <tr className='sun'>
                        <td>5:15pm</td>
                        <td>5:15pm</td>
                        <td>5:15pm</td>
                    </tr>
                    </tbody>
                </table>
                </div>

            </div>
            
        </div>

  )
}

export default Movieinfo