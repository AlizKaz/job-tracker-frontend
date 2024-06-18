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

function JobSelectCheckbox({countOfSelectedJobs, onSelectedJobsChange} : {countOfSelectedJobs : number, onSelectedJobsChange: Function}) {
  return (
    <div className="box-border relative max-w-full min-h-px">
      <div className="flex flex-nowrap items-center	gap-2	min-h-8	box-border">
        <label className="rounded	border border-solid leading-5	py-1.5 px-2 border-stone-400 box-border m-0 text-black text-sm tabular-nums	list-none	inline-flex	items-baseline cursor-pointer">
          <span className="text-left box-border m-0 p-0 text-black text-sm tabular-nums top-1	leading-none relative top-1	leading-none	whitespace-nowrap	outline-none	cursor-pointer">
            <input type="checkbox" className="box-border p-0 absolute top-0 right-0 left-0 bottom-0 z-10 w-full h-full cursor-pointer opacity-0	overflow-visible	"/>
            <span dir="ltr" className="bg-white border-gray-300	rounded shadow-sm	box-border relative top-0 left-0 block	w-4 h-4 border border-solid border-stone-400 border-separate	transition-all"/>    
            <span className="font-sans">
              {countOfSelectedJobs}
              {" selected"}
            </span>
          </span>
        </label>         
      </div>

    </div>
  );
}

function JobFilterBox({filterJobsText, onFilterJobsTextChange}: {filterJobsText: string, onFilterJobsTextChange: Function}) {
  const clearButtonVisibility = "invisible"
  return (
    <span className="min-w-40	w-auto	box-border relative py-1 px-3 text-black text-sm leading-normal	bg-white bg-none border-b border-solid	border-gray-300 rounded-sm	transition-all	inline-flex">
      <input placeholder="Filter Jobs" type="text" className="w-52	p-0 top-px relative text-ellipsis rounded-none	outline-none	tracking-normal	box-border m-0 tabular-nums inline-block	text-black bg-white transition-all rounded-sm " 
      value={filterJobsText} onInput={(e) => onFilterJobsTextChange(e.target.value)}/>
      <span className={`flex items-center box-border m-1	flex-none	mr-2 cursor-pointer box-border ml-1 ${clearButtonVisibility} text-slate-950`}>
        <span className="mr-2	cursor-pointer ml-1 text-xs	transition-colors	border-0	border-solid	" role="button" tabindex="-1">
          <span role="img" aria-label="close-circle" className="box-border inline-block text-center	normal-case">
            <svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path>
            </svg>
          </span>
        </span>
        <span role="img" aria-label="search" className="box-border inline-block anticon anticon-search">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
              </path>
            </svg>
        </span>
        </span>
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
        <JobRow job={job} key={job.id}/>
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
        onStatusFilterChange={onStatusFilterChange}
        key={st.name} />
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

function ActionBar({filterJobsText, onFilterJobsTextChange, countOfSelectedJobs, onSelectedJobsChange}: {filterJobsText: string; onFilterJobsTextChange: Function, countOfSelectedJobs: number, onSelectedJobsChange: Function}) {
  return (
    <div className="content-between bg-white border-b border-solid py-4 box-border">
      <div className="flex flex-wrap items-stretch space-x-0 space-y-0 justify-between gap-0 box-border">      
        <JobSelectCheckbox countOfSelectedJobs={countOfSelectedJobs} onSelectedJobsChange={onSelectedJobsChange}/>
        <div className="flex flex-wrap justify-end	items-center gap-4	box-border relative max-w-full min-h-px">
          <JobFilterBox filterJobsText={filterJobsText} onFilterJobsTextChange={onFilterJobsTextChange}/>  
          <GroupByBox/>
          <MenuButton/>
          <AddJobButton/>
        </div>
      </div>
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
  const [countOfSelectedJobs, setCountOfSelectedJobs] = useState<number>(0);

  return (
    <div className="p-8">
      <StatusFilterBar statusList={statusList} filteredStatus={filteredStatus} onStatusFilterChange={setFilteredStatus}/>
      <ActionBar filterJobsText={filterJobsText} onFilterJobsTextChange={setFilterJobsText} countOfSelectedJobs={countOfSelectedJobs} onSelectedJobsChange={setCountOfSelectedJobs}/>
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
