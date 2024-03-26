
import { FaLocationCrosshairs } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi2";
const Job = ({job}) => {

    const {logo,id,job_title,company_name,location,remote_or_onsite,job_type,salary} = job
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
    <button className="btn px-5 py-2 font-extrabold border rounded border-[#7E90FE] mx-4">{remote_or_onsite}</button>
    <button className="btn px-5 py-2 font-extrabold border rounded border-[#7E90FE] mx-4">{job_type}</button>
    </div>
    <div className="mt-4 flex">
        <h2 className="flex mr-4"><FaLocationCrosshairs className="text-2xl mr-2" /> {location}</h2>
        <h2 className="flex"><HiCurrencyDollar className="text-2xl"/> {salary}</h2>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Job;