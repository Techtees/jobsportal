import Layout from "../shared/Layout";
import Title from "../shared/Title";
import '../components/styles/postjob.scss'
import Button from "../shared/Button";

function PostJob() {
    return(
        <div>
            <Layout>
                <Title>Creat a Job</Title>
            </Layout>
            
            <div className="container">
                <form className="form-box ">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="">Company Name</label>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Website Link</label>
                            <input type="text" placeholder="Website Link" />
                        </div>
                    </div>
                    <div className="form-col form-group">
                        <label htmlFor="">Job Title</label>
                        <input type="text" placeholder="Title" />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="">Job Category</label>
                            <select name="" id="">
                                <option value="">Technology</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="">Job Type</label>
                            <select name="" id="">
                                <option value="">Full Time</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="">Job Location</label>
                            <input type="text" placeholder="Location" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Salary Range ($)</label>
                            <input type="text" placeholder="Salary Range" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="">Experience</label>
                            <input type="text" placeholder="Experience" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Qualification</label>
                            <input type="text" placeholder="Qualification" />
                        </div>
                    </div>
                    <div className="form-col form-group">
                        <label htmlFor="">Application Deadline</label>
                        <input type="date" placeholder="Job applicatin deadline" />
                    </div>
                    <div className="form-col form-group">
                        <label htmlFor="">Job Apllication Link</label>
                        <input type="text" placeholder="Job application link url" />
                    </div>
                    <div className="form-col form-group">
                        <label htmlFor="">Job Description</label>
                        <textarea name="job-description" placeholder="Job Description" ></textarea>
                    </div>
                    <Button className='btn btn-primary' text='Post a Job' />
                </form>
            </div>
        </div>
    )
}

export default PostJob;