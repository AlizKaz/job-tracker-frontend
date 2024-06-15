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

function JobFilterBox({}) {
  return (
    <span>
      <input placeholder="Filter Jobs" type="text" value=""/>
    </span>
  );
}

function StatusColumn({ name, count }) {
  return (  
      <td colSpan="2">
        <div>{name}</div>
        <div>{count}</div>        
      </td>
  );
}

function JobStatusRow({status}) {
  return (
    <tr>
      <td>{status}</td>
    </tr>
  );
}

function JobRow({job}) {
  return (
    <tr>
      <td>{job.title}</td>
      <td>{job.company}</td>
      <td>{job.max_salary}</td>
      <td>{job.location}</td>
      <td>{job.status ? job.status : "N/A"}</td>
      <td>{job.date_saved ? job.date_saved : "N/A"}</td>
      <td>{job.date_applied ? job.date_applied : "N/A"}</td>
      <td>{job.date_followup ? job.date_followup : "N/A"}</td>
      <td>{job.excitement}</td>
    </tr>
  );
}

function JobTable({jobs}) {
  const rows = [];
  let lastStatus = null;

  jobs.forEach((job) => {
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

function StatusFilterBar({statusList}) {
  const cols = [];
    
  statusList.forEach((st) => {      
    cols.push(
      <StatusColumn
        name={st.name}
        count={st.count} />
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

function MiddleBar() {
  return (
    <div>
      <JobSelectCheckbox/>
      <JobFilterBox/>  
      <GroupByBox/>
      <MenuButton/>
      <AddJobButton/>
    </div>
  )
}

function FilterableJobs({ jobs, statusList }) {
  return (
    <div>
      <StatusFilterBar statusList={statusList}/>
      <MiddleBar/>
      <JobTable jobs={jobs} />
    </div>
  );
}

const JOBS = [
  {id: "1", title: "Senior Software Developer", company: "Google", status:"BOOKMARKED", max_salary: 120000, location: "Toronto", excitement: 1},
  {id: "100", title: "Senior Staff Software Developer", company: "Amazon", status:"APPLYING", max_salary: 120000, location: "Toronto", excitement: 3},
  {id: "5000", title: "Backend Developer", company: "Uber", status:"BOOKMARKED", max_salary: 1940000, location: "San Fransisco", excitement: 4},
  {id: "60000", title: "Senior Software Developer", company: "OpenAI", status:"APPLIED", max_salary: 175000, location: "Toronto", excitement: 5},
  {id: "700000", title: "Senior Software Developer", company: "Nvidia", status:"BOOKMARKED", max_salary: 1670000, location: "Toronto", excitement: 2},
  {id: "8000000", title: "Senior Software Developer", company: "Google", status:"BOOKMARKED", max_salary: 120000, location: "Toronto", excitement: 1},
];

const STATUS_LIST = [
  {name: 'BOOKMARKED', count: 173}, {name: 'APPLYING', count: 7}, {name: 'APPLIED', count: 19}, {name: 'INTERVIEWING', count: 2}, 
  {name: 'NEGOTIATING', count: 0}, {name: 'ACCEPTED', count: 0}];

export default function App() {
  JOBS.sort((a, b) => a.status.localeCompare(b.status));

  STATUS_LIST.forEach(st => console.log('***st.name: ' + st.name));
  return <FilterableJobs jobs={JOBS} statusList={STATUS_LIST}/>;
}
