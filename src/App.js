import './App.css';
import {useState} from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';
import membercard from './membercard.jpg';



function App() {

  const trinityUsers = [
    {
       firstName: 'Pedro',
       lastName: 'Luna',
       dateOfBirth: '1986-04-02',
       role: 'teacher', // possible values: teacher, student, monitor
       status: 'active', // possible values: active, inactive
       mode: 'onsite', // possible values: onsite, online
       imageUrl: 'https://i.im.ge/2022/08/02/FAH1Sa.2019-01-Pedro.jpg',
    },
    {
       firstName: 'Marcus',
       lastName: 'Silva',
       dateOfBirth: '1988-03-16',
       role: 'student',
       status: 'active',
       mode: 'online',
       imageUrl: 'https://lh3.googleusercontent.com/pw/AL9nZEUQD2edshHAWsme3jSx6Dix65eplKQ7bCCtjSEbeR5N_Y_L334CLlei5dGulDq1hZYWLtZavbCZs2PLFfoZxOcrasFsxAXuMmcl83mbcOlWPqWgNnj0qsgt6UkqenaPtjEevlkJrlWIp3vZHhHPPlOaIw=w568-h757-no?authuser=0',
    },
    {
       firstName: 'Lucas',
       lastName: 'Oliveira',
       dateOfBirth: '2001-01-14',
       role: 'monitor',
       status: 'active',
       mode: 'onsite',
       imageUrl: 'https://i.im.ge/2022/08/05/Fb5DTz.IMG-20220721-125619-334.jpg',
    },
    {
       firstName: 'Levi',
       lastName: 'Rangel',
       dateOfBirth: '2003-10-29',
       role: 'student',
       status: 'active',
       mode: 'onsite',
       imageUrl: 'https://i.im.ge/2022/08/05/FctU2T.20220619-185415.jpg',
    },
    {
       firstName: 'Lucas',
       lastName: 'Luna',
       dateOfBirth: '1992-09-26',
       role: 'student',
       status: 'active',
       mode: 'onsite',
       imageUrl: 'https://static.vecteezy.com/ti/vetor-gratis/t2/3586230-sem-foto-sinal-adesivo-com-texto-inscricao-no-fundo-isolado-gr%C3%A1tis-vetor.jpg',
    },
    {
       firstName: 'Igor',
       lastName: 'Santos',
       dateOfBirth: '1979-08-30',
       role: 'student',
       status: 'active',
       mode: 'onsite',
       imageUrl: 'https://i.im.ge/2022/08/15/OFWueW.WhatsApp-Image-2022-08-15-at-11-58-43.jpg',
    },
    {
       firstName: 'Marlos',
       lastName: 'Gonçalves',
       dateOfBirth: '1988-07-22',
       role: 'Student',
       status: 'active',
       mode: 'onsite',
       imageUrl: 'https://i.im.ge/2022/08/13/OQPoT0.DSC-0368.md.jpg',
    },
    {
       firstName: 'Nilo',
       lastName: 'Reis',
       dateOfBirth: '2004-04-12',
       role: 'Student',
       status: 'Active',
       mode: 'onsite',
       imageUrl: 'https://i.im.ge/2022/08/07/F8JCe9.IMG-20220415-193417-403.md.jpg',
    },
    {
       firstName: 'Diego',
       lastName: 'Almeida',
       dateOfBirth: '1985-05-07',
       role: 'monitor',
       status: 'active',
       mode: 'online',
       imageUrl: 'https://i.im.ge/2022/10/18/2iBYKP.20221006-122353.jpg',
    }
  ];

  const membersMenu = (
    <div className='Top-menu'>
      <button className='Members-button' onClick={teachersButton}>Teachers</button>
      <button className='Members-button' onClick={monitorsButton}>Class Monitors</button>
      <button className='Members-button' onClick={studentsButton}>Students</button>
      <button className='Members-button' onClick={addMembersButton}>Add Members</button>
    </div>    
  );

  const textIntro = (
    <p id='Text-intro'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas dictum nisl ac mollis. Vestibulum aliquet non ante sit amet tempor. Duis ac gravida diam. Nulla eget urna ut dolor suscipit fringilla et at mi. Ut facilisis felis a metus efficitur fringilla. Integer auctor sed nisl in laoreet. Praesent ut ullamcorper ligula. Nulla quis orci vitae libero ullamcorper eleifend ut vel leo. Suspendisse et cursus mauris. Duis aliquet tristique eros sed iaculis.
      Quisque ut viverra justo, ac pellentesque mauris. Phasellus nec molestie ante, vel viverra nulla. Fusce sit amet efficitur nibh. Etiam ut congue dolor. Nam condimentum lacinia feugiat. Proin sagittis ac metus vestibulum feugiat. Sed viverra nulla sed velit pretium, sit amet porta lectus congue. Cras in venenatis elit. Sed hendrerit volutpat porttitor. Suspendisse a bibendum justo, at imperdiet lacus. Praesent eget tortor accumsan lectus posuere interdum non in dolor. Aenean blandit justo at ornare rhoncus. In tincidunt quam quis tortor ullamcorper, a maximus tortor sagittis.
      Sed maximus justo vel arcu aliquam cursus. Aenean at pretium lectus. Fusce elit velit, laoreet eget porttitor ut, commodo eget dolor. Vivamus rutrum mi dui, a posuere nisl vestibulum eu. Maecenas eleifend sapien enim, a hendrerit elit placerat nec. Fusce non massa enim. Quisque blandit tellus et turpis egestas ultrices vel id velit.
    </p>
  );
 
  const [introIsVisible, setIntroIsVisible] = useState ('true');
  const [memberIsVisible, setMemberIsVisible] = useState ('false');
  const [teacherIsClicked, setTeacherIsClicked] = useState ('false');
  const [monitorIsClicked, setMonitorIsClicked] = useState ('false');
  const [studentIsClicked, setStudentIsClicked] = useState ('false');
  const [formIsVisible, setFormIsVisible] = useState ('false');

  function membersButton() {
    setMemberIsVisible('true');
    setIntroIsVisible('false');
    setTeacherIsClicked('false');
    setMonitorIsClicked('false');
    setStudentIsClicked('false');
    setFormIsVisible('false');
  }

  function teachersButton() {
    setTeacherIsClicked('true');
    setMonitorIsClicked('false');
    setStudentIsClicked('false');
    setMemberIsVisible('false');
    setIntroIsVisible('false');
    setFormIsVisible('false');
  }

  function monitorsButton() {
    setMonitorIsClicked('true');
    setTeacherIsClicked('false');
    setStudentIsClicked('false');
    setMemberIsVisible('false');
    setIntroIsVisible('false');
    setFormIsVisible('false');
  }

  function studentsButton() {
    setStudentIsClicked('true')
    setMonitorIsClicked('false');
    setTeacherIsClicked('false');
    setMemberIsVisible('false');
    setIntroIsVisible('false');
    setFormIsVisible('false');
  }

  function addMembersButton() {
    setFormIsVisible('true');
    setStudentIsClicked('false');
    setTeacherIsClicked('false');
    setMonitorIsClicked('false');
    setMemberIsVisible('false');
    setIntroIsVisible('false');
  }

  const teachersFound = trinityUsers.find((element) => element.role.toLowerCase() === 'teacher');

  const showTeachers = (
    <div id="Card-box" className="Card-box">
              <div className="Image-profile">
                <img className="User-foto" src={teachersFound.imageUrl}/>
              </div>
              <div className="User-title">
                <h1 className="User-name">{teachersFound.firstName} {teachersFound.lastName}</h1>
                <h2 className="User-role">{teachersFound.role}</h2>
              </div>
              <div className="User-info">
                <h2 className="User-status">{teachersFound.status}</h2>
                <h2 className="User-mode">{teachersFound.mode}</h2>
                <h2 className="User-age">Date of Birth:</h2>
                <h2 className="User-birth">{teachersFound.dateOfBirth}</h2>
              </div>
            </div>
  );

  const monitorsFound = trinityUsers.filter((element) => element.role.toLowerCase() === 'monitor');

  const showMonitors = (monitorsFound.map((monitorsFound) => (
    <div id="Card-box" className="Card-box">
              <div className="Image-profile">
                <img className="User-foto" src={monitorsFound.imageUrl}/>
              </div>
              <div className="User-title">
                <h1 className="User-name">{monitorsFound.firstName} {monitorsFound.lastName}</h1>
                <h2 className="User-role">{monitorsFound.role}</h2>
              </div>
              <div className="User-info">
                <h2 className="User-status">{monitorsFound.status}</h2>
                <h2 className="User-mode">{monitorsFound.mode}</h2>
                <h2 className="User-age">Date of Birth:</h2>
                <h2 className="User-birth">{monitorsFound.dateOfBirth}</h2>
              </div>
            </div>
  )));

  const studentsFound = trinityUsers.filter((element) => element.role.toLowerCase() === 'student');

  const showStudents = (studentsFound.map((studentsFound) => (
    <div id="Card-box" className="Card-box">
              <div className="Image-profile">
                <img className="User-foto" src={studentsFound.imageUrl}/>
              </div>
              <div className="User-title">
                <h1 className="User-name">{studentsFound.firstName} {studentsFound.lastName}</h1>
                <h2 className="User-role">{studentsFound.role}</h2>
              </div>
              <div className="User-info">
                <h2 className="User-status">{studentsFound.status}</h2>
                <h2 className="User-mode">{studentsFound.mode}</h2>
                <h2 className="User-age">Date of Birth:</h2>
                <h2 className="User-birth">{studentsFound.dateOfBirth}</h2>
              </div>
            </div>
  )));

  const [firstName, setFirstName] = useState ("");
  const [lastName, setLastName] = useState ("");
  const [dateOfBirth, setDateOfBirth] = useState ("");
  const [role, setRole] = useState ("");
  const [status, setStatus] = useState ("");
  const [mode, setMode] = useState ("");
  const [imageUrl,setImageUrl] = useState ("");
  const [isUpdated, setIsUpdated] = useState ('false');
  const [showableUsers, setShowableUsers] = useState ([...trinityUsers]);
  
 
  
  function handleSubmit(event) {
      
    const addNewMember = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      role: role,
      status: status,
      mode: mode,
      imageUrl: imageUrl
    };
    event.preventDefault();
    setIsUpdated('true');
    console.log(addNewMember);
    const trinityUsersUpdated = [...showableUsers, addNewMember];
    setShowableUsers(trinityUsersUpdated);
  }

  const newMemberForm = (
    <div className= "add-member-form">
      <legend>Member Data</legend>
      <label>First Name: <input className='Label' type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
      </label><br/>
      <label>Last Name: <input className='Label' type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
      </label><br/>
      <label>Date Of Birth: <input className='Label' type="date" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)}/>
      </label><br/>
      <label>Role: <select className='Label' value={role} onChange={(event) => setRole(event.target.value)}>
        <option value="Teacher">Teacher</option>
        <option value="Monitor">Monitor</option>
        <option value="Student">Student</option>
      </select>
      </label><br/>
      <label>Status: <select className='Label' value={status} onChange={(event) => setStatus(event.target.value)}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        </select>
      </label><br/>
      <label>Mode: <select className='Mode' value={mode} onChange={(event) => setMode(event.target.value)}>
        <option value="Online">Online</option>
        <option value="Onsite">Onsite</option>
        </select>
      </label><br/>
      <label>Image URL: <input className='Label' type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
      </label><br/>
      <button onClick={(event) => handleSubmit(event)}>Add New Member</button>
    </div>
  );
 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TRINITY GROUP</h1>
      </header>
      <main>
        <section className='App-menu'>
          <nav className='Menu'>
            {memberIsVisible === 'false' ? (<div className='Top-menu'>
              <button className='Menu-button'>Class Journal</button>
              <button onClick={membersButton} className='Menu-button'>Members</button>
              <button className='Menu-button'>Links</button>
            </div>):null}
            {memberIsVisible === 'true' ? membersMenu:null}
          </nav>
        </section>
        <section className='Content-display'>
          {introIsVisible === 'true' ? textIntro:null}

          {(memberIsVisible === 'true' && showableUsers) ? (showableUsers.map((each) =>
            <div id="Card-box" className="Card-box">
              <div className="Image-profile">
                <img className="User-foto" src={each.imageUrl}/>
              </div>
              <div className="User-title">
                <h1 className="User-name">{each.firstName} {each.lastName}</h1>
                <h2 className="User-role">{each.role}</h2>
              </div>
              <div className="User-info">
                <h2 className="User-status">{each.status}</h2>
                <h2 className="User-mode">{each.mode}</h2>
                <h2 className="User-age">Date of Birth:</h2>
                <h2 className="User-birth">{each.dateOfBirth}</h2>
              </div>
            </div>
          )):null}
          {teacherIsClicked === 'true' ? showTeachers:null}
          {monitorIsClicked === 'true' ? showMonitors:null}
          {studentIsClicked === 'true' ? showStudents:null}
          {formIsVisible === 'true' ? newMemberForm:null}
        </section>
      </main>
      {console.log(showableUsers)}
      {console.log(isUpdated)}
      
    </div>
  );
}

export default App;
