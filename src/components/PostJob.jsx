import { useState } from "react";
import Layout from "../shared/Layout";
import Title from "../shared/Title";
import '../components/styles/postjob.scss'
import Button from "../shared/Button";

function PostJob() {
  const [companyName, setCompanyName] = useState('')
  const [WebsiteLink, setWebsiteLink] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobCategory, setSelectJobCategory] = useState('')
  const [jobType, setSelectJobType] = useState('')
  const [jobLocation, setJobLocation] = useState('')
  const [salaryRange, setSalaryRange] = useState('')
  const [experience, setExperience] = useState('')
  const [qualification, setqualifcation] = useState('')
  const [deadline, setDeadline] = useState('')
  const [jobLink, setJobLink] = useState('')
  const [jobDescription, setjobDescription] = useState('')
  const [jobArray, setJobData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        companyName,
        WebsiteLink,
        jobTitle,
    }

    setJobData(data)

    console.log(jobArray)
  }

    return(
        <div>
            <Layout>
                <Title>Creat a Job</Title>
            </Layout>
            
            <div className="container">
                <form className="form-box" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="">Company Name</label>
                            <input 
                                type="text"
                                value={companyName} 
                                onChange={(e) => setCompanyName(e.target.value)} 
                                placeholder="Name" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Website Link</label>
                            <input
                                type="text" 
                                value= {WebsiteLink}
                                onChange={(e) => setWebsiteLink(e.target.value)}
                                placeholder="Website Link"
                             />
                        </div>
                    </div>
                    <div className="form-col form-group">
                        <label htmlFor="">Job Title</label>
                        <input 
                            type="text" 
                            value={jobTitle} 
                            onChange={(e) => setJobTitle(e.target.value)}
                            placeholder="Title" 
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="">Job Category</label>
                            <select
                                value={jobCategory} 
                                onChange={(e) => setSelectJobCategory(e.target.value)} >
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="">Job Type</label>
                            <select 
                            value={jobType} 
                            onChange={(e) => setSelectJobType(e.target.value)}    >
                                <option value="Full time">Full Time</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="">Job Location</label>
                            <input 
                               type="text"
                               value={jobLocation}
                               onChange={(e) => setJobLocation(e.target.value)}
                               placeholder="Location" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Salary Range ($)</label>
                            <input 
                                type="text" 
                                value={salaryRange}
                                onChange={(e) => setSalaryRange(e.target.value)}
                                placeholder="Salary Range"
                              />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="">Experience</label>
                            <input 
                                type="text" 
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                placeholder="Experience" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Qualification</label>
                            <input 
                                type="text" 
                                value={qualification}
                                onChange={(e) => setqualifcation(e.target.value)}
                                placeholder="Qualification" 
                            />
                        </div>
                    </div>
                    <div className="form-col form-group">
                        <label htmlFor="">Application Deadline</label>
                        <input 
                            type="date" 
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            placeholder="Job applicatin deadline"
                        />
                    </div>
                    <div className="form-col form-group">
                        <label htmlFor="">Job Apllication Link</label>
                        <input 
                            type="text" 
                            value={jobLink}
                            onChange={(e) => setJobLink(e.target.value)}
                            placeholder="Job application link url" />
                    </div>
                    <div className="form-col form-group">
                        <label htmlFor="">Job Description</label>
                        <textarea 
                        value={jobDescription}
                        onChange={(e) => setjobDescription(e.target.value)}
                        placeholder="Job Description" ></textarea>
                    </div>
                    <Button className='btn btn-primary' text='Post a Job' />
                </form>
            </div>
        </div>
    )
}

export default PostJob;