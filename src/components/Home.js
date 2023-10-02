import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='Home'>
        <div className='main'>
            <div className='mainleft'>
                <div className='rating'>
                    <img src='https://www.odinschool.com/hubfs/OdinSchool_V3/icons/google-icon.svg' alt='google'/>
                    <img src='https://www.odinschool.com/hubfs/OdinSchool_V3/icons/4.7_Rating.svg' alt='rating'/>
                    <a href='rating'>4.7 | 1,241 Reviews</a>
                </div>
                <h1>Web Developer Course</h1>
                <p className='subtxt'>A live bootcamp for front-end web and mobile development using ReactJS</p>
                <div className='cardscontainer'>
                    <div className='cards'>
                        <img src='https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/icons/USP_1.webp?width=105&height=105&name=USP_1.webp' alt='img1'/><br/>
                        <b>Live instructor-led </b>bootcamp
                    </div>
                    <div className='cards'>
                        <img src='https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/icons/USP_2.webp?width=105&height=105&name=USP_2.webp' alt='img2'/><br/>
                        <b>Live instructor-led </b>bootcamp
                    </div>
                    <div className='cards'>
                        <img src='https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/icons/Project%20-%20USP%20Home%20Page.webp?width=105&height=105&name=Project%20-%20USP%20Home%20Page.webp' alt='img3'/><br/>
                        <b>Live instructor-led </b>bootcamp
                    </div>
                    <div className='cards'>
                        <img src='https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/icons/USP_3.webp?width=105&height=105&name=USP_3.webp' alt='img4'/><br/>
                        <b>Live instructor-led </b>bootcamp
                    </div>
                </div>
                <div className='textimg'>
                    <p><strong>NSDC</strong> Affiliated Partner | A Certified Member of</p>
                    <img src='https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/accreditations/nasscom_rc.webp?width=150&name=nasscom_rc.webp' alt='nascom'/>
                    <img src='https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/accreditations/hysea_rc.webp?width=150&name=hysea_rc.webp' alt='hysea'/>
                    <img src='https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/accreditations/shrm_rc.webp?width=150&name=shrm_rc.webp' alt='shrm' />
                </div>
            </div>
            <div className='form-container'>
                <div className='form-box'>
                <form action="">
                    <input className='name' type='text' placeholder='First name' />
                    <input className='name' type='text' placeholder='Last name' />
                    <select className='phnid'>
                        <option>India</option>
                    </select>
                    <input className='phn' type='text' placeholder='Mobile Number' />
                    <select>
                        <option>Year Of Graduation</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                    </select>
                    <select>
                        <option>Work EXperience Level</option>
                        <option>1-3</option>
                        <option>3-6</option>
                        <option>6-9</option>
                    </select>
                    <button>Apply Now</button>
                </form>
                </div>
            </div>
            
        </div>
        <div className='badge'>
            <div className='badge-items'>
            <p>Upcoming Cohort<br/><span>28 Oct 2023</span></p>
            </div>
            <div>
                <p>Bootcamp Fee<br/><span>₹ 99000 + GST</span></p>
            </div>
            <div className='scholarship'>
                <div className='scholarContent'>
                    <img src='https://www.odinschool.com/hs-fs/hubfs/OdinSchool_V3/icons/scholarship.webp?width=98&height=98&name=scholarship.webp' alt='Scholarship'/>
                    <p>Scholarships upto <br></br><strong>₹ 30,000</strong></p>
                </div>
                <p>No cost EMIs start at<br/><strong>₹ 5,506 per month</strong></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home