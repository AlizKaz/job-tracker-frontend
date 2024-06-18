"use client"

import { ReactElement, useState } from 'react';

function AddJobButton({}) {
  return (
    <div className="flex px-4 py-2 bg-emerald-500 text-white font-normal rounded hover:bg-emerald-700 h-8">
      <button className="flex justify-strech-item align-middle leading-4">
        <span role="img" aria-label="plus-circle" className="align-middle inline-flex">
          <svg viewBox="64 64 896 896" className="h-4 w-4 fill-current" data-icon="plus-circle" aria-hidden="true">
            <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
          </svg>          
        </span>
        <span className="align-middle ml-2">Add a New Job</span>
      </button>
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
    <div className="flex">
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

function StatusButton({ name, count, filteredStatus, onStatusFilterChange}: {name: string, count: number, filteredStatus: FileteredStatus, onStatusFilterChange: Function}) {
  let active : boolean = false
  if (name == filteredStatus.name && filteredStatus.active) {
    active = true
  }
  const bgColor = active ? "bg-orange-200" : "bg-white";
  const color = active ? "text-orange-900" : "text-black";
  const cursor = count >= 1 ? "cursor-pointer" : "cursor-default";
  return (  
    <div className="flex grow text-sm font-sans content-between">
        <div className={`${bgColor} ${color} flex justify-center items-center -ml-1.5 cursor-pointer grow status-polygon`}>
          <div className="text-center status-polygon status-height-width box-border">
            <button onClick={(e) => onStatusFilterChange({name: count >= 1 ? (active ? null : name) : filteredStatus.name, active: !active})} className={`${cursor} mx-2 leading-normal overflow-visible touch-manipulation box-border`}>        
              <div className="mt-3 mb-0.5 text-lg font-semibold leading-5 box-border">{count !== 0 ? count : "- -"}</div>              
              <div className="mt-0.5 mb-4 text-xs uppercase	font-semibold tracking-wider box-border">{name}</div>        
            </button>
          </div>
        </div>
    </div>
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

function JobTable({jobs, filteredStatus, filterJobsText}: {jobs: Array<Job>, filteredStatus: FileteredStatus, filterJobsText: string}) {
  const rows : Array<any> = [];
  let lastStatus : string | null = null;
  filterJobsText = filterJobsText.toLocaleLowerCase();
  jobs
    .filter(job => filteredStatus.name == null || (job.status == filteredStatus.name && filteredStatus.active))
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

function StatusFilterBar({statusList, filteredStatus, onStatusFilterChange}: {statusList: Array<StatusCategory>, filteredStatus: FileteredStatus, onStatusFilterChange: Function}) {
  const buttons: Array<any> = [];
  
    
  statusList.forEach((st) => {     
    buttons.push(
      <StatusButton
        name={st.name}
        count={st.count}      
        filteredStatus={filteredStatus}
        onStatusFilterChange={onStatusFilterChange} />
    );
  })
    
  return (
    <div>
    <div className="flex flex-col	flex-nowrap overflow-hidden">
      <div className="bg-white px-3 border-b border-solid	text-sm font-sans">
        <div className="flex content-between items-stretch">
          {buttons}
        </div>
      </div>
    </div>
    </div>
  );
}

function ActionBar({filterJobsText, onFilterJobsTextChange}: {filterJobsText: string; onFilterJobsTextChange: Function}) {
  return (
    <div className="justify-items-stretch flex align-middle p-3 justify-stretch gap-x-4">
      <JobSelectCheckbox/>
      <JobFilterBox filterJobsText={filterJobsText} onFilterJobsTextChange={onFilterJobsTextChange}/>  
      <GroupByBox/>
      <MenuButton/>
      <AddJobButton/>
    </div>
  )
}

type FileteredStatus = {
  name: string | null;
  active: boolean;
}

function FilterableJobs({ jobs, statusList }: {jobs: Array<Job>, statusList: Array<StatusCategory>}) {
  const [filteredStatus, setFilteredStatus] = useState<FileteredStatus>({name: null, active: false});
  const [filterJobsText, setFilterJobsText] = useState<string>('');

  return (
    <div className="p-8">
      <StatusFilterBar statusList={statusList} filteredStatus={filteredStatus} onStatusFilterChange={setFilteredStatus}/>
      <ActionBar filterJobsText={filterJobsText} onFilterJobsTextChange={setFilterJobsText}/>
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
