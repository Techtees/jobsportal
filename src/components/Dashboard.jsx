import Title from "../shared/Title";
import Layout from "../shared/Layout";
import Table from "../shared/Table";
import './styles/dashboard.scss'


function Dashboard(){
    return(
        <div>
            <Layout>
                 <Title>My Job List</Title>
            </Layout>
            <div className="container">
               <div className="table-box">
                    <Table />
               </div>
            </div>
        </div>
    )
}

export default Dashboard;