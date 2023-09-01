import Layout from "../shared/Layout";
import Button from "../shared/Button";
import Title from "../shared/Title";
import '../components/styles/jobviewpage.scss'


function JobView () {

    return(
        <div className="jobsviewpage">
            <Title>
                Laravel Developer<span> (Full Time) </span>
                Match Company Limited
            </Title>
            <Layout className='container '>
                <div className="btn-group">
                    <Button type='button' className='btn btn-info' text='View Company' />
                    <Button type='button' className='btn btn-primary' text='Apply This Job' />
                </div>
                <div className="job-details">
                    <div className='headings'>
                        <span className="qualification">Minimum Qualification: <span>Bachelor</span></span>
                        <span className="qualification">Experience Level: <span>Mid Level</span></span>
                        <span className="qualification">Experience Length: <span>2 years </span></span>
                        <span className="qualification">Location: <span>San Francisco, USA  </span></span>
                        <span className="qualification">Application Deadline<span> 12/08/2022</span></span>
                        <span className="qualification">Salary Range:<span>$ 105,000 - 150,000</span></span>
                    </div>
                    <h3>Job Description</h3>
                    <p>We are searching for a Laravel developer to build web applications for our company. In this role, you will design and create projects using Laravel framework and PHP, and assist the team in delivering high-quality web applications, services, and tools for our business. <span>To ensure success as a Laravel developer you should be adept at utilizing Laravel's GUI and be able to design a PHP application from start to finish. A top-notch Laravel developer will be able to leverage their expertise and experience of the framework to independently produce complete solutions in a short turnaround time.</span></p>

                    <h5>Laravel Developer Requirement</h5>
                    <ul>
                    <li>A degree in programming, computer science, or a related field.</li> 
                    <li>Experience working with PHP, performing unit testing, and managing APIs such as REST.</li>
                    <li> A solid understanding of application design using Laravel. </li>
                    <li>Knowledge of database design and querying using SQL.</li>
                    <li>Proficiency in HTML and JavaScript.</li>
                    <li> Experience developing in Vue is considered a plus. Practical experience using the MVC architecture.</li>
                    <li>The ability to work on LAMP development environment Problem-solving skills and critical mindset.</li>   
                    <li>Great communication skills. The desire and ability to learn.</li>
                    </ul>

                    <h5>Responsibilities</h5>
                    <ul>
                    <li>Discussing project aims with the client and development team.</li> 
                    <li>Designing and building web applications using Laravel.</li>
                    <li> Troubleshooting issues in the implementation and debug builds.</li>
                    <li>Proficiency in HTML and JavaScript.</li>
                    <li> Experience developing in Vue is considered a plus. Practical experience using the MVC architecture.</li>
                    <li>Working with front-end and back-end developers on projects.</li>   
                    <li>esting functionality for users and the backend.</li>
                    <li>Ensuring that integrations run smoothly.</li>
                    <li>Scaling projects based on client feedback.</li>
                    <li>Recording and reporting on work done in Laravel.</li>
                    <li>Recording and reporting on work done in Laravel.</li>
                    <li>Maintaining web-based applications.</li>
                    <li>Presenting work in meetings with clients and management.</li>
                    </ul>
                </div>
            </Layout>
        </div>
    )
}

export default JobView;