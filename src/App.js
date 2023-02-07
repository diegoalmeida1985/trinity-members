import './App.css';
import {useState} from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';
import membercard from './membercard.jpg';
import Cards from './Cards';



function App() {

  const trinityUsers = [
    {
       id: 1, 
       firstName: 'Pedro',
       lastName: 'Luna',
       dateOfBirth: '1986-04-02',
       role: 'teacher', // possible values: teacher, student, monitor
       status: 'active', // possible values: active, inactive
       mode: 'onsite', // possible values: onsite, online
       imageUrl: 'https://i.im.ge/2022/08/02/FAH1Sa.2019-01-Pedro.jpg',
    },
    {
       id: 2,
       firstName: 'Marcus',
       lastName: 'Silva',
       dateOfBirth: '1988-03-16',
       role: 'student',
       status: 'active',
       mode: 'online',
       imageUrl: 'https://lh3.googleusercontent.com/pw/AL9nZEUQD2edshHAWsme3jSx6Dix65eplKQ7bCCtjSEbeR5N_Y_L334CLlei5dGulDq1hZYWLtZavbCZs2PLFfoZxOcrasFsxAXuMmcl83mbcOlWPqWgNnj0qsgt6UkqenaPtjEevlkJrlWIp3vZHhHPPlOaIw=w568-h757-no?authuser=0',
    },
    {
       id: 3,
       firstName: 'Lucas',
       lastName: 'Oliveira',
       dateOfBirth: '2001-01-14',
       role: 'monitor',
       status: 'active',
       mode: 'onsite',
       imageUrl: 'https://i.im.ge/2022/08/05/Fb5DTz.IMG-20220721-125619-334.jpg',
    },
    {
       id: 4,
       firstName: 'Levi',
       lastName: 'Rangel',
       dateOfBirth: '2003-10-29',
       role: 'student',
       status: 'active',
       mode: 'onsite',
       imageUrl: 'https://i.im.ge/2022/08/05/FctU2T.20220619-185415.jpg',
    },
    {
       id: 5,
       firstName: 'Lucas',
       lastName: 'Luna',
       dateOfBirth: '1992-09-26',
       role: 'student',
       status: 'active',
       mode: 'onsite',
       imageUrl: 'https://static.vecteezy.com/ti/vetor-gratis/t2/3586230-sem-foto-sinal-adesivo-com-texto-inscricao-no-fundo-isolado-gr%C3%A1tis-vetor.jpg',
    },
    {
       id: 6,
       firstName: 'Igor',
       lastName: 'Santos',
       dateOfBirth: '1979-08-30',
       role: 'student',
       status: 'active',
       mode: 'onsite',
       imageUrl: 'https://i.im.ge/2022/08/15/OFWueW.WhatsApp-Image-2022-08-15-at-11-58-43.jpg',
    },
    {
       id: 7,
       firstName: 'Marlos',
       lastName: 'Gonçalves',
       dateOfBirth: '1988-07-22',
       role: 'Student',
       status: 'active',
       mode: 'onsite',
       imageUrl: 'https://i.im.ge/2022/08/13/OQPoT0.DSC-0368.md.jpg',
    },
    {
       id: 8,
       firstName: 'Nilo',
       lastName: 'Reis',
       dateOfBirth: '2004-04-12',
       role: 'Student',
       status: 'Active',
       mode: 'onsite',
       imageUrl: 'https://i.im.ge/2022/08/07/F8JCe9.IMG-20220415-193417-403.md.jpg',
    },
    {
       id: 9,
       firstName: 'Diego',
       lastName: 'Almeida',
       dateOfBirth: '1985-05-07',
       role: 'monitor',
       status: 'active',
       mode: 'online',
       imageUrl: 'https://i.im.ge/2022/10/18/2iBYKP.20221006-122353.jpg',
    }
  ];

  const [welcomeIsVisible, setWelcomeIsVisible] = useState ('true');
  const [membersMenu, setMembersMenu] = useState ('');
  const [membersMenuIsVisible, setMembersMenuIsVisible] = useState ('false');
  const [cardsIsVisible, setCardsIsVisible] = useState ('false');
  const [formIsVisible, setFormIsVisible] = useState ('false');
  const [id, setId] = useState ("");
  const [firstName, setFirstName] = useState ("");
  const [lastName, setLastName] = useState ("");
  const [dateOfBirth, setDateOfBirth] = useState ("");
  const [role, setRole] = useState ("");
  const [status, setStatus] = useState ("");
  const [mode, setMode] = useState ("");
  const [imageUrl,setImageUrl] = useState ("");
  const [isUpdated, setIsUpdated] = useState ('false');
  const [showableUsers, setShowableUsers] = useState ([...trinityUsers]);
  const [membersList, setMembersList] = useState ([...trinityUsers]);
  const [memberSearched, setMemberSearched] = useState ('');
  const [amountOfPages, setAmountOfPages] = useState (0);
  const [counter, setCounter] = useState (1);
  const [maxCardsView, setMaxCardsView] = useState (0);
  const [init, setInit] = useState (0);
  const [nextPageButtonIsVisible, setNextPageButtonIsVisible] = useState('false');
  const [previousPageButtonIsVisible, setPreviousPageButtonIsVisible] = useState('false');
  const [editFormIsVisible, setEditFormIsVisible] = useState ('false');
  const [isEditing, setIsEditing] = useState ('false');

  const newMemberForm = (
    <div className= "Add-member-form">
      <legend>Member Data</legend>
      <label className='Label'>First Name: 
        <input className='Input-field' type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
      </label><br/>
      <label className='Label'>Last Name: 
        <input className='Input-field' type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
      </label><br/>
      <label className='Label'>Date Of Birth: 
        <input className='Input-field' type="date" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)}/>
      </label><br/>
      <label className='Label'>Role: 
        <select className='Input-field' value={role} onChange={(event) => setRole(event.target.value)}>
          <option value="Teacher">Teacher</option>
          <option value="Monitor">Monitor</option>
          <option value="Student">Student</option>
        </select>
      </label><br/>
      <label className='Label'>Status: 
        <select className='Input-field' value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </label><br/>
      <label className='Label'>Mode: 
        <select className='Input-field' value={mode} onChange={(event) => setMode(event.target.value)}>
          <option value="Online">Online</option>
          <option value="Onsite">Onsite</option>
        </select>
      </label><br/>
      <label className='Label'>Image URL: 
        <input className='Input-field' type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
      </label><br/>
      <div className='Form-buttons'>
        <button className='Add-Return-button' onClick={handleSubmit}>Add New Member</button>
        <button className='Add-Return-button' onClick={handleReturn}>Return</button>
      </div>
    </div>
  );

  const editMemberForm = (
    <div className= "Add-member-form">
      <legend>Member Data</legend>
      <label className='Label'>First Name: 
        <input className='Input-field' type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
      </label><br/>
      <label className='Label'>Last Name: 
        <input className='Input-field' type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
      </label><br/>
      <label className='Label'>Date Of Birth: 
        <input className='Input-field' type="date" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)}/>
      </label><br/>
      <label className='Label'>Role: 
        <select className='Input-field' value={role} onChange={(event) => setRole(event.target.value)}>
          <option value={role}>Teacher</option>
          <option value={role}>Monitor</option>
          <option value={role}>Student</option>
        </select>
      </label><br/>
      <label className='Label'>Status: 
        <select className='Input-field' value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </label><br/>
      <label className='Label'>Mode: 
        <select className='Input-field' value={mode} onChange={(event) => setMode(event.target.value)}>
          <option value="Online">Online</option>
          <option value="Onsite">Onsite</option>
        </select>
      </label><br/>
      <label className='Label'>Image URL: 
        <input className='Input-field' type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
      </label><br/>
      <div className='Form-buttons'>
        <button className='Add-Return-button' onClick={handleSubmitEdit}>Save</button>
        <button className='Add-Return-button' onClick={handleReturn}>Return</button>
      </div>
    </div>
  );

  function enterButton() {
    setMembersMenuIsVisible('true');
    setWelcomeIsVisible('false');
    setCardsIsVisible('true');
  }

  function teachersButton() {
    const teachersFound = membersList.filter((element) => element.role.toLowerCase() === 'teacher');
    setShowableUsers(teachersFound);
    setCardsIsVisible('true');
  }

  function monitorsButton() {
    const monitorsFound = membersList.filter((element) => element.role.toLowerCase() === 'monitor');
    setShowableUsers(monitorsFound);
    setCardsIsVisible('true');
  }

  function studentsButton() {
    const studentsFound = membersList.filter((element) => element.role.toLowerCase() === 'student');
    setShowableUsers(studentsFound);
    setCardsIsVisible('true');
  }

  function addMembersButton() {
    setFormIsVisible('true');
    setCardsIsVisible('false');
    setMembersMenuIsVisible('false');    
  }

  function handleSubmit() {
    const addNewMember = {
      id: membersList.length + 1,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      role: role,
      status: status,
      mode: mode,
      imageUrl: imageUrl
    };
    setIsUpdated('true');
    const trinityUsersUpdated = [...membersList, addNewMember];
    setShowableUsers(trinityUsersUpdated);
    setMembersList(trinityUsersUpdated);
    setFormIsVisible('false');
    setMembersMenuIsVisible('true');
    setCardsIsVisible('true');
  }

  function handleSubmitEdit() {
    const editedMember = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      role: role,
      status: status,
      mode: mode,
      imageUrl: imageUrl
    };
    console.log(id)
    const index = membersList.map(element => element.id).indexOf(id);
    const updatedMembersList = membersList.splice(index, 1, editedMember);
    setId("");
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setRole("");
    setStatus("");
    setMode("");
    setImageUrl("");
    setShowableUsers(membersList);
    setEditFormIsVisible('false');
    setIsUpdated('true');
    setFormIsVisible('false');
    setMembersMenuIsVisible('true');
    setCardsIsVisible('true');
    console.log(index);
    console.log(membersList);
  }

  function handleReturn() {
    setFormIsVisible('false');
    setMembersMenuIsVisible('true');
    setCardsIsVisible('true');
    setEditFormIsVisible('false');
  }

  function handleSearch() {
    const searchResult = membersList.filter((element) => element.firstName.toLowerCase() === memberSearched.toLowerCase());
    setShowableUsers(searchResult);
    
  }

  function handleDeleteMemberButton(id) {
    const updatedMemberList = membersList.filter((element) => element.id !== id);
    console.log(updatedMemberList);
    if (maxCardsView === 0) {
      setShowableUsers(updatedMemberList);
      setMembersList(updatedMemberList);
    }else{
      setShowableUsers(updatedMemberList.slice(init, (init+maxCardsView)));
      setMembersList(updatedMemberList);
    }
    console.log(membersList);
  }

  function handleEditMemberButton(id) {
    const editedMember = showableUsers.find((element) => element.id === id);
    /* console.log(id);
    console.log(showableUsers); */
    setId(editedMember.id);
    setFirstName(editedMember.firstName);
    setLastName(editedMember.lastName);
    setDateOfBirth(editedMember.dateOfBirth);
    setRole(editedMember.role);
    setStatus(editedMember.status);
    setMode(editedMember.mode);
    setImageUrl(editedMember.imageUrl);
    setIsEditing('true');
    setEditFormIsVisible('true');
    setCardsIsVisible('false');
    setFormIsVisible('false');
    setMembersMenuIsVisible('false');
    setWelcomeIsVisible('false');
  }

  function viewLimitFourCards() {
    const showFourCards = membersList.slice(0,4);
    setMaxCardsView(showFourCards.length);
    setShowableUsers(showFourCards);
    const length = membersList.length;
    setAmountOfPages(Math.ceil(length / 4));
    setCounter(1);
    setInit(4);
    setPreviousPageButtonIsVisible('false');
    setNextPageButtonIsVisible('true');
  }
  
  function viewLimitEightCards() {
    const showEightCards = membersList.slice(0,8);
    setMaxCardsView(showEightCards.length);
    setShowableUsers(showEightCards);
    const length = membersList.length;
    setAmountOfPages(Math.ceil(length / 8));
    setCounter(1);
    setInit(8);
    setPreviousPageButtonIsVisible('false');
    setNextPageButtonIsVisible('true');
  }
  
  function viewLimitTenCards() {
    const showTenCards = membersList.slice(0,10);
    setMaxCardsView(showTenCards.length);
    setShowableUsers(showTenCards);
    const length = membersList.length;
    setAmountOfPages(Math.ceil(length / 10));
    setCounter(1);
    setInit(10);
    setPreviousPageButtonIsVisible('false');
    setNextPageButtonIsVisible('true');
  }

  function nextPageButton() {
    setPreviousPageButtonIsVisible('true');
    const initialMember = showableUsers.length * counter; 
    const nextPage = membersList.slice(initialMember, (initialMember+maxCardsView));
    setShowableUsers(nextPage);
    setCounter(counter + 1);
    setInit(initialMember);
    if (nextPage.length < maxCardsView) {
      setNextPageButtonIsVisible('false');
    } else {
    setNextPageButtonIsVisible('true');
    }
    //console.log(initialMember);
    //console.log(init);
    console.log(nextPage);
    console.log(nextPageButtonIsVisible);
  }

  function previousPageButton() {
    setNextPageButtonIsVisible('true');
    const initialMember = init - maxCardsView;
    const nextPage = membersList.slice(initialMember, (initialMember+maxCardsView));
    setShowableUsers(nextPage);
    setInit(initialMember);
    if (initialMember === 0) {
      setPreviousPageButtonIsVisible('false');
    }else{
      setPreviousPageButtonIsVisible('true');
    }
    setCounter(1);
    console.log(nextPage);
    //console.log(initialMember);
    //console.log(init);
    
  }

       
 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TRINITY GROUP</h1>
      </header>
      {membersMenuIsVisible === 'true' ? (
        <div className='Top-menu'>
          <button className='Members-button' onClick={teachersButton}>Teachers</button>
          <button className='Members-button' onClick={monitorsButton}>Class Monitors</button>
          <button className='Members-button' onClick={studentsButton}>Students</button>
          <button className='Members-button' onClick={addMembersButton}>Add Members</button>
        </div>)
      :null}
      <main>
        <section className='Content-display'>
          {welcomeIsVisible === 'true' ? (
            <div className='Initial-page'>
              <p className='Welcome-text'>WELCOME TO MEMBERS AREA</p>
              <button className='Enter-button' onClick={enterButton}>ENTER</button>
            </div>
          ):null}
          <div className='Search-bar'>
            {cardsIsVisible === 'true' ? (
              <div>
                <div className='Search-area'>
                  <label className='Search-label'>Search Member: </label>
                  <input type="Search" className='Search-field' value={memberSearched} onChange={(event) => setMemberSearched(event.target.value)}/>
                  <button onClick={handleSearch}>Search</button>
                </div>
                <p>Cards Per Page:</p>
                <nav>
                  <button className='Card-limit-view-button' onClick={viewLimitFourCards}>4 CARDS</button>
                  <button className='Card-limit-view-button' onClick={viewLimitEightCards}>8 CARDS</button>
                  <button className='Card-limit-view-button' onClick={viewLimitTenCards}>10 CARDS</button>
                </nav>
              </div>
            ):null}
          </div>
          <div className='Cards-content-display'>  
            {(cardsIsVisible === 'true' && showableUsers) ? (showableUsers.map((each) =>
              <Cards 
              cardData = {each}
              onDelete = {handleDeleteMemberButton}
              onEdit = {handleEditMemberButton}
              />
            )):null}
          </div>
          {(cardsIsVisible === 'true' && showableUsers) ? (
            <nav className='Menu-previous-next-button'>
              {previousPageButtonIsVisible === 'true' ? (<button className='Previous-next-button' onClick={previousPageButton}>PREVIOUS PAGE</button>):null}
              {nextPageButtonIsVisible === 'true' ? (<button className='Previous-next-button' onClick={nextPageButton}>NEXT PAGE</button>):null}
            </nav>
          ):null};
          {editFormIsVisible === 'true' ? editMemberForm:null}
          {formIsVisible === 'true' ? newMemberForm:null}
        </section>
      </main>
      {/* {console.log(membersList)} */}
      
      
    </div>
  );
}

export default App;
