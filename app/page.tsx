"use client"

import { ReactElement, useState } from 'react';

function AddJobButton({}) {
  return (
    <div>
      <input type="button" value="Add a New Job"/>
    </div>
  )
}

function MenuButton({}) {
  return (
    <div>
      <input type="button" value="::: Menu"/>
    </div>
  )
}

function GroupByBox({}) {
  return (
    <div>
      <select>
        <option value="none">Group By: None</option>
        <option value="status">Group By: Status</option>
      </select>
    </div>
  );
}

function JobSelectCheckbox({}) {
  return (
    <div>
    <div>
      <input type="checkbox"/>    
    </div>
    <div>
      <p>0 selected</p>  
    </div>
    </div>
  );
}

function JobFilterBox({filterJobsText, onFilterJobsTextChange}: {filterJobsText: string, onFilterJobsTextChange: Function}) {
  return (
    <span>
      <input placeholder="Filter Jobs" type="text" value={filterJobsText} onInput={(e) => onFilterJobsTextChange(e.target.value)}/>
    </span>
  );
}

function StatusColumn({ name, count, bgcolor, color, onStatusFilterChange}: {name: string, count: number, bgcolor: string, color: string, onStatusFilterChange: Function}) {
  return (  
      <td colSpan="2" bgcolor={bgcolor} color={color}>
        <div onClick={(e) => onStatusFilterChange(name)}>
          <div>{name}</div>
          <div>{count}</div>        
        </div>
      </td>
  );
}

function JobStatusRow({status}: {status: string}) {
  return (
    <tr>
      <td>{status}</td>
    </tr>
  );
}

function JobRow({job}: {job: Job}) {
  return (
    <tr>
      <td>{job.title}</td>
      <td>{job.company}</td>
      <td>{job.max_salary}</td>
      <td>{job.location}</td>
      <td>{job.status ? job.status : "N/A"}</td>
      <td>{job.date_saved ? job.date_saved.getDate() : "N/A"}</td>
      <td>{job.date_applied ? job.date_applied.getDate() : "N/A"}</td>
      <td>{job.date_followeup ? job.date_followeup.getDate() : "N/A"}</td>
      <td>{job.excitement}</td>
    </tr>
  );
}

function JobTable({jobs, filteredStatus, filterJobsText}: {jobs: Array<Job>, filteredStatus: string | null, filterJobsText: string}) {
  const rows : Array<any> = [];
  let lastStatus : string | null = null;
  filterJobsText = filterJobsText.toLocaleLowerCase();
  jobs
    .filter(job => filteredStatus == null || job.status == filteredStatus)
    .filter(job => job.title?.toLocaleLowerCase().includes(filterJobsText) || job.company?.toLocaleLowerCase().includes(filterJobsText) 
    || job.location?.toLocaleLowerCase().includes(filterJobsText))
    .forEach((job) => {
      if (job.status !== lastStatus) {
        rows.push(
          <JobStatusRow
            status={job.status}
            key={job.status} />
        );
      }
      rows.push(
        <JobRow job={job}/>
      )
      lastStatus = job.status;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Job Position</th>
          <th>Company</th>
          <th>Max. Salary</th>
          <th>Location</th>
          <th>Status</th>
          <th>Date Saved</th>
          <th>Date Applied</th>
          <th>Follow Up</th>
          <th>Excitement</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function StatusFilterBar({statusList, filteredStatus, onStatusFilterChange}: {statusList: Array<StatusCategory>, filteredStatus: string | null, onStatusFilterChange: Function}) {
  const cols: Array<any> = [];
  
    
  statusList.forEach((st) => {     
    let bgcolor = '#ffffff' 
    let color = 'black'
    if (st.name == filteredStatus) {
      bgcolor = '#f9d8b5'
      color = '#74430b'
    }
    cols.push(
      <StatusColumn
        name={st.name}
        count={st.count}
        bgcolor={bgcolor}
        color={color}
        onStatusFilterChange={onStatusFilterChange} />
    );
  })
    
  return (
    <table>
      <tbody>
        <tr>
          {cols}
        </tr>
      </tbody>
    </table>
  );
}

function MiddleBar({filterJobsText, onFilterJobsTextChange}: {filterJobsText: string; onFilterJobsTextChange: Function}) {
  return (
    <div>
      <JobSelectCheckbox/>
      <JobFilterBox filterJobsText={filterJobsText} onFilterJobsTextChange={onFilterJobsTextChange}/>  
      <GroupByBox/>
      <MenuButton/>
      <AddJobButton/>
    </div>
  )
}

function FilterableJobs({ jobs, statusList }: {jobs: Array<Job>, statusList: Array<StatusCategory>}) {
  const [filteredStatus, setFilteredStatus] = useState<string | null>(null);
  const [filterJobsText, setFilterJobsText] = useState<string>('');

  return (
    <div>
      <StatusFilterBar statusList={statusList} filteredStatus={filteredStatus} onStatusFilterChange={setFilteredStatus}/>
      <MiddleBar filterJobsText={filterJobsText} onFilterJobsTextChange={setFilterJobsText}/>
      <JobTable jobs={jobs} filteredStatus={filteredStatus} filterJobsText={filterJobsText}/>
    </div>
  );
}

class Job {
  id: string | null = null;
  title: string | null = null;
  url: string | null = null;
  company: string | null = null;
  status: string = 'N/A';
  max_salary!: number;
  location!: string;
  excitement: number | null = null; 
  date_saved: Date | null = null;
  date_applied: Date | null = null;
  date_followeup: Date | null = null;
}



const JOBS_MAP = [
  {id: "1", title: "Senior Software Developer", company: "Google", status:"BOOKMARKED", max_salary: 120000, location: "Toronto", excitement: 1},
  {id: "100", title: "Senior Staff Software Developer", company: "Amazon", status:"APPLYING", max_salary: 120000, location: "Toronto", excitement: 3},
  {id: "5000", title: "Backend Developer", company: "Uber", status:"BOOKMARKED", max_salary: 1940000, location: "San Fransisco", excitement: 4},
  {id: "60000", title: "Senior Software Developer", company: "OpenAI", status:"APPLIED", max_salary: 175000, location: "Toronto", excitement: 5},
  {id: "700000", title: "Senior Software Developer", company: "Nvidia", status:"BOOKMARKED", max_salary: 1670000, location: "Toronto", excitement: 2},
  {id: "8000000", title: "Senior Software Developer", company: "Google", status:"BOOKMARKED", max_salary: 120000, location: "Toronto", excitement: 1},
];

const JOBS = JOBS_MAP.map((m) => {
  const job: Job = { id: m.id, title: m.title, company: m.company, status: m.status, max_salary: m.max_salary, location: m.location, excitement: m.excitement };  
  return job;
});

type StatusCategory = {
  name: string;
  count: number;
}

const STATUS_LIST = [
  {name: 'BOOKMARKED', count: 173}, {name: 'APPLYING', count: 7}, {name: 'APPLIED', count: 19}, {name: 'INTERVIEWING', count: 2}, 
  {name: 'NEGOTIATING', count: 0}, {name: 'ACCEPTED', count: 0}];

export default function App() {
  JOBS.sort((a, b) => a.status.localeCompare(b.status));

  STATUS_LIST.forEach(st => console.log('***st.name: ' + st.name));
  return <FilterableJobs jobs={JOBS} statusList={STATUS_LIST}/>;
}

// states:
/**
 * currentSelectedStatus
 * 
 * selectedJobs
 * 
 * selectAllJobs
 * 
 * filterJobsText
 * 
 * groupByValue
 * 
 * showColumns
 * 
 * 
 */
