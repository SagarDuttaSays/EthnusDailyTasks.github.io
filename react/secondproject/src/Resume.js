import './Resume.css'
function Resume({myname, rollid, phone, email, github, linkedin}) {
    return(<>
    <div classname="header">
  <table>
    <tbody>
      <tr>
        <td>
          <div className='imageBox'>
            <img
              src="https://i.imgur.com/MK3eW3As.jpg"
              alt="Katherine Johnson"
            />
            <h1>{myname}</h1>
          </div>
        </td>
        <td>
          <ul className='contactInfo'>
            <li>{rollid}</li>
            <li>{phone}</li>
            <li>{email}</li>
            <li>{linkedin}</li>
            <li>{github}</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className='education'>
<div classname="header">
  <h3>Academic Details</h3>
  <table>
    <tbody>
      <tr>
        <th>Institute</th>
        <th>Degree</th>
        <td>Passing Year</td>
        <td>Passing Score</td>
      </tr>
      <tr>
        <th>{grad.inst}</th>
        <th>{grad.deg}</th>
        <th>{grad.yr}</th>
        <th>{grad.score}</th>
      </tr>
      <tr>
        <th>{ssc.inst}</th>
        <th>{ssc.deg}</th>
        <th>{ssc.yr}</th>
        <th>{ssc.score}</th>
      </tr>
      <tr>
        <th>{hsc.inst}</th>
        <th>{hsc.deg}</th>
        <th>{hsc.yr}</th>
        <th>{hsc.score}</th>
      </tr>
    </tbody>
  </table>
</div>


</div>
    </>)
}