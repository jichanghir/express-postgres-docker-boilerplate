import { useState, useEffect } from 'react';

import './App.css';

const defaulUsers = [
  {
    id: 1,
    fio: 'Юсупов Александр',
    position: 'Директор',
    organization: 'Visitech',
    date: '18-04-05',
    number: '01'
  }
]

function App() {

  const [selectedUser, setSelectedUser] = useState({});

  const handleUser = (id) => {
    const user = defaulUsers.find(u => u.id == id);
    setSelectedUser(user);
  }

  const [tags, setTags] = useState([]);

  const addNewTag = (e) => {
    e.preventDefault();

    const newTags = [...tags, { tag: '', value: '', key: Math.random() }];
    setTags(newTags);
  }

  const handleTag = ({ key, field, value }) => {
    console.log('field', field);
    console.log('value', value);

    const newTags = [...tags];

    const changedTag = newTags.find(t => t.key === key);

    if (field === 'def') {
      changedTag.value = selectedUser[value];
      console.log('selectedUser[value]', selectedUser[value]);
    }
    else {
      changedTag[field] = value;
    }


    setTags(newTags);
  }

  const ingectedTags = tags.reduce((acum, t) => {
    return { ...acum, [t.tag]: t.value }
  }, {});

  return (
    <div className="App">
      <form
        method="post"
        encType="multipart/form-data"
        action="http://localhost:8080/asd"
      >
        <h4>Выберите файл с тегами</h4>

        <div>
          <input type="file" id="file" name="file" />
        </div>

        <h4>Выберите сотрудника</h4>

        <div className="user-block">
          <select id="user" name="user" value={selectedUser.id} onChange={(e) => handleUser(e.target.value)}>
            <option >Выберите сотрудника</option>
            {defaulUsers.map(user =>
              <option key={`useroption-${user.id}`} value={user.id}>{user.fio}</option>
            )}
          </select>

          {!!selectedUser.id && <div className="user-block-description">
            <div> <b>ФИО:</b> {selectedUser.fio}</div>
            <div> <b>Должность:</b> {selectedUser.position}</div>
            <div> <b>Структурное подразделение:</b> {selectedUser.organization}</div>
            <div> <b>Дата последнего обучения:</b> {selectedUser.date}</div>
            <div> <b>Табельный номер:</b> {selectedUser.number}</div>
          </div>}
        </div>

        {!!selectedUser.id && <div className="tag-block">
          <h4>Проставьте теги</h4>

          {!!tags.length && tags.map(({ tag, value, key }) => <div key={key} className="tag-block-item">
            <div className="tag-block-item-left">
              <input type="text" value={tag} onChange={(e) => handleTag({ key, field: 'tag', value: e.target.value })}/>
            </div>
            <div className="tag-block-item-right">
              <input type="text" value={value} onChange={(e) => handleTag({ key, field: 'value', value: e.target.value })}/>
            </div>
            <div className="tag-block-item-select">
              <select onChange={(e) => handleTag({ key, field: 'def', value: e.target.value })}>
                <option selected disabled>Выбрать существующее</option>
                <option value="fio">ФИО</option>
                <option value="position">Должность</option>
                <option value="organization">Структурное подразделение</option>
                <option value="date">Дата последнего обучения</option>
                <option value="number">Табельный номер</option>
              </select>
            </div>
          </div>)}
          <button onClick={addNewTag}>Добавить тег</button>
        </div>}

        <input type="hidden" name="tags" value={JSON.stringify(ingectedTags)}/>

        <br/>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
